import BedScene from "@/components/footer/bed-scene";
import CloudBorder from "@/components/footer/cloud-border";
import Contact from "@/components/footer/contact";
import StarField from "@/components/footer/star-field";
import TeamGallery from "@/components/footer/team-gallery";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-10 -mt-[26.6%] w-full overflow-hidden bg-night-bottom text-cream-soft"
    >
      {/*
        The night scene keeps the proportions it has in the design: a box as
        wide as the footer and roughly 1.35x as tall, pinned to the bottom edge.
        Everything inside is placed as a percentage of that box, so the clouds,
        the bed and the stars never drift apart from one another.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[10vw] left-1/2 aspect-[1531/2065] w-full max-w-[1531px] -translate-x-1/2 xl:bottom-0"
      >
        <CloudBorder />
        <BedScene />
        <StarField />
      </div>

      {/*
        The phone frame puts the land acknowledgement above the bed and the
        desktop frame puts it below, so the two orders are set with `order`
        rather than duplicated markup.
      */}
      <div className="relative z-10 mx-auto flex min-h-[145vw] w-full max-w-[1531px] flex-col items-center px-6 pt-[22%] xl:min-h-0 xl:pt-[17.2%]">
        <Contact />

        <p className="order-2 max-w-[67%] text-center font-body text-base leading-relaxed xl:order-4 xl:max-w-[81%] xl:text-xl">
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

        {/* Holds open the space the bed fills in the scene behind. */}
        <div
          aria-hidden
          className="order-3 w-full flex-1 pb-[84%] xl:flex-none xl:pb-[72.8%]"
        />

        <div className="order-5 mt-[2%] w-full xl:mt-[4.6%]">
          <TeamGallery />
        </div>

        <p className="order-6 mb-[5.1%] mt-[3.4%] font-body text-lg font-bold text-white xl:mb-[2.2%] xl:mt-[0.5%]">
          Copyright © HackCamp 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
