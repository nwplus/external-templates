"use client";

import ChalkboardCard from "@/components/sponsors/chalkboard-card";
import DecorationRow from "@/components/sponsors/decoration-row";
import Shelf from "@/components/sponsors/shelf";
import SponsorFrames from "@/components/sponsors/sponsor-frames";
import StringLights from "@/components/sponsors/string-lights";
import {
  CURRENT_HACKATHON,
  type SponsorDoc,
  subscribeToSponsorsByHackathon,
} from "@/lib/firestore";
import { buildShelves } from "@/lib/shelves";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState<SponsorDoc[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToSponsorsByHackathon(
      CURRENT_HACKATHON,
      setSponsors
    );
    return () => unsubscribe();
  }, []);

  const shelves = buildShelves(sponsors);

  return (
    <section
      id="sponsors"
      // Slides up under the FAQ's cloud band by the same 22% of the width the
      // design overlaps them, so the garland's cords come out of the clouds
      // instead of hanging from the top edge of the band.
      className="relative -mt-[22.08%] w-full overflow-visible bg-linear-to-b from-night-top to-night-bottom to-85% pt-[9.28%] text-cream"
    >
      {/* Everything is sized as a share of this box, which is the design's
          own width, so the band keeps its proportions at any viewport. */}
      <div className="mx-auto w-full max-w-[1531px]">
        {/* Sits above the night sky but under the FAQ's clouds, so the
            hanging cords disappear between the scallops. */}
        <StringLights variant="top" className="relative z-[1]" />

        {/* The design hangs the heading inside the lowest reach of the
            garland's glow, so the text block is pulled back up under it. */}
        <div className="relative -mt-[11.9%] flex flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-display text-4xl xl:text-6xl">Sponsors</h2>
          <p className="max-w-[90%] font-body text-base xl:max-w-[64%] xl:text-2xl">
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
          <div className="mt-[4.2%] space-y-[6%] xl:space-y-[8.1%]">
            {shelves.map((shelf) => {
              if (shelf.kind === "decor") {
                return (
                  <Shelf key="decor" className="xl:hidden">
                    <DecorationRow items={shelf.items} />
                  </Shelf>
                );
              }
              if (shelf.kind === "card") {
                return (
                  <Shelf
                    key={`card-${shelf.sponsor.name}`}
                    left={shelf.left}
                    right={shelf.right}
                  >
                    <ChalkboardCard sponsor={shelf.sponsor} />
                  </Shelf>
                );
              }
              return (
                <Shelf
                  key={`frames-${shelf.sponsors.map((s) => s.name).join("|")}`}
                  left={shelf.left}
                  right={shelf.right}
                >
                  <SponsorFrames sponsors={shelf.sponsors} />
                </Shelf>
              );
            })}
          </div>
        )}

        {/* The second garland hangs off the last plank, so it overlaps it. */}
        {/* Hangs over the footer's clouds, which start behind it. */}
        <StringLights
          variant="bottom"
          className={cn(
            "relative z-20",
            shelves.length > 0 ? "-mt-[1.8%] xl:-mt-[3.6%]" : "mt-[6%]"
          )}
        />
      </div>
    </section>
  );
};

export default Sponsors;
