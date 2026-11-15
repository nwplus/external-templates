import { AboutScene } from "@/components/about/about-scene";
import { AboutSceneMobile } from "@/components/about/about-scene-mobile";
import { ResponsiveScene } from "@/components/responsive-scene";

export default function About() {
  return (
    <section id="about">
      <ResponsiveScene desktop={<AboutScene />} mobile={<AboutSceneMobile />} />
    </section>
  );
}
