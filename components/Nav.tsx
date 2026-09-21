"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
];

export default function Nav({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 flex h-24 items-center justify-between px-5 sm:px-8 lg:px-20">
      <a href="#top" className="flex items-center gap-3 no-underline">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l9-7 9 7"></path>
            <path d="M5 10v10h14V10"></path>
            <path d="M10 20v-6h4v6"></path>
          </svg>
        </span>
        <span className="font-serif text-lg text-white sm:text-xl">Eli&apos;s Cleaning and Lawn Services</span>
      </a>

      <nav className="hidden items-center gap-8 text-[15px] lg:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-white no-underline hover:opacity-80">
            {l.label}
          </a>
        ))}
        <a href={`tel:${phone}`} className="font-semibold text-white no-underline hover:opacity-80">
          {phone}
        </a>
        <a
          href="#quote"
          className="rounded-full bg-white px-6 py-3 font-semibold text-[#1F2A1C] no-underline hover:opacity-90"
        >
          Get a free quote
        </a>
      </nav>

      <div className="flex items-center gap-3 lg:hidden">
        <a
          href={`tel:${phone}`}
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#1F2A1C] no-underline"
        >
          Call
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-4 right-4 top-20 flex flex-col gap-1 rounded-2xl bg-[#1F2A1C] p-4 shadow-xl lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-white no-underline hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-white px-4 py-3 text-center font-semibold text-[#1F2A1C] no-underline"
          >
            Get a free quote
          </a>
        </div>
      )}
    </header>
  );
}
