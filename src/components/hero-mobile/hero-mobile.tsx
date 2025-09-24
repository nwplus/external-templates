import Image from "next/image";

import { SignButton } from "../hero/entrance-sign";

export default function HeroMobile() {
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
          className="bg-[#2C6D7D] text-[4vw] py-[0.5vw] px-[1vw] rounded-[0.5vw] text-title cursor-pointer hover:opacity-80 transition-opacity"
        >
          Register Now
        </button>
        <button
          type="button"
          className="bg-[#2C6D7D] text-[4vw] py-[0.5vw] px-[1vw] rounded-[0.5vw] text-title cursor-pointer hover:opacity-80 transition-opacity"
        >
          Become a Mentor
        </button>
      </div>

      <div className="absolute h-[85vh] top-[45vh] left-0 right-0">
        <Image
          src="/assets/hero/mobile/mobile-road.png"
          className="object-cover h-full object-[45%_center]"
          width={2000}
          height={1200}
          priority
          alt="Hackcamp Background"
        />
      </div>
    </div>
  );
}
