import { PrismaClient, TestStatus, TestType } from "@prisma/client";

const prisma = new PrismaClient();

const QUESTIONS_PER_TEST = 100;
const DURATION_MINUTES = 90;

const TEST_PLAN: { code: string; count: number }[] = [
  { code: "aarambh", count: 3 },
  { code: "veg", count: 5 },
  { code: "vijay", count: 7 },
];

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function modeStandardId(standardIds: string[]): string {
  const counts = new Map<string, number>();
  for (const id of standardIds) counts.set(id, (counts.get(id) ?? 0) + 1);
  let best = standardIds[0];
  let bestCount = 0;
  for (const [id, count] of counts) {
    if (count > bestCount) {
      best = id;
      bestCount = count;
    }
  }
  return best;
}

async function main() {
  const questions = await prisma.question.findMany({
    where: { status: "ACTIVE" },
    select: { id: true, subject: { select: { standardId: true } } },
  });

  if (questions.length < QUESTIONS_PER_TEST) {
    throw new Error(
      `Only ${questions.length} active questions available, need at least ${QUESTIONS_PER_TEST} per test.`
    );
  }

  for (const plan of TEST_PLAN) {
    const pkg = await prisma.package.findUnique({ where: { code: plan.code } });
    if (!pkg) {
      console.warn(`Package "${plan.code}" not found, skipping.`);
      continue;
    }

    for (let i = 1; i <= plan.count; i++) {
      const picked = shuffle(questions).slice(0, QUESTIONS_PER_TEST);
      const standardId = modeStandardId(picked.map((q) => q.subject.standardId));

      await prisma.$transaction(async (tx) => {
        const test = await tx.test.create({
          data: {
            titleEn: `${pkg.nameEn} Test ${i}`,
            titleMr: `${pkg.nameMr} चाचणी ${i}`,
            type: TestType.PACKAGE,
            standardId,
            packageId: pkg.id,
            durationMinutes: DURATION_MINUTES,
            totalQuestions: QUESTIONS_PER_TEST,
            status: TestStatus.ACTIVE,
            sortOrder: i,
          },
        });

        await tx.testQuestion.createMany({
          data: picked.map((q, index) => ({
            testId: test.id,
            questionId: q.id,
            orderIndex: index + 1,
          })),
        });
      });

      console.log(`Created "${pkg.nameEn} Test ${i}" (${QUESTIONS_PER_TEST} questions).`);
    }

    await prisma.package.update({ where: { id: pkg.id }, data: { testCount: plan.count } });
    console.log(`Updated ${pkg.nameEn} testCount to ${plan.count}.`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
