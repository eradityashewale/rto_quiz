"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getClientUser, type ClientUser } from "@/lib/auth/client-session";

type DashboardAttempt = {
  id: string;
  testTitleMr: string;
  testTitleEn: string;
  submittedAt: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
};

type DashboardStats = {
  totalAttempts: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  totalQuestionsAttempted: number;
  averageScore: number;
  recentAttempts: DashboardAttempt[];
};

type Phase = "loading" | "unauthenticated" | "error" | "ready";

export default function DashboardPage() {
  const { t, locale } = useLanguage();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("loading");
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [user, setUser] = useState<ClientUser | null>(null);

  useEffect(() => {
    setUser(getClientUser());

    fetch("/api/dashboard/stats")
      .then(async (res) => {
        if (res.status === 401) {
          setPhase("unauthenticated");
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

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login");
    }
  }, [phase, router]);

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4 text-slate-600">
        {t.quiz.loading}
      </main>
    );
  }

  if (phase === "error" || !stats) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.quiz.errorTitle}</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">{t.dashboard.title}</h1>
      {user && (
        <p className="mt-1 text-slate-600">
          {t.dashboard.welcomeBack}, {user.name}
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        <StatCard label={t.dashboard.totalAttempts} value={stats.totalAttempts} color="text-slate-900" />
        <StatCard label={t.dashboard.totalCorrect} value={stats.totalCorrect} color="text-green-600" />
        <StatCard label={t.dashboard.totalIncorrect} value={stats.totalIncorrect} color="text-red-600" />
        <StatCard label={t.dashboard.totalUnattempted} value={stats.totalUnattempted} color="text-slate-500" />
        <StatCard label={t.dashboard.averageScore} value={`${stats.averageScore.toFixed(0)}%`} color="text-blue-600" />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">{t.dashboard.recentAttemptsTitle}</h2>
        <Link href="/dashboard/saved" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          {t.revision.savedQuestionsNav}
        </Link>
      </div>

      {stats.recentAttempts.length === 0 ? (
        <div className="mt-4 rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-600">{t.dashboard.noAttempts}</p>
          <Link
            href="/quiz/daily-free"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {t.dashboard.noAttemptsCta}
          </Link>
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">{t.dashboard.dateLabel}</th>
                <th className="px-4 py-3">{t.dashboard.scoreLabel}</th>
                <th className="px-4 py-3">{t.quiz.correctLabel}</th>
                <th className="px-4 py-3">{t.quiz.incorrectLabel}</th>
                <th className="px-4 py-3">{t.quiz.unattemptedLabel}</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentAttempts.map((a) => (
                <tr
                  key={a.id}
                  onClick={() => router.push(`/dashboard/attempts/${a.id}`)}
                  className="cursor-pointer border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-4 py-3 font-semibold text-blue-600 underline-offset-2 hover:underline">
                    {new Date(a.submittedAt).toLocaleDateString(locale === "mr" ? "mr-IN" : "en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-600">{a.score.toFixed(0)}%</td>
                  <td className="px-4 py-3 text-green-600">{a.correctCount}</td>
                  <td className="px-4 py-3 text-red-600">{a.incorrectCount}</td>
                  <td className="px-4 py-3 text-slate-500">{a.unattemptedCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

function StatCard({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 text-center">
      <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
