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
    <div>
      <Hero />
      <HorizontalScrollSection>
        <Learn />
        <Recap />
      </HorizontalScrollSection>
      <StatsTestimonials />
      <TenYears />
      <Faq />
      <SponsorFooter />
    </div>
  );
}
