import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// The cadres covered by MPSC's Group C Combined Preliminary Examination
// (2026 notification, ~2600+ posts) - all share one common preliminary
// paper, so the platform's existing GK/aptitude question bank already
// prepares candidates for every one of these. This is informational
// metadata for the "which exams we cover" section, not separate content.
const examCategories = [
  {
    code: "assistant-motor-vehicle-inspector",
    nameMr: "सहाय्यक मोटार वाहन निरीक्षक (तांत्रिक), गट-क",
    nameEn: "Assistant Motor Vehicle Inspector (RTO)",
    sortOrder: 1,
  },
  {
    code: "talathi",
    nameMr: "ग्राम महसूल अधिकारी (तलाठी), गट-क",
    nameEn: "Village Revenue Officer (Talathi)",
    sortOrder: 2,
  },
  {
    code: "clerk-typist",
    nameMr: "लिपिक-टंकलेखक, गट-क",
    nameEn: "Clerk-Typist",
    sortOrder: 3,
  },
  {
    code: "tax-assistant",
    nameMr: "कर सहायक, गट-क",
    nameEn: "Tax Assistant",
    sortOrder: 4,
  },
  {
    code: "industry-inspector",
    nameMr: "उद्योग निरीक्षक, उद्योग संचालनालय",
    nameEn: "Industry Inspector",
    sortOrder: 5,
  },
  {
    code: "excise-sub-inspector",
    nameMr: "दुय्यम निरीक्षक, राज्य उत्पादन शुल्क",
    nameEn: "Excise Sub-Inspector",
    sortOrder: 6,
  },
  {
    code: "insurance-technical-assistant",
    nameMr: "तांत्रिक सहायक, विमा संचालनालय",
    nameEn: "Technical Assistant (Directorate of Insurance)",
    sortOrder: 7,
  },
  {
    code: "senior-clerk-record-keeper",
    nameMr: "वरिष्ठ अभिलेखापाल / वरिष्ठ लिपिक / अभिलेखापाल, गट-क",
    nameEn: "Senior Record Keeper / Senior Clerk / Record Keeper",
    sortOrder: 8,
  },
  {
    code: "assistant-superintendent",
    nameMr: "सहायक अधीक्षक, गट-क",
    nameEn: "Assistant Superintendent",
    sortOrder: 9,
  },
  {
    code: "assistant-fisheries-development-officer",
    nameMr: "सहाय्यक मत्स्यव्यवसाय विकास अधिकारी (तांत्रिक), गट-क",
    nameEn: "Assistant Fisheries Development Officer",
    sortOrder: 10,
  },
];

async function main() {
  for (const category of examCategories) {
    await prisma.examCategory.upsert({
      where: { code: category.code },
      update: category,
      create: category,
    });
  }

  console.log(`Seeded ${examCategories.length} exam categories.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
