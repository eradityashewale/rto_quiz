import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { confirmPendingRegistration } from "@/lib/auth/otp";
import { verifyOtpSchema } from "@/lib/validation/auth";
import { setAuthCookie } from "@/lib/auth/session";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = verifyOtpSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { email, code } = parsed.data;

  const result = await confirmPendingRegistration(email, code);

  if (!result.ok) {
    const messages: Record<typeof result.reason, string> = {
      not_found: "No pending registration found for this email. Please register again.",
      expired: "This code has expired. Please request a new one.",
      too_many_attempts: "Too many incorrect attempts. Please request a new code.",
      invalid: "Incorrect code. Please try again.",
    };
    return NextResponse.json({ error: messages[result.reason] }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: result.userId },
    select: {
      id: true,
      name: true,
      email: true,
      mobile: true,
      role: true,
      createdAt: true,
    },
  });

  const res = NextResponse.json(
    { user, message: "Email verified. Registration complete." },
    { status: 201 }
  );
  if (user) {
    setAuthCookie(res, { id: user.id, role: user.role });
  }
  return res;
}
