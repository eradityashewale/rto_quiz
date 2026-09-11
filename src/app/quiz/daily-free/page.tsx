"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import DailyFreeDayPicker from "@/components/quiz/DailyFreeDayPicker";

type BatchQuestion = {
  id: string;
  textMr: string;
  textEn: string;
  difficulty: string;
  options: { id: string; label: string; textMr: string; textEn: string }[];
};

type Batch = {
  attemptId: string;
  testId: string;
  questions: BatchQuestion[];
};

type ReviewItem = {
  questionId: string;
  selectedOptionId: string | null;
  correctOptionId: string | null;
  isCorrect: boolean | null;
  explanationMr: string | null;
  explanationEn: string | null;
};

type SubmitResult = {
  score: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  totalQuestions: number;
  review: ReviewItem[];
};

type AlreadyAttempted = {
  attemptId: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  totalQuestions: number;
};

type Phase = "loading" | "unauthenticated" | "error" | "active" | "submitted" | "already-attempted";

export default function DailyFreeQuizPage() {
  return (
    <Suspense fallback={null}>
      <DailyFreeQuizView />
    </Suspense>
  );
}

function DailyFreeQuizView() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date") ?? undefined;
  const currentPath = dateParam
    ? `/quiz/daily-free?date=${encodeURIComponent(dateParam)}`
    : "/quiz/daily-free";

  const [phase, setPhase] = useState<Phase>("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [batch, setBatch] = useState<Batch | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | null>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [alreadyAttempted, setAlreadyAttempted] = useState<AlreadyAttempted | null>(null);

  useEffect(() => {
    loadBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateParam]);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace(`/register?redirect=${encodeURIComponent(currentPath)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  async function loadBatch() {
    setPhase("loading");
    setErrorMsg(null);
    try {
      const url = dateParam
        ? `/api/quiz/daily-free?date=${encodeURIComponent(dateParam)}`
        : "/api/quiz/daily-free";
      const res = await fetch(url);
      if (res.status === 401) {
        setPhase("unauthenticated");
        return;
      }
      const data = await res.json();
      if (res.status === 409 && data.alreadyAttempted) {
        setAlreadyAttempted(data);
        setPhase("already-attempted");
        return;
      }
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong");
        setPhase("error");
        return;
      }
      setBatch(data);
      setAnswers(Object.fromEntries((data.questions as BatchQuestion[]).map((q) => [q.id, null])));
      setCurrentIndex(0);
      setResult(null);
      setPhase("active");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setPhase("error");
    }
  }

  const answeredCount = useMemo(
    () => Object.values(answers).filter((v) => v !== null).length,
    [answers]
  );

  function selectOption(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  async function handleSubmit() {
    if (!batch || submitting) return;

    if (answeredCount < batch.questions.length) {
      const ok = window.confirm(t.quiz.unansweredWarning);
      if (!ok) return;
    }

    setSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/quiz/daily-free/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attemptId: batch.attemptId,
          answers: batch.questions.map((q) => ({
            questionId: q.id,
            selectedOptionId: answers[q.id] ?? null,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong");
        return;
      }
      setResult(data);
      setPhase("submitted");
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (phase === "loading") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-4 text-slate-600">
        {t.quiz.loading}
      </main>
    );
  }

  if (phase === "unauthenticated") {
    const registerHref = `/register?redirect=${encodeURIComponent(currentPath)}`;
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.quiz.loginRequiredTitle}</h1>
        <p className="text-slate-600">{t.quiz.loginRequiredDesc}</p>
        <div className="flex gap-3">
          <Link href={registerHref} className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            {t.auth.registerCta}
          </Link>
          <Link
            href={`/login?redirect=${encodeURIComponent(currentPath)}`}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            {t.auth.loginCta}
          </Link>
        </div>
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <DailyFreeDayPicker activeDate={dateParam} />
        <h1 className="text-xl font-bold text-slate-900">{t.quiz.errorTitle}</h1>
        {errorMsg && <p className="text-slate-600">{errorMsg}</p>}
        <button
          type="button"
          onClick={loadBatch}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {t.quiz.retryCta}
        </button>
      </main>
    );
  }

  if (phase === "already-attempted" && alreadyAttempted) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <DailyFreeDayPicker activeDate={dateParam} />
        <h1 className="text-xl font-bold text-slate-900">{t.quiz.alreadyAttemptedTitle}</h1>
        <p className="text-slate-600">{t.quiz.alreadyAttemptedDesc}</p>

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          <ResultStat label={t.quiz.scoreLabel} value={`${alreadyAttempted.score.toFixed(0)}%`} color="text-blue-600" />
          <ResultStat label={t.quiz.correctLabel} value={alreadyAttempted.correctCount} color="text-green-600" />
          <ResultStat label={t.quiz.incorrectLabel} value={alreadyAttempted.incorrectCount} color="text-red-600" />
          <ResultStat label={t.quiz.unattemptedLabel} value={alreadyAttempted.unattemptedCount} color="text-slate-500" />
        </div>

        <div className="flex gap-3">
          <Link
            href={`/dashboard/attempts/${alreadyAttempted.attemptId}`}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {t.quiz.viewAttemptCta}
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            {t.revision.backToDashboard}
          </Link>
        </div>
      </main>
    );
  }

  if (phase === "submitted" && result) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <DailyFreeDayPicker activeDate={dateParam} />
        <h1 className="text-center text-2xl font-bold text-slate-900">{t.quiz.resultTitle}</h1>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <ResultStat label={t.quiz.scoreLabel} value={`${result.score.toFixed(0)}%`} color="text-blue-600" />
          <ResultStat label={t.quiz.correctLabel} value={result.correctCount} color="text-green-600" />
          <ResultStat label={t.quiz.incorrectLabel} value={result.incorrectCount} color="text-red-600" />
          <ResultStat label={t.quiz.unattemptedLabel} value={result.unattemptedCount} color="text-slate-500" />
        </div>

        <h2 className="mt-10 text-lg font-bold text-slate-900">{t.quiz.reviewTitle}</h2>
        <div className="mt-4 space-y-3">
          {batch?.questions.map((q, idx) => {
            const item = result.review.find((r) => r.questionId === q.id);
            const selectedOption = q.options.find((o) => o.id === item?.selectedOptionId);
            const correctOption = q.options.find((o) => o.id === item?.correctOptionId);
            const status = item?.isCorrect === true ? "correct" : item?.isCorrect === false ? "incorrect" : "unattempted";

            return (
              <div
                key={q.id}
                className={`rounded-xl border p-4 ${
                  status === "correct"
                    ? "border-green-200 bg-green-50"
                    : status === "incorrect"
                      ? "border-red-200 bg-red-50"
                      : "border-slate-200 bg-slate-50"
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  {idx + 1}. {locale === "mr" ? q.textMr : q.textEn}
                </p>
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
                  const explanation = locale === "mr" ? item?.explanationMr : item?.explanationEn;
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

        <div className="mt-8 text-center">
          <Link href="/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            {t.quiz.backHome}
          </Link>
        </div>
      </main>
    );
  }

  if (!batch) return null;

  const question = batch.questions[currentIndex];
  const isLast = currentIndex === batch.questions.length - 1;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <DailyFreeDayPicker activeDate={dateParam} />
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">
          {t.quiz.questionOf} {currentIndex + 1} / {batch.questions.length}
        </p>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {batch.questions.map((q, idx) => {
          const isAnswered = answers[q.id] !== null;
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold ${
                isCurrent
                  ? "bg-blue-600 text-white"
                  : isAnswered
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-600"
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 p-6">
        <p className="text-base font-semibold text-slate-900">
          {locale === "mr" ? question.textMr : question.textEn}
        </p>

        <div className="mt-5 space-y-3">
          {question.options.map((opt) => {
            const selected = answers[question.id] === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => selectOption(question.id, opt.id)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm ${
                  selected
                    ? "border-blue-600 bg-blue-50 text-blue-900"
                    : "border-slate-200 hover:border-blue-300"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    selected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 text-slate-500"
                  }`}
                >
                  {opt.label}
                </span>
                {locale === "mr" ? opt.textMr : opt.textEn}
              </button>
            );
          })}
        </div>
      </div>

      {errorMsg && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{errorMsg}</p>
      )}

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 disabled:opacity-40"
        >
          {t.quiz.prevCta}
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {submitting ? t.quiz.submitting : t.quiz.submitCta}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentIndex((i) => Math.min(batch.questions.length - 1, i + 1))}
            className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {t.quiz.nextCta}
          </button>
        )}
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
