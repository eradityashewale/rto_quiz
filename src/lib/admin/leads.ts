import { prisma } from "@/lib/prisma";

export type AnonymousVisitorLead = {
  visitorId: string;
  visitCount: number;
  lastPath: string;
  firstSeenAt: string;
  lastSeenAt: string;
};

export type PendingRegistrationStatus = "AWAITING_VERIFICATION" | "TOO_MANY_ATTEMPTS" | "EXPIRED";

export type PendingRegistrationLead = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  attempts: number;
  status: PendingRegistrationStatus;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
};

const ANONYMOUS_VISITOR_LIMIT = 200;
const MAX_OTP_ATTEMPTS = 5;

export async function listAnonymousVisitorLeads(): Promise<AnonymousVisitorLead[]> {
  const groups = await prisma.siteVisit.groupBy({
    by: ["visitorId"],
    where: { userId: null },
    _count: { _all: true },
    _min: { createdAt: true },
    _max: { createdAt: true },
    orderBy: { _max: { createdAt: "desc" } },
    take: ANONYMOUS_VISITOR_LIMIT,
  });

  if (groups.length === 0) return [];

  const visitorIds = groups.map((g) => g.visitorId);
  const latestVisits = await prisma.siteVisit.findMany({
    where: { userId: null, visitorId: { in: visitorIds } },
    orderBy: { createdAt: "desc" },
    distinct: ["visitorId"],
    select: { visitorId: true, path: true },
  });
  const lastPathByVisitor = new Map(latestVisits.map((v) => [v.visitorId, v.path]));

  return groups.map((g) => ({
    visitorId: g.visitorId,
    visitCount: g._count._all,
    lastPath: lastPathByVisitor.get(g.visitorId) ?? "/",
    firstSeenAt: (g._min.createdAt ?? new Date()).toISOString(),
    lastSeenAt: (g._max.createdAt ?? new Date()).toISOString(),
  }));
}

export async function listPendingRegistrationLeads(): Promise<PendingRegistrationLead[]> {
  const pending = await prisma.pendingRegistration.findMany({
    orderBy: { updatedAt: "desc" },
  });

  const now = new Date();

  return pending.map((p) => {
    let status: PendingRegistrationStatus = "AWAITING_VERIFICATION";
    if (p.attempts >= MAX_OTP_ATTEMPTS) status = "TOO_MANY_ATTEMPTS";
    else if (p.expiresAt < now) status = "EXPIRED";

    return {
      id: p.id,
      name: p.name,
      email: p.email,
      mobile: p.mobile,
      attempts: p.attempts,
      status,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
      expiresAt: p.expiresAt.toISOString(),
    };
  });
}
