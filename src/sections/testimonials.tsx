import { ResponsiveScene } from "@/components/responsive-scene";
import { TestimonialsArrival } from "@/components/testimonials/testimonials-arrival";
import { TestimonialsSceneMobile } from "@/components/testimonials/testimonials-scene-mobile";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <ResponsiveScene
        desktop={<TestimonialsArrival />}
        mobile={<TestimonialsSceneMobile />}
      />
    </section>
  );
}
