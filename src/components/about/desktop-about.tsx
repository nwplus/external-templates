import { Parallax } from "@/components/ui/parallax";
import { ResponsiveArt } from "@/components/ui/responsive-art";
import { WELCOME_PARAGRAPHS, WELCOME_TITLE } from "@/constants/about";

import { HackathonFaq } from "./hackathon-faq";

// Sections are not stacking contexts, so these z-indexes order against the
// hero's layers too: its sparkles (z-10) and house (z-20) overhang into here.
// Copy sits at z-30 above them; the moon bear (z-10) still clears the
// tall-clouds section's background below.
export const DesktopAbout = () => (
  <div className="relative bg-linear-to-b from-[#0C1637] to-[#12204D]">
    {/* Welcome to HackCamp */}
    <div className="relative z-30 h-150 mx-auto w-300 mr-[10%] items-center grid grid-cols-2 text-white gap-20">
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
      {/* Illustration */}
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
      </Parallax>

      {/* Content */}
      <div className="relative z-30 h-full top-0 left-0 text-[20px]">
        <div className="h-full mx-auto w-300 items-center grid grid-cols-2 text-white gap-20">
          <HackathonFaq className="flex flex-col justify-center h-full" />
          <div />
        </div>
      </div>
    </div>
  </div>
);
