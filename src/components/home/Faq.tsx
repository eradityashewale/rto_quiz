"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
        {t.faq.title}
      </h2>

      <div className="mt-8 space-y-3">
        {t.faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="rounded-xl border border-slate-200">
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-900"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                {item.q}
                <span className="ml-4 text-slate-400">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm text-slate-600">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
