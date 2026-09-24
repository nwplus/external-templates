import { Parallax } from "@/components/ui/parallax";
import { ResponsiveArt } from "@/components/ui/responsive-art";
import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import Image from "next/image";

import { CtaLink } from "./cta-link";
import { HeroStars } from "./hero-stars";
import { DesktopHouse } from "./house-light";

export const DesktopHero = () => (
  <div className="bg-linear-to-b from-[#0B0F27] to-[#0C1637]">
    {/* Hero wrapper */}
    <div className="relative top-0 w-full">
      {/* Sparkles: the largest thing painted first, so it is fetched eagerly */}
      <Parallax
        speed={0.25}
        anchor="top"
        className="absolute -top-30 left-0 w-full z-10"
      >
        <ResponsiveArt
          base="/assets/hero/desktop-sparkles"
          widths={[1024, 1400, 1687, 2560, 3374]}
          width={1687}
          height={1154}
          sizes="100vw"
          media="(min-width: 768px)"
          priority
          className="block w-full h-auto"
        />
        {/* The biggest sparkles drift over the rest, placed where they were cut from */}
        <HeroStars />
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
        The offsets are in vw (400px and 200px at 1920) like the art itself, so
        the scene keeps its shape as the window narrows.
      */}
      <div className="absolute w-1/2 -bottom-[20.8333vw] left-0 z-20">
        <Parallax
          speed={-0.08}
          anchor="top"
          className="bottom-0 left-0 absolute w-[120vw] aspect-[1.7]"
        >
          {/* House, glow and countdown: a client island so the lamp can be switched */}
          <DesktopHouse />
        </Parallax>
        {/*
          Cloud layers, placed on the 770x572 canvas the combined art used so the
          house (anchored to this box's bottom) keeps its position. Back sits
          behind the house, front in front of it, stars on top of everything.
        */}
        <div className="relative -mb-[10.4167vw] aspect-[770/572]">
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
            className="pointer-events-none absolute z-20 left-[0.195%] top-[15.731%] w-[99.87%]"
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
            className="pointer-events-none absolute z-40 left-[-6.658%] top-[9.696%] w-[104.286%]"
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

      {/*
        Hero content. The wrapper's box covers the house, so it lets pointer
        events through and only the text block takes them; otherwise the
        house's lamp, windows and door could never be clicked. Its height
        follows the width, as the art does, up to a full screen: a 16:9 window
        is filled, a narrower one doesn't leave the house sinking out of view.
        The bottom padding keeps the countdown, which rides on the house, clear
        of the buttons when the type stops shrinking.
      */}
      <div className="pointer-events-none relative z-20 min-h-[min(100vh,56.25vw)] pt-[clamp(8rem,12.5vw,15rem)] pb-[calc(28vw+2rem)]">
        <div className="pointer-events-auto mx-auto w-[53vw] flex flex-col items-start">
          <h1 className="font-title text-[clamp(4.5rem,8.8542vw,170px)] leading-none uppercase text-white">
            {HERO_TITLE}
          </h1>
          <h3 className="text-white text-[clamp(1.125rem,1.25vw,1.5rem)] leading-[calc(4/3)] -mt-[clamp(0.75rem,1.0417vw,1.25rem)]">
            {HERO_TAGLINE}
          </h3>
          <div className="flex gap-4 items-center pt-8">
            {HERO_CTA_LINKS.map((link) => (
              <CtaLink
                key={link.label}
                href={link.href}
                className="text-[length:clamp(1.125rem,1.25vw,1.5rem)] leading-[calc(4/3)]"
              >
                {link.label}
              </CtaLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
