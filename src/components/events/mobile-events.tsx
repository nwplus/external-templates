import {
  BUILD_DAY,
  EVENTS_DESCRIPTION,
  EVENTS_TITLE,
  LEARN_WEEK,
} from "@/constants/events";

// TODO(mobile): swap the plain cards for sheep illustrations once assets land
export const MobileEvents = () => (
  <div className="relative text-white">
    <div className="relative z-10 flex flex-col gap-10 px-6 py-24">
      <div>
        <h2 className="font-title text-4xl">{EVENTS_TITLE}</h2>
        <p className="pt-4 text-base">{EVENTS_DESCRIPTION}</p>
      </div>

      {[LEARN_WEEK, BUILD_DAY].map((event) => (
        <div key={event.title} className="flex flex-col gap-2">
          <h3 className="font-title text-3xl leading-none">{event.title}</h3>
          <p className="text-lg font-semibold">{event.subtitle}</p>
          <p className="text-base whitespace-pre-line">{event.description}</p>
        </div>
      ))}
    </div>
  </div>
);
