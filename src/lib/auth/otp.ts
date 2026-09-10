import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendOtpEmail } from "@/lib/email";

const OTP_TTL_MINUTES = 10;
const MAX_ATTEMPTS = 5;

function generateCode(): string {
  return crypto.randomInt(0, 1_000_000).toString().padStart(6, "0");
}

function hashCode(code: string): string {
  return crypto.createHash("sha256").update(code).digest("hex");
}

export async function startPendingRegistration(data: {
  name: string;
  email: string;
  mobile: string;
  passwordHash: string;
}): Promise<void> {
  const code = generateCode();
  const expiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);

  await prisma.pendingRegistration.upsert({
    where: { email: data.email },
    create: {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      passwordHash: data.passwordHash,
      codeHash: hashCode(code),
      expiresAt,
    },
    update: {
      name: data.name,
      mobile: data.mobile,
      passwordHash: data.passwordHash,
      codeHash: hashCode(code),
      attempts: 0,
      expiresAt,
    },
  });

  await sendOtpEmail(data.email, code);
}

export type ConfirmPendingRegistrationResult =
  | { ok: true; userId: string }
  | { ok: false; reason: "not_found" | "expired" | "too_many_attempts" | "invalid" };

export async function confirmPendingRegistration(
  email: string,
  code: string
): Promise<ConfirmPendingRegistrationResult> {
  const pending = await prisma.pendingRegistration.findUnique({ where: { email } });

  if (!pending) return { ok: false, reason: "not_found" };

  if (pending.expiresAt < new Date()) {
    return { ok: false, reason: "expired" };
  }

  if (pending.attempts >= MAX_ATTEMPTS) {
    return { ok: false, reason: "too_many_attempts" };
  }

  if (pending.codeHash !== hashCode(code)) {
    await prisma.pendingRegistration.update({
      where: { email },
      data: { attempts: { increment: 1 } },
    });
    return { ok: false, reason: "invalid" };
  }

  const user = await prisma.$transaction(async (tx) => {
    const created = await tx.user.create({
      data: {
        name: pending.name,
        email: pending.email,
        mobile: pending.mobile,
        passwordHash: pending.passwordHash,
        emailVerifiedAt: new Date(),
      },
      select: { id: true },
    });
    await tx.pendingRegistration.delete({ where: { email } });
    return created;
  });

  return { ok: true, userId: user.id };
}

export async function resendPendingRegistrationOtp(email: string): Promise<boolean> {
  const pending = await prisma.pendingRegistration.findUnique({ where: { email } });
  if (!pending) return false;

  const code = generateCode();
  const expiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);

  await prisma.pendingRegistration.update({
    where: { email },
    data: { codeHash: hashCode(code), attempts: 0, expiresAt },
  });

  await sendOtpEmail(email, code);
  return true;
}

export async function getPendingRegistrationCreatedAt(email: string): Promise<Date | null> {
  const pending = await prisma.pendingRegistration.findUnique({
    where: { email },
    select: { updatedAt: true },
  });
  return pending?.updatedAt ?? null;
}
