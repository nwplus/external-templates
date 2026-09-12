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
          <div className="absolute z-0 w-full h-full">
            <MoonBear />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full top-0 left-0">
            <div className="h-full mx-auto w-300 items-center grid grid-cols-2 text-white gap-20">
              {/* Copy */}
              <div className="flex flex-col justify-center h-full">
                <h2 className="font-title text-6xl">
                  What is a hackathon?
                </h2>
                <p>
                  A hackathon is a collaborative, typically multi-day invention marathon where participants come together to ideate, design, and build projects in a limited time frame. It’s a space to learn, experiment, and bring your unique ideas to life, regardless of your experience level.
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="benefits">
                    <AccordionTrigger
                      variant="hero"
                      icon={<AccordionIcon />}
                      className="text-base items-center"
                    >
                      What are the benefits of attending a hackathon?
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Learn new technologies with the help of workshops and mentors</li>
                        <li>Network with like-minded peers and industry recruiters</li>
                        <li>Collect swag, eat free food, engage in fun activities, and make memories to last a lifetime</li>
                        <li>At the end of it all, have your own project to show off and add to your resume!</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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

const AccordionIcon = () => (
  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_g_13622_4603)">
<path d="M1.40797 1.40796L16.408 10.0682L1.40796 18.7285L1.40797 1.40796Z" fill="#60CC90"/>
</g>
<defs>
<filter id="filter0_g_13622_4603" x="6.07967e-06" y="6.07967e-06" width="17.8159" height="20.1365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.14205022156238556 0.14205022156238556" numOctaves="3" seed="2227" />
<feDisplacementMap in="shape" scale="2.8159058094024658" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_13622_4603">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
</defs>
</svg>
)

export default Section2;
