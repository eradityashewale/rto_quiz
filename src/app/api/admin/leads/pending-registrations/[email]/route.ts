import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth/session";
import { resendPendingRegistrationOtp } from "@/lib/auth/otp";

type RouteParams = { params: Promise<{ email: string }> };

export async function POST(req: NextRequest, { params }: RouteParams) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { email } = await params;

  try {
    const sent = await resendPendingRegistrationOtp(decodeURIComponent(email));
    if (!sent) {
      return NextResponse.json({ error: "No pending registration found for this email" }, { status: 404 });
    }
  } catch (err) {
    console.error("Failed to resend registration OTP", err);
    return NextResponse.json({ error: "Failed to send verification email. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ message: "Verification email resent" }, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { email } = await params;

  try {
    await prisma.pendingRegistration.delete({ where: { email: decodeURIComponent(email) } });
  } catch {
    return NextResponse.json({ error: "No pending registration found for this email" }, { status: 404 });
  }

  return NextResponse.json({ message: "Lead dismissed" }, { status: 200 });
}
