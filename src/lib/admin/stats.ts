import { AttemptStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type AdminRecentUser = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  createdAt: string;
};

export type AdminRecentAttempt = {
  id: string;
  userName: string;
  testTitleEn: string;
  status: string;
  score: number | null;
  submittedAt: string | null;
  createdAt: string;
};

export type AdminStats = {
  totalUsers: number;
  newUsersToday: number;
  newUsersLast7Days: number;
  totalQuizAttempts: number;
  completedAttempts: number;
  inProgressAttempts: number;
  attemptsToday: number;
  totalSiteVisits: number;
  uniqueVisitors: number;
  visitsToday: number;
  recentUsers: AdminRecentUser[];
  recentAttempts: AdminRecentAttempt[];
};

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

export async function getAdminStats(): Promise<AdminStats> {
  const todayStart = startOfToday();
  const sevenDaysAgo = daysAgo(7);

  const [
    totalUsers,
    newUsersToday,
    newUsersLast7Days,
    totalQuizAttempts,
    completedAttempts,
    inProgressAttempts,
    attemptsToday,
    totalSiteVisits,
    visitsToday,
    visitorGroups,
    recentUsers,
    recentAttempts,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { createdAt: { gte: todayStart } } }),
    prisma.user.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    prisma.testAttempt.count(),
    prisma.testAttempt.count({ where: { status: AttemptStatus.COMPLETED } }),
    prisma.testAttempt.count({ where: { status: AttemptStatus.IN_PROGRESS } }),
    prisma.testAttempt.count({ where: { createdAt: { gte: todayStart } } }),
    prisma.siteVisit.count(),
    prisma.siteVisit.count({ where: { createdAt: { gte: todayStart } } }),
    prisma.siteVisit.groupBy({ by: ["visitorId"] }),
    prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: { id: true, name: true, email: true, mobile: true, role: true, createdAt: true },
    }),
    prisma.testAttempt.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      include: {
        user: { select: { name: true } },
        test: { select: { titleEn: true } },
      },
    }),
  ]);

  return {
    totalUsers,
    newUsersToday,
    newUsersLast7Days,
    totalQuizAttempts,
    completedAttempts,
    inProgressAttempts,
    attemptsToday,
    totalSiteVisits,
    uniqueVisitors: visitorGroups.length,
    visitsToday,
    recentUsers: recentUsers.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      mobile: u.mobile,
      role: u.role,
      createdAt: u.createdAt.toISOString(),
    })),
    recentAttempts: recentAttempts.map((a) => ({
      id: a.id,
      userName: a.user.name,
      testTitleEn: a.test.titleEn,
      status: a.status,
      score: a.score,
      submittedAt: a.submittedAt ? a.submittedAt.toISOString() : null,
      createdAt: a.createdAt.toISOString(),
    })),
  };
}
