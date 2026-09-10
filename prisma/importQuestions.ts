import { PrismaClient, OptionLabel } from "@prisma/client";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { QuestionSetInput } from "./questionData/types";

// Generic importer for a single Standard+Subject question set.
// Usage: npm run db:import -- prisma/questionData/std7Geography.ts

const prisma = new PrismaClient();

async function main() {
  const dataPath = process.argv[2];
  if (!dataPath) {
    console.error("Usage: tsx prisma/importQuestions.ts <path-to-data-file>");
    process.exit(1);
  }

  const mod = await import(pathToFileURL(path.resolve(dataPath)).href);
  const data: QuestionSetInput = mod.default;

  const standard = await prisma.standard.upsert({
    where: { code: data.standard.code },
    update: { nameEn: data.standard.nameEn, nameMr: data.standard.nameMr },
    create: {
      code: data.standard.code,
      nameEn: data.standard.nameEn,
      nameMr: data.standard.nameMr,
      sortOrder: data.standard.sortOrder ?? 0,
    },
  });

  const subject = await prisma.subject.upsert({
    where: { standardId_code: { standardId: standard.id, code: data.subject.code } },
    update: { nameEn: data.subject.nameEn, nameMr: data.subject.nameMr },
    create: {
      standardId: standard.id,
      code: data.subject.code,
      nameEn: data.subject.nameEn,
      nameMr: data.subject.nameMr,
      sortOrder: data.subject.sortOrder ?? 0,
    },
  });

  let created = 0;
  for (const q of data.questions) {
    const existing = await prisma.question.findFirst({
      where: { subjectId: subject.id, textEn: q.textEn },
    });
    if (existing) continue;

    await prisma.question.create({
      data: {
        subjectId: subject.id,
        textEn: q.textEn,
        textMr: q.textMr,
        explanationEn: q.explanationEn,
        explanationMr: q.explanationMr,
        options: {
          create: q.options.map((o) => ({
            label: o.label as OptionLabel,
            textEn: o.textEn,
            textMr: o.textMr,
            isCorrect: o.isCorrect,
          })),
        },
      },
    });
    created++;
  }

  console.log(`Standard: ${standard.nameEn} (${standard.code})`);
  console.log(`Subject: ${subject.nameEn} (${subject.code})`);
  console.log(
    `Imported ${created} new question(s); skipped ${data.questions.length - created} already present.`
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
