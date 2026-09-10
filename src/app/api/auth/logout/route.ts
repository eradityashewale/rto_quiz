import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/auth/session";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
  clearAuthCookie(res);
  return res;
}
