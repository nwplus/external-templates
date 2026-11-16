import { ResponsiveScene } from "@/components/responsive-scene";
import { TestimonialsScene } from "@/components/testimonials/testimonials-scene";
import { TestimonialsSceneMobile } from "@/components/testimonials/testimonials-scene-mobile";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <ResponsiveScene
        /* The recap's last frame is the market at full width, so the section
           takes over that screen instead of waiting for it to scroll away. */
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
