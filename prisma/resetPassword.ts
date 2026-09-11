import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/auth/password";

const prisma = new PrismaClient();

// Resets a user's password (e.g. an admin who is locked out).
// Usage: npm run reset:password -- someone@example.com NewPassword123
async function main() {
  const identifier = process.argv[2];
  const newPassword = process.argv[3];

  if (!identifier || !newPassword) {
    console.error("Usage: npm run reset:password -- <email-or-mobile> <new-password>");
    process.exit(1);
  }

  if (newPassword.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const normalized = identifier.trim().toLowerCase();
  const user = await prisma.user.findFirst({
    where: { OR: [{ email: normalized }, { mobile: identifier.trim() }] },
  });

  if (!user) {
    console.error(`No user found matching "${identifier}".`);
    process.exit(1);
  }

  const passwordHash = await hashPassword(newPassword);

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash },
  });

  console.log(`✔ Password updated for ${updated.name} (${updated.email}, role: ${updated.role}).`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
