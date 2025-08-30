"use client";

import EntranceSign from "@/components/hero/entrance-sign";
import Sign from "@/components/hero/sign";

import Image from "next/image";
import React from "react";

import Navbar from "../components/hero/navbar";

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Container min-height based on background image aspect ratio (2238÷1920 = 116.56vw) */}
      <div className="relative flex flex-col bg-[url('/assets/hero/background-1.svg')] bg-cover bg-center bg-no-repeat h-[116.56vw] pt-4">
        <Navbar />
        <div className="absolute left-1/2 -translate-x-1/2 top-[10vw] w-[65vw]">
          <EntranceSign />
          <Image
            src="/assets/hero/hackathon-info-left.svg"
            alt="In-person event"
            title="In-person event"
            width={350}
            height={200}
            className="absolute left-0 bottom-0 w-[35%]"
          />
          <Image
            src="/assets/hero/hackathon-info-right.svg"
            alt="Nov 15: Learn Day; Nov 15-16: Build Night"
            title="Nov 15: Learn Day; Nov 15-16: Build Night"
            width={400}
            height={400}
            className="absolute -right-[5vw] -bottom-[5vw] w-[35%]"
          />
        </div>
        <Sign
          number={12}
          unit="days"
          className="absolute left-[8vw] top-[38vw] w-[9vw]"
        />
        <Sign
          number={10}
          unit="hours"
          className="absolute left-[15.5vw] top-[41vw] w-[9vw]"
        />
        <Sign
          number={24}
          unit="minutes"
          className="absolute left-[23vw] top-[45vw] w-[9vw]"
        />
      </div>
    </div>
  );
}
