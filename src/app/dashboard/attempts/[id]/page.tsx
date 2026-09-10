"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type AttemptQuestion = {
  questionId: string;
  textMr: string;
  textEn: string;
  explanationMr: string | null;
  explanationEn: string | null;
  options: { id: string; label: string; textMr: string; textEn: string }[];
  selectedOptionId: string | null;
  correctOptionId: string | null;
  isCorrect: boolean | null;
  isSaved: boolean;
};

type AttemptDetail = {
  id: string;
  testTitleMr: string;
  testTitleEn: string;
  submittedAt: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  totalQuestions: number;
  questions: AttemptQuestion[];
};

type Phase = "loading" | "unauthenticated" | "not-found" | "error" | "ready";

export default function AttemptDetailPage() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const [phase, setPhase] = useState<Phase>("loading");
  const [attempt, setAttempt] = useState<AttemptDetail | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/quiz/attempts/${params.id}`)
      .then(async (res) => {
        if (res.status === 401) {
          setPhase("unauthenticated");
          return;
        }
        if (res.status === 404) {
          setPhase("not-found");
          return;
        }
        if (!res.ok) {
          setPhase("error");
          return;
        }
        const data = await res.json();
        setAttempt(data);
        setPhase("ready");
      })
      .catch(() => setPhase("error"));
  }, [params.id]);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login");
    }
  }, [phase, router]);

  async function toggleSave(questionId: string, currentlySaved: boolean) {
    if (savingId) return;
    setSavingId(questionId);
    try {
      const res = await fetch("/api/quiz/saved-questions", {
        method: currentlySaved ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId }),
      });
      if (res.ok) {
        setAttempt((prev) =>
          prev
            ? {
                ...prev,
                questions: prev.questions.map((q) =>
                  q.questionId === questionId ? { ...q, isSaved: !currentlySaved } : q
                ),
              }
            : prev
        );
      }
    } finally {
      setSavingId(null);
    }
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-4 text-slate-600">
        {t.quiz.loading}
      </main>
    );
  }

  if (phase === "not-found" || phase === "error" || !attempt) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.quiz.errorTitle}</h1>
        <Link href="/dashboard" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          {t.revision.backToDashboard}
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Link href="/dashboard" className="text-sm font-semibold text-blue-600">
        ← {t.revision.backToDashboard}
      </Link>

      <h1 className="mt-3 text-2xl font-bold text-slate-900">{t.revision.attemptTitle}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {new Date(attempt.submittedAt).toLocaleDateString(locale === "mr" ? "mr-IN" : "en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <ResultStat label={t.quiz.scoreLabel} value={`${attempt.score.toFixed(0)}%`} color="text-blue-600" />
        <ResultStat label={t.quiz.correctLabel} value={attempt.correctCount} color="text-green-600" />
        <ResultStat label={t.quiz.incorrectLabel} value={attempt.incorrectCount} color="text-red-600" />
        <ResultStat label={t.quiz.unattemptedLabel} value={attempt.unattemptedCount} color="text-slate-500" />
      </div>

      <div className="mt-8 space-y-3">
        {attempt.questions.map((q, idx) => {
          const selectedOption = q.options.find((o) => o.id === q.selectedOptionId);
          const correctOption = q.options.find((o) => o.id === q.correctOptionId);
          const status = q.isCorrect === true ? "correct" : q.isCorrect === false ? "incorrect" : "unattempted";

          return (
            <div
              key={q.questionId}
              className={`rounded-xl border p-4 ${
                status === "correct"
                  ? "border-green-200 bg-green-50"
                  : status === "incorrect"
                    ? "border-red-200 bg-red-50"
                    : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">
                  {idx + 1}. {locale === "mr" ? q.textMr : q.textEn}
                </p>
                <button
                  type="button"
                  onClick={() => toggleSave(q.questionId, q.isSaved)}
                  disabled={savingId === q.questionId}
                  className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold disabled:opacity-60 ${
                    q.isSaved
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {q.isSaved ? t.revision.savedCta : t.revision.saveCta}
                </button>
              </div>

              <p className="mt-2 text-sm text-slate-700">
                {t.quiz.yourAnswer}:{" "}
                {selectedOption ? (locale === "mr" ? selectedOption.textMr : selectedOption.textEn) : t.quiz.notAnswered}
              </p>
              {status === "incorrect" && correctOption && (
                <p className="mt-1 text-sm text-green-700">
                  {t.quiz.correctAnswer}: {locale === "mr" ? correctOption.textMr : correctOption.textEn}
                </p>
              )}
              {(() => {
                const explanation = locale === "mr" ? q.explanationMr : q.explanationEn;
                return explanation ? (
                  <p className="mt-2 rounded-lg bg-white/60 px-3 py-2 text-sm text-slate-600">
                    <span className="font-semibold text-slate-700">{t.quiz.explanationLabel}: </span>
                    {explanation}
                  </p>
                ) : null;
              })()}
            </div>
          );
        })}
      </div>
    </main>
  );
}

function ResultStat({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 text-center">
      <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
