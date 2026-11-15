import Image from "next/image";

/** Top right on every screen: on phones, just left of the menu button (the
 * nwPlus logo has the top-left corner there). */

export const MlhBadge = () => (
  <a
    id="mlh-trust-badge"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=white"
    target="_blank"
    rel="noreferrer"
    className="fixed top-0 right-[calc(13.557vw+12px)] z-[1000] block w-[clamp(60px,6.614vw,120px)] md:right-[5.291vw]"
  >
    <Image
      src="/assets/images/mlhTrustBadgeWhite.svg"
      alt="Major League Hacking 2027 Hackathon Season"
      width={100}
      height={176}
      className="w-full h-auto"
    />
  </a>
);
