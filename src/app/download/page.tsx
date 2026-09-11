"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  ANDROID_APK_DOWNLOAD_URL,
  ANDROID_RELEASES_PAGE_URL,
} from "@/lib/appDownload";

export default function DownloadAppPage() {
  const { t } = useLanguage();
  const steps = [t.downloadPage.step1, t.downloadPage.step2, t.downloadPage.step3, t.downloadPage.step4];

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
          RTO
        </span>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t.downloadPage.title}</h1>
        <p className="mt-2 text-slate-600">{t.downloadPage.subtitle}</p>

        <a
          href={ANDROID_APK_DOWNLOAD_URL}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          ⬇ {t.downloadPage.downloadCta}
        </a>
        <p className="mt-2 text-xs text-slate-500">{t.downloadPage.fileNote}</p>

        <a
          href={ANDROID_RELEASES_PAGE_URL}
          className="mt-3 block text-sm font-medium text-blue-600 hover:underline"
        >
          {t.downloadPage.allReleasesCta}
        </a>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">{t.downloadPage.stepsTitle}</h2>
        <ol className="mt-4 space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
