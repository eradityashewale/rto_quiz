"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getClientUser } from "@/lib/auth/client-session";
import { SuggestionStatusBadge } from "@/components/suggestions/SuggestionStatusBadge";
import { TicketThread, type TicketThreadMessage } from "@/components/tickets/TicketThread";

type SuggestionDetail = {
  id: string;
  subject: string;
  status: "OPEN" | "REVIEWED" | "CLOSED";
  userName: string;
  userEmail: string;
  messages: TicketThreadMessage[];
};

type Phase = "loading" | "unauthenticated" | "forbidden" | "notfound" | "error" | "ready";

export default function AdminSuggestionDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const suggestionId = params.id;

  const [phase, setPhase] = useState<Phase>("loading");
  const [suggestion, setSuggestion] = useState<SuggestionDetail | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCurrentUserId(getClientUser()?.id ?? null);
  }, []);

  const load = useCallback(
    (silent: boolean) => {
      fetch(`/api/admin/suggestions/${suggestionId}`)
        .then(async (res) => {
          if (res.status === 401) {
            setPhase("unauthenticated");
            return;
          }
          if (res.status === 403) {
            setPhase("forbidden");
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
      router.replace(`/login?redirect=/admin/suggestions/${suggestionId}`);
    }
  }, [phase, router, suggestionId]);

  async function handleSend(body: string, attachments: string[]): Promise<boolean> {
    const res = await fetch(`/api/admin/suggestions/${suggestionId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body, attachments }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    setSuggestion(data.suggestion);
    return true;
  }

  async function handleStatusChange(status: "OPEN" | "REVIEWED" | "CLOSED") {
    setUpdatingStatus(true);
    try {
      const res = await fetch(`/api/admin/suggestions/${suggestionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        const data = await res.json();
        setSuggestion(data.suggestion);
      }
    } finally {
      setUpdatingStatus(false);
    }
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 text-slate-600">
        Loading…
      </main>
    );
  }

  if (phase === "forbidden" || phase === "notfound" || phase === "error" || !suggestion || !currentUserId) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">
          {phase === "forbidden" ? "Access denied" : "Something went wrong"}
        </h1>
        <Link href="/admin/suggestions" className="text-sm font-semibold text-blue-600 hover:underline">
          ← Back to suggestions
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex h-[calc(100vh-64px)] max-w-3xl flex-col px-4 py-6 sm:px-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <Link href="/admin/suggestions" className="text-sm font-semibold text-blue-600 hover:underline">
            ← Back to suggestions
          </Link>
          <h1 className="mt-1 text-lg font-bold text-slate-900">{suggestion.subject}</h1>
          <p className="text-sm text-slate-500">
            {suggestion.userName} · {suggestion.userEmail}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SuggestionStatusBadge status={suggestion.status} />
          {suggestion.status !== "CLOSED" ? (
            <button
              type="button"
              disabled={updatingStatus}
              onClick={() => handleStatusChange("CLOSED")}
              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50"
            >
              Mark Closed
            </button>
          ) : (
            <button
              type="button"
              disabled={updatingStatus}
              onClick={() => handleStatusChange("OPEN")}
              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50"
            >
              Reopen
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200">
        <TicketThread
          messages={suggestion.messages}
          currentUserId={currentUserId}
          onSend={handleSend}
          disabled={suggestion.status === "CLOSED"}
          disabledNote="This suggestion is closed. Reopen it to reply."
          placeholder="Type your reply..."
          sendLabel="Send"
          sendingLabel="Sending..."
        />
      </div>
    </main>
  );
}
