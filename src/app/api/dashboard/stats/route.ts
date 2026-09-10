import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { getUserDashboardStats } from "@/lib/quiz/stats";

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const stats = await getUserDashboardStats(user.id);
  return NextResponse.json(stats, { status: 200 });
}
