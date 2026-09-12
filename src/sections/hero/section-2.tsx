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
    <div>
      {/* Welcome to HackCamp */}
      <div className="mx-auto w-250 grid grid-cols-2 text-white">
        {/* Image (left) */}
        <div>

        </div>
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
      <div className="mx-auto w-250 grid grid-cols-2 text-white">
        {/* Copy */}
        <div>
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
        <div>

        </div>
      </div>
    </div>
  );
};

export default Section2;
