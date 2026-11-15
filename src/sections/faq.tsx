import { FaqScene } from "@/components/faq/faq-scene";
import { FaqSceneMobile } from "@/components/faq/faq-scene-mobile";
import { ResponsiveScene } from "@/components/responsive-scene";
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
  const faqs = faqsByCategory(docs);

  return (
    <section id="faq" data-motion-scope className="relative w-full">
      <ResponsiveScene
        desktop={<FaqScene faqs={faqs} />}
        mobile={<FaqSceneMobile faqs={faqs} />}
      />
    </section>
  );
};

export default Faq;
