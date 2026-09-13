import { WELCOME_PARAGRAPHS, WELCOME_TITLE } from "@/constants/about";

import { HackathonFaq } from "./hackathon-faq";

// TODO(mobile): add moon bear / illustration layers once assets land
export const MobileAbout = () => (
  <div className="relative bg-linear-to-b from-[#0C1637] to-[#12204D] text-white">
    <div className="relative z-10 flex flex-col gap-16 px-6 py-24">
      {/* Welcome to HackCamp */}
      <div>
        <h2 className="font-title text-4xl">{WELCOME_TITLE}</h2>
        {WELCOME_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className="pt-4 text-base">
            {paragraph}
          </p>
        ))}
      </div>

      {/* What is a hackathon */}
      <HackathonFaq className="flex flex-col [&_h2]:text-4xl [&_p]:text-base" />
    </div>
  </div>
);
