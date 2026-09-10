import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth/password";
import { loginSchema } from "@/lib/validation/auth";
import { setAuthCookie } from "@/lib/auth/session";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { emailOrMobile, password } = parsed.data;
  const normalized = emailOrMobile.trim().toLowerCase();

  const user = await prisma.user.findFirst({
    where: { OR: [{ email: normalized }, { mobile: emailOrMobile.trim() }] },
  });

  const invalidResponse = () =>
    NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  if (!user || !user.passwordHash) {
    return invalidResponse();
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    return invalidResponse();
  }

  if (!user.isActive) {
    return NextResponse.json({ error: "Account is deactivated" }, { status: 403 });
  }

  const { passwordHash: _passwordHash, ...safeUser } = user;
  void _passwordHash;

  const res = NextResponse.json({ user: safeUser }, { status: 200 });
  setAuthCookie(res, { id: user.id, role: user.role });
  return res;
}
