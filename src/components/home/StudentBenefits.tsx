"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function StudentBenefits() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
        {t.benefits.title}
      </h2>

      <ul className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
        {t.benefits.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
              ✓
            </span>
            <span className="text-sm font-medium text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
