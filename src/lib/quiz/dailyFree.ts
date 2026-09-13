import { Prisma, TestStatus, TestType } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const DAILY_FREE_QUESTION_COUNT = 10;

// The daily-free quiz launched on this date; it's the earliest day that can
// ever be shown, regardless of the rolling window below.
export const DAILY_FREE_LAUNCH_DATE = new Date(Date.UTC(2025, 8, 5));

// Users can only catch up on today plus this many previous days (e.g. 2
// means today, yesterday, and the day before - a 3-day rolling window).
export const DAILY_FREE_PAST_DAYS_ALLOWED = 2;

export function todayUtcDate(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function earliestAllowedDate(): Date {
  const today = todayUtcDate();
  const windowStart = new Date(today);
  windowStart.setUTCDate(windowStart.getUTCDate() - DAILY_FREE_PAST_DAYS_ALLOWED);
  return windowStart.getTime() > DAILY_FREE_LAUNCH_DATE.getTime() ? windowStart : DAILY_FREE_LAUNCH_DATE;
}

function isWithinDailyFreeRange(date: Date): boolean {
  return date.getTime() >= earliestAllowedDate().getTime() && date.getTime() <= todayUtcDate().getTime();
}

/**
 * Parses a "YYYY-MM-DD" query param into a UTC-midnight Date, defaulting to
 * today when omitted. Returns null when the value is malformed or falls
 * outside the allowed rolling window (today minus DAILY_FREE_PAST_DAYS_ALLOWED
 * days, through today).
 */
export function parseDailyFreeDateParam(value: string | null): Date | null {
  if (!value) return todayUtcDate();

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const [, y, m, d] = match;
  const date = new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
  if (Number.isNaN(date.getTime()) || toDateKey(date) !== value) return null;
  if (!isWithinDailyFreeRange(date)) return null;

  return date;
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const testWithQuestionsInclude = {
  testQuestions: {
    orderBy: { orderIndex: "asc" },
    include: {
      question: {
        include: { options: true },
      },
    },
  },
} satisfies Prisma.TestInclude;

type TestWithQuestions = Prisma.TestGetPayload<{ include: typeof testWithQuestionsInclude }>;

/**
 * Returns the daily-free Test for the given UTC-midnight date (defaults to
 * today), creating it (with a random 10-question pool pulled from the
 * active question bank) the first time it's requested for that day.
 */
export async function getOrCreateDailyFreeTestForDate(
  date: Date = todayUtcDate()
): Promise<TestWithQuestions> {
  const existing = await prisma.dailyFreeTest.findUnique({
    where: { date },
    include: { test: { include: testWithQuestionsInclude } },
  });
  if (existing) return existing.test;

  const pool = await prisma.question.findMany({
    where: { status: "ACTIVE" },
    select: { id: true },
  });
  if (pool.length === 0) {
    throw new Error("No active questions available to build today's daily free test");
  }

  const standard = await prisma.standard.findFirst({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
  if (!standard) {
    throw new Error("No active standard configured for the daily free test");
  }

  const chosenIds = shuffle(pool).slice(0, Math.min(DAILY_FREE_QUESTION_COUNT, pool.length));
  const dateLabel = date.toISOString().slice(0, 10);

  const test = await prisma.test.create({
    data: {
      titleMr: `दैनिक मोफत सराव - ${dateLabel}`,
      titleEn: `Daily Free Practice - ${dateLabel}`,
      type: TestType.DAILY_FREE,
      standardId: standard.id,
      durationMinutes: 15,
      totalQuestions: chosenIds.length,
      status: TestStatus.ACTIVE,
      testQuestions: {
        create: chosenIds.map((q, idx) => ({ questionId: q.id, orderIndex: idx + 1 })),
      },
      dailyFreeTest: { create: { date } },
    },
    include: testWithQuestionsInclude,
  });

  return test;
}

export type DailyFreeBatchQuestion = {
  id: string;
  textMr: string;
  textEn: string;
  difficulty: string;
  options: { id: string; label: string; textMr: string; textEn: string }[];
};

export type DailyFreeBatch = {
  attemptId: string;
  testId: string;
  questions: DailyFreeBatchQuestion[];
};

export type DailyFreeAlreadyAttempted = {
  alreadyAttempted: true;
  attemptId: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  totalQuestions: number;
};

/**
 * Each user gets exactly one daily-free attempt per day: resumes an
 * in-progress attempt if one exists, hands back a summary (no new attempt)
 * if that day's attempt is already completed, and otherwise creates the one
 * attempt for the day from that day's 10-question pool. Defaults to today,
 * but accepts any date from the launch date through today so users can
 * catch up on quizzes they missed.
 */
export async function getNextBatchForUser(
  userId: string,
  date: Date = todayUtcDate()
): Promise<DailyFreeBatch | DailyFreeAlreadyAttempted> {
  const test = await getOrCreateDailyFreeTestForDate(date);
  const poolQuestions = test.testQuestions.map((tq) => tq.question);
  const poolById = new Map(poolQuestions.map((q) => [q.id, q]));

  const existing = await prisma.testAttempt.findFirst({
    where: { userId, testId: test.id },
    include: { answers: true },
    orderBy: { startedAt: "desc" },
  });

  if (existing?.status === "COMPLETED") {
    return {
      alreadyAttempted: true,
      attemptId: existing.id,
      score: existing.score ?? 0,
      correctCount: existing.correctCount,
      incorrectCount: existing.incorrectCount,
      unattemptedCount: existing.unattemptedCount,
      totalQuestions: existing.totalQuestions,
    };
  }

  if (existing) {
    const questions = existing.answers
      .map((a) => poolById.get(a.questionId))
      .filter((q): q is (typeof poolQuestions)[number] => Boolean(q));

    return {
      attemptId: existing.id,
      testId: test.id,
      questions: questions.map(toBatchQuestion),
    };
  }

  const batch = shuffle(poolQuestions).slice(0, DAILY_FREE_QUESTION_COUNT);

  const attempt = await prisma.testAttempt.create({
    data: {
      userId,
      testId: test.id,
      totalQuestions: batch.length,
      answers: {
        create: batch.map((q) => ({ questionId: q.id })),
      },
    },
  });

  return {
    attemptId: attempt.id,
    testId: test.id,
    questions: batch.map(toBatchQuestion),
  };
}

export type DailyFreeDaySummary = {
  date: string;
  dayNumber: number;
  isToday: boolean;
  attempted: boolean;
  score: number | null;
};

/**
 * Lists the days within the allowed rolling window (today minus
 * DAILY_FREE_PAST_DAYS_ALLOWED days, through today - never before the
 * launch date), along with whether the given user has completed that day's
 * quiz (and their score), so the UI can offer a day picker for catching up
 * on recent previous days only.
 */
export async function listDailyFreeDays(userId: string): Promise<DailyFreeDaySummary[]> {
  const today = todayUtcDate();
  const todayKey = toDateKey(today);
  const windowStart = earliestAllowedDate();

  const days: { date: Date; key: string; dayNumber: number }[] = [];
  const cursor = new Date(windowStart);
  while (cursor.getTime() <= today.getTime()) {
    const dayNumber = Math.round((cursor.getTime() - DAILY_FREE_LAUNCH_DATE.getTime()) / 86_400_000) + 1;
    days.push({ date: new Date(cursor), key: toDateKey(cursor), dayNumber });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const tests = await prisma.dailyFreeTest.findMany({
    where: { date: { gte: windowStart, lte: today } },
    select: { date: true, testId: true },
  });
  const testIdByDateKey = new Map(tests.map((t) => [toDateKey(t.date), t.testId]));

  const testIds = tests.map((t) => t.testId);
  const attempts = testIds.length
    ? await prisma.testAttempt.findMany({
        where: { userId, testId: { in: testIds }, status: "COMPLETED" },
        select: { testId: true, score: true },
      })
    : [];
  const attemptByTestId = new Map(attempts.map((a) => [a.testId, a]));

  return days.map((d) => {
    const testId = testIdByDateKey.get(d.key);
    const attempt = testId ? attemptByTestId.get(testId) : undefined;
    return {
      date: d.key,
      dayNumber: d.dayNumber,
      isToday: d.key === todayKey,
      attempted: Boolean(attempt),
      score: attempt?.score ?? null,
    };
  });
}

export type UserForReminder = { id: string; name: string; mobile: string };

/**
 * Active users who haven't completed the given date's daily-free quiz yet
 * (defaults to today) and haven't already been sent a reminder for that
 * date - the audience for the "you missed today's quiz" WhatsApp cron.
 */
export async function getUsersMissingDailyFreeQuiz(
  date: Date = todayUtcDate()
): Promise<UserForReminder[]> {
  const test = await getOrCreateDailyFreeTestForDate(date);

  const completed = await prisma.testAttempt.findMany({
    where: { testId: test.id, status: "COMPLETED" },
    select: { userId: true },
  });

  const alreadyReminded = await prisma.quizReminderLog.findMany({
    where: { date },
    select: { userId: true },
  });

  const excludedUserIds = [
    ...new Set([...completed.map((a) => a.userId), ...alreadyReminded.map((r) => r.userId)]),
  ];

  return prisma.user.findMany({
    where: {
      isActive: true,
      role: "STUDENT",
      id: { notIn: excludedUserIds },
    },
    select: { id: true, name: true, mobile: true },
  });
}

function toBatchQuestion(q: TestWithQuestions["testQuestions"][number]["question"]): DailyFreeBatchQuestion {
  return {
    id: q.id,
    textMr: q.textMr,
    textEn: q.textEn,
    difficulty: q.difficulty,
    options: q.options.map((o) => ({ id: o.id, label: o.label, textMr: o.textMr, textEn: o.textEn })),
  };
}

export type DailyFreeSubmitResult = {
  attemptId: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  totalQuestions: number;
  review: {
    questionId: string;
    selectedOptionId: string | null;
    correctOptionId: string | null;
    isCorrect: boolean | null;
    explanationMr: string | null;
    explanationEn: string | null;
  }[];
};

export async function submitDailyFreeAttempt(
  userId: string,
  attemptId: string,
  answers: { questionId: string; selectedOptionId: string | null }[]
): Promise<DailyFreeSubmitResult | { error: string; status: number }> {
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    include: { test: true, answers: true },
  });

  if (!attempt || attempt.userId !== userId) {
    return { error: "Attempt not found", status: 404 };
  }
  if (attempt.test.type !== TestType.DAILY_FREE) {
    return { error: "Not a daily free attempt", status: 400 };
  }
  if (attempt.status !== "IN_PROGRESS") {
    return { error: "This attempt has already been submitted", status: 409 };
  }

  const validQuestionIds = new Set(attempt.answers.map((a) => a.questionId));
  const selections = new Map(
    answers
      .filter((a) => validQuestionIds.has(a.questionId))
      .map((a) => [a.questionId, a.selectedOptionId])
  );

  const options = await prisma.questionOption.findMany({
    where: { questionId: { in: [...validQuestionIds] } },
  });
  const optionById = new Map(options.map((o) => [o.id, o]));
  const correctOptionByQuestion = new Map(
    options.filter((o) => o.isCorrect).map((o) => [o.questionId, o.id])
  );

  const questions = await prisma.question.findMany({
    where: { id: { in: [...validQuestionIds] } },
    select: { id: true, explanationMr: true, explanationEn: true },
  });
  const questionById = new Map(questions.map((q) => [q.id, q]));

  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  const review: DailyFreeSubmitResult["review"] = [];

  await prisma.$transaction(
    attempt.answers.map((answer) => {
      const selectedOptionId = selections.get(answer.questionId) ?? null;
      const selectedOption = selectedOptionId ? optionById.get(selectedOptionId) : null;
      const isCorrect = selectedOptionId ? Boolean(selectedOption?.isCorrect) : null;

      if (selectedOptionId === null) unattemptedCount += 1;
      else if (isCorrect) correctCount += 1;
      else incorrectCount += 1;

      review.push({
        questionId: answer.questionId,
        selectedOptionId,
        correctOptionId: correctOptionByQuestion.get(answer.questionId) ?? null,
        isCorrect,
        explanationMr: questionById.get(answer.questionId)?.explanationMr ?? null,
        explanationEn: questionById.get(answer.questionId)?.explanationEn ?? null,
      });

      return prisma.testAnswer.update({
        where: { id: answer.id },
        data: {
          selectedOptionId,
          isCorrect,
          answeredAt: selectedOptionId ? new Date() : null,
        },
      });
    })
  );

  const score = attempt.totalQuestions > 0 ? (correctCount / attempt.totalQuestions) * 100 : 0;

  await prisma.testAttempt.update({
    where: { id: attempt.id },
    data: {
      status: "COMPLETED",
      submittedAt: new Date(),
      score,
      correctCount,
      incorrectCount,
      unattemptedCount,
    },
  });

  return {
    attemptId: attempt.id,
    score,
    correctCount,
    incorrectCount,
    unattemptedCount,
    totalQuestions: attempt.totalQuestions,
    review,
  };
}
