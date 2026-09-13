import {
  BUILD_DAY,
  EVENTS_DESCRIPTION,
  EVENTS_TITLE,
  LEARN_WEEK,
} from "@/constants/events";

import { DesktopSparkles } from "./desktop-sparkles";
import { SheepLeft } from "./sheep-left";
import { SheepRight } from "./sheep-right";

export const DesktopEvents = () => (
  <div className="relative w-full aspect-1531/983">
    {/* Illustration */}
    <div className="absolute z-0 w-full h-full pointer-events-none">
      <DesktopSparkles />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full top-0 left-0">
      <div className="mx-auto w-300 items-end grid grid-cols-2 text-white gap-20 overflow-visible">
        <div className="flex flex-col gap-3">
          {/* Copy */}
          <div className="pt-45">
            <h2 className="font-title text-6xl">{EVENTS_TITLE}</h2>
            <p className="text-lg">{EVENTS_DESCRIPTION}</p>
          </div>

          {/* Sheep */}
          <div className="w-[138%] -ml-[38%]">
            <SheepLeft {...BUILD_DAY} />
          </div>
        </div>
        <div className="w-[138%] -translate-y-46">
          <SheepRight {...LEARN_WEEK} />
        </div>
      </div>
    </div>
  </div>
);
