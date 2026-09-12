"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AnonymousVisitorLead = {
  visitorId: string;
  visitCount: number;
  lastPath: string;
  firstSeenAt: string;
  lastSeenAt: string;
};

type PendingRegistrationStatus = "AWAITING_VERIFICATION" | "TOO_MANY_ATTEMPTS" | "EXPIRED";

type PendingRegistrationLead = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  attempts: number;
  status: PendingRegistrationStatus;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
};

type Phase = "loading" | "unauthenticated" | "forbidden" | "error" | "ready";

export default function AdminLeadsPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("loading");
  const [anonymousVisitors, setAnonymousVisitors] = useState<AnonymousVisitorLead[]>([]);
  const [pendingRegistrations, setPendingRegistrations] = useState<PendingRegistrationLead[]>([]);
  const [actionEmail, setActionEmail] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  function load() {
    setPhase("loading");
    fetch("/api/admin/leads")
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
        setAnonymousVisitors(data.anonymousVisitors);
        setPendingRegistrations(data.pendingRegistrations);
        setPhase("ready");
      })
      .catch(() => setPhase("error"));
  }

  useEffect(load, []);

  useEffect(() => {
    if (phase === "unauthenticated") {
      router.replace("/login?redirect=/admin/leads");
    }
  }, [phase, router]);

  async function handleResend(email: string) {
    setActionEmail(email);
    setActionMessage(null);
    try {
      const res = await fetch(`/api/admin/leads/pending-registrations/${encodeURIComponent(email)}`, {
        method: "POST",
      });
      const data = await res.json().catch(() => ({}));
      setActionMessage(res.ok ? "Verification email resent." : data.error ?? "Failed to resend.");
    } catch {
      setActionMessage("Failed to resend.");
    } finally {
      setActionEmail(null);
    }
  }

  async function handleDismiss(email: string) {
    setActionEmail(email);
    setActionMessage(null);
    try {
      const res = await fetch(`/api/admin/leads/pending-registrations/${encodeURIComponent(email)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPendingRegistrations((prev) => prev.filter((p) => p.email !== email));
        setActionMessage("Lead dismissed.");
      } else {
        const data = await res.json().catch(() => ({}));
        setActionMessage(data.error ?? "Failed to dismiss.");
      }
    } catch {
      setActionMessage("Failed to dismiss.");
    } finally {
      setActionEmail(null);
    }
  }

  if (phase === "loading" || phase === "unauthenticated") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 text-slate-600">
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

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Lead Management</h1>
          <p className="mt-1 text-slate-600">
            Website visitors who haven&apos;t logged in, and people who started registration but never finished.
          </p>
        </div>
        <Link href="/admin" className="whitespace-nowrap text-sm font-semibold text-blue-600 hover:underline">
          ← Admin Dashboard
        </Link>
      </div>

      {actionMessage && (
        <div className="mt-4 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">{actionMessage}</div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold text-slate-900">
          Incomplete Registrations <span className="text-slate-400">({pendingRegistrations.length})</span>
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Submitted the sign-up form and were sent a verification code, but haven&apos;t completed it yet.
        </p>
        {pendingRegistrations.length === 0 ? (
          <p className="mt-4 text-slate-600">No incomplete registrations.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Mobile</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Last Attempt</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRegistrations.map((p) => (
                  <tr key={p.id} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                    <td className="px-4 py-3 text-slate-600">{p.email}</td>
                    <td className="px-4 py-3 text-slate-600">{p.mobile}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={p.status} attempts={p.attempts} />
                    </td>
                    <td className="px-4 py-3 text-slate-500">{formatDateTime(p.updatedAt)}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          disabled={actionEmail === p.email}
                          onClick={() => handleResend(p.email)}
                          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                          Resend code
                        </button>
                        <button
                          type="button"
                          disabled={actionEmail === p.email}
                          onClick={() => handleDismiss(p.email)}
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 disabled:opacity-50"
                        >
                          Dismiss
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-slate-900">
          Anonymous Visitors <span className="text-slate-400">({anonymousVisitors.length})</span>
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Visited the site without logging in, identified by browser cookie. Most recent {anonymousVisitors.length}{" "}
          shown.
        </p>
        {anonymousVisitors.length === 0 ? (
          <p className="mt-4 text-slate-600">No anonymous visitors yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Visitor</th>
                  <th className="px-4 py-3">Visits</th>
                  <th className="px-4 py-3">Last Page</th>
                  <th className="px-4 py-3">First Seen</th>
                  <th className="px-4 py-3">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {anonymousVisitors.map((v) => (
                  <tr key={v.visitorId} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{v.visitorId.slice(0, 12)}…</td>
                    <td className="px-4 py-3 text-slate-700">{v.visitCount}</td>
                    <td className="px-4 py-3 text-slate-600">{v.lastPath}</td>
                    <td className="px-4 py-3 text-slate-500">{formatDateTime(v.firstSeenAt)}</td>
                    <td className="px-4 py-3 text-slate-500">{formatDateTime(v.lastSeenAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

function StatusBadge({ status, attempts }: { status: PendingRegistrationStatus; attempts: number }) {
  const styles: Record<PendingRegistrationStatus, string> = {
    AWAITING_VERIFICATION: "bg-amber-100 text-amber-700",
    TOO_MANY_ATTEMPTS: "bg-red-100 text-red-700",
    EXPIRED: "bg-slate-100 text-slate-600",
  };
  const labels: Record<PendingRegistrationStatus, string> = {
    AWAITING_VERIFICATION: "Awaiting verification",
    TOO_MANY_ATTEMPTS: `Too many attempts (${attempts})`,
    EXPIRED: "Expired / abandoned",
  };
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${styles[status]}`}>{labels[status]}</span>;
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
