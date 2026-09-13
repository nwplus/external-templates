import { DesktopEvents } from "@/components/events/desktop-events";
import { MobileEvents } from "@/components/events/mobile-events";

export default function Events() {
  return (
    <div id="our-events">
      <div className="hidden md:block">
        <DesktopEvents />
      </div>
      <div className="block md:hidden">
        <MobileEvents />
      </div>
    </div>
  );
}
