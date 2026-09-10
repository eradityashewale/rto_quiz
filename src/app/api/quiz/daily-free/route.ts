import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { getNextBatchForUser } from "@/lib/quiz/dailyFree";

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Login required to attempt the daily free quiz" }, { status: 401 });
  }

  try {
    const batch = await getNextBatchForUser(user.id);
    if ("alreadyAttempted" in batch) {
      return NextResponse.json(batch, { status: 409 });
    }
    return NextResponse.json(batch, { status: 200 });
  } catch (err) {
    console.error("Failed to build daily free batch", err);
    return NextResponse.json({ error: "Could not load today's free questions" }, { status: 500 });
  }
}
