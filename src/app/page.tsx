import RecapMobile from "@/components/mobile/recap-mobile";
import TestimonialsMobile from "@/components/mobile/testimonials-mobile";
import Events from "@/sections/events";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Recap from "@/sections/recap";
import SponsorFooter from "@/sections/sponsor-footer";
import StatsTestimonials from "@/sections/stats-testimonials";
import TenYears from "@/sections/ten-years";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Events />

      <StatsTestimonials />

      <div className="relative z-20 hidden md:block">
        <Recap />
        <Testimonials />
      </div>

      <div className="relative z-20 block md:hidden">
        <RecapMobile />
        <TestimonialsMobile />
      </div>

      <TenYears />
      <Faq />
      <SponsorFooter />
    </div>
  );
}
