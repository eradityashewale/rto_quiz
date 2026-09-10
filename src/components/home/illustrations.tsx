export function LicenseCardIllustration() {
  return (
    <div className="relative mx-auto h-full w-full max-w-sm">
      <div className="absolute -right-8 -top-10 h-56 w-56 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="absolute -bottom-10 -left-8 h-56 w-56 rounded-full bg-blue-300/50 blur-3xl" />

      <div className="relative rotate-[-4deg] rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
            Driving Licence
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            ✓
          </span>
        </div>

        <div className="mt-4 flex gap-4">
          <div className="h-16 w-14 shrink-0 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-2.5 w-3/4 rounded-full bg-slate-200" />
            <div className="h-2.5 w-1/2 rounded-full bg-slate-200" />
            <div className="h-2.5 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2">
          <span className="text-sm">✅</span>
          <span className="text-xs font-semibold text-green-700">
            Verified &amp; Ready
          </span>
        </div>
      </div>

      <div className="absolute -left-4 top-4 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-slate-100 sm:-left-8">
        <span className="text-lg">⭐</span>
        <div>
          <p className="text-sm font-bold text-slate-900">4.8/5</p>
          <p className="text-[10px] text-slate-500">Rating</p>
        </div>
      </div>

      <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-slate-100 sm:-right-6">
        <span className="text-lg">🎉</span>
        <div>
          <p className="text-sm font-bold text-slate-900">10,000+</p>
          <p className="text-[10px] text-slate-500">Passed</p>
        </div>
      </div>
    </div>
  );
}

export function TrophyIllustration() {
  return (
    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-lg" />
      <span className="relative text-4xl sm:text-5xl">🏆</span>
    </div>
  );
}

const CONFETTI_DOTS = [
  { top: "12%", left: "6%", size: "text-2xl", emoji: "🎉" },
  { top: "70%", left: "4%", size: "text-xl", emoji: "⭐" },
  { top: "20%", left: "92%", size: "text-2xl", emoji: "✨" },
  { top: "78%", left: "90%", size: "text-xl", emoji: "🎊" },
  { top: "45%", left: "50%", size: "text-lg", emoji: "⭐" },
];

export function ConfettiDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-80">
      {CONFETTI_DOTS.map((dot, i) => (
        <span
          key={i}
          className={`absolute ${dot.size}`}
          style={{ top: dot.top, left: dot.left }}
        >
          {dot.emoji}
        </span>
      ))}
    </div>
  );
}
