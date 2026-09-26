import {
  BUILD_DAY,
  EVENTS_DESCRIPTION,
  EVENTS_TITLE,
  LEARN_WEEK,
} from "@/constants/events";

import Image from "next/image";

import { SheepLeft } from "./sheep-left";
import { SheepRight } from "./sheep-right";

// TODO(mobile): swap the scaled desktop sparkles for a mobile export
export const MobileEvents = () => (
  <div className="relative overflow-x-clip text-white">
    <div className="relative z-10 px-6 pt-20">
      <h2 className="font-title text-4xl">{EVENTS_TITLE}</h2>
      <p className="pt-4 text-base">{EVENTS_DESCRIPTION}</p>
    </div>

    <div className="relative">
      <Image
        src="/assets/events/desktop-sparkles.svg"
        alt=""
        width={1531}
        height={983}
        className="pointer-events-none absolute top-0 left-1/2 z-0 w-[220%] max-w-none h-auto -translate-x-1/2"
      />

      <div className="relative z-10 flex flex-col pt-10 -mb-[4%]">
        {/* any wider and their legs get cut off */}
        <div className="w-full">
          <SheepRight {...LEARN_WEEK} idPrefix="m-sheep-right" />
        </div>
        <div className="w-full -mt-[14%]">
          <SheepLeft {...BUILD_DAY} idPrefix="m-sheep-left" />
        </div>
      </div>
    </div>
  </div>
);
