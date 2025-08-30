"use client";

import Section1 from "./section-1";
import Section2 from "./section-2";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <Section1 />
      <Section2 className="-mt-[25vw]" />
    </div>
  );
}
