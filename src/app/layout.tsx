import type { Metadata } from "next";
import { Hanken_Grotesk, Knewave } from "next/font/google";

import "./globals.css";

/*
 * The design is set in HK Grotesk, which isn't on Google Fonts; Hanken
 * Grotesk is its open-source successor and matches it at these sizes.
 */
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-knewave",
});

const siteUrl = "https://nwhacks.io";
const title = "nwHacks 2027";
const metaDescription =
  "nwHacks is Western Canada's largest hackathon. Join us in person on January 16-17, 2027 at the UBC Life Sciences Institute for a weekend of creativity, community, and innovation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: metaDescription,
  openGraph: {
    title,
    description: metaDescription,
    url: siteUrl,
    siteName: "nwHacks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: metaDescription,
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
      className={`${hankenGrotesk.variable} ${knewave.variable} antialiased`}
    >
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
}
