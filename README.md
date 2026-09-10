# RTO Quiz — Foundation Build

Bilingual (Marathi/English) RTO exam test-series platform for Maharashtra
aspirants. This is the foundation pass: Next.js + Prisma + PostgreSQL,
database schema for the full future product, and a minimal auth skeleton to
prove the connection end-to-end. No UI, payments, or admin panel yet — those
come in later passes. The question bank itself is seeded by a separate script
you run yourself against the schema created here.

## Stack

- Next.js (App Router, TypeScript) — API routes double as the backend so a
  future Android app can call the same endpoints.
- Prisma ORM targeting PostgreSQL.
- `bcryptjs` for password hashing, `zod` for request validation.

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Copy the env template and fill in your real Postgres connection string:

   ```
   copy .env.example .env
   ```

   Edit `.env` and set `DATABASE_URL` to your Postgres instance.

3. Create the database tables:

   ```
   npm run db:migrate
   ```

4. Start the dev server:

   ```
   npm run dev
   ```

## Verifying the DB connection

- `GET http://localhost:3000/api/health` → `{ "status": "ok", "db": "connected" }`
- `POST http://localhost:3000/api/auth/register` with JSON body
  `{ "name": "Test User", "email": "test@example.com", "mobile": "9876543210", "password": "password123" }`
  → `201` with the created user (no password hash in the response).
- `POST http://localhost:3000/api/auth/login` with
  `{ "emailOrMobile": "test@example.com", "password": "password123" }` → `200`.
- `npx prisma studio` to browse the tables directly.

## Database

The full schema (`prisma/schema.prisma`) covers the entire future product:
users, standards, subjects, questions + bilingual options, tests, attempts,
answers, packages, payments, purchases, and daily free tests. See the design
notes in the schema file and the project plan for the reasoning behind each
modeling decision (bilingual columns, normalized options, package-grain
access control, money stored as integer paise, etc.).

Questions/standards/subjects/tests/packages are intentionally left empty by
this pass — seed them with your own script against these tables.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` / `npm run start` | Production build/start |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Regenerate the Prisma client |
| `npm run db:migrate` | Create/apply a dev migration |
| `npm run db:deploy` | Apply migrations in production |
| `npm run db:studio` | Open Prisma Studio |
