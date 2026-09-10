import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth/password";
import { startPendingRegistration } from "@/lib/auth/otp";
import { registerSchema } from "@/lib/validation/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, mobile, password } = parsed.data;

  const existing = await prisma.user.findFirst({
    where: { OR: [{ email }, { mobile }] },
    select: { email: true, mobile: true },
  });

  if (existing) {
    const field =
      existing.email === email && existing.mobile === mobile
        ? "email and mobile number"
        : existing.email === email
          ? "email"
          : "mobile number";

    return NextResponse.json(
      { error: `An account with this ${field} already exists` },
      { status: 409 }
    );
  }

  const passwordHash = await hashPassword(password);

  try {
    await startPendingRegistration({ name, email, mobile, passwordHash });
  } catch (err) {
    console.error("Failed to send registration OTP email", err);
    return NextResponse.json(
      { error: "Failed to send verification email. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { message: "Verification code sent to your email", email },
    { status: 200 }
  );
}
