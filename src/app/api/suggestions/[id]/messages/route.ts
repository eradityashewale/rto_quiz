import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { addUserMessage } from "@/lib/suggestions/suggestions";
import { addSuggestionMessageSchema } from "@/lib/validation/suggestions";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = addSuggestionMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const { id } = await params;
  const suggestion = await addUserMessage(user.id, id, parsed.data.body, parsed.data.attachments);
  if (!suggestion) {
    return NextResponse.json({ error: "Suggestion not found or closed" }, { status: 404 });
  }

  return NextResponse.json({ suggestion }, { status: 200 });
}
