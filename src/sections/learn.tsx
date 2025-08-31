import Sign from "@/components/learn/sign";

import Image from "next/image";

export default function Learn() {
  // Container min-height based on background image aspect ratio (1190÷1920 = 62vw)
  return (
    <div className="relative bg-[url('/assets/learn/background.svg')] bg-cover bg-center bg-no-repeat h-[62vw] -mt-[14vw] flex flex-col items-center">
      <div className="flex flex-col items-center gap-[1.5vw] mt-[7vw] w-[60vw]">
        <h2 className="text-[3.5vw] font-title leading-none text-shadow-bold">
          Our Events
        </h2>
        <p className="flex flex-col gap-[1vw] text-[1.3vw] text-center">
          This year, we are celebrating our 10 year anniversary! And we are
          bringing you a 2-day, in-person event where you&apos;ll learn new
          skills, connect with like-minded enthusiasts, and build solutions to
          tackle challenges together. Hopefully you&apos;ll leave with a
          newfound passion for tech!
        </p>
      </div>
      <div className="absolute top-[21vw] left-1/2 -translate-x-1/2 flex justify-between w-[65vw]">
        <Sign
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
        />
        <Sign
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
        />
        <Image
          src="/assets/learn/bear.svg"
          alt="Bear"
          width={100}
          height={170}
          className="absolute -bottom-[1vw] -right-[0.9vw]"
        />
      </div>
    </div>
  );
}
