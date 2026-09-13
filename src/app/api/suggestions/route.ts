import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth/session";
import { createSuggestion, listUserSuggestions } from "@/lib/suggestions/suggestions";
import { createSuggestionSchema } from "@/lib/validation/suggestions";

export async function GET(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const suggestions = await listUserSuggestions(user.id);
  return NextResponse.json({ suggestions }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const user = getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = createSuggestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const suggestion = await createSuggestion(user.id, parsed.data.subject, parsed.data.message, parsed.data.attachments);
  return NextResponse.json({ suggestion }, { status: 201 });
}
