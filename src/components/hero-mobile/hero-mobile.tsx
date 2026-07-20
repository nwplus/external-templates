"use client";

import { useCountdown } from "@/lib/useCountdown";

import Image from "next/image";

import MobileNavbar from "./mobile-navbar";
import Sign from "./mobile-sign";

export default function HeroMobile() {
  const { days, hours, minutes } = useCountdown();
  return (
    <div className="h-[150vh] relative">
      <MobileNavbar />
      <div className="absolute h-[75vh] left-0 right-0 -top-[13vh] overflow-hidden bg-white">
        <Image
          src="/assets/hero/mobile/mobile-back2.png"
          className="object-cover h-full object-[63%_center]"
          width={2000}
          height={1200}
          priority
          alt="Hackcamp - Canada's largest beginner-only hackathon"
        />
      </div>

      {/* hero text */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-[12%] flex flex-col items-center font-title text-title w-[80vw]">
        <h1 className="text-7xl text-shadow-lg leading-tight -mt-2 ">
          HackCamp
        </h1>
        <h2 className="text-lg -mt-1">
          Canada&apos;s largest beginner-only hackathon
        </h2>
      </div> */}
      {/* for buttons */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[33vh] flex w-[79vw] justify-center space-x-5 items-center ">
        <a
          className="bg-[#2C6D7D] text-md py-[1vw] px-[1.2vw] rounded-sm text-title cursor-pointer hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener"
          href="https://forms.gle/B6Eai84mh9SKLNa28"
        >
          Interest Form
        </a>
      </div>

      <div className="absolute h-[134vh] top-[45vh] left-0 right-0">
        <Image
          src="/assets/hero/mobile/mobile-road3.png"
          className="object-cover h-full object-[45%_center]"
          width={2000}
          height={1200}
          priority
          alt="Hackcamp Background"
        />
      </div>

      <div className="top-[37vh] absolute left-[6vw]">
        <Image
          src="assets/hero/mobile/in-person.svg"
          width={230}
          height={230}
          priority
          alt="In-Person event"
        />
      </div>

      <div className="top-[42vh] absolute -right-[5vw]">
        <Image
          src="assets/hero/mobile/mobile-car.svg"
          width={250}
          height={250}
          priority
          alt="Mascot car"
        />
      </div>

      <Sign
        number={days}
        unit="days"
        className="absolute left-[4vw] top-[55vh] w-[25vw]"
      />
      <Sign
        number={hours}
        unit="hours"
        className="absolute left-[23vw] top-[59vh] w-[25vw]"
      />
      <Sign
        number={minutes}
        unit="mins"
        className="absolute left-[42vw] top-[63vh] w-[25vw]"
      />

      {/* add bush */}
      <Image
        src="assets/hero/mobile/mobile-bush.png"
        className="absolute left-[6vw] top-[74vh] w-[37vw]"
        width={200}
        height={200}
        alt="Bush"
      />

      <Image
        src="assets/hero/mobile/deersign.svg"
        className="absolute right-[3vw] top-[73vh] w-[62vw]"
        width={200}
        height={200}
        alt="Nov 7: Learn Day"
      />

      {/* <Image
        src="assets/hero/mobile/nuggetflag.svg"
        className="absolute left-[3vw] top-[82vh] w-[65vw]"
        width={200}
        height={200}
        alt="Nov 7-8: Build Night"
      /> */}
    </div>
  );
}
