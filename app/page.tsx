import Image from "next/image";
import Nav from "@/components/Nav";
import QuoteForm from "@/components/QuoteForm";
import FadeUp from "@/components/FadeUp";

const PHONE = "[PHONE]";
const EMAIL = "[EMAIL]";
const ABN = "[ABN]";

const trustBadges = [
  {
    icon: <path d="M3 11l9-7 9 7M5 10v10h14V10" />,
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

const h2 = "m-0 font-serif text-3xl font-light leading-[1.05] sm:text-4xl lg:text-[52px]";
const workSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

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

            <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 pb-28 pt-6 text-center sm:px-8 sm:pb-44 sm:pt-10 lg:px-20 lg:pb-52 lg:pt-14">
              <h1 className="m-0 max-w-3xl font-serif text-[40px] font-light leading-[1.05] text-white sm:text-5xl lg:text-[68px] lg:leading-[1.02]">
                Clean spaces and tidy yards,{" "}
                <span className="italic">looked after by a local family.</span>
              </h1>
              <p className="m-0 max-w-lg text-base leading-relaxed text-[#EDEFE8] sm:text-lg">
                Reliable, detail-driven cleaning and lawn care at fair prices, for homes,
                rentals, offices and outdoor spaces.
              </p>
              <div className="mt-1 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2.5 pl-2.5 pr-5 text-left">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#DDE6D0] text-[13px] font-semibold text-[#1F2A1C]">
                  KA
                </span>
                <span className="text-[13px] text-white sm:text-[15px]">
                  &ldquo;Alda was friendly, professional and did a fantastic job.&rdquo;{" "}
                  <span className="text-[#D9E3CC]">Kirty, Mooroolbark · 10/10</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-[1440px] flex-col">
          {/* QUOTE BAR */}
          <section
            id="quote"
            className="relative mx-4 -mt-10 flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-[0_30px_60px_rgba(20,26,18,0.18)] sm:mx-8 sm:-mt-24 sm:p-7 lg:mx-20 lg:-mt-[120px]"
          >
            <QuoteForm />
            <div className="grid grid-cols-1 gap-3 border-t border-[#ECE8DE] pt-4 text-sm font-medium text-[#3D3F38] sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((b) => (
                <span key={b.label} className="flex items-center gap-2.5">
                  <svg
                    width="18"
                    height="18"
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
            <section className="flex flex-col gap-6 px-5 py-14 sm:px-8 sm:py-20 lg:flex-row lg:gap-16 lg:px-20 lg:pb-20 lg:pt-24">
              <p className="m-0 font-serif text-[26px] font-light leading-[1.25] text-[#1F211C] sm:text-3xl lg:flex-1 lg:text-[38px]">
                Quality work, honest service, and a fresh, organised home or yard{" "}
                <span className="italic text-[#4E6B3F]">every single time.</span>
              </p>
            </section>
          </FadeUp>

          {/* SERVICES */}
          <FadeUp className="mx-3 sm:mx-6">
            <section
              id="services"
              className="flex flex-col gap-8 rounded-[32px] bg-[#1F2A1C] px-5 py-14 text-white sm:gap-10 sm:px-8 sm:py-16 lg:px-12 lg:pb-12 lg:pt-20"
            >
              <div className="flex flex-col items-start gap-4 px-1 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:px-4">
                <h2 className={h2}>
                  What we <span className="italic">look after</span>
                </h2>
                <p className="m-0 max-w-sm text-[15px] leading-relaxed text-[#C9D3BE] sm:text-base">
                  One-off or regular, inside or out. Tell us about the space and we&apos;ll
                  suggest the right clean.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <div
                    key={s.n}
                    className="flex min-h-[220px] flex-col gap-4 rounded-3xl bg-[#2A3726] p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:min-h-[250px]"
                  >
                    <span className="font-serif text-base text-[#A9BD95]">{s.n}</span>
                    <h3 className="m-0 font-serif text-[22px] font-normal text-white sm:text-[26px]">
                      {s.title}
                    </h3>
                    <p className="m-0 text-[15px] leading-[1.7] text-[#C9D3BE]">{s.body}</p>
                  </div>
                ))}

                <div className="flex min-h-[220px] flex-col gap-4 rounded-3xl bg-[#2A3726] p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:min-h-[250px]">
                  <span className="font-serif text-base text-[#A9BD95]">04</span>
                  <h3 className="m-0 font-serif text-[22px] font-normal text-white sm:text-[26px]">
                    Outdoor
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.7] text-[#C9D3BE]">
                    Lawn mowing · [OTHER OUTDOOR SERVICES]
                  </p>
                </div>

                <div className="flex min-h-[220px] flex-col gap-4 rounded-3xl bg-[#2A3726] p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:min-h-[250px]">
                  <span className="font-serif text-base text-[#A9BD95]">05</span>
                  <h3 className="m-0 font-serif text-[22px] font-normal text-white sm:text-[26px]">
                    NDIS support
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.7] text-[#C9D3BE]">
                    Domestic assistance for NDIS participants, with the same friendly faces
                    each visit.
                  </p>
                </div>

                <div className="flex min-h-[220px] flex-col justify-between gap-6 rounded-3xl bg-[#DDE6D0] p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:min-h-[250px]">
                  <p className="m-0 font-serif text-[22px] font-light leading-[1.2] text-[#1F2A1C] sm:text-[28px]">
                    Not sure which clean <span className="italic">you need?</span>
                  </p>
                  <a
                    href="/quote"
                    className="self-start rounded-full bg-[#1F2A1C] px-5 py-3 text-sm font-semibold text-white no-underline"
                  >
                    Ask us, we&apos;ll help
                  </a>
                </div>
              </div>
            </section>
          </FadeUp>

          {/* RECENT WORK */}
          <FadeUp>
            <section
              id="work"
              className="flex flex-col gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:gap-10 lg:px-20 lg:py-24"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className={`${h2} text-[#1F211C]`}>
                  Recent <span className="italic text-[#4E6B3F]">work</span>
                </h2>
                <a
                  href="https://instagram.com"
                  className="text-[15px] font-semibold text-[#1F2A1C] no-underline"
                >
                  See more on Instagram →
                </a>
              </div>
              <div className="grid auto-rows-[220px] grid-cols-1 gap-3.5 sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-3">
                <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2] sm:row-span-2">
                  <Image
                    src="/images/bathroom.jpg"
                    alt="Clean bathroom with arched mirrors and double basins"
                    fill
                    sizes={workSizes}
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2]">
                  <Image
                    src="/images/floor.jpg"
                    alt="Polished timber floors after a post-renovation clean"
                    fill
                    sizes={workSizes}
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2] sm:row-span-2">
                  <Image
                    src="/images/bedroom.jpg"
                    alt="Bright bedroom with fresh linen"
                    fill
                    sizes={workSizes}
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-[#E3DED2]">
                  <Image
                    src="/images/bedroom2.jpg"
                    alt="Made bed with folded towels ready for guests"
                    fill
                    sizes={workSizes}
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
              className="flex flex-col gap-8 px-5 pb-14 sm:px-8 sm:pb-20 lg:flex-row lg:items-center lg:gap-20 lg:px-20 lg:pb-24"
            >
              <div className="relative mx-auto h-[380px] w-full max-w-[400px] flex-shrink-0 sm:h-[500px] lg:mx-0 lg:w-[440px]">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[#DCD6C8] text-sm text-[#5B5E55]">
                  [PHOTO OF ALDA]
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5">
                <h2 className={`${h2} text-[#1F211C]`}>
                  Hi, I&apos;m <span className="italic">Alda.</span>
                </h2>
                <p className="m-0 text-base leading-[1.7] text-[#4A4C45] sm:text-[17px]">
                  I started Eli&apos;s Cleaning and Lawn Services in 2019 as a small family
                  business in Melbourne&apos;s west. We keep it simple: quality work, honest
                  service, and a space you&apos;ll love coming home to.
                </p>
                <p className="m-0 text-base leading-[1.7] text-[#4A4C45] sm:text-[17px]">
                  Whether it&apos;s a weekly clean, an end of lease job or the lawn, we fit
                  around your schedule so you can enjoy your space without the stress.
                </p>
                <a
                  href="/quote"
                  className="mt-1 self-start rounded-full bg-[#1F2A1C] px-6 py-3.5 text-[15px] font-semibold text-white no-underline"
                >
                  Book a clean with us
                </a>
              </div>
            </section>
          </FadeUp>
        </div>

        {/* REVIEWS (full-bleed background, capped content) */}
        <FadeUp className="bg-[#E9E4D6]">
          <section
            id="reviews"
            className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:gap-10 lg:px-20 lg:py-24"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <h2 className={`${h2} text-[#1F211C]`}>
                Our clients <span className="italic text-[#4E6B3F]">speak for us</span>
              </h2>
              <span className="flex items-center gap-2 text-sm text-[#5B5E55]">
                <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#FBBC04"
                      aria-hidden="true"
                    >
                      <path d="M12 2l2.95 6.32 6.92.87-5.1 4.78 1.32 6.85L12 17.4l-6.09 3.42 1.32-6.85-5.1-4.78 6.92-.87z" />
                    </svg>
                  ))}
                </span>
                Verified reviews from Google
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r) => (
                <figure
                  key={r.author}
                  className="m-0 flex min-h-[200px] flex-col justify-between gap-6 rounded-3xl bg-white p-6 sm:min-h-[230px]"
                >
                  <blockquote className="m-0 font-serif text-lg leading-[1.4] text-[#1F211C] sm:text-[19px]">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-[13px] text-[#5B5E55]">{r.author}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </FadeUp>

        <div className="mx-auto flex w-full max-w-[1440px] flex-col">
          {/* FINAL CTA */}
          <FadeUp>
            <section className="flex flex-col items-center gap-5 px-5 py-14 text-center sm:px-8 sm:py-20 lg:gap-6 lg:px-20 lg:py-24">
              <h2 className="m-0 max-w-2xl font-serif text-[34px] font-light leading-[1.05] text-[#1F211C] sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
                Ready for a <span className="italic text-[#4E6B3F]">fresh start?</span>
              </h2>
              <p className="m-0 text-base text-[#4A4C45] sm:text-[17px]">
                Free quotes, flexible times, and no pressure.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/quote"
                  className="rounded-full bg-[#1F2A1C] px-7 py-4 text-[15px] font-semibold text-white no-underline sm:text-base"
                >
                  Get a free quote
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-full border border-[#1F2A1C] px-7 py-[15px] text-[15px] font-semibold text-[#1F2A1C] no-underline sm:text-base"
                >
                  Call {PHONE}
                </a>
              </div>
            </section>
          </FadeUp>

          {/* FOOTER */}
          <footer className="mx-3 mb-3 flex flex-col gap-6 rounded-[28px] bg-[#1F2A1C] px-6 py-10 text-sm text-[#C9D3BE] sm:mx-6 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:px-12 sm:py-12">
            <div className="flex flex-col gap-2">
              <span className="font-serif text-xl text-white">
                Eli&apos;s Cleaning and Lawn Services
              </span>
              <span>Family owned in Melbourne&apos;s west since 2019</span>
              <span>
                {EMAIL} · ABN {ABN}
              </span>
            </div>
            <div className="flex flex-wrap gap-5 sm:gap-7">
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
      </div>
    </>
  );
}
