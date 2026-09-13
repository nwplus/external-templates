import { STATS, STATS_TITLE } from "@/constants/stats";

// TODO(mobile): swap the plain values for star illustrations once assets land
export const MobileStats = () => (
  <div className="relative text-white">
    <div className="relative z-10 flex flex-col gap-10 px-6 py-24">
      <h2 className="font-title text-4xl leading-none">{STATS_TITLE}</h2>
      <div className="flex flex-col gap-8">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center"
          >
            <p className="font-title text-6xl leading-none">{stat.value}</p>
            <p className="font-title text-2xl leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
