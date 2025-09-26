import HorizontalScrollSection from "@/components/ui/horizontal";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Learn from "@/sections/learn";
import Recap from "@/sections/recap";
import SponsorFooter from "@/sections/sponsor-footer";
import StatsTestimonials from "@/sections/stats-testimonials";
import TenYears from "@/sections/ten-years";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* <div className="h-[calc(62vw-100vh)] w-full"></div>
      <HorizontalScrollSection>
        <div className="relative h-screen w-screen">
          <div className="absolute bottom-0 left-0 w-full">
            <Learn />
          </div>
        </div>
        <Recap />
        <StatsTestimonials />
      </HorizontalScrollSection> */}
      <div className="h-[calc(128.07vw-100vh)] w-full"></div>
      <TenYears />
      <Faq />
      <SponsorFooter />
    </div>
  );
}
