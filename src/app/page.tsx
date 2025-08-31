import HorizontalScrollSection from "@/components/ui/horizontal";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Learn from "@/sections/learn";
import SponsorFooter from "@/sections/sponsor-footer";
import StatsTestimonials from "@/sections/stats-testimonials";
import TenYears from "@/sections/ten-years";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Learn />
    </div>
  );
}
