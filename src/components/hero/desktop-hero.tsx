import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { Countdown } from "./countdown";
import { CtaLink } from "./cta-link";
import { DesktopBottomClouds } from "./desktop-bottom-clouds";
import { DesktopSparkles } from "./desktop-sparkles";
import { DesktopTopCloudsInner } from "./desktop-top-clouds-inner";
import { DesktopTopCloudsOuter } from "./desktop-top-clouds-outer";

export const DesktopHero = () => (
  <div className="bg-linear-to-b from-[#0B0F27] to-[#0C1637]">
    {/* Hero wrapper */}
    <div className="relative top-0 w-full">
      {/* Sparkles */}
      <div className="absolute -top-30 left-0 w-full z-10">
        <DesktopSparkles />
      </div>

      {/* Top clouds (outer + inner layers) */}
      <div className="absolute top-0 left-0 w-full">
        <DesktopTopCloudsOuter />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <DesktopTopCloudsInner />
      </div>

      {/* Bottom clouds + house with countdown */}
      <div className="absolute w-1/2 -bottom-100 left-0">
        <div className="bottom-0 left-0 absolute w-[120vw] aspect-[1.7]">
          <div className="absolute inset-0 z-10">
            <Image
              src="/assets/hero/house.png"
              alt="House"
              fill
              className="object-contain object-bottom-left"
            />
          </div>
          {/* Locked to the house spotlight; % tracks the house box as the viewport resizes */}
          <div className="absolute left-[54%] top-[37%] z-30 -translate-x-1/2 -translate-y-1/2">
            <Countdown className="text-[6.5vw] text-[#0B1327] [text-shadow:0_0_8px_#FFDA88,0_0_20px_#FFDA88,0_0_40px_#FFDA88]" />
          </div>
        </div>
        <div className="relative z-20 -mb-50">
          <DesktopBottomClouds />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 min-h-screen pt-60 pb-[22vw]">
        <div className="mx-auto w-[80vw] flex flex-col items-center">
          <h1 className="font-title text-9xl uppercase text-white">
            {HERO_TITLE}
          </h1>
          <h3 className="text-white text-2xl">{HERO_TAGLINE}</h3>
          <div className="flex gap-4 items-center pt-8">
            {HERO_CTA_LINKS.map((link) => (
              <CtaLink key={link.label} href={link.href}>
                {link.label}
              </CtaLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
