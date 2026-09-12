import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const examCategories = await prisma.examCategory.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    select: { id: true, code: true, nameMr: true, nameEn: true },
  });

  return NextResponse.json({ examCategories });
}
