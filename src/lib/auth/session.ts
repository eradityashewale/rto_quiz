import { NextRequest, NextResponse } from "next/server";
import { signAuthToken, verifyAuthToken } from "./jwt";

export const AUTH_COOKIE = "rto_quiz_token";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days, matches token TTL

export type SessionUser = { id: string; role: string };

export function setAuthCookie(res: NextResponse, user: SessionUser) {
  const token = signAuthToken({ sub: user.id, role: user.role });
  res.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export function clearAuthCookie(res: NextResponse) {
  res.cookies.set(AUTH_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export function getAuthUser(req: NextRequest): SessionUser | null {
  const token = req.cookies.get(AUTH_COOKIE)?.value;
  if (!token) return null;

  const payload = verifyAuthToken(token);
  if (!payload) return null;

  return { id: payload.sub, role: payload.role };
}
