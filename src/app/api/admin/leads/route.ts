import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { listAnonymousVisitorLeads, listPendingRegistrationLeads } from "@/lib/admin/leads";

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const [anonymousVisitors, pendingRegistrations] = await Promise.all([
    listAnonymousVisitorLeads(),
    listPendingRegistrationLeads(),
  ]);

  return NextResponse.json({ anonymousVisitors, pendingRegistrations }, { status: 200 });
}
