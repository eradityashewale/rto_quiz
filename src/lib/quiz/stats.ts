import { AttemptStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type DashboardAttempt = {
  id: string;
  testTitleMr: string;
  testTitleEn: string;
  submittedAt: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
};

export type DashboardStats = {
  totalAttempts: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  totalQuestionsAttempted: number;
  averageScore: number;
  recentAttempts: DashboardAttempt[];
};

const RECENT_ATTEMPTS_LIMIT = 20;

export async function getUserDashboardStats(userId: string): Promise<DashboardStats> {
  const attempts = await prisma.testAttempt.findMany({
    where: { userId, status: AttemptStatus.COMPLETED },
    include: { test: { select: { titleMr: true, titleEn: true } } },
    orderBy: { submittedAt: "desc" },
  });

  const totalAttempts = attempts.length;
  const totalCorrect = attempts.reduce((sum, a) => sum + a.correctCount, 0);
  const totalIncorrect = attempts.reduce((sum, a) => sum + a.incorrectCount, 0);
  const totalUnattempted = attempts.reduce((sum, a) => sum + a.unattemptedCount, 0);
  const totalQuestionsAttempted = attempts.reduce((sum, a) => sum + a.totalQuestions, 0);
  const averageScore =
    totalAttempts > 0
      ? attempts.reduce((sum, a) => sum + (a.score ?? 0), 0) / totalAttempts
      : 0;

  const recentAttempts: DashboardAttempt[] = attempts.slice(0, RECENT_ATTEMPTS_LIMIT).map((a) => ({
    id: a.id,
    testTitleMr: a.test.titleMr,
    testTitleEn: a.test.titleEn,
    submittedAt: (a.submittedAt ?? a.createdAt).toISOString(),
    score: a.score ?? 0,
    totalQuestions: a.totalQuestions,
    correctCount: a.correctCount,
    incorrectCount: a.incorrectCount,
    unattemptedCount: a.unattemptedCount,
  }));

  return {
    totalAttempts,
    totalCorrect,
    totalIncorrect,
    totalUnattempted,
    totalQuestionsAttempted,
    averageScore,
    recentAttempts,
  };
}
