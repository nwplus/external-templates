import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { CtaLink } from "./cta-link";
import { HeroStars } from "./hero-stars";
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
      {/* stars, two viewports wide */}
      <div className="absolute -top-[30%] left-1/2 w-[200%] aspect-[1687/1154] -translate-x-1/2">
        <HeroStars scale={2} />
      </div>
    </div>

    {/* Above the house, whose -mt-14 pulls its art up over the buttons */}
    <div className="relative z-20 flex flex-col items-center px-6 pt-40 text-center">
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
