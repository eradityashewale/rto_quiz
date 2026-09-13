"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SuggestionStatusBadge } from "@/components/suggestions/SuggestionStatusBadge";
import { TicketThread, type TicketThreadMessage } from "@/components/tickets/TicketThread";

type SuggestionDetail = {
  id: string;
  subject: string;
  status: "OPEN" | "REVIEWED" | "CLOSED";
  messages: TicketThreadMessage[];
};

type Phase = "loading" | "unauthenticated" | "notfound" | "error" | "ready";

export default function SuggestionDetailPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const suggestionId = params.id;

  const [phase, setPhase] = useState<Phase>("loading");
  const [suggestion, setSuggestion] = useState<SuggestionDetail | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(
    (silent: boolean) => {
      fetch(`/api/suggestions/${suggestionId}`)
        .then(async (res) => {
          if (res.status === 401) {
            setPhase("unauthenticated");
            return;
          }
          if (res.status === 404) {
            setPhase("notfound");
            return;
          }
          if (!res.ok) {
            if (!silent) setPhase("error");
            return;
          }
          const data = await res.json();
          setSuggestion(data.suggestion);
          setPhase("ready");
        })
        .catch(() => {
          if (!silent) setPhase("error");
        });
    },
    [suggestionId]
  );

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setCurrentUserId(data?.user?.id ?? null))
      .catch(() => {});
    load(false);
  }, [load]);

  useEffect(() => {
    pollRef.current = setInterval(() => load(true), 5000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [load]);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace(`/login?redirect=/suggestions/${suggestionId}`);
    }
  }, [phase, router, suggestionId]);

  async function handleSend(body: string, attachments: string[]): Promise<boolean> {
    const res = await fetch(`/api/suggestions/${suggestionId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body, attachments }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    setSuggestion(data.suggestion);
    return true;
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 text-slate-600">
        {t.suggestions.loadingLabel}
      </main>
    );
  }

  if (phase === "notfound" || phase === "error" || !suggestion || !currentUserId) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.suggestions.errorTitle}</h1>
        <Link href="/suggestions" className="text-sm font-semibold text-blue-600 hover:underline">
          {t.suggestions.backCta}
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex h-[calc(100vh-64px)] max-w-3xl flex-col px-4 py-6 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <Link href="/suggestions" className="text-sm font-semibold text-blue-600 hover:underline">
            ← {t.suggestions.backCta}
          </Link>
          <h1 className="mt-1 text-lg font-bold text-slate-900">{suggestion.subject}</h1>
        </div>
        <SuggestionStatusBadge status={suggestion.status} />
      </div>

      <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200">
        <TicketThread
          messages={suggestion.messages}
          currentUserId={currentUserId}
          onSend={handleSend}
          disabled={suggestion.status === "CLOSED"}
          disabledNote={t.suggestions.closedNotice}
          placeholder={t.suggestions.composerPlaceholder}
          sendLabel={t.suggestions.sendCta}
          sendingLabel={t.suggestions.sending}
        />
      </div>
    </main>
  );
}
