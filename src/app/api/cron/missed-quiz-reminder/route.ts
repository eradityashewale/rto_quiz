import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUsersMissingDailyFreeQuiz, todayUtcDate } from "@/lib/quiz/dailyFree";
import { sendMissedDailyQuizReminder } from "@/lib/whatsapp";

// Triggered once a day by Vercel Cron (see vercel.json). Vercel automatically
// sends `Authorization: Bearer <CRON_SECRET>` for cron-invoked requests when
// a CRON_SECRET env var is set, which is what this checks.
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const date = todayUtcDate();
  const users = await getUsersMissingDailyFreeQuiz(date);

  let sent = 0;
  for (const user of users) {
    await sendMissedDailyQuizReminder(user);
    await prisma.quizReminderLog
      .create({ data: { userId: user.id, date } })
      .catch((err) => console.error("Failed to log quiz reminder:", err));
    sent += 1;
  }

  return NextResponse.json({ remindersSent: sent });
}
