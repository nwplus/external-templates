import { DesktopAbout } from "@/components/about/desktop-about";
import { MobileAbout } from "@/components/about/mobile-about";

export default function About() {
  return (
    <div id="about">
      <div className="hidden md:block">
        <DesktopAbout />
      </div>
      <div className="block md:hidden">
        <MobileAbout />
      </div>
    </div>
  );
}
