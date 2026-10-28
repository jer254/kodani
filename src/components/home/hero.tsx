"use client";

import { useState } from "react";
import { MotionConfig, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const subjects = [
  { name: "English", score: "82", level: "EE" },
  { name: "Kiswahili", score: "74", level: "ME" },
  { name: "Mathematics", score: "68", level: "ME" },
  { name: "Integrated Science", score: "59", level: "AE" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** Handwriting that is "written on" from left to right. */
function Written({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <motion.span
      className={`hand inline-block whitespace-nowrap ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

function ReportSheet() {
  const t0 = 0.9;
  return (
    <div className="paper paper-margin relative w-full max-w-[440px] rounded-sm pb-24 pl-[3.75rem] pr-4 sm:pl-[4.5rem] sm:pr-6 pt-7 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      {/* tape */}
      <div className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-2 bg-accent/70" aria-hidden="true" />

      <p className="flex h-7 items-center text-lg font-extrabold leading-none">Sample Academy</p>
      <p className="flex h-7 items-center text-sm font-medium leading-none">Learner progress report, Term 2</p>
      <p className="flex h-7 items-center gap-2 text-sm leading-none">
        Name <Written delay={0.5} className="text-[22px] leading-none sm:text-2xl">Amani W.</Written>
      </p>
      <p className="flex h-7 items-center gap-2 text-sm leading-none">
        Class <Written delay={0.7} className="text-[22px] leading-none sm:text-2xl">Grade 7 Hawk</Written>
      </p>

      <div className="grid h-7 grid-cols-[1fr_3rem_3rem] items-center text-sm font-semibold leading-none">
        <span>Subject</span>
        <span>Score</span>
        <span>Level</span>
      </div>
      {subjects.map((s, i) => (
        <div key={s.name} className="grid h-7 grid-cols-[1fr_3rem_3rem] items-center text-sm leading-none">
          <span>{s.name}</span>
          <Written delay={t0 + i * 0.25} className="text-[22px] leading-none sm:text-2xl">{s.score}</Written>
          <Written delay={t0 + i * 0.25 + 0.12} className="text-[22px] leading-none sm:text-2xl">{s.level}</Written>
        </div>
      ))}
      <p className="flex h-7 items-center gap-2 text-sm font-semibold leading-none">
        Mean <Written delay={t0 + 1.1} className="text-[22px] leading-none sm:text-2xl">70.8</Written>
        <span className="ml-3">Position</span>
        <Written delay={t0 + 1.25} className="text-[22px] leading-none sm:text-2xl">4 of 38</Written>
      </p>

      <p className="flex h-7 items-center text-sm font-semibold leading-none">Class teacher&apos;s comment</p>
      <p className="flex h-7 items-center"><Written delay={t0 + 1.6} className="text-[19px] leading-none sm:text-[22px]">Amani has worked hard this term.</Written></p>
      <p className="flex h-7 items-center"><Written delay={t0 + 2.1} className="text-[19px] leading-none sm:text-[22px]">Keep reading widely!</Written></p>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 select-none rounded-md border-[3px] border-stamp px-3 py-1 text-center font-extrabold leading-tight tracking-wider text-stamp mix-blend-multiply"
        initial={{ opacity: 0, scale: 2.6, rotate: -2 }}
        animate={{ opacity: 0.92, scale: 1, rotate: -13 }}
        transition={{ type: "spring", stiffness: 420, damping: 20, delay: t0 + 2.9 }}
      >
        <span className="block text-2xl">PUBLISHED</span>
        <span className="block text-xs font-bold">Term 2 results</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const [run, setRun] = useState(0);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 70, damping: 16 });
  const sy = useSpring(py, { stiffness: 70, damping: 16 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        className="relative overflow-hidden"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width - 0.5);
          py.set((e.clientY - r.top) / r.height - 0.5);
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-8">
          <div className="min-w-0 lg:col-span-7">
            <h1 className="text-[3.25rem] font-extrabold leading-[0.92] tracking-tighter sm:text-7xl xl:text-[6.5rem]">
              {["Every learner.", "Every shilling.", "Every record."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.15, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-chalk-dim">
              Kodani Tech Solutions builds software for institutions that keep records that matter. Our first
              product, KodaniSIS, runs a Kenyan school from admission to graduation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contact"
                className="focus-ring rounded-full bg-accent px-8 py-3.5 text-lg font-bold text-ink transition-transform hover:-rotate-2"
              >
                Request a demo
              </a>
              <a href="#products" className="focus-ring rounded text-lg font-semibold underline decoration-accent decoration-2 underline-offset-8">
                See what KodaniSIS does
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-center lg:col-span-5">
            <motion.div style={{ rotateX, rotateY, rotate: -2, transformPerspective: 1200 }} className="w-full max-w-[440px]">
              <ReportSheet key={run} />
            </motion.div>
            <div className="mt-5 flex items-center gap-4 text-sm text-chalk-dim">
              <span className="hand !text-chalk-dim text-xl">A sample report. Not a real learner.</span>
              <button
                type="button"
                onClick={() => setRun((n) => n + 1)}
                className="focus-ring rounded-full border border-chalk/30 px-3 py-1 font-medium hover:bg-chalk/10"
              >
                Stamp again
              </button>
            </div>
          </div>
        </div>

        {/* Chalk ledge */}
        <div className="relative h-4 bg-gradient-to-b from-[#8a6440] to-wood shadow-[0_10px_20px_rgba(0,0,0,0.45)]" aria-hidden="true">
          <div className="absolute -top-2 left-[12%] h-2.5 w-14 rotate-[-4deg] rounded-sm bg-chalk" />
          <div className="absolute -top-2 left-[12%] ml-20 h-2 w-9 rotate-[3deg] rounded-sm bg-chalk/80" />
          <div className="absolute -top-4 right-[10%] h-4 w-20 rounded-sm bg-[#2b3236]">
            <div className="absolute inset-x-0 bottom-0 h-1.5 rounded-b-sm bg-[#d0b86a]" />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
