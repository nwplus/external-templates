import Faq from "@/sections/faq";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Learn from "@/sections/learn";
import Recap from "@/sections/recap";
import Sponsors from "@/sections/sponsors";
import StatsTestimonials from "@/sections/stats-testimonials";
import TenYears from "@/sections/ten-years";

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Learn/Recap have no mobile variant here; their mobile versions render inside Hero's mobile branch */}
      <div className="hidden md:block">
        <Learn />
        <Recap />
      </div>

      <StatsTestimonials />
      <TenYears />
      <Faq />
      <Sponsors />
      <Footer />
    </div>
  );
}
