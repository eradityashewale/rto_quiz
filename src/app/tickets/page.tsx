"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TicketStatusBadge } from "@/components/tickets/TicketStatusBadge";

type TicketSummary = {
  id: string;
  subject: string;
  status: "OPEN" | "ANSWERED" | "CLOSED";
  updatedAt: string;
  lastMessage: string;
  messageCount: number;
};

type Phase = "loading" | "unauthenticated" | "error" | "ready";

export default function TicketsPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("loading");
  const [tickets, setTickets] = useState<TicketSummary[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login?redirect=/tickets");
    }
  }, [phase, router]);

  function loadTickets() {
    fetch("/api/tickets")
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
        setTickets(data.tickets);
        setPhase("ready");
      })
      .catch(() => setPhase("error"));
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    setCreating(true);
    setCreateError(null);

    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setCreateError(data.error ?? t.tickets.errorTitle);
        return;
      }
      router.push(`/tickets/${data.ticket.id}`);
    } catch {
      setCreateError(t.tickets.errorTitle);
    } finally {
      setCreating(false);
    }
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4 text-slate-600">
        {t.tickets.loadingLabel}
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">{t.tickets.errorTitle}</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.tickets.pageTitle}</h1>
          <p className="mt-1 text-slate-600">{t.tickets.pageSubtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="whitespace-nowrap rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {showForm ? t.tickets.cancelCta : t.tickets.newTicketCta}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-5">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">{t.tickets.subjectLabel}</label>
            <input
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.tickets.subjectPlaceholder}
              maxLength={150}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">{t.tickets.messageLabel}</label>
            <textarea
              className="input min-h-[100px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.tickets.messagePlaceholder}
              maxLength={4000}
              required
            />
          </div>
          {createError && <p className="text-sm text-red-600">{createError}</p>}
          <button
            type="submit"
            disabled={creating}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {creating ? t.tickets.submitting : t.tickets.submitCta}
          </button>
        </form>
      )}

      <div className="mt-8">
        {tickets.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
            <p className="font-semibold text-slate-900">{t.tickets.noTickets}</p>
            <p className="mt-1 text-sm text-slate-600">{t.tickets.noTicketsDesc}</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {tickets.map((ticket) => (
              <li key={ticket.id}>
                <Link
                  href={`/tickets/${ticket.id}`}
                  className="block rounded-2xl border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{ticket.subject}</p>
                    <TicketStatusBadge status={ticket.status} />
                  </div>
                  <p className="mt-1 truncate text-sm text-slate-600">{ticket.lastMessage}</p>
                  <p className="mt-1 text-xs text-slate-400">{formatDate(ticket.updatedAt)}</p>
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
