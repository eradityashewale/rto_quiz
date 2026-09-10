"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/quiz/daily-free"
            className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
          >
            {t.hero.primaryCta}
          </Link>
          <Link
            href="#packages"
            className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 sm:w-auto"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
