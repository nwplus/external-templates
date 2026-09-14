import { DesktopNavbar } from "@/components/navbar/desktop-navbar";
import { MlhBadge } from "@/components/navbar/mlh-badge";
import { MobileNavbar } from "@/components/navbar/mobile-navbar";

export default function Navbar() {
  return (
    <>
      <MlhBadge />
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
