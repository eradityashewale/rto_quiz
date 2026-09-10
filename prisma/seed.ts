import { PrismaClient, PackageType } from "@prisma/client";

const prisma = new PrismaClient();

// Seeds the three business packages defined in the product spec.
// This is business/pricing config, not quiz content — the question bank
// (standards/subjects/questions) is seeded by a separate script.
async function main() {
  const packages = [
    {
      code: "aarambh",
      type: PackageType.TEST_COUNT,
      nameMr: "आरंभ",
      nameEn: "Aarambh",
      descriptionMr: "नवशिक्यांसाठी योग्य पॅकेज",
      descriptionEn: "Beginner-friendly package",
      testCount: 5,
      priceInPaise: 9900,
      discountInPaise: 0,
      isPopular: false,
      sortOrder: 1,
    },
    {
      code: "veg",
      type: PackageType.TEST_COUNT,
      nameMr: "वेग",
      nameEn: "Veg",
      descriptionMr: "नियमित सरावासाठी डिझाइन केलेले",
      descriptionEn: "Designed for regular preparation",
      testCount: 10,
      priceInPaise: 19900,
      discountInPaise: 2000,
      isPopular: true,
      sortOrder: 2,
    },
    {
      code: "vijay",
      type: PackageType.TEST_COUNT,
      nameMr: "विजय",
      nameEn: "Vijay",
      descriptionMr: "गंभीर परीक्षा तयारीसाठी",
      descriptionEn: "Designed for serious exam preparation",
      testCount: 15,
      priceInPaise: 34900,
      discountInPaise: 3000,
      isPopular: false,
      sortOrder: 3,
    },
  ];

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { code: pkg.code },
      update: pkg,
      create: pkg,
    });
  }

  console.log(`Seeded ${packages.length} packages.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
