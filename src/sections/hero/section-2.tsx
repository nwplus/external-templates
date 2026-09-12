import { BottomCloudScrim } from "@/components/hero/bottom-cloud-scrim";
import { MoonBear } from "@/components/hero/moon-bear";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import Image from "next/image";

const Section2 = ({ className }: { className?: string }) => {
  return (
    <div className="relative bg-linear-to-b from-[#0C1637] to-[#12204D]">
      <div>
        {/* Welcome to HackCamp */}
        <div className="h-150 mx-auto w-300 items-center grid grid-cols-2 text-white gap-20">
          <div />
          {/* Copy */}
          <div>
            <h2 className="font-title text-6xl">
              Welcome to HackCamp
            </h2>
            <p>
              HackCamp provides a space for hundreds of beginner hackers curious about technology to explore the field further through hands-on learning, regardless of whether you have coding experience or not!
            </p>
            <p className="pt-5">
              Over the past 11 years, HackCamp has revolved around accessibility, inclusivity, and diversity. We strive to help people break into hackathon spaces by providing beginner-oriented workshops, industry connections, encouraging you to bring your unique perspectives and experiences to build your own project.
            </p>
          </div>
        </div>
        {/* What is a hackathon */}
        <div className="relative w-full aspect-[2.1840228245]">
          {/* Illustration */}
          <div className="absolute w-full h-full">
            <MoonBear />
          </div>

          {/* Content */}
          <div className="h-full top-0 left-0">
            <div className="h-full mx-auto w-300 items-center grid grid-cols-2 text-white gap-20">
              {/* Copy */}
              <div className="flex flex-col justify-center h-full">
                <h2 className="font-title text-6xl">
                  What is a hackathon?
                </h2>
                <p>
                  A hackathon is a collaborative, typically multi-day invention marathon where participants come together to ideate, design, and build projects in a limited time frame. It’s a space to learn, experiment, and bring your unique ideas to life, regardless of your experience level.
                </p>
                {/* Accordion (why?) */}
                <div>

                </div>
                <p>
                  To learn more about hackathons and what to expect, check out our article on Medium.
                </p>
              </div>
              {/* Image (right) */}
              <div />
            </div>  
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Section2;
