"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Day = {
  date: string;
  dayNumber: number;
  isToday: boolean;
  attempted: boolean;
  score: number | null;
};

export default function DailyFreeDayPicker({ activeDate }: { activeDate?: string }) {
  const { t } = useLanguage();
  const [days, setDays] = useState<Day[] | null>(null);

  useEffect(() => {
    fetch("/api/quiz/daily-free/days")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setDays(data?.days ?? null))
      .catch(() => setDays(null));
  }, []);

  if (!days || days.length <= 1) return null;

  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-semibold text-slate-700">{t.quiz.dayPickerTitle}</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {days.map((d) => {
          const isActive = activeDate ? d.date === activeDate : d.isToday;
          const href = d.isToday ? "/quiz/daily-free" : `/quiz/daily-free?date=${d.date}`;
          return (
            <Link
              key={d.date}
              href={href}
              className={`flex shrink-0 flex-col items-center rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : d.attempted
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-slate-200 text-slate-600 hover:border-blue-300"
              }`}
            >
              <span>{d.isToday ? t.quiz.todayLabel : `${t.quiz.dayLabel} ${d.dayNumber}`}</span>
              <span className="mt-0.5 text-[10px] font-normal text-slate-400">
                {new Date(`${d.date}T00:00:00Z`).toLocaleDateString(undefined, {
                  day: "2-digit",
                  month: "short",
                  timeZone: "UTC",
                })}
              </span>
              {d.attempted && (
                <span className="mt-0.5 text-[10px] text-green-600">{Math.round(d.score ?? 0)}%</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
