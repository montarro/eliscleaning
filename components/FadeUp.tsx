"use client";

import { useEffect, useRef } from "react";

export default function FadeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Content is visible by default so it never depends on JS; only hide
    // elements still below the fold, then reveal them as they scroll in.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("fade-up-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("fade-up-pending");
          entry.target.classList.add("fade-up-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
