import { SceneLayer } from "@/components/ui/scene-layer";
import { STATS_MOBILE } from "@/constants/stats";

import { StatsVideo } from "./stats-video";

import "./stats.css";

/** The phone stats frame: the same signs stacked down one column. */
export const StatsSceneMobile = () => (
  <div className="@container relative aspect-[402/1510] w-full overflow-hidden bg-[#08131f]">
    <SceneLayer src="/assets/stats/texture.webp" box={STATS_MOBILE.texture} priority />
    <SceneLayer
      src="/assets/stats/clouds.webp"
      box={STATS_MOBILE.clouds}
      className="stats-clouds"
    />

    <p className="absolute top-[3.97%] left-1/2 w-[62.94%] -translate-x-1/2 text-center font-display text-[6.3cqw] leading-[1.2] text-white">
      Last year we had…
    </p>

    <SceneLayer
      src="/assets/stats/projects.webp"
      box={STATS_MOBILE.projects}
      fit="contain"
      alt="182 projects"
      className="stats-rise"
      style={{ "--rise": "0.1s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/mentors.webp"
      box={STATS_MOBILE.mentors}
      fit="contain"
      alt="Mentors"
      className="stats-rise"
      style={{ "--rise": "0.2s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/bear.webp"
      box={STATS_MOBILE.bear}
      fit="contain"
      className="stats-bear"
      style={{ "--rise": "0.3s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/hackers.webp"
      box={STATS_MOBILE.hackers}
      fit="contain"
      alt="734 hackers"
      className="stats-rise"
      style={{ "--rise": "0.4s" } as React.CSSProperties}
    />
    <SceneLayer
      src="/assets/stats/lanterns.webp"
      box={STATS_MOBILE.lanterns}
      className="stats-lanterns"
    />
    <SceneLayer
      src="/assets/stats/recap-2027-mobile.webp"
      box={STATS_MOBILE.recap2027}
      className="stats-arrow"
      fit="contain"
      alt="Watch the 2027 recap"
    />

    <StatsVideo box={STATS_MOBILE.video} />
  </div>
);
