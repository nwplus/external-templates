import { SceneLayer } from "@/components/ui/scene-layer";
import { STATS_DESKTOP } from "@/constants/stats";

import { BaoSign } from "./bao-sign";
import { StatsVideo } from "./stats-video";

import "./stats.css";

/**
 * "Last year we had…": the neon scoreboard hanging over the night skyline.
 * The numbers are the design's own signs (734 hackers, the mentors banner,
 * the 68-hour badge), with the recap video underneath and the RECAP 2027
 * arrow pointing at it.
 */
export const StatsScene = () => (
  <div className="@container relative aspect-[1512/1412] w-full overflow-hidden bg-[#08131f]">
    <SceneLayer src="/assets/stats/texture.webp" box={STATS_DESKTOP.texture} priority />
    <SceneLayer
      src="/assets/stats/clouds.webp"
      box={STATS_DESKTOP.clouds}
      className="stats-clouds"
    />

    <StatsVideo box={STATS_DESKTOP.video} />

    <SceneLayer
      src="/assets/stats/mentors.webp"
      box={STATS_DESKTOP.mentors}
      className="stats-rise stat-neon-halo"
      style={
        { "--rise": "0.15s", "--neon": "17.1s", "--neon-delay": "-3.4s" } as React.CSSProperties
      }
      fit="contain"
      alt="68 mentors"
    />
    <SceneLayer
      src="/assets/stats/hackers.webp"
      box={STATS_DESKTOP.hackers}
      className="stats-rise stat-neon-tube"
      style={
        { "--rise": "0.3s", "--neon": "11.3s", "--neon-delay": "-1.7s" } as React.CSSProperties
      }
      fit="contain"
      alt="734 hackers"
    />
    <SceneLayer
      src="/assets/stats/bear.webp"
      box={STATS_DESKTOP.bear}
      className="stats-bear"
      style={{ "--rise": "0.45s" } as React.CSSProperties}
      fit="contain"
    />

    <p className="absolute top-[2.762%] left-1/2 w-[26.79%] -translate-x-1/2 text-center font-display text-[3.175cqw] leading-[1.2] text-white whitespace-nowrap">
      Last year we had…
    </p>

    <SceneLayer
      src="/assets/stats/lanterns.webp"
      box={STATS_DESKTOP.lanterns}
      className="stats-lanterns"
    />
    <SceneLayer
      src="/assets/stats/recap-2027.webp"
      box={STATS_DESKTOP.recap2027}
      className="stats-arrow stat-neon-halo"
      style={{ "--neon": "23.9s", "--neon-delay": "-11.5s" } as React.CSSProperties}
      fit="contain"
      alt="Watch the 2027 recap"
    />
    <BaoSign box={STATS_DESKTOP.projects} rise="0.55s" sparkleSize={1.1} />
  </div>
);
