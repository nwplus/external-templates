import RecapMobile from "@/components/mobile/recap-mobile";
import TestimonialsMobile from "@/components/mobile/testimonials-mobile";
import About from "@/sections/about";
import Events from "@/sections/events";
import Faq from "@/sections/faq";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import Prizing from "@/sections/prizing";
import Recap from "@/sections/recap";
import Sponsors from "@/sections/sponsors";
import Stats from "@/sections/stats";
import TallCloudsSection from "@/sections/tall-clouds-section";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <TallCloudsSection>
        <Events />
        <Stats />
        <Prizing />
      </TallCloudsSection>

      <div className="relative z-20 hidden md:block">
        <Recap />
        <Testimonials />
      </div>

      <div className="relative z-20 block md:hidden">
        <RecapMobile />
        <TestimonialsMobile />
      </div>

      <Faq />
      <Sponsors />
      <Footer />
    </div>
  );
}
