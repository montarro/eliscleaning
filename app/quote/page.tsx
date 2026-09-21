import type { Metadata } from "next";
import Nav from "@/components/Nav";
import QuoteDetailForm from "@/components/QuoteDetailForm";

const PHONE = "[PHONE]";

export const metadata: Metadata = {
  title: "Get a free quote | Eli's Cleaning and Lawn Services",
  description:
    "Tell us about your home, office or yard and we'll get back to you with a free, no-obligation quote.",
};

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F0E6] font-sans text-[#1F211C]">
      <section className="bg-[#1F2A1C] pb-24 sm:pb-32">
        <Nav phone={PHONE} />
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-5 pt-8 text-center sm:px-8 sm:pt-12 lg:px-20">
          <h1 className="m-0 max-w-2xl font-serif text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-[56px]">
            Get your <span className="italic">free quote</span>
          </h1>
          <p className="m-0 max-w-lg text-base leading-relaxed text-[#EDEFE8] sm:text-lg">
            Tell us a little about the space and what you need. We&apos;ll get back to you
            with a fair price, usually the same day.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="-mt-16 rounded-3xl bg-white p-6 shadow-[0_30px_60px_rgba(20,26,18,0.18)] sm:-mt-20 sm:p-10">
          <QuoteDetailForm />
        </div>
        <p className="mt-6 text-center text-sm text-[#4A4C45]">
          Prefer to chat? Call us on{" "}
          <a href={`tel:${PHONE}`} className="font-semibold text-[#1F2A1C]">
            {PHONE}
          </a>{" "}
          or email us at{" "}
          <a href="mailto:info@eliscleaning.com.au" className="font-semibold text-[#1F2A1C]">
            info@eliscleaning.com.au
          </a>.
        </p>
      </section>
    </div>
  );
}
