"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TicketStatusBadge } from "@/components/tickets/TicketStatusBadge";
import { TicketThread, type TicketThreadMessage } from "@/components/tickets/TicketThread";

type TicketDetail = {
  id: string;
  subject: string;
  status: "OPEN" | "ANSWERED" | "CLOSED";
  messages: TicketThreadMessage[];
};

type Phase = "loading" | "unauthenticated" | "notfound" | "error" | "ready";

export default function TicketDetailPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const ticketId = params.id;

  const [phase, setPhase] = useState<Phase>("loading");
  const [ticket, setTicket] = useState<TicketDetail | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(
    (silent: boolean) => {
      fetch(`/api/tickets/${ticketId}`)
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
          setTicket(data.ticket);
          setPhase("ready");
        })
        .catch(() => {
          if (!silent) setPhase("error");
        });
    },
    [ticketId]
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
      router.replace(`/login?redirect=/tickets/${ticketId}`);
    }
  }, [phase, router, ticketId]);

  async function handleSend(body: string): Promise<boolean> {
    const res = await fetch(`/api/tickets/${ticketId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    setTicket(data.ticket);
    return true;
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 text-slate-600">
        {t.tickets.loadingLabel}
      </main>
    );
  }

  if (phase === "notfound" || phase === "error" || !ticket || !currentUserId) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.tickets.errorTitle}</h1>
        <Link href="/tickets" className="text-sm font-semibold text-blue-600 hover:underline">
          {t.tickets.backCta}
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex h-[calc(100vh-64px)] max-w-3xl flex-col px-4 py-6 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <Link href="/tickets" className="text-sm font-semibold text-blue-600 hover:underline">
            ← {t.tickets.backCta}
          </Link>
          <h1 className="mt-1 text-lg font-bold text-slate-900">{ticket.subject}</h1>
        </div>
        <TicketStatusBadge status={ticket.status} />
      </div>

      <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200">
        <TicketThread
          messages={ticket.messages}
          currentUserId={currentUserId}
          onSend={handleSend}
          disabled={ticket.status === "CLOSED"}
          disabledNote={t.tickets.closedNotice}
          placeholder={t.tickets.composerPlaceholder}
          sendLabel={t.tickets.sendCta}
          sendingLabel={t.tickets.sending}
        />
      </div>
    </main>
  );
}
