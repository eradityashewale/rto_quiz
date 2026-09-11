"use client";

// Lightweight client-side "logged in" marker for display purposes only.
// The actual session is an httpOnly JWT cookie (see src/lib/auth/session.ts)
// sent automatically with same-origin requests — this local copy just lets
// the UI remember who last logged in on this device without a round trip.

const STORAGE_KEY = "rto-quiz-user";

// Fired whenever the client-side session copy changes, so mounted components
// (e.g. the Header) can re-sync immediately after a login/logout that happens
// on a different page without waiting for a remount or a hard refresh.
export const AUTH_CHANGED_EVENT = "rto-quiz-auth-changed";

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
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
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
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
  } catch {
    // ignore
  }
}
