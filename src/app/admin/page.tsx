"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type AdminStats = {
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
  recentUsers: {
    id: string;
    name: string;
    email: string;
    mobile: string;
    role: string;
    createdAt: string;
  }[];
  recentAttempts: {
    id: string;
    userName: string;
    testTitleEn: string;
    status: string;
    score: number | null;
    submittedAt: string | null;
    createdAt: string;
  }[];
};

type Phase = "loading" | "forbidden" | "error" | "ready";

export default function AdminDashboardPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then(async (res) => {
        if (res.status === 403 || res.status === 401) {
          setPhase("forbidden");
          return;
        }
        if (!res.ok) {
          setPhase("error");
          return;
        }
        const data = await res.json();
        setStats(data);
        setPhase("ready");
      })
      .catch(() => setPhase("error"));
  }, []);

  if (phase === "loading") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-4 text-slate-600">
        Loading…
      </main>
    );
  }

  if (phase === "forbidden") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">Access denied</h1>
        <p className="text-slate-600">You need an admin account to view this page.</p>
        <Link href="/login" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          Go to login
        </Link>
      </main>
    );
  }

  if (phase === "error" || !stats) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">Something went wrong</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
      <p className="mt-1 text-slate-600">Platform-wide overview.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        <StatCard
          label="Registered Users"
          value={stats.totalUsers}
          sub={`+${stats.newUsersToday} today · +${stats.newUsersLast7Days} last 7d`}
          color="text-slate-900"
        />
        <StatCard
          label="Quiz Attempts"
          value={stats.totalQuizAttempts}
          sub={`${stats.completedAttempts} completed · ${stats.inProgressAttempts} in progress · +${stats.attemptsToday} today`}
          color="text-blue-600"
        />
        <StatCard
          label="Website Visits"
          value={stats.totalSiteVisits}
          sub={`${stats.uniqueVisitors} unique visitors · +${stats.visitsToday} today`}
          color="text-green-600"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-bold text-slate-900">Recent Registrations</h2>
          {stats.recentUsers.length === 0 ? (
            <p className="mt-4 text-slate-600">No users yet.</p>
          ) : (
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentUsers.map((u) => (
                    <tr key={u.id} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">{u.name}</td>
                      <td className="px-4 py-3 text-slate-600">{u.email}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            u.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{formatDate(u.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Recent Quiz Attempts</h2>
          {stats.recentAttempts.length === 0 ? (
            <p className="mt-4 text-slate-600">No attempts yet.</p>
          ) : (
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Test</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentAttempts.map((a) => (
                    <tr key={a.id} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">{a.userName}</td>
                      <td className="px-4 py-3 text-slate-600">{a.testTitleEn}</td>
                      <td className="px-4 py-3 text-slate-500">{a.status}</td>
                      <td className="px-4 py-3 text-blue-600">{a.score !== null ? `${a.score.toFixed(0)}%` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: number;
  sub: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className={`text-3xl font-extrabold ${color}`}>{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-700">{label}</p>
      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
