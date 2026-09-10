"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LicenseCardIllustration } from "./illustrations";

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50 to-white">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 sm:text-sm">
            {t.hero.badge}
          </span>

          <h1 className="mx-auto mt-5 max-w-xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:mx-0">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/quiz/daily-free"
              className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md sm:w-auto"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="#packages"
              className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 sm:w-auto"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm py-4 lg:max-w-none">
          <LicenseCardIllustration />
        </div>
      </div>
    </section>
  );
}
