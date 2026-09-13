import { STATS, STATS_TITLE } from "@/constants/stats";

import { DesktopSmallStars } from "./desktop-small-stars";
import { StarCenter } from "./star-center";
import { StarLeft } from "./star-left";
import { StarRight } from "./star-right";

const [hackers, projects, mentors] = STATS;

export const DesktopStats = () => (
  <div className="text-white pt-40">
    <h2 className="mx-auto w-300 font-title text-6xl leading-none pb-10">
      {STATS_TITLE}
    </h2>
    <div className="mx-auto pt-20 w-400">
      <div className="relative -mt-[10vw] w-[86%]">
        {/* Background decal */}
        <div className="absolute z-0 top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none">
          <DesktopSmallStars />
        </div>
        <div className="relative z-10 flex items-end justify-start">
          <div className="w-[64%] -mr-[19%]">
            <StarLeft {...hackers} />
          </div>
          <div className="w-[58%]">
            <StarCenter {...projects} />
          </div>
          <div className="w-[64%] -ml-[16%]">
            <StarRight {...mentors} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
