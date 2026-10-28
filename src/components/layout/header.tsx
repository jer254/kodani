"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "SMIS", href: "/#products" },
  { name: "Why Kodani", href: "/#why" },
  { name: "Contact", href: "/#contact" },
];

export function KMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#f3d55b" />
      <path
        d="M21 14v36M21 33l21-19M27 31l17 19"
        fill="none"
        stroke="#12302a"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-chalk/10 bg-board/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <KMark />
          <span className="text-xl font-extrabold tracking-tight">Kodani</span>
        </Link>

        <div className="hidden items-center gap-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-chalk-dim transition-colors hover:text-chalk"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="focus-ring rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition-transform hover:-rotate-2"
          >
            Request a demo
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-chalk/10 bg-board px-6 pb-6 pt-2 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-2 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </Link>
        </div>
      )}
    </header>
  );
}
