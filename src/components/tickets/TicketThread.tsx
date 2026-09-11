"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MAX_TICKET_ATTACHMENTS, processImageFiles } from "@/lib/tickets/attachments-client";

export type TicketThreadMessage = {
  id: string;
  body: string;
  attachments: string[];
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
  onSend: (body: string, attachments: string[]) => Promise<boolean>;
  disabled?: boolean;
  disabledNote?: string;
  placeholder: string;
  sendLabel: string;
  sendingLabel: string;
}) {
  const [draft, setDraft] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [attachError, setAttachError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length]);

  async function handleFilesSelected(files: FileList | null) {
    if (!files || files.length === 0) return;
    const { accepted, rejected } = await processImageFiles(files, MAX_TICKET_ATTACHMENTS - attachments.length);
    if (accepted.length > 0) setAttachments((prev) => [...prev, ...accepted]);
    setAttachError(rejected.length > 0 ? rejected[0] : null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if ((!body && attachments.length === 0) || sending) return;

    setSending(true);
    const ok = await onSend(body, attachments);
    setSending(false);
    if (ok) {
      setDraft("");
      setAttachments([]);
      setAttachError(null);
    }
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
                {m.body && <p className="whitespace-pre-wrap break-words">{m.body}</p>}
                {m.attachments.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.attachments.map((src, i) => (
                      <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt="Attachment"
                          className="h-24 w-24 rounded-lg border border-black/10 object-cover"
                        />
                      </a>
                    ))}
                  </div>
                )}
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
        <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3">
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
          {attachError && <p className="mb-2 text-xs text-red-600">{attachError}</p>}
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={sending || attachments.length >= MAX_TICKET_ATTACHMENTS}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Attach image"
              title="Attach image"
            >
              📎
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleFilesSelected(e.target.files)}
            />
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
              disabled={sending || (!draft.trim() && attachments.length === 0)}
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? sendingLabel : sendLabel}
            </button>
          </div>
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
