import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { addUserMessage } from "@/lib/tickets/tickets";
import { addTicketMessageSchema } from "@/lib/validation/tickets";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = addTicketMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const { id } = await params;
  const ticket = await addUserMessage(user.id, id, parsed.data.body, parsed.data.attachments);
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found or closed" }, { status: 404 });
  }

  return NextResponse.json({ ticket }, { status: 200 });
}
