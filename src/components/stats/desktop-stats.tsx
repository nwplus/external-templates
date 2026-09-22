import { Parallax } from "@/components/ui/parallax";
import { STATS, STATS_TITLE } from "@/constants/stats";

import Image from "next/image";

import { StarCenter } from "./star-center";
import { StarLeft } from "./star-left";
import { StarRight } from "./star-right";

const [hackers, projects, mentors] = STATS;

export const DesktopStats = () => (
  <div className="text-white pt-40">
    <h2 className="mx-auto w-300 font-title text-6xl leading-none pb-10">
      {STATS_TITLE}
    </h2>
    <div className="mx-auto w-400">
      <div className="relative -mt-42 w-[86%]">
        <Parallax
          speed={0.2}
          className="absolute z-0 top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
        >
          <Image
            src="/assets/stats/desktop-small-stars.svg"
            alt=""
            width={1172}
            height={389}
            className="block w-full h-auto"
          />
        </Parallax>
        <div className="relative z-10 flex items-end justify-start">
          <Parallax speed={-0.05} className="w-[64%] -mr-[19%]">
            <StarLeft {...hackers} />
          </Parallax>
          <Parallax speed={-0.1} className="w-[58%]">
            <StarCenter {...projects} />
          </Parallax>
          <Parallax speed={-0.05} className="w-[64%] -ml-[16%]">
            <StarRight {...mentors} />
          </Parallax>
        </div>
      </div>
    </div>
  </div>
);
