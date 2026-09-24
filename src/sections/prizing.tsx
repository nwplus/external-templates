import { DesktopPrizing } from "@/components/prizing/desktop-prizing";
import { MobilePrizing } from "@/components/prizing/mobile-prizing";

export default function Prizing() {
  return (
    <div id="prizing" data-motion-scope>
      <div className="hidden md:block">
        <DesktopPrizing />
      </div>
      <div className="block md:hidden">
        <MobilePrizing />
      </div>
    </div>
  );
}
