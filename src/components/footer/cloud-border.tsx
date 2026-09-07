import Image from "next/image";

const CloudBorder = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Image
        src="/assets/footer/cloud-left.svg"
        alt=""
        width={220}
        height={1400}
        className="absolute left-0 top-0 hidden h-full w-auto md:block"
      />
      <Image
        src="/assets/footer/cloud-right.svg"
        alt=""
        width={220}
        height={1400}
        className="absolute right-0 top-0 hidden h-full w-auto md:block"
      />
      <Image
        src="/assets/footer/cloud-bottom.svg"
        alt=""
        width={1440}
        height={260}
        className="absolute bottom-0 left-0 h-auto w-full"
      />
    </div>
  );
};

export default CloudBorder;
