"use client";

import ChalkboardCard from "@/components/sponsors/chalkboard-card";
import PictureFrame from "@/components/sponsors/picture-frame";
import Shelf from "@/components/sponsors/shelf";
import StringLights from "@/components/sponsors/string-lights";
import { useMobile } from "@/hooks/use-mobile";
import {
  CURRENT_HACKATHON,
  type SponsorDoc,
  subscribeToSponsorsByHackathon,
} from "@/lib/firestore";
import { buildShelves } from "@/lib/shelves";

import { useEffect, useState } from "react";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState<SponsorDoc[]>([]);
  const { isMobile } = useMobile();

  useEffect(() => {
    const unsubscribe = subscribeToSponsorsByHackathon(
      CURRENT_HACKATHON,
      setSponsors
    );
    return () => unsubscribe();
  }, []);

  const shelves = buildShelves(sponsors, isMobile ? 2 : 3);

  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden bg-linear-to-b from-night-top to-night-bottom text-cream"
    >
      <StringLights variant="top" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl">Sponsors</h2>
        <p className="max-w-[60ch] font-body text-base md:text-xl">
          nwPlus is always looking for new ventures, opportunities, and
          connections. If you are interested in working with us, joining us or
          speaking at one of our events, feel free to reach out to us at{" "}
          <a href="mailto:sponsorship@nwplus.io" className="underline">
            sponsorship@nwplus.io
          </a>
          .
        </p>
      </div>

      {shelves.length > 0 && (
        <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-24">
          {shelves.map((shelf, i) =>
            shelf.kind === "card" ? (
              <Shelf key={i} left={shelf.left} right={shelf.right}>
                <ChalkboardCard sponsor={shelf.sponsor} />
              </Shelf>
            ) : (
              <Shelf key={i} left={shelf.left} right={shelf.right}>
                {shelf.sponsors.map((sponsor) => (
                  <PictureFrame key={sponsor.name} sponsor={sponsor} />
                ))}
              </Shelf>
            )
          )}
        </div>
      )}

      <StringLights variant="bottom" />
    </section>
  );
};

export default Sponsors;
