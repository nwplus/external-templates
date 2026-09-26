import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  Timestamp,
  Unsubscribe,
  where,
} from "firebase/firestore";

import { db } from "./firebase";

export interface FAQDoc {
  hackathonIds: string[];
  category: string;
  question: string;
  answer: string;
  lastModified: Timestamp;
  lastModifiedBy: string;
}

export interface SponsorDoc {
  blurb: string;
  imgName: string;
  imgURL: string;
  lastmod?: Timestamp | string;
  lastmodby?: string;
  link: string;
  name: string;
  tier:
    | "title"
    | "platinum"
    | "gold"
    | "silver"
    | "bronze"
    | "startup"
    | "inkind";
}

export const CURRENT_HACKATHON = "HackCamp2026";

/**
 * Fetches FAQ documents from Firestore for a specific hackathon
 * @param hackathonId - The hackathon ID to filter by
 * @returns Promise<FAQDoc[]> - Array of FAQ documents
 */
export async function getFAQsByHackathon(
  hackathonId: string
): Promise<FAQDoc[]> {
  try {
    const faqsRef = collection(db, "FAQ");
    const q = query(
      faqsRef,
      where("hackathonIDs", "array-contains", hackathonId)
    );
    const querySnapshot = await getDocs(q);
    const faqs = querySnapshot.docs.map((doc) => doc.data() as FAQDoc);

    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs from Firestore:", error);
    throw error;
  }
}

/**
 * Groups FAQ documents by category
 * @param faqs - Array of FAQ documents from Firestore
 * @returns Record<string, FAQDoc[]> - FAQs grouped by category
 */
export function groupFAQsByCategory(faqs: FAQDoc[]): Record<string, FAQDoc[]> {
  return faqs.reduce(
    (acc, faq) => {
      if (!acc[faq.category]) acc[faq.category] = [];
      acc[faq.category].push(faq);
      return acc;
    },
    {} as Record<string, FAQDoc[]>
  );
}

/**
 * Fetches sponsor documents from Firestore subcollection for a specific hackathon
 * @param hackathonName - The hackathon name to fetch sponsors for
 * @returns Promise<SponsorDoc[]> - Array of sponsor documents
 */
export async function getSponsorsByHackathon(
  hackathonName: string
): Promise<SponsorDoc[]> {
  try {
    const sponsorsRef = collection(db, "Hackathons", hackathonName, "Sponsors");
    const querySnapshot = await getDocs(sponsorsRef);
    const sponsors = querySnapshot.docs.map((doc) => doc.data() as SponsorDoc);
    return sponsors.map((sponsor) => ({
      ...sponsor,
      lastmod: sponsor.lastmod?.toString(),
    }));
  } catch (error) {
    console.error("Error fetching sponsors from Firestore:", error);
    throw error;
  }
}

/**
 * Subscribes to sponsor documents for a specific hackathon and invokes the
 * provided callback with the latest list whenever data changes.
 * @param hackathonName - The hackathon name to listen for sponsors
 * @param onUpdate - Callback invoked with the latest SponsorDoc[]
 * @param onError - Optional error callback for snapshot listener errors
 * @returns Unsubscribe function to stop listening
 */
export function subscribeToSponsorsByHackathon(
  hackathonName: string,
  onUpdate: (sponsors: SponsorDoc[]) => void
): Unsubscribe {
  const sponsorsRef = collection(db, "Hackathons", hackathonName, "Sponsors");
  return onSnapshot(
    sponsorsRef,
    (snapshot) => {
      const sponsors = snapshot.docs.map((doc) => doc.data() as SponsorDoc);
      onUpdate(sponsors);
    },
    (error) => {
      console.error("Error subscribing to sponsors:", error);
    }
  );
}

/** Raw shape of the `applicationDeadline` field on InternalWebsites/Portal. */
type ApplicationDeadlineRaw =
  | Timestamp
  | Date
  | string
  | number
  | { seconds: number; nanoseconds?: number }
  | null
  | undefined;

const toDeadlineMs = (raw: ApplicationDeadlineRaw): number | null => {
  if (raw == null) return null;
  if (typeof raw === "number") {
    // Firestore Timestamps in seconds are 10 digits; millis are 13.
    const ms = raw < 1_000_000_000_000 ? raw * 1000 : raw;
    return Number.isNaN(ms) ? null : ms;
  }
  if (typeof raw === "string") {
    const ms = new Date(raw).getTime();
    return Number.isNaN(ms) ? null : ms;
  }
  if (raw instanceof Date) {
    const ms = raw.getTime();
    return Number.isNaN(ms) ? null : ms;
  }
  if (typeof (raw as Timestamp).toMillis === "function") {
    return (raw as Timestamp).toMillis();
  }
  if (typeof (raw as { seconds?: unknown }).seconds === "number") {
    const { seconds, nanoseconds } = raw as {
      seconds: number;
      nanoseconds?: number;
    };
    return seconds * 1000 + Math.floor((nanoseconds ?? 0) / 1_000_000);
  }
  return null;
};

/**
 * Live-subscribes to `InternalWebsites/Portal.applicationDeadline` so the hero
 * countdown follows the CMS value without a redeploy. Accepts a Firestore
 * Timestamp (the Portal field type), Date, ISO string, or epoch seconds/millis.
 * Ignores missing/unparseable values so callers keep their fallback deadline.
 */
export function subscribeToApplicationDeadline(
  onUpdate: (deadlineMs: number) => void,
  onError?: (error: unknown) => void
): Unsubscribe {
  const portalRef = doc(db, "InternalWebsites", "Portal");
  return onSnapshot(
    portalRef,
    (snapshot) => {
      const ms = toDeadlineMs(
        snapshot.data()?.applicationDeadline as ApplicationDeadlineRaw
      );
      if (ms !== null) onUpdate(ms);
    },
    (error) => {
      console.error(
        "Error subscribing to InternalWebsites/Portal.applicationDeadline:",
        error
      );
      onError?.(error);
    }
  );
}
