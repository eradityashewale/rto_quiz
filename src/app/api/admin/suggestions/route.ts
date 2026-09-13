import { NextRequest, NextResponse } from "next/server";
import { SuggestionStatus } from "@prisma/client";
import { getAuthUser } from "@/lib/auth/session";
import { listAllSuggestions } from "@/lib/suggestions/suggestions";

const VALID_STATUSES = new Set(Object.values(SuggestionStatus));

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const statusParam = req.nextUrl.searchParams.get("status");
  const status =
    statusParam && VALID_STATUSES.has(statusParam as SuggestionStatus) ? (statusParam as SuggestionStatus) : undefined;

  const suggestions = await listAllSuggestions(status);
  return NextResponse.json({ suggestions }, { status: 200 });
}
