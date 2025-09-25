import HeroMobile from "@/components/hero-mobile/hero-mobile";
import LearnMobile from "@/components/hero-mobile/learn-mobile";

import Section1 from "./section-1";
import Section2 from "./section-2";

export default function Hero() {
  return (
    <>
      <div className="hidden md:block">
        <Section1 />
        <Section2 className="-mt-[25vw]" />
      </div>
      <div className="block md:hidden">
        <HeroMobile />
        <LearnMobile />
      </div>
    </>
  );
}
