import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { listDailyFreeDays } from "@/lib/quiz/dailyFree";

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }

  const days = await listDailyFreeDays(user.id);
  return NextResponse.json({ days }, { status: 200 });
}
