"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { clearClientUser, getClientUser, saveClientUser, type ClientUser } from "@/lib/auth/client-session";

export function Header() {
  const { t } = useLanguage();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<ClientUser | null>(null);

  useEffect(() => {
    setUser(getClientUser());

    // The local copy is only a display hint — confirm against the server,
    // which identifies the user from the httpOnly JWT cookie on every request.
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) {
          saveClientUser(data.user);
          setUser(data.user);
        } else {
          clearClientUser();
          setUser(null);
        }
      })
      .catch(() => {});
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    clearClientUser();
    setUser(null);
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            RTO
          </span>
          <span className="text-lg">RTO Quiz</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="hover:text-blue-600">
            {t.nav.home}
          </Link>
          <Link href="/#packages" className="hover:text-blue-600">
            {t.nav.packages}
          </Link>
          {user && (
            <Link href="/dashboard" className="hover:text-blue-600">
              {t.nav.dashboard}
            </Link>
          )}
          {user?.role === "ADMIN" && (
            <Link href="/admin" className="hover:text-blue-600">
              Admin
            </Link>
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          {user ? (
            <>
              <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-blue-600">
                {user.name}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                {t.auth.logout}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                {t.nav.login}
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                {t.nav.register}
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <LanguageToggle />
            <Link
              href="/"
              className="text-sm font-medium text-slate-700"
              onClick={() => setOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#packages"
              className="text-sm font-medium text-slate-700"
              onClick={() => setOpen(false)}
            >
              {t.nav.packages}
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.dashboard}
                </Link>
                {user.role === "ADMIN" && (
                  <Link
                    href="/admin"
                    className="text-sm font-medium text-slate-700"
                    onClick={() => setOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  {t.auth.logout}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.register}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
