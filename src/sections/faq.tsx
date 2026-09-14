import FaqRoom from "@/components/faq/faq-room";
import {
  type FaqGroup,
  type FaqItem,
  type FaqLayout,
  layoutFaqs,
} from "@/lib/faq-layout";
import {
  CURRENT_HACKATHON,
  getFAQsByHackathon,
  groupFAQsByCategory,
} from "@/lib/firestore";

/**
 * Firestore docs carry a Timestamp, which is not a plain object and so cannot
 * be passed to the client-side room; keep only the fields it renders.
 */
const toRoomGroup = ({ category, faqs }: FaqGroup): FaqGroup<FaqItem> => ({
  category,
  faqs: faqs.map(({ question, answer }) => ({ question, answer })),
});

/**
 * The FAQ section: the build-time Firestore fetch, then the VHS room. The
 * wall fades into the night sky at the bottom so the cloth band meets the
 * Sponsors section's string lights.
 */
const Faq = async () => {
  const faqs = await getFAQsByHackathon(CURRENT_HACKATHON);
  const placed = layoutFaqs(groupFAQsByCategory(faqs));
  const layout: FaqLayout<FaqItem> = {
    tapestry: placed.tapestry && toRoomGroup(placed.tapestry),
    shelves: placed.shelves.map(toRoomGroup),
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-x-clip bg-linear-to-b from-wall from-80% to-night-top text-cream"
    >
      <h2 className="sr-only">FAQ</h2>
      <FaqRoom layout={layout} />
    </section>
  );
};

export default Faq;
