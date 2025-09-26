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
      <div className="h-[calc(62vw-100vh)] w-full"></div>

      {/* desktop: horizontal scroll for Learn -> Recap -> Stats */}
      <div className="hidden md:block">
        <HorizontalScrollSection>
          <div className="relative h-screen w-screen">
            <div className="absolute bottom-0 left-0 w-full">
              <Learn />
            </div>
          </div>
          <Recap />
          <StatsTestimonials />
        </HorizontalScrollSection>
      </div>

      {/* mobile: stack sections vertically */}
      <div className="block md:hidden">
        <div className="relative">
          <div className="relative min-h-screen w-full">
            <div className="absolute bottom-0 left-0 w-full">
              <Learn />
            </div>
          </div>
          <Recap />
          <StatsTestimonials />
        </div>
      </div>

      {/* desktop spacing between horizontal scroll and ten years */}
      <div className="hidden md:block h-[calc(128.07vw-100vh)] w-full"></div>
      <TenYears />
      <Faq />
      <SponsorFooter />
    </div>
  );
}

{
  /* todo:make it an accordion DONE, navbar, car animation, sign times DONE, recap section board, alignment with stats 
  notes: accordion arrow design change? , navbar testimonial section is wack..., assuming boards show application time? not found on firebase,  */
}
