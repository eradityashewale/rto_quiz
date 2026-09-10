import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { createTicket, listUserTickets } from "@/lib/tickets/tickets";
import { createTicketSchema } from "@/lib/validation/tickets";

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const tickets = await listUserTickets(user.id);
  return NextResponse.json({ tickets }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = createTicketSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const ticket = await createTicket(user.id, parsed.data.subject, parsed.data.message);
  return NextResponse.json({ ticket }, { status: 201 });
}
