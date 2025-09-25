import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

export default function LearnMobile() {
  return (
    <div className=" w-full relative -mt-[50vh]">
      <Image
        src="/assets/hero/mobile/mobile-learnbg3.png"
        fill
        alt="section background"
        className="object-cover object-[32%_center] z-0"
      />
      <div className="flex flex-col min-h-[110vh] pb-[25vh] ">
        <div className="h-[35vh] top-[8vh] inset-0 relative ">
          <Image
            src="/assets/hero/mobile/mobile-tent.svg"
            width={1000}
            height={1000}
            alt="Tent and parafernalia"
            className="object-cover h-full object-[40%_center]"
          />
        </div>

        <div className="top-[10vh] mt-[10vh] z-20">
          <h2 className="text-[8vw] font-title leading-none text-shadow-bold text-center">
            What is a Hackathon?
          </h2>
          <div className="flex flex-col gap-[0.4vw] text-[4vw] mx-[7vw] mt-[1vh] ">
            <p>
              A hackathon is a collaborative, typically multi-day invention
              marathon where participants come together to ideate, design, and
              build projects in a limited time frame. It&apos;s a space to
              learn, experiment, and bring your unique ideas to life, regardless
              of your experience level.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[4vw]" variant="hero">
                  What are the benefits of attending a hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-[4vw] ml-5">
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
              article on{" "}
              <a
                href="https://medium.com/nwplusubc/nwchats-what-is-a-hackathon-7b5032011487"
                target="_blank"
                rel="noopener"
                className="text-blue-800 hover:underline"
              >
                Medium
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
