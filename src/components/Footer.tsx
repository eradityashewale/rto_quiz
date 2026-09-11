"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
                RTO
              </span>
              <span>RTO Quiz</span>
            </div>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600">
              {t.nav.home}
            </Link>
            <Link href="/#packages" className="hover:text-blue-600">
              {t.nav.packages}
            </Link>
            <Link href="/login" className="hover:text-blue-600">
              {t.nav.login}
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {year} RTO Quiz. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
