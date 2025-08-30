import HorizontalScrollSection from "@/components/ui/horizontal";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Learn from "@/sections/learn";
import SponsorFooter from "@/sections/sponsor-footer";
import StatsTestimonials from "@/sections/stats-testimonials";
import TenYears from "@/sections/ten-years";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <HorizontalScrollSection panelClassName="bg-transparent">
        <Learn />
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/assets/heropage/recaphill2.svg"
            className="absolute -top-40 -left-100 -z-10"
            alt="recap"
            width={1300}
            height={200}
          />
          <Image
            src="/assets/heropage/recapsky.svg"
            className="absolute top-0 left-0 min-w-[100vw] -z-20"
            alt="recap"
            width={1500}
            height={200}
          />
          <Image
            src="/assets/heropage/recapback2.svg"
            className="absolute min-w-[115vw] top-25"
            alt="recap"
            width={1000}
            height={1000}
          />
          <Image
            src="/assets/heropage/recapstand2.png"
            className="absolute top-0 left-55"
            alt="recap"
            width={1400}
            height={1000}
          />
          {/* <Image
            src="/assets/heropage/recapsign.svg"
            className="absolute top-100 left-50"
            alt="recap"
            width={130}
            height={1000}
          />
          <Image
            src="/assets/heropage/back.svg"
            className="absolute top-190 left-160"
            alt="recap"
            width={440}
            height={1000}
          /> */}
        </div>
        <div className="relative w-full h-full flex items-center justify-center bg-green-500">
          <h2 className="text-6xl font-bold text-white">NEXT SECTION</h2>
        </div>
      </HorizontalScrollSection>
      <StatsTestimonials />
      <TenYears />
      <Faq />
      <SponsorFooter />
    </div>
  );
}
