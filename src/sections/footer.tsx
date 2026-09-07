import BedScene from "@/components/footer/bed-scene";
import CloudBorder from "@/components/footer/cloud-border";
import Contact from "@/components/footer/contact";
import TeamGallery from "@/components/footer/team-gallery";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-night-bottom text-cream"
    >
      <CloudBorder />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-16 md:gap-14">
        <Contact />
        <BedScene />
        <p className="max-w-[80ch] text-center font-body text-xs md:text-base">
          HackCamp 2026 will be taking place on xʷməθkʷəy̓əm (Musqueam) and
          səlilwətaɬ (Tsleil-Waututh) territory. As we build tomorrow&apos;s
          tech community, we recognize our responsibility to understand and
          respect Indigenous histories. To learn more, visit{" "}
          <a
            href="https://guides.library.ubc.ca/xwi7xwaresearchguide"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            xwi7xwa&apos;s Research Guide
          </a>
          .
        </p>
        <TeamGallery />
        <p className="font-body text-sm text-muted-cream">
          Copyright © HackCamp 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
