import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arsenal",
});

const tovariSans = localFont({
  src: "../../public/fonts/TovariSans.ttf",
  weight: "700",
  display: "swap",
  variable: "--font-tovari-sans",
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
    images: [
      {
        url: "/opengraph-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackCamp 2026",
    description: metaDescription,
    images: ["/opengraph-image.jpg"],
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
      className={`${tovariSans.variable} ${arsenal.variable} antialiased`}
    >
      <body className={arsenal.className}>{children}</body>
    </html>
  );
}
