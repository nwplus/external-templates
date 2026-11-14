import MotionGate from "@/components/motion-gate";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <MotionGate />
    </div>
  );
}
