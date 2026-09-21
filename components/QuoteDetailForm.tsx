"use client";

import { useState } from "react";

const services = [
  "Home cleaning",
  "End of lease / moving",
  "Post-renovation",
  "Office cleaning",
  "Lawn mowing",
  "NDIS support",
  "Something else",
];

const frequencies = ["One-off", "Weekly", "Fortnightly", "Monthly", "Not sure yet"];

const propertyTypes = ["House", "Apartment / unit", "Townhouse", "Office / commercial", "Outdoor only"];

const inputCls =
  "h-12 rounded-2xl border-none bg-[#F2EFE7] px-[18px] text-[15px] font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#4E6B3F]";
const labelCls = "flex flex-col gap-2 text-xs font-semibold text-[#3D3F38]";

export default function QuoteDetailForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("phone")) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex items-center justify-center rounded-3xl bg-[#DDE6D0] px-6 py-14 text-center">
        <p className="m-0 max-w-md font-serif text-2xl font-light leading-snug text-[#1F2A1C]">
          Thanks! We&apos;ve got your details and will be in touch with your free quote shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelCls}>
          Name *
          <input name="name" type="text" required placeholder="Your name" className={inputCls} />
        </label>
        <label className={labelCls}>
          Phone *
          <input name="phone" type="tel" required placeholder="04xx xxx xxx" className={inputCls} />
        </label>
        <label className={labelCls}>
          Email
          <input name="email" type="email" placeholder="you@email.com" className={inputCls} />
        </label>
        <label className={labelCls}>
          Suburb
          <input name="suburb" type="text" placeholder="e.g. Werribee" className={inputCls} />
        </label>
        <label className={labelCls}>
          Service
          <select name="service" className={inputCls}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          Property type
          <select name="propertyType" className={inputCls}>
            {propertyTypes.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          How often?
          <select name="frequency" className={inputCls}>
            {frequencies.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          Preferred date
          <input name="preferredDate" type="date" className={inputCls} />
        </label>
      </div>
      <label className={labelCls}>
        Tell us about the space
        <textarea
          name="details"
          rows={5}
          placeholder="e.g. 3 bedroom house, 2 bathrooms, oven needs a good clean, medium-sized front and back lawn…"
          className="rounded-2xl border-none bg-[#F2EFE7] px-[18px] py-4 text-[15px] font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#4E6B3F]"
        />
      </label>
      <label className={labelCls}>
        Add photos (optional)
        <input
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className="rounded-2xl bg-[#F2EFE7] px-[18px] py-3.5 text-[15px] font-sans text-[#5B5E55] outline-none file:mr-4 file:rounded-full file:border-none file:bg-[#DDE6D0] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#1F2A1C] focus-visible:ring-2 focus-visible:ring-[#4E6B3F]"
        />
        <span className="font-normal text-[#5B5E55]">
          A few photos of the space help us give a more accurate quote.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-[52px] self-center rounded-full bg-[#4E6B3F] px-8 text-base font-semibold text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my free quote"}
      </button>
      {status === "error" && (
        <p className="m-0 text-sm font-medium text-red-700">
          Please add your name and phone number, then try again.
        </p>
      )}
    </form>
  );
}
