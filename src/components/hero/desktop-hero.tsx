import { Parallax } from "@/components/ui/parallax";
import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { ChimneySmoke } from "./chimney-smoke";
import { Countdown } from "./countdown";
import { CtaLink } from "./cta-link";
import { SpotlightGlow } from "./spotlight-glow";

export const DesktopHero = () => (
  <div className="bg-linear-to-b from-[#0B0F27] to-[#0C1637]">
    <div className="relative top-0 w-full">
      <Parallax
        speed={0.25}
        anchor="top"
        className="absolute -top-30 left-0 w-full z-10"
      >
        <Image
          src="/assets/hero/desktop-sparkles.svg"
          alt=""
          width={1687}
          height={1154}
          priority
          className="block w-full h-auto"
        />
      </Parallax>

      {/* Top clouds (outer + inner layers) */}
      <Parallax
        speed={0.1}
        anchor="top"
        className="absolute top-0 left-0 w-full"
      >
        <Image
          src="/assets/hero/desktop-top-clouds-outer.svg"
          alt=""
          width={1531}
          height={612}
          priority
          className="block w-full h-auto"
        />
      </Parallax>
      <Parallax
        speed={0.2}
        anchor="top"
        className="absolute top-0 left-0 w-full"
      >
        <Image
          src="/assets/hero/desktop-top-clouds-inner.svg"
          alt=""
          width={1531}
          height={508}
          priority
          className="block w-full h-auto"
        />
      </Parallax>

      {/*
        Bottom clouds + house with countdown. Each layer scrolls at its own
        speed, faster the closer it is: back clouds, house, front clouds, stars.
      */}
      <div className="absolute w-1/2 -bottom-100 left-0 z-20">
        <Parallax
          speed={-0.08}
          anchor="top"
          className="bottom-0 left-0 absolute w-[120vw] aspect-[1.7]"
        >
          <div className="absolute inset-0 z-10">
            <Image
              src="/assets/hero/house.png"
              alt="House"
              fill
              className="object-contain object-bottom-left"
            />
          </div>
          <ChimneySmoke className="left-[14.8%] top-[31%] z-10 w-[3.5%]" />
          <SpotlightGlow />

          <div className="absolute left-[54%] top-[37%] z-30 -translate-x-1/2 -translate-y-1/2">
            <Countdown className="text-[6.5vw] text-[#0B1327] [text-shadow:0_0_8px_#FFDA88,0_0_20px_#FFDA88,0_0_40px_#FFDA88]" />
          </div>
        </Parallax>
        <div className="relative -mb-50 aspect-[770/572]">
          <Parallax
            speed={-0.04}
            anchor="top"
            className="absolute -z-10 left-[0.13%] top-0 w-[94.416%]"
          >
            <Image
              src="/assets/hero/desktop-bottom-cloud-back.svg"
              alt=""
              width={727}
              height={287}
              className="block w-full h-auto"
            />
          </Parallax>
          <Parallax
            speed={-0.11}
            anchor="top"
            className="absolute z-20 left-[0.195%] top-[15.731%] w-[99.87%]"
          >
            <Image
              src="/assets/hero/desktop-bottom-cloud-front.svg"
              alt=""
              width={769}
              height={419}
              className="block w-full h-auto"
            />
          </Parallax>
          <Parallax
            speed={-0.14}
            anchor="top"
            className="absolute z-40 -left-[6.658%] top-[9.696%] w-[104.286%]"
          >
            <Image
              src="/assets/hero/desktop-bottom-cloud-stars.svg"
              alt=""
              width={803}
              height={516}
              className="block w-full h-auto"
            />
          </Parallax>
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
