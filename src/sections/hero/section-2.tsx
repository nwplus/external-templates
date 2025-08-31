import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import Image from "next/image";

const Section2 = ({ className }: { className?: string }) => {
  // Container min-height based on background image aspect ratio (1027÷1260 = 53.5vw)
  return (
    <div className={cn("relative h-[39.5vw]", className)} id="about">
      <div className="absolute inset-0 bg-[url('/assets/hero/background-2.svg')] bg-cover bg-center bg-no-repeat h-[53.5vw]"></div>
      <div className="absolute left-0 top-[6vw] w-[95vw] flex justify-end">
        <Image
          src="/assets/hero/tent-plus-things.png"
          alt="Tent"
          width={800}
          height={400}
          className="w-[55vw] absolute left-0"
        />
        <div className="w-[40vw] flex flex-col gap-[1.2vw] mt-[4vw]">
          <h2 className="text-[3.5vw] font-title leading-none text-shadow-bold">
            What is a Hackathon?
          </h2>
          <div className="flex flex-col gap-[0.4vw] text-[1.2vw]">
            <p>
              A hackathon is a collaborative, typically multi-day invention
              marathon where participants come together to ideate, design, and
              build projects in a limited time frame. It&apos;s a space to
              learn, experiment, and bring your unique ideas to life, regardless
              of your experience level.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[1.2vw]" variant="hero">
                  What are the benefits of attending a hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-[1.0vw] ml-5">
                  <li className="marker:text-[0.8rem]">
                    Learn new technologies with the help of workshops and
                    mentors
                  </li>
                  <li className="marker:text-[0.8rem]">
                    Network with like-minded peers and industry recruiters
                  </li>
                  <li className="marker:text-[0.8rem]">
                    Collect swag, eat free food, engage in fun activities, and
                    make memories to last a lifetime
                  </li>
                  <li className="marker:text-[0.8rem]">
                    At the end of it all, have your own project to show off and
                    add to your resume!
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p>
              To learn more about hackathons and what to expect, check out our
              article on Medium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
