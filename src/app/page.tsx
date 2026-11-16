import MotionGate from "@/components/motion-gate";
import About from "@/sections/about";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import Recap from "@/sections/recap";
import Stats from "@/sections/stats";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Recap />
      <Testimonials />
      <Faq />
      <MotionGate />
    </div>
  );
}
