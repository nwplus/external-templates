import { RecapScene } from "@/components/recap/recap-scene";
import { RecapSceneMobile } from "@/components/recap/recap-scene-mobile";
import { ResponsiveScene } from "@/components/responsive-scene";

export default function Recap() {
  return (
    <section id="recap">
      <ResponsiveScene
        desktop={<RecapScene />}
        mobile={<RecapSceneMobile />}
      />
    </section>
  );
}
