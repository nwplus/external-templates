import { ResponsiveArt } from "@/components/ui/responsive-art";
import { WELCOME_PARAGRAPHS, WELCOME_TITLE } from "@/constants/about";

import Image from "next/image";

import { AboutStars } from "./about-stars";
import { HackathonFaq } from "./hackathon-faq";
import { MoonBearFigure } from "./moon-bear-figure";

// phone art is a crop of the desktop art, same units
const MOBILE_VIEWBOX = "690 -40 900 790";

export const MobileAbout = () => (
  <div className="relative overflow-x-clip bg-linear-to-b from-[#0C1637] to-[#12204D] text-white pt-22">
    {/* Welcome to HackCamp */}
    <div className="relative z-10 px-6 pt-10 pb-15">
      <h2 className="font-title text-4xl">{WELCOME_TITLE}</h2>
      {WELCOME_PARAGRAPHS.map((paragraph, i) => (
        <p key={i} className="pt-4 text-base">
          {paragraph}
        </p>
      ))}
    </div>

    {/* Loose sparkles between the two blocks of copy */}
    <Image
      src="/assets/about/mobile-sparkles.svg"
      alt=""
      width={393}
      height={200}
      className="pointer-events-none block w-full h-auto"
    />

    {/* What is a hackathon */}
    <HackathonFaq className="relative z-10 flex flex-col px-6 [&_h2]:text-4xl [&_p]:text-base [&_li]:text-base" />

    {/* Moon bear on the clouds, leading into the tall-clouds section. The crop keeps
        the moon's glow, so the art has transparent headroom; pull it up to close the gap */}
    <div className="relative -mt-6">
      <ResponsiveArt
        base="/assets/about/mobile-moon-bear"
        widths={[800, 1200, 1600]}
        width={900}
        height={790}
        sizes="100vw"
        media="(max-width: 767px)"
        className="pointer-events-none block w-full h-auto"
      />
      <AboutStars viewBox={MOBILE_VIEWBOX} className="absolute inset-0" />
      <MoonBearFigure
        viewBox={MOBILE_VIEWBOX}
        className="absolute top-0 left-0 w-full"
      />
    </div>
  </div>
);
