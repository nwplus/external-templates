import { ResponsiveScene } from "@/components/responsive-scene";
import { TestimonialsScene } from "@/components/testimonials/testimonials-scene";
import { TestimonialsSceneMobile } from "@/components/testimonials/testimonials-scene-mobile";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <ResponsiveScene
        /* The market is already on screen inside the garage as the recap pin
           ends, so it rises over the last screen of that pin instead of
           waiting for the garage to scroll away. */
        desktop={
          <div className="-mt-[100vh]">
            <TestimonialsScene />
          </div>
        }
        mobile={<TestimonialsSceneMobile />}
      />
    </section>
  );
}
