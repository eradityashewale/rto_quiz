import { Prisma, TestStatus, TestType } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const DAILY_FREE_QUESTION_COUNT = 10;

function todayUtcDate(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
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
 * Returns today's daily-free Test, creating it (with a random 10-question
 * pool pulled from the active question bank) the first time it's requested
 * for the day.
 */
export async function getOrCreateTodayDailyFreeTest(): Promise<TestWithQuestions> {
  const date = todayUtcDate();

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
 * if today's attempt is already completed, and otherwise creates the one
 * attempt for the day from today's 10-question pool.
 */
export async function getNextBatchForUser(
  userId: string
): Promise<DailyFreeBatch | DailyFreeAlreadyAttempted> {
  const test = await getOrCreateTodayDailyFreeTest();
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
