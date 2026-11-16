import { ResponsiveScene } from "@/components/responsive-scene";
import { TestimonialsScene } from "@/components/testimonials/testimonials-scene";
import { TestimonialsSceneMobile } from "@/components/testimonials/testimonials-scene-mobile";

export default function Testimonials() {
  return (
    <section>
      <ResponsiveScene
        /* On desktop the testimonials page is the market inside the recap's
           doorway — it is interactive as the zoom completes, so this section
           only carries the anchor. */
        desktop={<div className="h-px" aria-hidden="true" />}
        mobile={<TestimonialsSceneMobile />}
      />
    </section>
  );
}
