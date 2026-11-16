import { SceneLayer } from "@/components/ui/scene-layer";
import { STATS_DESKTOP } from "@/constants/stats";

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
      className="stats-rise"
      style={{ "--rise": "0.15s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/hackers.webp"
      box={STATS_DESKTOP.hackers}
      className="stats-rise"
      style={{ "--rise": "0.3s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/bear.webp"
      box={STATS_DESKTOP.bear}
      className="stats-bear"
      style={{ "--rise": "0.45s" } as React.CSSProperties}
    />

    <p className="absolute top-[2.762%] left-1/2 w-[26.79%] -translate-x-1/2 text-center font-display text-[3.175cqw] leading-[1.2] text-[#ffe7ac] whitespace-nowrap">
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
      className="stats-arrow"
    />
    <SceneLayer
      src="/assets/stats/projects.webp"
      box={STATS_DESKTOP.projects}
      className="stats-rise"
      style={{ "--rise": "0.55s" } as React.CSSProperties}
    />
  </div>
);
