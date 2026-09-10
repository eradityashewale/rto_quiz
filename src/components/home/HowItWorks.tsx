"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
        {t.howItWorks.title}
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {t.howItWorks.steps.map((step, i) => (
          <div key={step.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {i + 1}
            </div>
            <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
