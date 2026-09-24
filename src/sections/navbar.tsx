import { DesktopNavbar } from "@/components/navbar/desktop-navbar";
import { MlhBadge } from "@/components/navbar/mlh-badge";
import { MobileNavbar } from "@/components/navbar/mobile-navbar";
import { StickyNavbar } from "@/components/navbar/sticky-navbar";

export default function Navbar() {
  return (
    <>
      <MlhBadge />
      <div className="hidden md:block">
        <DesktopNavbar />
        <StickyNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
