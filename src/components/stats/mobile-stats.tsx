import { STATS, STATS_TITLE } from "@/constants/stats";

import Image from "next/image";

import { StarCenter } from "./star-center";
import { StarLeft } from "./star-left";
import { StarRight } from "./star-right";

const [hackers, projects, mentors] = STATS;

export const MobileStats = () => (
  <div className="relative overflow-x-clip text-white">
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
        className="pointer-events-none absolute top-[8%] left-0 z-0 w-full h-auto"
      />
      <Image
        src="/assets/stats/desktop-small-stars.svg"
        alt=""
        width={1172}
        height={389}
        className="pointer-events-none absolute bottom-[4%] left-0 z-0 w-full h-auto -scale-x-100"
      />
      <div className="relative z-10 flex flex-col">
        <div className="w-[72%] -ml-[4%]">
          <StarLeft {...hackers} idPrefix="m-star-left" />
        </div>
        <div className="w-[68%] self-end -mr-[4%] -mt-[40%]">
          <StarCenter {...projects} idPrefix="m-star-center" />
        </div>
        <div className="w-[72%] -ml-[6%] -mt-[40%]">
          <StarRight {...mentors} idPrefix="m-star-right" />
        </div>
      </div>
    </div>
  </div>
);
