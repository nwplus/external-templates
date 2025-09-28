import {
  collection,
  getDocs,
  query,
  Timestamp,
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
  lastmod?: Timestamp;
  lastmodby?: string;
  link: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze" | "inkind";
}

export const CURRENT_HACKATHON = "HackCamp2025";

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
    return sponsors;
  } catch (error) {
    console.error("Error fetching sponsors from Firestore:", error);
    throw error;
  }
}

/**
 * Groups sponsor documents by tier with proper ordering
 * @param sponsors - Array of sponsor documents from Firestore
 * @returns Record<string, SponsorDoc[]> - Sponsors grouped by tier
 */
export function groupSponsorsByTier(
  sponsors: SponsorDoc[]
): Record<string, SponsorDoc[]> {
  return sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
      acc[sponsor.tier].push(sponsor);
      return acc;
    },
    {} as Record<string, SponsorDoc[]>
  );
}
