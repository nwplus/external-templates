import { HERO_CTA_LINKS, HERO_TAGLINE, HERO_TITLE } from "@/constants/hero";

import { Countdown } from "./countdown";
import { CtaLink } from "./cta-link";

// TODO(mobile): add illustration layers (clouds, sparkles, house) once assets land
export const MobileHero = () => (
  <div className="relative bg-linear-to-b from-[#0B0F27] to-[#0C1637] text-white">
    <div className="relative z-10 flex flex-col items-center px-6 pt-32 pb-24 text-center">
      <h1 className="font-title text-6xl uppercase">{HERO_TITLE}</h1>
      <h3 className="pt-2 text-lg">{HERO_TAGLINE}</h3>
      <div className="flex flex-col gap-3 pt-8">
        {HERO_CTA_LINKS.map((link) => (
          <CtaLink key={link.label} href={link.href} className="text-xl">
            {link.label}
          </CtaLink>
        ))}
      </div>
      <Countdown compact className="pt-16 text-[14vw]" />
    </div>
  </div>
);
