import { ResponsiveArt } from "@/components/ui/responsive-art";
import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { Countdown } from "./countdown";
import { CtaLink } from "./cta-link";

// TODO(mobile): swap the scaled desktop top clouds / sparkles for mobile exports
export const MobileHero = () => (
  <div className="relative overflow-x-clip bg-linear-to-b from-[#0B0F27] to-[#0C1637] text-white">
    {/* Top clouds (outer + inner), desktop art shown at 2x so the scallops read at phone width */}
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0">
      <Image
        src="/assets/hero/desktop-top-clouds-outer.svg"
        alt=""
        width={1531}
        height={612}
        priority
        className="absolute top-0 left-1/2 w-[200%] max-w-none h-auto -translate-x-1/2"
      />
      <Image
        src="/assets/hero/desktop-top-clouds-inner.svg"
        alt=""
        width={1531}
        height={508}
        priority
        className="absolute top-0 left-1/2 w-[200%] max-w-none h-auto -translate-x-1/2"
      />
      {/* Laid out at 200vw, but it is soft glows on black: a candidate for a
          little over the viewport width upscales without a visible cost, and
          it is the first big paint on a phone, so the bytes matter. */}
      <ResponsiveArt
        base="/assets/hero/desktop-sparkles"
        widths={[1024, 1400, 1687, 2560, 3374]}
        width={1687}
        height={1154}
        sizes="120vw"
        media="(max-width: 767px)"
        priority
        className="absolute -top-[30%] left-1/2 w-[200%] max-w-none h-auto -translate-x-1/2"
      />
    </div>

    <div className="relative z-10 flex flex-col items-center px-6 pt-40 text-center">
      <h1 className="font-title text-7xl uppercase">{HERO_TITLE}</h1>
      <h3 className="pt-1 text-base">{HERO_TAGLINE}</h3>
      <div className="flex flex-wrap justify-center gap-3 pt-5">
        {HERO_CTA_LINKS.map((link) => (
          <CtaLink
            key={link.label}
            href={link.href}
            className="text-sm px-3 py-2"
          >
            {link.label}
          </CtaLink>
        ))}
      </div>
    </div>

    {/* House with the countdown sitting in its spotlight beam */}
    <div className="relative z-10 -mt-14 -mb-20 w-full">
      <ResponsiveArt
        base="/assets/hero/mobile-house"
        widths={[800, 1200, 1600]}
        width={393}
        height={710}
        sizes="100vw"
        media="(max-width: 767px)"
        priority
        alt="House"
        className="block w-full h-auto"
      />
      {/* % tracks the 393x710 house art; the beam runs from the lamp (~36%, 31%) off the right edge */}
      <div className="absolute left-[75%] top-[35%] z-10 -translate-x-1/2 -translate-y-1/2">
        <Countdown
          compact
          className="text-[9vw] text-[#0B1327] [text-shadow:0_0_8px_#FFDA88,0_0_20px_#FFDA88,0_0_40px_#FFDA88]"
        />
      </div>
    </div>
  </div>
);
