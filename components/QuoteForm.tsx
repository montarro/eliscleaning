"use client";

import { useState } from "react";

const services = [
  "Home cleaning",
  "End of lease / moving",
  "Post-renovation",
  "Office cleaning",
  "Lawn mowing",
  "NDIS support",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.phone) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-12 items-center justify-center rounded-2xl bg-[#F2EFE7] px-6 py-6 text-center">
        <p className="m-0 text-base font-medium text-[#1F2A1C]">
          Thanks! We&apos;ve got your details and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <label className="flex flex-1 flex-col gap-2 text-xs font-semibold text-[#3D3F38]">
        Name
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="h-12 rounded-2xl border-none bg-[#F2EFE7] px-[18px] text-[15px] font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#4E6B3F]"
        />
      </label>
      <label className="flex flex-1 flex-col gap-2 text-xs font-semibold text-[#3D3F38]">
        Phone
        <input
          name="phone"
          type="tel"
          required
          placeholder="04xx xxx xxx"
          className="h-12 rounded-2xl border-none bg-[#F2EFE7] px-[18px] text-[15px] font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#4E6B3F]"
        />
      </label>
      <label className="flex flex-1 flex-col gap-2 text-xs font-semibold text-[#3D3F38]">
        Suburb
        <input
          name="suburb"
          type="text"
          placeholder="e.g. Werribee"
          className="h-12 rounded-2xl border-none bg-[#F2EFE7] px-[18px] text-[15px] font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#4E6B3F]"
        />
      </label>
      <label className="flex flex-1 flex-col gap-2 text-xs font-semibold text-[#3D3F38]">
        Service
        <select
          name="service"
          className="h-12 rounded-2xl border-none bg-[#F2EFE7] px-4 text-[15px] font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#4E6B3F]"
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 whitespace-nowrap rounded-full bg-[#4E6B3F] px-8 text-base font-semibold text-white disabled:opacity-60 sm:px-8"
      >
        {status === "sending" ? "Sending…" : (
          <>
            <span className="sm:hidden">Send request</span>
            <span className="hidden sm:inline">Get my quote</span>
          </>
        )}
      </button>
      {status === "error" && (
        <p className="m-0 basis-full text-sm font-medium text-red-700">
          Please add your name and phone number, then try again.
        </p>
      )}
    </form>
  );
}
