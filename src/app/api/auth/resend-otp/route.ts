import { NextRequest, NextResponse } from "next/server";
import { getPendingRegistrationCreatedAt, resendPendingRegistrationOtp } from "@/lib/auth/otp";
import { resendOtpSchema } from "@/lib/validation/auth";

const RESEND_COOLDOWN_SECONDS = 60;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = resendOtpSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { email } = parsed.data;

  const lastUpdatedAt = await getPendingRegistrationCreatedAt(email);

  if (!lastUpdatedAt) {
    return NextResponse.json(
      { message: "If a pending registration exists for this email, a new code has been sent" },
      { status: 200 }
    );
  }

  const secondsSinceLast = (Date.now() - lastUpdatedAt.getTime()) / 1000;
  if (secondsSinceLast < RESEND_COOLDOWN_SECONDS) {
    return NextResponse.json(
      { error: `Please wait ${Math.ceil(RESEND_COOLDOWN_SECONDS - secondsSinceLast)}s before requesting another code` },
      { status: 429 }
    );
  }

  try {
    await resendPendingRegistrationOtp(email);
  } catch (err) {
    console.error("Failed to resend OTP email", err);
    return NextResponse.json({ error: "Failed to send verification email" }, { status: 502 });
  }

  return NextResponse.json(
    { message: "If a pending registration exists for this email, a new code has been sent" },
    { status: 200 }
  );
}
