import { NextRequest } from "next/server";
import { getAuthUser, SessionUser } from "@/lib/auth/session";

export function getAdminUser(req: NextRequest): SessionUser | null {
  const user = getAuthUser(req);
  if (!user || user.role !== "ADMIN") return null;
  return user;
}
