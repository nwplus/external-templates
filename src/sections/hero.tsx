"use client";

import Sign from "@/components/hero/sign";

import React from "react";

import Navbar from "../components/hero/navbar";

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Container min-height based on background image aspect ratio (2238÷1920 = 116.56vw) */}
      <div className="relative flex flex-col bg-[url('/assets/hero/background-1.svg')] bg-cover bg-center bg-no-repeat h-[116.56vw] pt-4">
        <Navbar />
        <div className="absolute left-1/2 -translate-x-1/2 top-[10vw] w-[65vw]">
          <Sign />
        </div>
      </div>
    </div>
  );
}
