import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://eliscleaning.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Eli's Cleaning and Lawn Services | Cleaning and Lawn Care in Melbourne's West",
  description:
    "Reliable, detail-driven cleaning and lawn care at fair prices, for homes, rentals, offices and outdoor spaces. Family owned in Melbourne's west since 2019.",
  openGraph: {
    title: "Eli's Cleaning and Lawn Services",
    description:
      "Reliable, detail-driven cleaning and lawn care at fair prices, for homes, rentals, offices and outdoor spaces.",
    images: ["/images/living.jpg"],
    url: siteUrl,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
