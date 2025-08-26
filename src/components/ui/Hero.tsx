import Image from "next/image";
import React from "react";

import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero Section */}

      <Image
        src="/HackCamp2025/sky.svg"
        alt="sky"
        className="absolute top-0 left-0 -z-30"
        width={2000}
        height={1000}
        priority
      />

      <Image
        src="/HackCamp2025/mountains.svg"
        alt="mountains"
        className="absolute top-35 left-0 -z-20"
        width={2000}
        height={2000}
        priority
      />

      <Image
        src="/HackCamp2025/sun.svg"
        alt="sun"
        className="absolute top-0 right-20 -z-20"
        width={340}
        height={300}
        priority
      />
      {/* left trees */}
      <Image
        src="/HackCamp2025/tree.svg"
        alt="tree"
        className="absolute top-0 left-0"
        width={125}
        height={100}
        priority
      />
      <Image
        src="/HackCamp2025/tree-4.svg"
        alt="tree"
        className="absolute top-18 left-20"
        width={200}
        height={100}
        priority
      />
      <Image
        src="/HackCamp2025/trees-6.svg"
        alt="tree"
        className="absolute top-33 left-0 z-10"
        width={200}
        height={100}
        priority
      />

      {/* right trees */}
      <Image
        src="/HackCamp2025/tree-1.svg"
        alt="tree"
        className="absolute top-15 -right-4"
        width={150}
        height={100}
        priority
      />
      <Image
        src="/HackCamp2025/tree-7.svg"
        alt="tree"
        className="absolute top-23 right-10 -z-10"
        width={220}
        height={100}
        priority
      />
      <Image
        src="/HackCamp2025/tree-3.svg"
        alt="tree"
        className="absolute top-39 right-22"
        width={200}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/tree-5.svg"
        alt="tree"
        className="absolute top-60 -right-3"
        width={170}
        height={100}
        priority
      />

      {/* sign */}
      <Image
        src="/HackCamp2025/big-sign.svg"
        alt="sign"
        className="absolute top-35 left-1/2 -translate-x-1/2 z-10"
        width={1100}
        height={300}
        priority
      />
      {/* right grass */}
      <Image
        src="/HackCamp2025/grass-right-2.svg"
        alt="tree"
        className="absolute top-163 right-0 -z-10"
        width={350}
        height={100}
        priority
      />

      <Image
        src="/HackCamp2025/grass-right.svg"
        alt="tree"
        className="absolute top-163 right-0 -z-10"
        width={300}
        height={100}
        priority
      />

      {/* left grass */}

      {/* TODO: need to make this bigger somehow */}
      <Image
        src="/HackCamp2025/grass-left.svg"
        alt="tree"
        className="absolute top-180 -left-2"
        width={2000}
        height={100}
        priority
      />

      <Image
        src="/HackCamp2025/grass-left-2.svg"
        alt="tree"
        className="absolute top-163 left-0 -z-10"
        width={2000}
        height={2200}
        priority
      />

      {/* left bear and flag */}
      <Image
        src="/HackCamp2025/bear.svg"
        alt="tree"
        className="absolute top-140 left-80 z-10"
        width={185}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/flag-1.svg"
        alt="tree"
        className="absolute top-128 left-116 z-10"
        width={230}
        height={200}
        priority
      />

      {/* right bear and flag */}
      <Image
        src="/HackCamp2025/deer.svg"
        alt="tree"
        className="absolute top-105 right-65 z-10"
        width={170}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/nugget.svg"
        alt="tree"
        className="absolute top-160 right-55 z-10"
        width={200}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/flag.svg"
        alt="tree"
        className="absolute top-115 right-98 z-10"
        width={220}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/flag-3.svg"
        alt="tree"
        className="absolute top-140 right-98 z-10"
        width={220}
        height={200}
        priority
      />

      {/* road */}
      <Image
        src="/HackCamp2025/main-road.svg"
        alt="tree"
        className="absolute top-190 left-1/2 -translate-x-1/2 ml-10 -z-20"
        width={2500}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/flower.svg"
        alt="tree"
        className="absolute top-210 right-25 z-10"
        width={55}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/flower.svg"
        alt="tree"
        className="absolute top-210 right-25 z-10"
        width={55}
        height={200}
        priority
      />

      {/* signs */}
      <Image
        src="/HackCamp2025/12-days.svg"
        alt="tree"
        className="absolute top-162 left-35 z-10"
        width={155}
        height={200}
        priority
      />
      <Image
        src="/HackCamp2025/10-hours.svg"
        alt="tree"
        className="absolute top-177 left-65 z-10"
        width={155}
        height={200}
        priority
      />
    </div>
  );
}
