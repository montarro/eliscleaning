"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Our work" },
  { href: "/#about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
];

export default function Nav({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ink = scrolled ? "text-[#1F2A1C]" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-20 ${
          scrolled
            ? "h-14 bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]"
            : "h-20 bg-transparent"
        }`}
      >
        <a href="/" className={`flex items-center gap-3 no-underline ${ink}`}>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              scrolled ? "border-[#1F2A1C]/40" : "border-white/70"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l9-7 9 7"></path>
              <path d="M5 10v10h14V10"></path>
              <path d="M10 20v-6h4v6"></path>
            </svg>
          </span>
          <span className="font-serif text-base sm:text-lg">Eli&apos;s Cleaning and Lawn Services</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`no-underline hover:opacity-80 ${ink}`}>
              {l.label}
            </a>
          ))}
          <a href={`tel:${phone}`} className={`font-semibold no-underline hover:opacity-80 ${ink}`}>
            {phone}
          </a>
          <a
            href="/quote"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold no-underline hover:opacity-90 ${
              scrolled ? "bg-[#1F2A1C] text-white" : "bg-white text-[#1F2A1C]"
            }`}
          >
            Get a free quote
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${phone}`}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold no-underline ${
              scrolled ? "bg-[#1F2A1C] text-white" : "bg-white text-[#1F2A1C]"
            }`}
          >
            Call
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              scrolled ? "border-[#1F2A1C]/40 text-[#1F2A1C]" : "border-white/70 text-white"
            }`}
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
            className="absolute left-4 right-4 top-full mt-1 flex flex-col gap-1 rounded-2xl bg-[#1F2A1C] p-4 shadow-xl lg:hidden"
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
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-white px-4 py-3 text-center font-semibold text-[#1F2A1C] no-underline"
            >
              Get a free quote
            </a>
          </div>
        )}
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
