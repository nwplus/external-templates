import Faq from "@/sections/faq";
import SponsorFooter from "@/sections/sponsor-footer";
import StatsTestimonials from "@/sections/stats-testimonials";
import TenYears from "@/sections/ten-years";

export default function Home() {
  return (
    <div>
      <StatsTestimonials />
      <TenYears />
      <Faq />
      <SponsorFooter />
    </div>
  );
}
