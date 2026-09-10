"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {t.ctaBottom.title}
        </h2>
        <p className="mt-2 text-blue-100">{t.ctaBottom.subtitle}</p>
        <Link
          href="/register"
          className="mt-6 inline-block rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
        >
          {t.ctaBottom.cta}
        </Link>
      </div>
    </section>
  );
}
