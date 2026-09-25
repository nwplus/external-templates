import { Parallax } from "@/components/ui/parallax";
import {
  BUILD_DAY,
  EVENTS_DESCRIPTION,
  EVENTS_TITLE,
  LEARN_WEEK,
} from "@/constants/events";

import Image from "next/image";

import { SheepLeft } from "./sheep-left";
import { SheepRight } from "./sheep-right";

// Below xl the copy and sheep outgrow the art's aspect, so the section takes
// their height rather than spilling the sheep over the stats heading.
export const DesktopEvents = () => (
  <div className="relative w-full aspect-1531/983 max-xl:aspect-auto">
    {/* Illustration */}
    <Parallax
      speed={0.2}
      className="absolute z-0 w-full h-full pointer-events-none"
    >
      <Image
        src="/assets/events/desktop-sparkles.svg"
        alt=""
        width={1531}
        height={983}
        className="block w-full h-auto"
      />
    </Parallax>

    {/* Content: 1200px wide, or the window's width below xl */}
    <div className="relative z-10 h-full top-0 left-0 @container">
      <div className="mx-auto w-300 max-xl:w-full max-xl:px-6 items-end grid grid-cols-2 text-white gap-20 overflow-visible">
        <div className="flex flex-col gap-3">
          {/* Copy */}
          <div className="pt-45">
            <h2 className="font-title text-6xl">{EVENTS_TITLE}</h2>
            <p className="text-[20px]">{EVENTS_DESCRIPTION}</p>
          </div>

          {/* capped at the page margin so the legs don't get cut off. cqw not vw
              bc vw counts the scrollbar */}
          <Parallax speed={-0.06}>
            <div className="w-[min(138%,calc(100%+50cqw-600px))] -ml-[min(38%,calc(50cqw-600px))] max-xl:w-[calc(100%+1.5rem)] max-xl:-ml-6">
              <SheepLeft {...BUILD_DAY} />
            </div>
          </Parallax>
        </div>
        {/* same cap, below xl there's no margin so it steps into the column gap */}
        <Parallax speed={-0.12}>
          <div className="w-[min(138%,calc(100%+50cqw-600px))] -translate-y-46 max-xl:-ml-[10%] max-xl:w-[calc(110%+1.5rem)]">
            <SheepRight {...LEARN_WEEK} />
          </div>
        </Parallax>
      </div>
    </div>
  </div>
);
