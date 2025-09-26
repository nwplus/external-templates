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
            src="/assets/learn/learn-day-text.png"
            alt="Learn Day - Nov 15, 2025. Hover to learn more"
            width={600}
            height={400}
          />
        }
        backTitle="Learn Day"
        backDate="Nov 15, 2025"
        backDescription="A day of workshops and skill building in preparation for Build Day. With topics ranging from web development, version control, design and more, we will have something for you!"
        className="absolute top-[45vh] left-1/2 -translate-x-1/2"
      />

      <Image
        src="/assets/hero/mobile/mobile-mascots.svg"
        width={200}
        height={200}
        alt="Mascots"
        className="absolute top-[65vh] right-0"
      />

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
        className="absolute top-[84vh] left-1/2 -translate-x-1/2"
      />

      <Image
        src="/assets/hero/mobile/mobile-bear.png"
        width={80}
        height={80}
        alt="Mascot Bear"
        className="absolute top-[100vh] right-[3vw]"
      />

      <Image
        src="/assets/hero/mobile/mobile-mascots2.png"
        width={310}
        height={310}
        alt="Mascot Bear"
        className="absolute top-[105vh] left-0"
      />
    </div>
  );
}
