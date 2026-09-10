"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ConfettiDecoration } from "./illustrations";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
      <ConfettiDecoration />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {t.ctaBottom.title}
        </h2>
        <p className="mt-2 text-blue-100">{t.ctaBottom.subtitle}</p>
        <Link
          href="/register"
          className="mt-6 inline-block rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md"
        >
          {t.ctaBottom.cta}
        </Link>
        <p className="mt-4 text-xs text-blue-200">{t.ctaBottom.trustLine}</p>
      </div>
    </section>
  );
}
