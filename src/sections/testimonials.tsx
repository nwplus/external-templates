import { ResponsiveScene } from "@/components/responsive-scene";
import { TestimonialsScene } from "@/components/testimonials/testimonials-scene";
import { TestimonialsSceneMobile } from "@/components/testimonials/testimonials-scene-mobile";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <ResponsiveScene
        desktop={<TestimonialsScene />}
        mobile={<TestimonialsSceneMobile />}
      />
    </section>
  );
}
