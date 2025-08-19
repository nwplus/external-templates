import type { Metadata } from "next";
import { Poor_Story } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const cygre = localFont({
  src: [
    {
      path: "../../public/fonts/cygre/Cygre-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cygre/Cygre-RegularIt.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/cygre/Cygre-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/cygre/Cygre-MediumIt.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/cygre/Cygre-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/cygre/Cygre-SemiBoldIt.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/cygre/Cygre-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/cygre/Cygre-BoldIt.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-cygre",
});

const poorStory = Poor_Story({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poor-story",
});

export const metadata: Metadata = {
  title: "HackCamp 2025",
  description:
    "This year, we are bringing you a 2-day in-person event where participants can learn new skills, connect with fellow tech enthusiasts, and build solutions to tackle challenges together.",
  openGraph: {
    images: ["/hackcamp2023meta.png"],
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
      className={`${poorStory.variable} ${cygre.variable} antialiased`}
    >
      <body className={cygre.className}>{children}</body>
    </html>
  );
}
