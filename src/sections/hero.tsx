import { HeroScene } from "@/components/hero/hero-scene";
import { HeroSceneMobile } from "@/components/hero/hero-scene-mobile";
import { ResponsiveScene } from "@/components/responsive-scene";

export default function Hero() {
  return (
    // overflow-hidden clips the sky .hero-frame crops off on short screens.
    <section id="hero" data-motion-scope className="overflow-hidden">
      <ResponsiveScene desktop={<HeroScene />} mobile={<HeroSceneMobile />} />
    </section>
  );
}
