"use client";

import { SmallStars } from "@/components/stats/small-stars";
import { StarCenter } from "@/components/stats/star-center";
import { StarLeft } from "@/components/stats/star-left";
import { StarRight } from "@/components/stats/star-right";

/**
 * Desktop version of Stats and testimonials page
 */
function StatsTestimonialsDesktop() {
  
  return (
    <div>

      {/* Wrapper */}
      <div className="text-white pt-40">
        <h2 className="mx-auto w-300 font-title text-6xl leading-none pb-10">Last year we had...</h2>
        <div className="mx-auto pt-20 w-400">
          <div className="relative -mt-[10vw] w-[86%]">
            {/* Background decal */}
            <div className="absolute z-0 top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none">
              <SmallStars />
            </div>
            <div className="relative z-10 flex items-end justify-start">
              <div className="w-[64%] -mr-[19%]">
                <StarLeft value="300+" label="Hackers" />
              </div>
              <div className="w-[58%]">
                <StarCenter value="70+" label="Projects" />
              </div>
              <div className="w-[64%] -ml-[16%]">
                <StarRight value="40+" label="Mentors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Page switches between mobile/desktop components to create responsive view
 */
export default function Stats() {
  return (
    <>
      <div className="block md:hidden">
      </div>

      <div className="hidden md:block">
        <StatsTestimonialsDesktop />
      </div>
    </>
  );
}
