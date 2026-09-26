import { DesktopStats } from "@/components/stats/desktop-stats";
import { MobileStats } from "@/components/stats/mobile-stats";

export default function Stats() {
  return (
    <div id="stats" data-motion-scope>
      <div className="hidden md:block">
        <DesktopStats />
      </div>
      <div className="block md:hidden">
        <MobileStats />
      </div>
    </div>
  );
}
