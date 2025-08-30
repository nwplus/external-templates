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
