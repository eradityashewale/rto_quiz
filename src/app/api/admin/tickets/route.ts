import { NextRequest, NextResponse } from "next/server";
import { TicketStatus } from "@prisma/client";
import { getAuthUser } from "@/lib/auth/session";
import { listAllTickets } from "@/lib/tickets/tickets";

const VALID_STATUSES = new Set(Object.values(TicketStatus));

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const statusParam = req.nextUrl.searchParams.get("status");
  const status = statusParam && VALID_STATUSES.has(statusParam as TicketStatus) ? (statusParam as TicketStatus) : undefined;

  const tickets = await listAllTickets(status);
  return NextResponse.json({ tickets }, { status: 200 });
}
