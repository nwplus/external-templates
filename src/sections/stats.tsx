import { StatsScene } from "@/components/stats/stats-scene";
import { StatsSceneMobile } from "@/components/stats/stats-scene-mobile";
import { ResponsiveScene } from "@/components/responsive-scene";

export default function Stats() {
  return (
    <section id="stats" data-motion-scope>
      <ResponsiveScene
        desktop={<StatsScene />}
        mobile={<StatsSceneMobile />}
      />
    </section>
  );
}
