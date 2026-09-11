"use client";

import Link from "next/link";
import { useState, type MouseEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";

const DAILY_FREE_PATH = "/quiz/daily-free";

// The daily-free quiz page also redirects to /register when unauthenticated,
// but that requires a full page load first. Checking auth on click sends
// unregistered visitors straight there instead of flashing the quiz page.
export function FreeTestLink({ children, className }: { children: ReactNode; className?: string }) {
  const router = useRouter();
  const [checking, setChecking] = useState(false);

  async function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (checking) return;
    setChecking(true);
    try {
      const res = await fetch("/api/auth/me");
      router.push(res.ok ? DAILY_FREE_PATH : `/register?redirect=${encodeURIComponent(DAILY_FREE_PATH)}`);
    } catch {
      router.push(DAILY_FREE_PATH);
    } finally {
      setChecking(false);
    }
  }

  return (
    <Link href={DAILY_FREE_PATH} onClick={handleClick} className={className} aria-disabled={checking}>
      {children}
    </Link>
  );
}
