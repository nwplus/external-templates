import Image from "next/image";

import LearnSign from "./learn-sign";
import Sign from "./mobile-sign";

export default function OurEvents() {
  return (
    <div className="w-full h-[130vh] -mt-[23vh] relative">
      <Image
        src="/assets/hero/mobile/mobile-events.png"
        width={2000}
        height={1000}
        alt="Our events background"
        className="object-cover h-full object-[58%_center]"
      />

      <div className="z-20 top-[13vh] absolute w-full">
        <h2 className="text-[8vw] font-title leading-none text-shadow-bold text-center">
          Our Events
        </h2>
        <div className="w-[84%] mx-auto mt-[3vh]">
          <p>
            This year, we are celebrating our 10 year anniversary! And we are
            bringing you a 2-day, in-person event where you’ll learn new skills,
            connect with like-minded enthusiasts, and build solutions to tackle
            challenges together. Hopefully you’ll leave with a newfound passion
            for tech!
          </p>
        </div>
      </div>

      <LearnSign
        faceContent={
          <Image
            src="/assets/learn/build-night-text.png"
            alt="Build Night - Nov 15 - 16, 2025. Hover to learn more"
            width={600}
            height={400}
          />
        }
        backTitle="Build Night"
        backDate="Nov 15 - 16, 2025"
        backDescription={
          "A 18-hour overnight hackathon that starts after Learn Day, focused around creating projects centred around accessibility, inclusivity, and diversity.\n\n For each project submission, HackCamp will donate $5 to one of these charities: AMS Food Bank, GiveInternet.Org, Michael Cuccione Foundation"
        }
        className="absolute top-[45vh] left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
