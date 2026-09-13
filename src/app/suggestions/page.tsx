"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SuggestionStatusBadge } from "@/components/suggestions/SuggestionStatusBadge";
import { MAX_SUGGESTION_ATTACHMENTS, processImageFiles } from "@/lib/suggestions/attachments-client";

type SuggestionSummary = {
  id: string;
  subject: string;
  status: "OPEN" | "REVIEWED" | "CLOSED";
  updatedAt: string;
  lastMessage: string;
  messageCount: number;
};

type Phase = "loading" | "unauthenticated" | "error" | "ready";

export default function SuggestionsPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("loading");
  const [suggestions, setSuggestions] = useState<SuggestionSummary[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [attachError, setAttachError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadSuggestions();
  }, []);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login?redirect=/suggestions");
    }
  }, [phase, router]);

  function loadSuggestions() {
    fetch("/api/suggestions")
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
        setSuggestions(data.suggestions);
        setPhase("ready");
      })
      .catch(() => setPhase("error"));
  }

  async function handleFilesSelected(files: FileList | null) {
    if (!files || files.length === 0) return;
    const { accepted, rejected } = await processImageFiles(files, MAX_SUGGESTION_ATTACHMENTS - attachments.length);
    if (accepted.length > 0) setAttachments((prev) => [...prev, ...accepted]);
    setAttachError(rejected.length > 0 ? rejected[0] : null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    setCreating(true);
    setCreateError(null);

    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message, attachments }),
      });
      const data = await res.json();
      if (!res.ok) {
        setCreateError(data.error ?? t.suggestions.errorTitle);
        return;
      }
      router.push(`/suggestions/${data.suggestion.id}`);
    } catch {
      setCreateError(t.suggestions.errorTitle);
    } finally {
      setCreating(false);
    }
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4 text-slate-600">
        {t.suggestions.loadingLabel}
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.suggestions.errorTitle}</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.suggestions.pageTitle}</h1>
          <p className="mt-1 text-slate-600">{t.suggestions.pageSubtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="whitespace-nowrap rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {showForm ? t.suggestions.cancelCta : t.suggestions.newSuggestionCta}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-5">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">{t.suggestions.subjectLabel}</label>
            <input
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.suggestions.subjectPlaceholder}
              maxLength={150}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">{t.suggestions.messageLabel}</label>
            <textarea
              className="input min-h-[100px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.suggestions.messagePlaceholder}
              maxLength={4000}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">{t.suggestions.attachLabel}</label>
            {attachments.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {attachments.map((src, i) => (
                  <div key={i} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="Attachment preview" className="h-16 w-16 rounded-lg border border-slate-200 object-cover" />
                    <button
                      type="button"
                      onClick={() => removeAttachment(i)}
                      className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white"
                      aria-label="Remove image"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={attachments.length >= MAX_SUGGESTION_ATTACHMENTS}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t.suggestions.attachCta}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleFilesSelected(e.target.files)}
            />
            {attachError && <p className="mt-1 text-xs text-red-600">{attachError}</p>}
          </div>
          {createError && <p className="text-sm text-red-600">{createError}</p>}
          <button
            type="submit"
            disabled={creating}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {creating ? t.suggestions.submitting : t.suggestions.submitCta}
          </button>
        </form>
      )}

      <div className="mt-8">
        {suggestions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
            <p className="font-semibold text-slate-900">{t.suggestions.noSuggestions}</p>
            <p className="mt-1 text-sm text-slate-600">{t.suggestions.noSuggestionsDesc}</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <Link
                  href={`/suggestions/${suggestion.id}`}
                  className="block rounded-2xl border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{suggestion.subject}</p>
                    <SuggestionStatusBadge status={suggestion.status} />
                  </div>
                  <p className="mt-1 truncate text-sm text-slate-600">{suggestion.lastMessage}</p>
                  <p className="mt-1 text-xs text-slate-400">{formatDate(suggestion.updatedAt)}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
