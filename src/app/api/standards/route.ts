import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const standards = await prisma.standard.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      code: true,
      nameMr: true,
      nameEn: true,
      subjects: {
        where: { isActive: true },
        orderBy: { sortOrder: "asc" },
        select: { id: true, code: true, nameMr: true, nameEn: true },
      },
    },
  });

  return NextResponse.json({ standards });
}
