"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TicketStatusBadge } from "@/components/tickets/TicketStatusBadge";

type TicketSummary = {
  id: string;
  subject: string;
  status: "OPEN" | "ANSWERED" | "CLOSED";
  updatedAt: string;
  userName: string;
  lastMessage: string;
};

type Phase = "loading" | "unauthenticated" | "forbidden" | "error" | "ready";
type FilterTab = "ALL" | "OPEN" | "ANSWERED" | "CLOSED";

export default function AdminTicketsPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("loading");
  const [tickets, setTickets] = useState<TicketSummary[]>([]);
  const [filter, setFilter] = useState<FilterTab>("ALL");

  useEffect(() => {
    setPhase("loading");
    const qs = filter === "ALL" ? "" : `?status=${filter}`;
    fetch(`/api/admin/tickets${qs}`)
      .then(async (res) => {
        if (res.status === 401) {
          setPhase("unauthenticated");
          return;
        }
        if (res.status === 403) {
          setPhase("forbidden");
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
  }, [filter]);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login?redirect=/admin/tickets");
    }
  }, [phase, router]);

  if (phase === "loading" || phase === "unauthenticated") {
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
        <p className="text-slate-600">This account doesn&apos;t have admin access.</p>
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">Something went wrong</h1>
      </main>
    );
  }

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "ALL", label: "All" },
    { key: "OPEN", label: "Open" },
    { key: "ANSWERED", label: "Answered" },
    { key: "CLOSED", label: "Closed" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Support Tickets</h1>
          <p className="mt-1 text-slate-600">User queries raised via the support ticket system.</p>
        </div>
        <Link href="/admin" className="text-sm font-semibold text-blue-600 hover:underline">
          ← Admin Dashboard
        </Link>
      </div>

      <div className="mt-6 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key)}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
              filter === tab.key ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tickets.length === 0 ? (
          <p className="text-slate-600">No tickets found.</p>
        ) : (
          <ul className="space-y-3">
            {tickets.map((ticket) => (
              <li key={ticket.id}>
                <Link
                  href={`/admin/tickets/${ticket.id}`}
                  className="block rounded-2xl border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{ticket.subject}</p>
                    <TicketStatusBadge status={ticket.status} />
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    <span className="font-medium text-slate-700">{ticket.userName}</span> — {ticket.lastMessage}
                  </p>
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
