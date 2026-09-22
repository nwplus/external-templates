import SponsorsClient from "@/components/sponsors/sponsors-client";
import {
  CURRENT_HACKATHON,
  type SponsorDoc,
  getSponsorsByHackathon,
} from "@/lib/firestore";

/**
 * Sponsors are read once at build time so the wall is part of the static
 * HTML; `SponsorsClient` then keeps it live in the browser.
 */
const Sponsors = async () => {
  let initial: SponsorDoc[] = [];
  try {
    initial = await getSponsorsByHackathon(CURRENT_HACKATHON);
  } catch (error) {
    // The wall still renders and goes live in the browser; it just starts
    // empty if Firestore could not be reached during the build.
    console.warn("Could not read sponsors at build time:", error);
  }

  return <SponsorsClient initial={initial} />;
};

export default Sponsors;
