import Image from "next/image";
import Nav from "@/components/Nav";
import QuoteForm from "@/components/QuoteForm";
import FadeUp from "@/components/FadeUp";

const PHONE = "[PHONE]";
const EMAIL = "[EMAIL]";
const ABN = "[ABN]";
const REVIEW_SOURCE = "[REVIEW SOURCE]";

const trustBadges = [
  {
    icon: (
      <path d="M3 11l9-7 9 7M5 10v10h14V10" />
    ),
    label: "Family owned since 2019",
  },
  {
    icon: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    label: "Fully insured",
  },
  {
    icon: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
    label: "NDIS domestic assistance",
  },
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </>
    ),
    label: "Flexible scheduling",
  },
];

const services = [
  {
    n: "01",
    title: "Home cleaning",
    body: "Standard cleaning · Deep clean · General housekeeping · Carpet steam cleaning · Interior and exterior windows",
  },
  {
    n: "02",
    title: "Moving",
    body: "End of lease cleaning · Move-in and move-out cleans · Post-renovation cleaning",
  },
  {
    n: "03",
    title: "Workplace",
    body: "Office and workplace cleaning, scheduled around your hours.",
  },
];

const reviews = [
  {
    quote: "She is amazing and did a thorough job. Very polite and punctual.",
    author: "Jasmine, Werribee · Deep cleaning",
  },
  {
    quote: "They did fantastic job. Very happy with their service.",
    author: "Anoop, Craigieburn · House cleaning",
  },
  {
    quote: "They did a fabulous job.",
    author: "Jodi S, Frankston · House cleaning",
  },
  {
    quote: "Excellent services, highly recommended.",
    author: "Sabeela N · Verified customer",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eli's Cleaning and Lawn Services",
  description:
    "Reliable, detail-driven cleaning and lawn care at fair prices, for homes, rentals, offices and outdoor spaces.",
  telephone: "[PHONE]",
  email: "[EMAIL]",
  address: {
    "@type": "PostalAddress",
    addressRegion: "VIC",
    addressLocality: "[SUBURB]",
    addressCountry: "AU",
  },
  areaServed: "Melbourne's west",
  foundingDate: "2019",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col bg-[#F4F0E6] font-sans text-[#1F211C]">
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-[#1A2016]">
          <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4">
            <div className="relative hidden lg:block">
              <Image src="/images/living.jpg" alt="" fill priority sizes="25vw" className="object-cover" />
            </div>
            <div className="relative">
              <Image
                src="/images/bathroom.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative hidden lg:block">
              <Image src="/images/floor.jpg" alt="" fill priority sizes="25vw" className="object-cover" />
            </div>
            <div className="relative">
              <Image
                src="/images/bedroom.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[rgba(22,28,19,0.62)]" />

          <div className="relative">
            <Nav phone={PHONE} />

            <div className="relative flex flex-col items-center gap-6 px-5 pb-24 pt-8 text-center sm:gap-7 sm:px-8 sm:pb-28 sm:pt-16 lg:px-20 lg:pt-24">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9E3CC] sm:text-sm">
                Family owned · Melbourne&apos;s west · Since 2019
              </div>
              <h1 className="m-0 max-w-4xl font-serif text-[44px] font-light leading-[1.05] text-white sm:text-6xl lg:text-[88px] lg:leading-[1.02]">
                Clean spaces and tidy yards,{" "}
                <span className="italic">looked after by a local family.</span>
              </h1>
              <p className="m-0 max-w-xl text-base leading-relaxed text-[#EDEFE8] sm:text-xl">
                Reliable, detail-driven cleaning and lawn care at fair prices, for homes,
                rentals, offices and outdoor spaces.
              </p>
              <div className="mt-2 flex items-center gap-4 rounded-full border border-white/20 bg-white/10 py-3 pl-3 pr-5 text-left sm:py-3.5 sm:pl-3.5 sm:pr-6">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#DDE6D0] text-sm font-semibold text-[#1F2A1C] sm:h-11 sm:w-11">
                  KA
                </span>
                <span className="text-sm text-white sm:text-base">
                  &ldquo;Alda was friendly, professional and did a fantastic job.&rdquo;{" "}
                  <span className="text-[#D9E3CC]">Kirty, Mooroolbark · 10/10</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE BAR */}
        <section
          id="quote"
          className="relative mx-4 -mt-10 flex flex-col gap-5 rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(20,26,18,0.18)] sm:mx-8 sm:-mt-24 sm:p-9 lg:mx-20 lg:-mt-[150px]"
        >
          <QuoteForm />
          <div className="grid grid-cols-1 gap-4 border-t border-[#ECE8DE] pt-5 text-[15px] font-medium text-[#3D3F38] sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((b) => (
              <span key={b.label} className="flex items-center gap-2.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4E6B3F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {b.icon}
                </svg>
                {b.label}
              </span>
            ))}
          </div>
        </section>

        {/* PROMISE */}
        <FadeUp>
          <section className="flex flex-col gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:flex-row lg:gap-20 lg:px-20 lg:py-[130px] lg:pb-[110px]">
            <div className="flex-shrink-0 text-sm font-semibold uppercase tracking-[0.16em] text-[#4E6B3F] lg:w-[300px] lg:pt-4">
              Our promise
            </div>
            <p className="m-0 font-serif text-3xl font-light leading-[1.25] text-[#1F211C] sm:text-4xl lg:flex-1 lg:text-[46px]">
              Quality work, honest service, and a fresh, organised home or yard{" "}
              <span className="italic text-[#4E6B3F]">every single time.</span>
            </p>
          </section>
        </FadeUp>

        {/* SERVICES */}
        <FadeUp className="mx-3 sm:mx-6">
          <section
            id="services"
            className="flex flex-col gap-10 rounded-[36px] bg-[#1F2A1C] px-5 py-16 text-white sm:gap-14 sm:px-10 sm:py-20 lg:px-14 lg:pt-[100px] lg:pb-16"
          >
            <div className="flex flex-col items-start gap-6 px-1 sm:flex-row sm:items-end sm:justify-between sm:gap-12 sm:px-6">
              <h2 className="m-0 font-serif text-4xl font-light leading-[1.05] sm:text-5xl lg:text-[64px]">
                What we <span className="italic">look after</span>
              </h2>
              <p className="m-0 max-w-md text-base leading-relaxed text-[#C9D3BE] sm:text-[17px]">
                One-off or regular, inside or out. Tell us about the space and we&apos;ll
                suggest the right clean.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.n}
                  className="flex min-h-[260px] flex-col gap-5 rounded-3xl bg-[#2A3726] p-8 sm:min-h-[300px]"
                >
                  <span className="font-serif text-lg text-[#A9BD95]">{s.n}</span>
                  <h3 className="m-0 font-serif text-2xl font-normal text-white sm:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="m-0 text-base leading-[1.75] text-[#C9D3BE]">{s.body}</p>
                </div>
              ))}

              <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-[#2A3726] sm:min-h-[300px]">
                <Image
                  src="/images/lawn.jpg"
                  alt="A mowed backyard lawn"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(22,30,19,0.6)]" />
                <div className="relative flex h-full flex-col gap-5 p-8">
                  <span className="font-serif text-lg text-[#D9E3CC]">04</span>
                  <h3 className="m-0 font-serif text-2xl font-normal text-white sm:text-[32px]">
                    Outdoor
                  </h3>
                  <p className="m-0 text-base leading-[1.75] text-[#EDEFE8]">
                    Lawn mowing · [OTHER OUTDOOR SERVICES]
                  </p>
                </div>
              </div>

              <div className="flex min-h-[260px] flex-col gap-5 rounded-3xl bg-[#2A3726] p-8 sm:min-h-[300px]">
                <span className="font-serif text-lg text-[#A9BD95]">05</span>
                <h3 className="m-0 font-serif text-2xl font-normal text-white sm:text-[32px]">
                  NDIS support
                </h3>
                <p className="m-0 text-base leading-[1.75] text-[#C9D3BE]">
                  Domestic assistance for NDIS participants, with the same friendly faces
                  each visit.
                </p>
              </div>

              <div className="flex min-h-[260px] flex-col justify-between rounded-3xl bg-[#DDE6D0] p-8 sm:min-h-[300px]">
                <p className="m-0 font-serif text-2xl font-light leading-[1.2] text-[#1F2A1C] sm:text-[34px]">
                  Not sure which clean <span className="italic">you need?</span>
                </p>
                <a
                  href="#quote"
                  className="self-start rounded-full bg-[#1F2A1C] px-6 py-3.5 text-sm font-semibold text-white no-underline"
                >
                  Ask us, we&apos;ll help
                </a>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* RECENT WORK */}
        <FadeUp>
          <section id="work" className="flex flex-col gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:gap-12 lg:px-20 lg:py-[130px] lg:pb-[120px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="m-0 font-serif text-4xl font-light leading-[1.05] text-[#1F211C] sm:text-5xl lg:text-[64px]">
                Recent <span className="italic text-[#4E6B3F]">work</span>
              </h2>
              <a
                href="https://instagram.com"
                className="text-base font-semibold text-[#1F2A1C] no-underline"
              >
                See more on Instagram →
              </a>
            </div>
            <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[382px] lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2] sm:row-span-2">
                <Image
                  src="/images/bathroom.jpg"
                  alt="Clean bathroom with arched mirrors and double basins"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2]">
                <Image
                  src="/images/floor.jpg"
                  alt="Polished timber floors after a post-renovation clean"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2] sm:row-span-2">
                <Image
                  src="/images/bedroom.jpg"
                  alt="Bright bedroom with fresh linen"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2]">
                <Image
                  src="/images/bedroom2.jpg"
                  alt="Made bed with folded towels ready for guests"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </FadeUp>

        {/* ABOUT */}
        <FadeUp>
          <section
            id="about"
            className="flex flex-col gap-10 px-5 pb-16 sm:px-8 sm:pb-24 lg:flex-row lg:items-center lg:gap-24 lg:px-20 lg:pb-[130px]"
          >
            <div className="relative mx-auto h-[420px] w-full max-w-[440px] flex-shrink-0 sm:h-[600px] lg:mx-0 lg:w-[520px]">
              <div className="absolute left-0 top-0 flex h-[86%] w-[85%] items-center justify-center rounded-[28px] bg-[#DCD6C8] text-sm text-[#5B5E55]">
                [PHOTO OF ALDA]
              </div>
              <div className="absolute bottom-0 right-0 h-[45%] w-[45%] overflow-hidden rounded-[22px] border-8 border-[#F4F0E6]">
                <Image
                  src="/images/living.jpg"
                  alt="Living room after a clean"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4E6B3F]">
                About us
              </div>
              <h2 className="m-0 font-serif text-4xl font-light leading-[1.05] text-[#1F211C] sm:text-5xl lg:text-[64px]">
                Hi, I&apos;m <span className="italic">Alda.</span>
              </h2>
              <p className="m-0 text-lg leading-[1.7] text-[#4A4C45] sm:text-[19px]">
                I started Eli&apos;s Cleaning and Lawn Services in 2019 as a small family
                business in Melbourne&apos;s west. We keep it simple: quality work, honest
                service, and a space you&apos;ll love coming home to.
              </p>
              <p className="m-0 text-lg leading-[1.7] text-[#4A4C45] sm:text-[19px]">
                Whether it&apos;s a weekly clean, an end of lease job or the lawn, we fit
                around your schedule so you can enjoy your space without the stress.
              </p>
              <a
                href="#quote"
                className="mt-2 self-start rounded-full bg-[#1F2A1C] px-7 py-4 text-base font-semibold text-white no-underline"
              >
                Book a clean with us
              </a>
            </div>
          </section>
        </FadeUp>

        {/* REVIEWS */}
        <FadeUp>
          <section
            id="reviews"
            className="flex flex-col gap-10 bg-[#E9E4D6] px-5 py-16 sm:px-8 sm:py-24 lg:gap-13 lg:px-20 lg:py-[110px]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="m-0 font-serif text-4xl font-light leading-[1.05] text-[#1F211C] sm:text-5xl lg:text-[64px]">
                Kind <span className="italic text-[#4E6B3F]">words</span>
              </h2>
              <span className="text-sm text-[#5B5E55]">
                Verified reviews from {REVIEW_SOURCE}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r) => (
                <figure
                  key={r.author}
                  className="m-0 flex min-h-[240px] flex-col justify-between gap-7 rounded-3xl bg-white p-7 sm:min-h-[280px]"
                >
                  <blockquote className="m-0 font-serif text-xl leading-[1.4] text-[#1F211C]">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm text-[#5B5E55]">{r.author}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* FINAL CTA */}
        <FadeUp>
          <section className="flex flex-col items-center gap-6 px-5 py-16 text-center sm:px-8 sm:py-24 lg:gap-8 lg:px-20 lg:py-[130px]">
            <h2 className="m-0 max-w-3xl font-serif text-4xl font-light leading-[1.05] text-[#1F211C] sm:text-6xl lg:text-[80px] lg:leading-[1.02]">
              Ready for a <span className="italic text-[#4E6B3F]">fresh start?</span>
            </h2>
            <p className="m-0 text-lg text-[#4A4C45] sm:text-[19px]">
              Free quotes, flexible times, and no pressure.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="rounded-full bg-[#1F2A1C] px-8 py-[18px] text-base font-semibold text-white no-underline sm:text-[17px]"
              >
                Get a free quote
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-[#1F2A1C] px-8 py-[17px] text-base font-semibold text-[#1F2A1C] no-underline sm:text-[17px]"
              >
                Call {PHONE}
              </a>
            </div>
          </section>
        </FadeUp>

        {/* FOOTER */}
        <footer className="mx-3 mb-3 flex flex-col gap-8 rounded-[32px] bg-[#1F2A1C] px-6 py-12 text-[15px] text-[#C9D3BE] sm:mx-6 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:px-14 sm:py-14">
          <div className="flex flex-col gap-2.5">
            <span className="font-serif text-2xl text-white">
              Eli&apos;s Cleaning and Lawn Services
            </span>
            <span>Family owned in Melbourne&apos;s west since 2019</span>
            <span>
              {EMAIL} · ABN {ABN}
            </span>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <a href="#services" className="text-white no-underline">
              Services
            </a>
            <a href="#reviews" className="text-white no-underline">
              Reviews
            </a>
            <a href="https://instagram.com" className="text-white no-underline">
              Instagram
            </a>
            <a href="https://facebook.com" className="text-white no-underline">
              Facebook
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
