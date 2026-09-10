import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth/session";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { id } = await params;

  const attempt = await prisma.testAttempt.findUnique({
    where: { id },
    include: {
      test: { select: { titleMr: true, titleEn: true } },
      answers: {
        include: {
          question: { include: { options: true } },
        },
      },
    },
  });

  if (!attempt || attempt.userId !== user.id) {
    return NextResponse.json({ error: "Attempt not found" }, { status: 404 });
  }

  const questionIds = attempt.answers.map((a) => a.questionId);
  const saved = await prisma.savedQuestion.findMany({
    where: { userId: user.id, questionId: { in: questionIds } },
    select: { questionId: true },
  });
  const savedIds = new Set(saved.map((s) => s.questionId));

  return NextResponse.json(
    {
      id: attempt.id,
      testTitleMr: attempt.test.titleMr,
      testTitleEn: attempt.test.titleEn,
      submittedAt: (attempt.submittedAt ?? attempt.createdAt).toISOString(),
      score: attempt.score ?? 0,
      correctCount: attempt.correctCount,
      incorrectCount: attempt.incorrectCount,
      unattemptedCount: attempt.unattemptedCount,
      totalQuestions: attempt.totalQuestions,
      questions: attempt.answers.map((a) => ({
        questionId: a.questionId,
        textMr: a.question.textMr,
        textEn: a.question.textEn,
        explanationMr: a.question.explanationMr,
        explanationEn: a.question.explanationEn,
        options: a.question.options.map((o) => ({
          id: o.id,
          label: o.label,
          textMr: o.textMr,
          textEn: o.textEn,
        })),
        selectedOptionId: a.selectedOptionId,
        correctOptionId: a.question.options.find((o) => o.isCorrect)?.id ?? null,
        isCorrect: a.isCorrect,
        isSaved: savedIds.has(a.questionId),
      })),
    },
    { status: 200 }
  );
}
