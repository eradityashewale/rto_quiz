import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const packages = await prisma.package.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      code: true,
      type: true,
      nameMr: true,
      nameEn: true,
      descriptionMr: true,
      descriptionEn: true,
      testCount: true,
      validityDays: true,
      priceInPaise: true,
      discountInPaise: true,
      isPopular: true,
      features: true,
    },
  });

  return NextResponse.json({ packages });
}
