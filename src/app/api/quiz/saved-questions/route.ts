import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth/session";

const saveSchema = z.object({ questionId: z.string().min(1) });

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const saved = await prisma.savedQuestion.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      question: { include: { options: true } },
    },
  });

  return NextResponse.json(
    {
      questions: saved.map((s) => ({
        questionId: s.questionId,
        savedAt: s.createdAt.toISOString(),
        textMr: s.question.textMr,
        textEn: s.question.textEn,
        explanationMr: s.question.explanationMr,
        explanationEn: s.question.explanationEn,
        options: s.question.options.map((o) => ({
          id: o.id,
          label: o.label,
          textMr: o.textMr,
          textEn: o.textEn,
          isCorrect: o.isCorrect,
        })),
      })),
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = saveSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const question = await prisma.question.findUnique({ where: { id: parsed.data.questionId } });
  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  await prisma.savedQuestion.upsert({
    where: { userId_questionId: { userId: user.id, questionId: parsed.data.questionId } },
    create: { userId: user.id, questionId: parsed.data.questionId },
    update: {},
  });

  return NextResponse.json({ message: "Saved" }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = saveSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  await prisma.savedQuestion.deleteMany({
    where: { userId: user.id, questionId: parsed.data.questionId },
  });

  return NextResponse.json({ message: "Removed" }, { status: 200 });
}
