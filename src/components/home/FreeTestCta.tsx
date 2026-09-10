"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FreeTestCta() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {t.freeTest.title}
          </h2>
          <p className="mt-2 max-w-md text-slate-600">
            {t.freeTest.description}
          </p>
        </div>
        <Link
          href="/quiz/daily-free"
          className="shrink-0 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          {t.freeTest.cta}
        </Link>
      </div>
    </section>
  );
}
