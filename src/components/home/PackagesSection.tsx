"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { formatPaiseAsRupees } from "@/lib/currency";

type Package = {
  id: string;
  nameMr: string;
  nameEn: string;
  descriptionMr: string | null;
  descriptionEn: string | null;
  testCount: number | null;
  priceInPaise: number;
  discountInPaise: number;
  isPopular: boolean;
  features: string[] | null;
};

export function PackagesSection() {
  const { t, locale } = useLanguage();
  const [packages, setPackages] = useState<Package[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/packages")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setPackages(data.packages ?? []);
      })
      .catch(() => {
        if (!cancelled) setPackages([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {t.packages.title}
        </h2>
        <p className="mt-2 text-slate-600">{t.packages.subtitle}</p>
      </div>

      {packages === null && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-slate-100"
            />
          ))}
        </div>
      )}

      {packages !== null && packages.length === 0 && (
        <p className="mt-10 text-center text-slate-500">
          {t.packages.comingSoon}
        </p>
      )}

      {packages !== null && packages.length > 0 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const finalPrice = pkg.priceInPaise - pkg.discountInPaise;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
                  pkg.isPopular
                    ? "border-blue-600 ring-2 ring-blue-600"
                    : "border-slate-200"
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {t.packages.popularBadge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900">
                  {locale === "mr" ? pkg.nameMr : pkg.nameEn}
                </h3>
                {pkg.testCount && (
                  <p className="mt-1 text-sm text-slate-500">
                    {pkg.testCount} {t.packages.testsLabel}
                  </p>
                )}
                <p className="mt-4 text-sm text-slate-600">
                  {locale === "mr" ? pkg.descriptionMr : pkg.descriptionEn}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {formatPaiseAsRupees(finalPrice)}
                  </span>
                  {pkg.discountInPaise > 0 && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatPaiseAsRupees(pkg.priceInPaise)}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold ${
                    pkg.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {t.packages.buyCta}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
