import Image from "next/image";

/**
 * The cloud frame behind the footer: two pillars up the sides and a band across
 * the bottom, all one piece of artwork. On desktop it hangs off both edges by
 * the same amount it does in the design. On the phone it is centred so both
 * pillars reach about 11% of the width in; the phone frame's own placement
 * left the left pillar reaching nearly twice as far in as the right.
 */
const CloudBorder = () => {
  return (
    <Image
      src="/assets/footer/smoke.svg"
      alt=""
      width={1927}
      height={2072}
      className="absolute bottom-0 left-[-7.8%] h-auto w-[114.5%] max-w-none xl:left-[-14.17%] xl:w-[125.84%]"
    />
  );
};

export default CloudBorder;
