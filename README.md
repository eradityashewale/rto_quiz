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

## Android app

The `android/` directory is a [Capacitor](https://capacitorjs.com/) project —
a thin native WebView shell that loads the deployed site over HTTPS (it has no
bundled UI of its own, so every feature — auth, quizzes, tickets, admin —
works exactly as it does on the website, live, over the network). This is the
right approach given the app is server-backed (Prisma DB, JWT auth, API
routes); a fully offline app would need the whole backend reimplemented
client-side.

**One-time setup once you have a deployed URL:**

1. In the GitHub repo, go to Settings → Secrets and variables → Actions →
   Variables, and add `APP_URL` = your deployed site's URL (e.g.
   `https://rtoquiz.example.com`).
2. Push to `main` (or run the workflow manually from the Actions tab) to
   trigger `.github/workflows/build-android.yml`. It builds the APK in the
   cloud (no local Android SDK/Java needed) and publishes it to a GitHub
   Release tagged `android-latest`.
3. The site's **Download App** page (`/download`, linked from the header)
   always points at
   `https://github.com/eradityashewale/rto_quiz/releases/latest/download/rto-quiz.apk`,
   which GitHub keeps redirecting to the newest build — no link updates
   needed after step 1.

**To build locally instead** (requires JDK 17+ and the Android SDK):

```
CAPACITOR_SERVER_URL=https://your-deployed-domain npx cap sync android
cd android
./gradlew assembleDebug
# APK at android/app/build/outputs/apk/debug/app-debug.apk
```

To test against a local dev server on your phone (same WiFi), use your PC's
LAN IP instead: `CAPACITOR_SERVER_URL=http://192.168.x.x:3000 npx cap sync android`.

App identity (package `com.rtoquiz.app`, name "RTO Quiz") lives in
`capacitor.config.ts`; re-run `npx cap sync android` after changing it. The
app icon is still Capacitor's default — swap it with
[`@capacitor/assets`](https://github.com/ionic-team/capacitor-assets) and a
source icon/splash whenever you're ready to brand it.
