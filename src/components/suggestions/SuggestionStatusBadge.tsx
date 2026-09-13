import { useLanguage } from "@/lib/i18n/LanguageContext";

export function SuggestionStatusBadge({ status }: { status: "OPEN" | "REVIEWED" | "CLOSED" }) {
  const { t } = useLanguage();

  const styles: Record<string, string> = {
    OPEN: "bg-amber-100 text-amber-700",
    REVIEWED: "bg-green-100 text-green-700",
    CLOSED: "bg-slate-100 text-slate-600",
  };

  const labels: Record<string, string> = {
    OPEN: t.suggestions.statusOpen,
    REVIEWED: t.suggestions.statusReviewed,
    CLOSED: t.suggestions.statusClosed,
  };

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
