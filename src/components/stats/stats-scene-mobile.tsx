import { SceneLayer } from "@/components/ui/scene-layer";
import { STATS_MOBILE } from "@/constants/stats";

import { StatsVideo } from "./stats-video";
import "./stats.css";

/** The phone stats frame: the same signs stacked down one column. */
export const StatsSceneMobile = () => (
  <div className="@container relative aspect-[402/1510] w-full overflow-hidden bg-[#08131f]">
    <SceneLayer
      src="/assets/stats/texture.webp"
      box={STATS_MOBILE.texture}
      priority
    />
    <SceneLayer
      src="/assets/stats/clouds.webp"
      box={STATS_MOBILE.clouds}
      className="stats-clouds"
    />

    <p className="absolute top-[7.9%] left-1/2 w-[62.94%] -translate-x-1/2 text-center font-display text-[6.3cqw] leading-[1.2] text-white">
      Last year we had…
    </p>

    <SceneLayer
      src="/assets/stats/projects-mobile-final.svg"
      alt="169 projects"
      fit="contain"
      box={STATS_MOBILE.projects}
      className="stats-rise stat-neon-tube"
      style={
        {
          "--rise": "0.1s",
          "--neon": "7.4s",
          "--neon-delay": "-6.2s",
        } as React.CSSProperties
      }
    />
    <SceneLayer
      src="/assets/stats/mentors-mobile-final.svg"
      alt="43 mentors"
      fit="contain"
      box={STATS_MOBILE.mentors}
      className="stats-rise stat-neon-halo"
      style={
        {
          "--rise": "0.2s",
          "--neon": "8.3s",
          "--neon-delay": "-3.4s",
        } as React.CSSProperties
      }
    />
    <SceneLayer
      src="/assets/stats/bear-final.svg"
      box={STATS_MOBILE.bear}
      fit="contain"
      className="stats-bear"
      style={{ "--rise": "0.3s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/hackers-mobile-final.svg"
      alt="631 hackers"
      fit="contain"
      box={STATS_MOBILE.hackers}
      className="stats-rise stat-neon-tube"
      style={
        {
          "--rise": "0.4s",
          "--neon": "6.7s",
          "--neon-delay": "-1.7s",
        } as React.CSSProperties
      }
    />
    <SceneLayer
      src="/assets/stats/lanterns-final.svg"
      box={STATS_MOBILE.lanterns}
      className="stats-lanterns"
    />
    <SceneLayer
      src="/assets/stats/recap-arrow-mobile-final.svg"
      box={STATS_MOBILE.recapArrow}
      className="stats-arrow stat-neon-halo"
      style={
        { "--neon": "9.1s", "--neon-delay": "-8.1s" } as React.CSSProperties
      }
      fit="contain"
      alt="Watch the recap"
    />

    <StatsVideo box={STATS_MOBILE.video} />
  </div>
);
