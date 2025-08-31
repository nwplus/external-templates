import { cn } from "@/lib/utils";

import Image from "next/image";

const Section2 = ({ className }: { className?: string }) => {
  // Container min-height based on background image aspect ratio (1027÷1260 = 53.5vw)
  return (
    <div
      className={cn(
        "relative bg-[url('/assets/hero/background-2.svg')] bg-cover bg-center bg-no-repeat h-[53.5vw]",
        className
      )}
    >
      <div className="absolute left-0 top-[6vw] w-[95vw] flex justify-between">
        <Image
          src="/assets/hero/tent-plus-things.png"
          alt="Tent"
          width={800}
          height={400}
          className="w-1/2"
        />
        <div className="flex flex-col gap-[1.5vw] basis-1/2 mt-[4vw]">
          <h2 className="text-[3.5vw] font-title leading-none text-shadow-bold">
            What is a Hackathon?
          </h2>
          <div className="flex flex-col gap-[1vw] text-[1.3vw]">
            <p>
              A hackathon is a collaborative, typically multi-day invention
              marathon where participants come together to ideate, design, and
              build projects in a limited time frame. It&apos;s a space to
              learn, experiment, and bring your unique ideas to life, regardless
              of your experience level.
            </p>
            <p>What are the benefits of attending a hackathon</p>
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
