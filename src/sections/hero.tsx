import { DesktopHero } from "@/components/hero/desktop-hero";
import { MobileHero } from "@/components/hero/mobile-hero";

export default function Hero() {
  return (
    <div id="hero" data-motion-scope>
      <div className="hidden md:block">
        <DesktopHero />
      </div>
      <div className="block md:hidden">
        <MobileHero />
      </div>
    </div>
  );
}
