"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FreeTestLink } from "@/components/quiz/FreeTestLink";

type ExamCategory = { id: string; code: string; nameMr: string; nameEn: string };

export function ExamCategoriesSection() {
  const { t, locale } = useLanguage();
  const [categories, setCategories] = useState<ExamCategory[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/exam-categories")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setCategories(data.examCategories ?? []);
      })
      .catch(() => {
        if (!cancelled) setCategories([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (categories !== null && categories.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {t.examCategories.title}
        </h2>
        <p className="mt-2 text-slate-600">{t.examCategories.subtitle}</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories?.map((cat) => (
          <FreeTestLink
            key={cat.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-900">
              {locale === "mr" ? cat.nameMr : cat.nameEn}
            </span>
            <span className="ml-3 shrink-0 text-blue-600">→</span>
          </FreeTestLink>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        {t.examCategories.footnote}
      </p>
    </section>
  );
}
