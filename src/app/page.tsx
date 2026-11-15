import MotionGate from "@/components/motion-gate";
import About from "@/sections/about";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <MotionGate />
    </div>
  );
}
