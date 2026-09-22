import { STATS, STATS_TITLE } from "@/constants/stats";

import Image from "next/image";

import { StarCenter } from "./star-center";
import { StarLeft } from "./star-left";
import { StarRight } from "./star-right";

const [hackers, projects, mentors] = STATS;

export const MobileStats = () => (
  <div className="relative overflow-x-clip text-white pt-20">
    <h2 className="relative z-10 px-6 pt-4 font-title text-4xl leading-none">
      {STATS_TITLE}
    </h2>

    {/* Stars zig-zag down the page: left, right, left, each tucked under the last */}
    <div className="relative -mt-[8%] -mb-[10%]">
      <Image
        src="/assets/stats/desktop-small-stars.svg"
        alt=""
        width={1172}
        height={389}
        className="pointer-events-none absolute top-[20%] left-0 z-0 w-full h-auto scale-300 rotate-90"
      />
      <div className="relative z-10 flex flex-col">
        <div className="w-[118%] -ml-[4%]">
          <StarLeft {...hackers} idPrefix="m-star-left" />
        </div>
        <div className="w-[120%] self-end -mr-[20%] -mt-[60%]">
          <StarCenter {...projects} idPrefix="m-star-center" />
        </div>
        <div className="w-[130%] -ml-[30%] -mt-[60%]">
          <StarRight {...mentors} idPrefix="m-star-right" />
        </div>
      </div>
    </div>
  </div>
);
