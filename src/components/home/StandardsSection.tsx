"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Subject = { id: string; nameMr: string; nameEn: string };
type Standard = { id: string; nameMr: string; nameEn: string; subjects: Subject[] };

export function StandardsSection() {
  const { t, locale } = useLanguage();
  const [standards, setStandards] = useState<Standard[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/standards")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setStandards(data.standards ?? []);
      })
      .catch(() => {
        if (!cancelled) setStandards([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {t.standards.title}
          </h2>
          <p className="mt-2 text-slate-600">{t.standards.subtitle}</p>
        </div>

        {standards !== null && standards.length === 0 && (
          <p className="mt-10 text-center text-slate-500">
            {t.standards.comingSoon}
          </p>
        )}

        {standards !== null && standards.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((std) => (
              <div
                key={std.id}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">
                  {locale === "mr" ? std.nameMr : std.nameEn}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {std.subjects.map((sub) => (
                    <li
                      key={sub.id}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {locale === "mr" ? sub.nameMr : sub.nameEn}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
