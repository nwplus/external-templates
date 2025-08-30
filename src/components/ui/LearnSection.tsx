"use client";

import Image from "next/image";
import React from "react";

export default function LearnSection() {
  const [learnHover, setLearnHover] = React.useState(false);
  const [buildHover, setBuildHover] = React.useState(false);

  return (
    <div className="relative w-full h-full -mt-15 overflow-visible">
      <Image
        src="/assets/heropage/tug8.svg"
        alt="tent"
        className="absolute top-0 left-1/2 ml-24 -translate-x-1/2 min-w-[135vw] h-auto overflow-visible"
        width={2400}
        height={1200}
        priority
      />

      <Image
        src="/assets/heropage/events.svg"
        alt="tent"
        className="absolute top-30 left-1/2 ml-12 -translate-x-1/2 min-w-[55vw] h-auto z-10"
        width={750}
        height={1200}
        priority
      />

      <Image
        src="/assets/heropage/backgroundbears.svg"
        alt="tent"
        className="absolute top-155 left-1/2 ml-12 -translate-x-1/2 min-w-[50vw] h-auto z-10"
        width={1200}
        height={1200}
        priority
      />

      <Image
        src="/assets/heropage/lefttugtree.svg"
        alt="tree"
        className="absolute top-55 left-35 z-20"
        width={200}
        height={200}
        priority
      />

      <Image
        src="/assets/heropage/backtugtrees.svg"
        alt="tree"
        className="absolute top-10 -left-5 min-w-[100vw]"
        width={1950}
        height={200}
        priority
      />

      <div
        onMouseEnter={() => setLearnHover(true)}
        onMouseLeave={() => setLearnHover(false)}
      >
        <Image
          src={
            learnHover
              ? "/assets/heropage/learn2.svg"
              : "/assets/heropage/learn1.svg"
          }
          alt="tree"
          className="absolute top-90 left-80 transition-all duration-500 ease-in-out cursor-grab"
          width={540}
          height={200}
          priority
        />
      </div>

      <div
        onMouseEnter={() => setBuildHover(true)}
        onMouseLeave={() => setBuildHover(false)}
      >
        <Image
          src={
            buildHover
              ? "/assets/heropage/build2.svg"
              : "/assets/heropage/build1.svg"
          }
          alt="tree"
          className="absolute top-90 right-52"
          width={540}
          height={200}
          priority
        />
      </div>

      <Image
        src="/assets/heropage/stump.svg"
        alt="tree"
        className="absolute top-150 ml-10 left-1/2 -translate-x-1/2 z-20"
        width={340}
        height={200}
        priority
      />

      <Image
        src="/assets/heropage/tugofwar.png"
        alt="tree"
        className="absolute top-180 ml-10 left-1/2 min-w-[90vw] -translate-x-1/2 z-20"
        width={900}
        height={200}
        priority
      />
    </div>
  );
}
