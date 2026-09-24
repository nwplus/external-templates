import { OG_IMAGE } from "@/constants/hero";

import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
  // Nothing on the site sets italic, so the two italic faces are not loaded.
  style: ["normal"],
  variable: "--font-arsenal",
});

const tovariSans = localFont({
  src: "../../public/fonts/TovariSans.woff2",
  weight: "700",
  display: "swap",
  variable: "--font-tovari-sans",
});

const midnightConstellations = localFont({
  src: "../../public/fonts/MidnightConstellations.woff2",
  weight: "700",
  display: "swap",
  variable: "--font-midnight-constellations",
});

const siteUrl = "https://hackcamp.nwplus.io";
const metaDescription =
  "This year, we are bringing you a 2-day in-person event where participants can learn new skills, connect with fellow tech enthusiasts, and build solutions to tackle challenges together.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HackCamp 2026",
  description: metaDescription,
  openGraph: {
    title: "HackCamp 2026",
    description: metaDescription,
    url: siteUrl,
    siteName: "HackCamp",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackCamp 2026",
    description: metaDescription,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tovariSans.variable} ${arsenal.variable} ${midnightConstellations.variable} antialiased`}
    >
      <body className={arsenal.className}>{children}</body>
    </html>
  );
}
