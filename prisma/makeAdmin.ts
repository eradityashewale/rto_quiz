import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

// Promotes an existing user to ADMIN so they can access /admin.
// Usage: npm run make:admin -- someone@example.com
async function main() {
  const identifier = process.argv[2];
  if (!identifier) {
    console.error("Usage: npm run make:admin -- <email-or-mobile>");
    process.exit(1);
  }

  const normalized = identifier.trim().toLowerCase();
  const user = await prisma.user.findFirst({
    where: { OR: [{ email: normalized }, { mobile: identifier.trim() }] },
  });

  if (!user) {
    console.error(`No user found matching "${identifier}". Register the account first, then promote it.`);
    process.exit(1);
  }

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { role: Role.ADMIN },
  });

  console.log(`✔ ${updated.name} (${updated.email}) is now an ADMIN.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
