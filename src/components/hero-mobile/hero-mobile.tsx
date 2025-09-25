"use client";

import { useCountdown } from "@/lib/useCountdown";

import Image from "next/image";

import Sign from "./mobile-sign";

export default function HeroMobile() {
  const { days, hours, minutes } = useCountdown();
  return (
    <div className="h-[150vh] bg-red-500 relative">
      <div className="absolute h-[70vh] left-0 right-0 -top-25 overflow-hidden bg-white">
        <Image
          src="/assets/hero/mobile/mobile-back.png"
          className="object-cover h-full object-[63%_center]"
          width={2000}
          height={1200}
          priority
          alt="Hackcamp Background"
        />
      </div>

      {/* hero text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[12%] flex flex-col items-center font-title text-title">
        <h1 className="text-[17vw] text-shadow-lg leading-tight -my-2">
          HackCamp
        </h1>
        <h2 className="text-[4.2vw]">
          Canada&apos;s largest beginner-only hackathon
        </h2>
      </div>
      {/* for buttons */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[20.5%] flex w-[70vw] justify-center space-x-3 items-center ">
        <button
          type="button"
          className="bg-[#2C6D7D] text-[4vw] py-[0.5vw] px-[1vw] rounded-sm text-title cursor-pointer hover:opacity-80 transition-opacity"
        >
          Register Now
        </button>
        <button
          type="button"
          className="bg-[#2C6D7D] text-[4vw] py-[0.5vw] px-[2vw] rounded-sm text-title cursor-pointer hover:opacity-80 transition-opacity"
        >
          Become a Mentor
        </button>
      </div>

      <div className="absolute h-[115vh] top-[44vh] left-0 right-0">
        <Image
          src="/assets/hero/mobile/mobile-road3.png"
          className="object-cover h-full object-[45%_center]"
          width={2000}
          height={1200}
          priority
          alt="Hackcamp Background"
        />
      </div>

      <div className="top-[34vh] absolute left-[6vw]">
        <Image
          src="assets/hero/mobile/in-person.svg"
          width={240}
          height={240}
          priority
          alt="In-Person event"
        />
      </div>

      <div className="top-[40vh] absolute -right-[5vw]">
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
        className="absolute left-[4vw] top-[52vh] w-[25vw]"
      />
      <Sign
        number={hours}
        unit="hours"
        className="absolute left-[23vw] top-[56vh] w-[25vw]"
      />
      <Sign
        number={minutes}
        unit="mins"
        className="absolute left-[42vw] top-[60vh] w-[25vw]"
      />

      {/* add bush */}
      <Image
        src="assets/hero/mobile/mobile-bush.png"
        className="absolute left-[6vw] top-[68vh] w-[37vw]"
        width={200}
        height={200}
        alt="Bush"
      />

      <Image
        src="assets/hero/mobile/deersign.svg"
        className="absolute right-[3vw] top-[68vh] w-[62vw]"
        width={200}
        height={200}
        alt="Nov 15: Learn Day"
      />

      <Image
        src="assets/hero/mobile/nuggetflag.svg"
        className="absolute left-[3vw] top-[75vh] w-[65vw]"
        width={200}
        height={200}
        alt="Nov 15-16: Build Night"
      />
    </div>
  );
}
