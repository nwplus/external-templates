import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { ChimneySmoke } from "./chimney-smoke";
import { Countdown } from "./countdown";
import { CtaLink } from "./cta-link";

// TODO(mobile): swap the scaled desktop top clouds / sparkles for mobile exports
export const MobileHero = () => (
  <div className="relative overflow-x-clip bg-linear-to-b from-[#0B0F27] to-[#0C1637] text-white">
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
      <Image
        src="/assets/hero/desktop-sparkles.svg"
        alt=""
        width={1687}
        height={1154}
        priority
        className="absolute -top-10 right-0 w-[200%] max-w-none h-auto -scale-x-100"
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
      <Image
        src="/assets/hero/mobile-house.svg"
        alt="House"
        width={393}
        height={710}
        priority
        className="block w-full h-auto"
      />
      <ChimneySmoke
        className="left-[2%] top-[19%] w-[10%]"
        blurClassName="blur-sm"
      />
      <div className="absolute left-[75%] top-[35%] z-10 -translate-x-1/2 -translate-y-1/2">
        <Countdown
          compact
          className="text-[9vw] text-[#0B1327] [text-shadow:0_0_8px_#FFDA88,0_0_20px_#FFDA88,0_0_40px_#FFDA88]"
        />
      </div>
    </div>
  </div>
);
