import Image from "next/image";

import CloudBorder from "./cloud-border";

/**
 * The bed the two mascots sleep in. The headboard sits behind the bed, a second
 * copy of the cloud frame closes over the blanket so it settles into the
 * clouds, and the glowing stars lie on top of everything.
 *
 * Every offset is a percentage of the surrounding night scene: the base values
 * come from the phone frame, the md ones from the desktop frame.
 */
const BedScene = () => {
  return (
    <>
      <Image
        src="/assets/footer/backboard.svg"
        alt=""
        width={1026}
        height={450}
        className="absolute left-[21.9%] top-[29.5%] h-auto w-[60.8%] max-w-none xl:left-[14.75%] xl:top-[29.67%] xl:w-[67%]"
      />
      <Image
        src="/assets/footer/bed.svg"
        alt=""
        width={1583}
        height={1310}
        className="absolute left-[-8.4%] top-[28.6%] h-auto w-[117%] max-w-none xl:left-[-1.7%] xl:top-[27.17%] xl:w-[103.4%]"
      />
      <CloudBorder />
      <Image
        src="/assets/footer/star-particles.svg"
        alt=""
        width={1166}
        height={578}
        className="absolute left-[16%] top-[42.9%] h-auto w-[71.8%] max-w-none xl:left-[8.67%] xl:top-[47.03%] xl:w-[78.82%]"
      />
    </>
  );
};

export default BedScene;
