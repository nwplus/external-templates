"use client";

import Image from "next/image";
import React from "react";

import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="relative w-full h-[200vh] mb-30 pt-10 overflow-x-clip overflow-y-visible">
      <Navbar />
      {/* Hero Section */}
      <Image
        src="/assets/heropage/sky.svg"
        alt="sky"
        className="absolute top-0 left-0 -z-30"
        width={2000}
        height={1000}
        priority
      />
      <Image
        src="/assets/heropage/mountains.svg"
        alt="mountains"
        className="absolute top-35 left-0 -z-20"
        width={2000}
        height={2000}
        priority
      />
      <Image
        src="/assets/heropage/sun.svg"
        alt="sun"
        className="absolute top-0 right-20 -z-20"
        width={340}
        height={300}
        priority
      />
      {/* left trees */}
      <Image
        src="/assets/heropage/tree.svg"
        alt="tree"
        className="absolute top-0 left-0"
        width={125}
        height={100}
        priority
      />
      <Image
        src="/assets/heropage/tree-4.svg"
        alt="tree"
        className="absolute top-18 left-20"
        width={200}
        height={100}
        priority
      />
      <Image
        src="/assets/heropage/trees-6.svg"
        alt="tree"
        className="absolute top-33 left-0 z-10"
        width={200}
        height={100}
        priority
      />
      {/* right trees */}
      <Image
        src="/assets/heropage/tree-1.svg"
        alt="tree"
        className="absolute top-15 -right-4"
        width={150}
        height={100}
        priority
      />
      <Image
        src="/assets/heropage/tree-7.svg"
        alt="tree"
        className="absolute top-23 right-10 -z-10"
        width={220}
        height={100}
        priority
      />
      <Image
        src="/assets/heropage/tree-3.svg"
        alt="tree"
        className="absolute top-39 right-22"
        width={200}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/tree-5.svg"
        alt="tree"
        className="absolute top-60 -right-3"
        width={170}
        height={100}
        priority
      />
      {/* sign */}
      <Image
        src="/assets/heropage/bigsign2.svg"
        alt="sign"
        className="absolute top-35 left-1/2 -translate-x-1/2 z-10"
        width={1100}
        height={300}
        priority
      />
      <Image
        src="/assets/heropage/mentor.svg"
        alt="tent"
        className="absolute top-110 left-1/2 ml-28 -translate-x-1/2 h-auto z-10"
        width={160}
        height={1200}
        priority
      />
      <Image
        src="/assets/heropage/register.svg"
        alt="tent"
        className="absolute top-110 left-1/2 -ml-24 -translate-x-1/2 h-auto z-10"
        width={140}
        height={1200}
        priority
      />
      <Image
        src="/assets/heropage/carfront.png"
        alt="tent"
        className="absolute top-140 left-1/2 -translate-x-1/2 h-auto z-10"
        width={250}
        height={1200}
        priority
      />

      <Image
        src="/assets/heropage/bigsign2.svg"
        alt="sign"
        className="absolute top-35 left-1/2 -translate-x-1/2 z-10"
        width={1100}
        height={300}
        priority
      />

      {/* right grass */}
      <Image
        src="/assets/heropage/grass-right-2.svg"
        alt="tree"
        className="absolute top-163 -right-15 -z-10"
        width={400}
        height={100}
        priority
      />
      <Image
        src="/assets/heropage/grass-right.svg"
        alt="tree"
        className="absolute top-163 right-0 -z-10"
        width={300}
        height={100}
        priority
      />
      {/* left grass */}
      <Image
        src="/assets/heropage/grass-left.svg"
        alt="tree"
        className="absolute top-190 -left-2 min-w-[100vw]"
        width={2000}
        height={100}
        priority
      />
      <Image
        src="/assets/heropage/grass-left-2.svg"
        alt="tree"
        className="absolute top-163 left-0 -z-10"
        width={2000}
        height={2200}
        priority
      />
      {/* left bear and flag */}
      <Image
        src="/assets/heropage/bear.svg"
        alt="tree"
        className="absolute top-140 left-80 z-10"
        width={185}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/flag-1.svg"
        alt="tree"
        className="absolute top-128 left-116 z-10"
        width={230}
        height={200}
        priority
      />
      {/* right bear and flag */}
      <Image
        src="/assets/heropage/deer.svg"
        alt="tree"
        className="absolute top-105 right-65 z-10"
        width={170}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/nugget.svg"
        alt="tree"
        className="absolute top-160 right-55 z-10"
        width={200}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/flag.svg"
        alt="tree"
        className="absolute top-115 right-98 z-10"
        width={220}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/flag-3.svg"
        alt="tree"
        className="absolute top-140 right-98 z-10"
        width={220}
        height={200}
        priority
      />
      {/* road */}
      <Image
        src="/assets/heropage/main-road.svg"
        alt="tree"
        className="absolute top-190 left-1/2 min-w-[103vw] -translate-x-1/2 ml-10 -z-20"
        width={2500}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/flower.svg"
        alt="tree"
        className="absolute top-210 right-25 z-10"
        width={55}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/flower.svg"
        alt="tree"
        className="absolute top-210 right-25 z-10"
        width={55}
        height={200}
        priority
      />
      {/* signs */}
      <Image
        src="/assets/heropage/12-days.svg"
        alt="tree"
        className="absolute top-162 left-35 z-10"
        width={155}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/10-hours.svg"
        alt="tree"
        className="absolute top-177 left-65 z-10"
        width={155}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/24-mins.svg"
        alt="tree"
        className="absolute top-190 left-95 z-10"
        width={155}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/bush.svg"
        alt="tree"
        className="absolute top-230 left-145 z-10"
        width={230}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/welcome7.png"
        alt="welcome"
        className="absolute top-250 -left-20 z-10"
        width={1200}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/welcometext.svg"
        alt="welcome"
        className="absolute top-268 left-30 z-10"
        width={630}
        height={200}
        priority
      />
      <Image
        src="/assets/heropage/tent2.svg"
        alt="tent"
        className="absolute top-375 left-1/2 -translate-x-1/2 min-w-[130vw] h-auto"
        width={2400}
        height={1200}
        priority
      />
      <Image
        src="/assets/heropage/whattext.svg"
        alt="welcome"
        className="absolute top-430 right-0 z-10"
        width={750}
        height={200}
        priority
      />
    </div>
  );
}
