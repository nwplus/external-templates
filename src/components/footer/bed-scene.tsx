import Image from "next/image";

const BedScene = () => {
  return (
    <div aria-hidden className="pointer-events-none mx-auto w-full md:w-[70%]">
      <Image
        src="/assets/footer/bed.svg"
        alt=""
        width={1000}
        height={820}
        className="h-auto w-full"
      />
    </div>
  );
};

export default BedScene;
