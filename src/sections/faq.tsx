import { FaqScene } from "@/components/faq/faq-scene";
import { faqsByCategory } from "@/lib/faq";
import {
  CURRENT_HACKATHON,
  type FAQDoc,
  getFAQsByHackathon,
} from "@/lib/firestore";

/**
 * The FAQ section: questions fetched from Firestore at build time (any tank
 * with none falls back to the design's copy, and so does a failed fetch),
 * then the aquarium.
 */
const Faq = async () => {
  let docs: FAQDoc[] = [];
  try {
    docs = await getFAQsByHackathon(CURRENT_HACKATHON);
  } catch {
    // Logged in getFAQsByHackathon; the fallback copy keeps the build going.
  }

  // TODO(mobile): phone layout once designed
  return (
    <section id="faq" data-motion-scope className="relative w-full">
      <FaqScene faqs={faqsByCategory(docs)} />
    </section>
  );
};

export default Faq;
