import { HeroScene } from "@/components/hero/hero-scene";
import { HeroSceneMobile } from "@/components/hero/hero-scene-mobile";
import { ResponsiveScene } from "@/components/responsive-scene";

export default function Hero() {
  return (
    <section id="hero" data-motion-scope>
      <ResponsiveScene desktop={<HeroScene />} mobile={<HeroSceneMobile />} />
    </section>
  );
}
