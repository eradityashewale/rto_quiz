"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export type TicketThreadMessage = {
  id: string;
  body: string;
  senderId: string;
  senderName: string;
  senderRole: string;
  createdAt: string;
};

export function TicketThread({
  messages,
  currentUserId,
  onSend,
  disabled,
  disabledNote,
  placeholder,
  sendLabel,
  sendingLabel,
}: {
  messages: TicketThreadMessage[];
  currentUserId: string;
  onSend: (body: string) => Promise<boolean>;
  disabled?: boolean;
  disabledNote?: string;
  placeholder: string;
  sendLabel: string;
  sendingLabel: string;
}) {
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body || sending) return;

    setSending(true);
    const ok = await onSend(body);
    setSending(false);
    if (ok) setDraft("");
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m) => {
          const isMine = m.senderId === currentUserId;
          return (
            <div key={m.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  isMine ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-900"
                }`}
              >
                <p className={`mb-0.5 text-xs font-semibold ${isMine ? "text-blue-100" : "text-slate-500"}`}>
                  {isMine ? "" : m.senderRole === "ADMIN" ? "Support Team" : m.senderName}
                </p>
                <p className="whitespace-pre-wrap break-words">{m.body}</p>
                <p className={`mt-1 text-[11px] ${isMine ? "text-blue-100" : "text-slate-400"}`}>
                  {formatTime(m.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {disabled ? (
        <div className="border-t border-slate-200 p-4 text-center text-sm text-slate-500">{disabledNote}</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-slate-200 p-3">
          <textarea
            className="input min-h-[44px] flex-1 resize-none"
            rows={1}
            placeholder={placeholder}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            disabled={sending}
          />
          <button
            type="submit"
            disabled={sending || !draft.trim()}
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {sending ? sendingLabel : sendLabel}
          </button>
        </form>
      )}
    </div>
  );
}

function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
