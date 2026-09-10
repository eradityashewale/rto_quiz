"use client";

// Lightweight client-side "logged in" marker for display purposes only.
// The actual session is an httpOnly JWT cookie (see src/lib/auth/session.ts)
// sent automatically with same-origin requests — this local copy just lets
// the UI remember who last logged in on this device without a round trip.

const STORAGE_KEY = "rto-quiz-user";

export type ClientUser = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
};

export function saveClientUser(user: ClientUser) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch {
    // ignore
  }
}

export function getClientUser(): ClientUser | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ClientUser) : null;
  } catch {
    return null;
  }
}

export function clearClientUser() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
