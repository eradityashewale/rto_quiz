"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type SavedQuestion = {
  questionId: string;
  savedAt: string;
  textMr: string;
  textEn: string;
  explanationMr: string | null;
  explanationEn: string | null;
  options: { id: string; label: string; textMr: string; textEn: string; isCorrect: boolean }[];
};

type Phase = "loading" | "unauthenticated" | "error" | "ready";

export default function SavedQuestionsPage() {
  const { t, locale } = useLanguage();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("loading");
  const [questions, setQuestions] = useState<SavedQuestion[]>([]);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  function load() {
    setPhase("loading");
    fetch("/api/quiz/saved-questions")
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
        setQuestions(data.questions);
        setPhase("ready");
      })
      .catch(() => setPhase("error"));
  }

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login");
    }
  }, [phase, router]);

  async function handleRemove(questionId: string) {
    if (removingId) return;
    setRemovingId(questionId);
    try {
      const res = await fetch("/api/quiz/saved-questions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId }),
      });
      if (res.ok) {
        setQuestions((prev) => prev.filter((q) => q.questionId !== questionId));
      }
    } finally {
      setRemovingId(null);
    }
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-4 text-slate-600">
        {t.quiz.loading}
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.quiz.errorTitle}</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Link href="/dashboard" className="text-sm font-semibold text-blue-600">
        ← {t.revision.backToDashboard}
      </Link>

      <h1 className="mt-3 text-2xl font-bold text-slate-900">{t.revision.savedQuestionsTitle}</h1>

      {questions.length === 0 ? (
        <div className="mt-6 rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-600">{t.revision.savedEmpty}</p>
          <Link
            href="/dashboard"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {t.revision.savedEmptyCta}
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {questions.map((q, idx) => {
            const correctOption = q.options.find((o) => o.isCorrect);
            return (
              <div key={q.questionId} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {idx + 1}. {locale === "mr" ? q.textMr : q.textEn}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRemove(q.questionId)}
                    disabled={removingId === q.questionId}
                    className="shrink-0 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-red-500 hover:text-red-600 disabled:opacity-60"
                  >
                    {t.revision.removeCta}
                  </button>
                </div>

                <div className="mt-3 space-y-2">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        opt.isCorrect
                          ? "border-green-300 bg-green-50 text-green-800"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      <span className="mr-2 font-semibold">{opt.label}.</span>
                      {locale === "mr" ? opt.textMr : opt.textEn}
                    </div>
                  ))}
                </div>
                {correctOption && (
                  <p className="mt-2 text-xs font-medium text-green-700">
                    {t.revision.correctAnswerLabel}: {correctOption.label}
                  </p>
                )}
                {(() => {
                  const explanation = locale === "mr" ? q.explanationMr : q.explanationEn;
                  return explanation ? (
                    <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                      <span className="font-semibold text-slate-700">{t.quiz.explanationLabel}: </span>
                      {explanation}
                    </p>
                  ) : null;
                })()}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
