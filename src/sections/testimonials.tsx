import { ResponsiveScene } from "@/components/responsive-scene";
import { TestimonialsSceneMobile } from "@/components/testimonials/testimonials-scene-mobile";

export default function Testimonials() {
  return (
    <section>
      <ResponsiveScene
        /* On desktop the testimonials page is the market inside the recap's
           doorway — it is interactive as the zoom completes, so this section
           is already rendered there. */
        desktop={<div className="h-px" aria-hidden="true" />}
        mobile={
          <div id="testimonials" className="@container bg-[#1b1a26]">
            <h2 className="grid h-[19.4cqw] place-items-center bg-linear-to-b from-[#3d5562] to-[#183f5d] px-4 text-center font-display text-[7.37cqw] leading-none text-white">
              Testimonials
            </h2>
            <TestimonialsSceneMobile />
          </div>
        }
      />
    </section>
  );
}
