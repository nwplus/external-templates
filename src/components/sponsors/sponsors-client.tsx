"use client";

import ChalkboardCard from "@/components/sponsors/chalkboard-card";
import DecorationRow from "@/components/sponsors/decoration-row";
import Shelf from "@/components/sponsors/shelf";
import SponsorFrames from "@/components/sponsors/sponsor-frames";
import StringLights from "@/components/sponsors/string-lights";
import type { SponsorDoc } from "@/lib/firestore";
import { buildShelves } from "@/lib/shelves";
import { cn } from "@/lib/utils";

import { useEffect, useRef, useState } from "react";

/**
 * The sponsor wall. It renders with the sponsors captured at build time, and
 * once the section comes within a screen or two of the viewport it loads
 * Firestore and follows the live list, so a sponsor added in the CMS still
 * shows up without a redeploy. Loading the SDK on demand keeps its ~450 KB of
 * script off the page's first load.
 */
const SponsorsClient = ({ initial }: { initial: SponsorDoc[] }) => {
  const [sponsors, setSponsors] = useState<SponsorDoc[]>(initial);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    const follow = async () => {
      const { CURRENT_HACKATHON, subscribeToSponsorsByHackathon } =
        await import("@/lib/firestore");
      if (cancelled) return;
      unsubscribe = subscribeToSponsorsByHackathon(
        CURRENT_HACKATHON,
        setSponsors
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        void follow();
      },
      { rootMargin: "1500px 0px" }
    );
    observer.observe(section);

    return () => {
      cancelled = true;
      observer.disconnect();
      unsubscribe?.();
    };
  }, []);

  const shelves = buildShelves(sponsors);

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      data-motion-scope
      // Slides up under the FAQ's cloud band by the same 22% of the width the
      // design overlaps them, so the garland's cords come out of the clouds
      // instead of hanging from the top edge of the band.
      className="relative -mt-[22.08%] w-full overflow-visible bg-linear-to-b from-night-top to-night-bottom to-85% pt-[9.28%] text-cream"
    >
      {/* Where the band comes out from under the clouds (a top margin, since
          only margins take their percentage from the width); the nav lands
          here, held 3.5rem down so the phone's fixed menu button clears it. */}
      <span
        data-scroll-anchor
        aria-hidden="true"
        className="absolute top-0 left-0 mt-[22.08%] scroll-mt-14"
      />
      {/* Everything is sized as a share of the width, so the band keeps the
          design's proportions at any viewport; above the design's 1531px the
          fixed-size type and gaps grow with it too. */}
      <div className="w-full">
        {/* Sits above the night sky but under the FAQ's clouds, so the
            hanging cords disappear between the scallops. */}
        <StringLights variant="top" className="relative z-[1]" />

        {/* The design hangs the heading inside the lowest reach of the
            garland's glow, so the text block is pulled back up under it. */}
        <div className="relative -mt-[11.9%] flex flex-col items-center gap-6 px-6 text-center xl:gap-[max(1.5rem,1.568vw)] xl:px-[max(1.5rem,1.568vw)]">
          <h2 className="font-display text-4xl xl:text-[length:max(3.75rem,3.919vw)]/[1]">
            Sponsors
          </h2>
          <p className="max-w-[90%] font-body text-base xl:max-w-[64%] xl:text-[length:max(1.5rem,1.568vw)]/[1.3333]">
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

        {/* The second garland hangs off the last plank, its cords starting on
            the wood so they read as hung from it; the phone plank is thinner,
            so the garland rides higher there. It hangs over the footer's
            clouds, which start behind it. */}
        <StringLights
          variant="bottom"
          className={cn(
            "relative z-20",
            shelves.length > 0 ? "-mt-[3.4%] xl:-mt-[3.6%]" : "mt-[6%]"
          )}
        />
      </div>
    </section>
  );
};

export default SponsorsClient;
