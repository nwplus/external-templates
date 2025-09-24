"use client";

import Sign from "@/components/learn/sign";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";

export default function Learn() {
  // Container min-height based on background image aspect ratio (1190÷1920 = 62vw)
  const [scrollProgress, setScrollProgress] = useState(0);
  const tugOfWarRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current?.offsetTop; //returns 0??

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionStart = window.innerHeight * 2.5; //can't find a workaround for this hardcode?
      // const sectionStart = el;
      const sectionHeight = window.innerHeight * 0.4;
      const sectionEnd = sectionStart + sectionHeight;

      if (scrollTop < sectionStart) {
        setScrollProgress(0);
      } else if (scrollTop > sectionEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollTop - sectionStart) / sectionHeight;
        setScrollProgress(progress);
        const leftPosition = 7 - Math.sin(progress * 3 * Math.PI) * 10;
        if (tugOfWarRef.current) {
          tugOfWarRef.current.style.transform = `translateX(${leftPosition}%)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-[62vw] flex flex-col items-center w-full"
      id="our-events"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[url('/assets/learn/background.svg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="relative flex flex-col items-center gap-[1.5vw] mt-[7vw] w-[60vw]">
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
      <Image
        src="/assets/learn/tree.svg"
        alt="Tree"
        width={200}
        height={800}
        className="absolute left-[9vw] bottom-[9vw] w-[11vw]"
      />
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
      <Image
        src="/assets/learn/2022-mascots.png"
        alt="2022 Mascots"
        width={500}
        height={300}
        className="absolute bottom-[8vw] left-[16vw] w-[23vw]"
      />
      <Image
        src="/assets/learn/stump-nugget.svg"
        alt="Nugget on a tree stump"
        width={600}
        height={600}
        className="absolute bottom-[10vw] left-1/2 -translate-x-1/2 w-[18vw]"
      />
      <Image
        src="/assets/learn/2024-mascots.png"
        alt="2024 Mascots"
        width={500}
        height={300}
        className="absolute bottom-[8vw] right-[16vw] w-[23vw]"
      />

      {scrollProgress <= 0.8 ? (
        <Image
          src="/assets/learn/tug-of-war.svg"
          alt="Tug of War"
          width={400}
          height={100}
          className={"absolute bottom-0 w-[70vw] transition-transform"}
          ref={tugOfWarRef}
        />
      ) : (
        <Image
          src="/assets/learn/tug-fall.png"
          alt="Tug of War"
          width={400}
          height={100}
          className={"absolute -bottom-12 w-[60vw] left-12"}
        />
      )}
    </div>
  );
}
