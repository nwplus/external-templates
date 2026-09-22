import { ResponsiveArt } from "@/components/ui/responsive-art";
import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { CtaLink } from "./cta-link";
import { MobileHouse } from "./house-light";

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
      <div className="absolute -top-[30%] left-1/2 w-[200%] -translate-x-1/2">
        <ResponsiveArt
          base="/assets/hero/desktop-sparkles"
          widths={[1024, 1400, 1687, 2560, 3374]}
          width={1687}
          height={1154}
          sizes="120vw"
          media="(max-width: 767px)"
          priority
          className="block w-full max-w-none h-auto"
        />
      </div>
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

    {/* House with the countdown sitting in its spotlight beam; a tap switches the lamp */}
    <MobileHouse />
  </div>
);
