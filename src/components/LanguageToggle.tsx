"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-medium">
      <button
        type="button"
        onClick={() => setLocale("mr")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          locale === "mr"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-pressed={locale === "mr"}
      >
        मराठी
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-pressed={locale === "en"}
      >
        English
      </button>
    </div>
  );
}
