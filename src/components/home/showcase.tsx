"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

type TabId = "academics" | "finance" | "parents";

const tabs: { id: TabId; label: string; heading: string; points: string[] }[] = [
  {
    id: "academics",
    label: "Academics",
    heading: "From marks to report forms, with every step on record",
    points: [
      "Set your own grading scale and ranking rules.",
      "Results move from draft to approved, published and locked.",
      "Print report forms or save them as PDF.",
    ],
  },
  {
    id: "finance",
    label: "Fees",
    heading: "Fees that always add up",
    points: [
      "Set fee structures once. Invoices are created each term.",
      "Payments are matched to invoices and never overwritten.",
      "A wrong payment is reversed, not edited, and the change is logged.",
    ],
  },
  {
    id: "parents",
    label: "Parents",
    heading: "Parents see their own children, and nothing else",
    points: [
      "Results, fee balances and notices in one place.",
      "Each parent sees only the children linked to their account.",
      "Results can also be sent by SMS.",
    ],
  },
];

const steps = ["Draft", "Submitted", "Reviewed", "Approved", "Published", "Locked"];

function Tick() {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 13l5 5L20 6" />
    </svg>
  );
}

function AcademicsMock() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % (steps.length + 2)), 1300);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="paper paper-margin pb-7 pl-[3.75rem] pr-4 sm:pl-[4.5rem] sm:pr-6 pt-7">
      <p className="flex h-7 items-center text-base font-bold leading-none">Mathematics, Grade 7 Hawk</p>
      <p className="flex h-7 items-center text-sm leading-none">Result status for Term 2</p>
      {steps.map((s, i) => {
        const done = i < active;
        const current = i === active - 1;
        return (
          <div key={s} className="flex h-7 items-center gap-3 text-sm leading-none">
            <span className="flex h-5 w-5 items-center justify-center">
              {done ? <span className={`hand text-2xl leading-none ${current ? "" : "opacity-80"}`}>✓</span> : null}
            </span>
            <span className={done ? "font-semibold" : "text-ink/50"}>{s}</span>
          </div>
        );
      })}
      <p className="flex min-h-14 items-center py-0"><span className="hand text-[22px] leading-7">Once locked, a result changes only with approval and a written reason.</span></p>
    </div>
  );
}

function FinanceMock() {
  const row = (a: string, b: string, bold = false) => (
    <div className={`flex h-7 items-center justify-between text-sm leading-none ${bold ? "font-bold" : ""}`}>
      <span>{a}</span>
      <span className="tabular-nums">{b}</span>
    </div>
  );
  return (
    <div className="paper paper-margin pb-7 pl-[3.75rem] pr-4 sm:pl-[4.5rem] sm:pr-6 pt-7">
      <p className="flex h-7 items-center text-base font-bold leading-none">Invoice for Amani W., Term 2</p>
      {row("Tuition", "38,000")}
      {row("Transport", "8,000")}
      {row("Meals", "6,000")}
      {row("Total invoiced", "52,000", true)}
      <p className="flex h-7 items-center text-sm font-semibold leading-none">Payments received</p>
      {row("12 January", "20,000")}
      {row("3 February", "20,000")}
      <div className="flex h-7 items-center justify-between text-base font-extrabold leading-none">
        <span>Balance</span>
        <span className="tabular-nums text-stamp underline decoration-double underline-offset-4">12,000</span>
      </div>
      <p className="flex min-h-14 items-center py-0"><span className="hand text-[22px] leading-7">The balance is worked out from invoices and payments. Nobody types it in.</span></p>
    </div>
  );
}

function ParentsMock() {
  return (
    <div className="mx-auto w-[270px] rounded-[2.2rem] border-[9px] border-black/80 bg-board-deep p-4 shadow-[0_30px_50px_-20px_rgba(0,0,0,0.7)]">
      <p className="mt-1 text-sm text-chalk-dim">Amani W., Grade 7 Hawk</p>
      <div className="mt-3 rounded-xl bg-paper p-3 text-ink">
        <p className="text-xs font-medium">Fee balance</p>
        <p className="text-2xl font-extrabold tabular-nums">KES 12,000</p>
      </div>
      <div className="mt-3 rounded-xl bg-paper p-3 text-ink">
        <p className="text-xs font-medium">Term 2 results are ready</p>
        <p className="text-sm font-bold">Mean 70.8, position 4 of 38</p>
      </div>
      <div className="mt-3 rounded-xl bg-paper p-3 text-ink">
        <p className="text-xs font-medium">Notice from the school</p>
        <p className="text-sm">Closing day is on Friday.</p>
      </div>
      <p className="hand mt-3 text-center text-lg !text-chalk-dim">Sample data</p>
    </div>
  );
}

export function Showcase() {
  const [tab, setTab] = useState<TabId>("academics");
  const current = tabs.find((t) => t.id === tab)!;

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <div role="tablist" aria-label="What KodaniSIS covers" className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  tab === t.id ? "bg-accent text-ink" : "border border-chalk/30 text-chalk hover:bg-chalk/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <h3 className="mt-8 max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{current.heading}</h3>
          <ul className="mt-6 max-w-lg space-y-4">
            {current.points.map((p) => (
              <li key={p} className="flex gap-3 text-lg leading-7 text-chalk-dim">
                <Tick />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="min-h-[420px] min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 14, rotate: tab === "finance" ? 1.5 : -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: tab === "finance" ? 1 : -1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-md shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              {tab === "academics" ? <AcademicsMock /> : tab === "finance" ? <FinanceMock /> : <ParentsMock />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
