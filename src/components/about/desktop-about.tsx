import { WELCOME_PARAGRAPHS, WELCOME_TITLE } from "@/constants/about";

import { HackathonFaq } from "./hackathon-faq";
import { MoonBear } from "./moon-bear";

export const DesktopAbout = () => (
  <div className="relative bg-linear-to-b from-[#0C1637] to-[#12204D]">
    {/* Welcome to HackCamp */}
    <div className="h-150 mx-auto w-300 items-center grid grid-cols-2 text-white gap-20">
      <div />
      <div>
        <h2 className="font-title text-6xl">{WELCOME_TITLE}</h2>
        {WELCOME_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "text-lg" : "pt-6 text-lg"}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>

    {/* What is a hackathon */}
    <div className="relative w-full aspect-[2.100228245]">
      {/* Illustration */}
      <div className="absolute z-0 w-full h-full">
        <MoonBear />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full top-0 left-0">
        <div className="h-full mx-auto w-300 items-center grid grid-cols-2 text-white gap-20">
          <HackathonFaq className="flex flex-col justify-center h-full" />
          <div />
        </div>
      </div>
    </div>
  </div>
);
