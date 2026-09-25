import { Parallax } from "@/components/ui/parallax";
import { ResponsiveArt } from "@/components/ui/responsive-art";
import { WELCOME_PARAGRAPHS, WELCOME_TITLE } from "@/constants/about";

import { AboutStars } from "./about-stars";
import { HackathonFaq } from "./hackathon-faq";
import { MOON_BEAR_VIEWBOX } from "./moon-bear-art";
import { MoonBearFigure } from "./moon-bear-figure";

// Sections are not stacking contexts, so these z-indexes order against the
// hero's layers too: its sparkles (z-10) and house (z-20) overhang into here.
// Copy sits at z-30 above them; the moon bear (z-10) still clears the
// tall-clouds section's background below.
export const DesktopAbout = () => (
  <div className="relative bg-linear-to-b from-[#0C1637] to-[#12204D]">
    {/* Welcome to HackCamp. Below xl the 1200px box would run off the right
        edge, so it spans the window instead, the copy still in the right half. */}
    <div className="relative z-30 h-150 mx-auto w-300 mr-[10%] items-center grid grid-cols-2 text-white gap-20 max-xl:w-auto max-xl:mx-6 max-xl:gap-10">
      <div />
      <div>
        <h2 className="font-title text-6xl">{WELCOME_TITLE}</h2>
        {WELCOME_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "text-[20px]" : "pt-6 text-[20px]"}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>

    {/* What is a hackathon */}
    <div className="relative w-full aspect-[2.100228245]">
      {/* Illustration: the night scene as a raster, with its stars and the
          moon and bear drawn live on top of it so they can move. The overlay is
          sized like the image (full width, its own aspect) rather than to
          this box, whose aspect is not the art's. */}
      <Parallax speed={0.15} className="absolute z-10 w-full h-full">
        <ResponsiveArt
          base="/assets/about/moon-bear"
          widths={[1000, 1531, 2400, 3062]}
          width={1531}
          height={768}
          sizes="100vw"
          media="(min-width: 768px)"
          className="block w-full h-auto"
        />
        <AboutStars
          viewBox={MOON_BEAR_VIEWBOX}
          className="absolute top-0 left-0 w-full aspect-[1531/768]"
        />
        <MoonBearFigure className="absolute top-0 left-0 w-full h-auto" />
      </Parallax>

      {/* Content. The layer covers the whole illustration, so it lets clicks
          through to the moon and bear except where the copy itself is. */}
      <div className="pointer-events-none relative z-30 h-full top-0 left-0 text-[20px]">
        <div className="h-full mx-auto w-300 items-center grid grid-cols-2 text-white gap-20 max-xl:w-full max-xl:px-6 max-xl:gap-10">
          <HackathonFaq className="pointer-events-auto flex flex-col justify-center h-full" />
          <div />
        </div>
      </div>
    </div>
  </div>
);
