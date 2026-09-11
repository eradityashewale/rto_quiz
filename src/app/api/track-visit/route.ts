import { randomUUID } from "crypto";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth/session";

const VISITOR_COOKIE = "rto_quiz_visitor";
const VISITOR_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 year

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const path = typeof body?.path === "string" ? body.path.slice(0, 512) : "/";

  const visitorId = req.cookies.get(VISITOR_COOKIE)?.value ?? randomUUID();
  const authUser = getAuthUser(req);

  try {
    await prisma.siteVisit.create({
      data: {
        path,
        visitorId,
        userId: authUser?.id,
      },
    });
  } catch (err) {
    // A JWT can outlive the user it points to (e.g. the account was deleted,
    // or a dev DB got reset) - fall back to an anonymous visit instead of 500ing.
    const isMissingUser = err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2003";
    if (!isMissingUser) throw err;
    await prisma.siteVisit.create({ data: { path, visitorId, userId: null } });
  }

  const res = NextResponse.json({ ok: true }, { status: 200 });
  res.cookies.set(VISITOR_COOKIE, visitorId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: VISITOR_MAX_AGE_SECONDS,
  });
  return res;
}
