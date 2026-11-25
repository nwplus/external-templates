import { SceneLayer } from "@/components/ui/scene-layer";
import { STATS_DESKTOP } from "@/constants/stats";

import { StatsVideo } from "./stats-video";

import "./stats.css";

/**
 * "Last year we had…": the neon scoreboard hanging over the night skyline.
 * The neon signs sit above the recap video, with the recap
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
      src="/assets/stats/mentors-final.svg"
      alt="43 mentors"
      fit="contain"
      box={STATS_DESKTOP.mentors}
      className="stats-rise stat-neon-halo"
      style={
        { "--rise": "0.15s", "--neon": "8.3s", "--neon-delay": "-3.4s" } as React.CSSProperties
      }
    />
    <SceneLayer
      src="/assets/stats/hackers-final.svg"
      alt="631 hackers"
      fit="contain"
      box={STATS_DESKTOP.hackers}
      className="stats-rise stat-neon-tube"
      style={
        { "--rise": "0.3s", "--neon": "6.7s", "--neon-delay": "-1.7s" } as React.CSSProperties
      }
    />
    <SceneLayer
      src="/assets/stats/bear-final.svg"
      box={STATS_DESKTOP.bear}
      className="stats-bear"
      style={{ "--rise": "0.45s" } as React.CSSProperties}
      fit="contain"
    />

    <p className="absolute top-[2.762%] left-1/2 w-[26.79%] -translate-x-1/2 text-center font-display text-[3.175cqw] leading-[1.2] text-white whitespace-nowrap">
      Last year we had…
    </p>

    <SceneLayer
      src="/assets/stats/lanterns-final.svg"
      box={STATS_DESKTOP.lanterns}
      className="stats-lanterns"
    />
    <SceneLayer
      src="/assets/stats/recap-arrow-final.svg"
      box={STATS_DESKTOP.recapArrow}
      className="stats-arrow stat-neon-halo"
      style={{ "--neon": "9.1s", "--neon-delay": "-11.5s" } as React.CSSProperties}
      fit="contain"
      alt="Watch the recap"
    />
    <SceneLayer
      src="/assets/stats/projects-final.svg"
      alt="169 projects"
      fit="contain"
      box={STATS_DESKTOP.projects}
      className="stats-rise stat-neon-tube"
      style={
        { "--rise": "0.55s", "--neon": "7.4s", "--neon-delay": "-6.2s" } as React.CSSProperties
      }
    />
  </div>
);
