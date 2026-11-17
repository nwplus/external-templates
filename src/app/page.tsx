import { FoodCollection } from "@/components/food-collection";
import MotionGate from "@/components/motion-gate";
import About from "@/sections/about";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import PastProjects from "@/sections/past-projects";
import Recap from "@/sections/recap";
import SponsorsFooter from "@/sections/sponsors-footer";
import Stats from "@/sections/stats";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <div className="relative">
      <FoodCollection>
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Recap />
        <Testimonials />
        <PastProjects />
        <Faq />
        <SponsorsFooter />
        <MotionGate />
      </FoodCollection>
    </div>
  );
}
