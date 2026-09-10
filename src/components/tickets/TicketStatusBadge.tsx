import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TicketStatusBadge({ status }: { status: "OPEN" | "ANSWERED" | "CLOSED" }) {
  const { t } = useLanguage();

  const styles: Record<string, string> = {
    OPEN: "bg-amber-100 text-amber-700",
    ANSWERED: "bg-green-100 text-green-700",
    CLOSED: "bg-slate-100 text-slate-600",
  };

  const labels: Record<string, string> = {
    OPEN: t.tickets.statusOpen,
    ANSWERED: t.tickets.statusAnswered,
    CLOSED: t.tickets.statusClosed,
  };

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
