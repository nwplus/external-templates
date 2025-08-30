import Image from "next/image";

const Sign = ({
  number,
  unit,
  className,
}: {
  number: number;
  unit: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <Image src="/assets/hero/sign.svg" alt="sign" width={350} height={200} />
      <div className="absolute left-1/2 -translate-x-1/2 top-[3.5vw] flex flex-col gap-[2vw] items-center font-title text-title">
        <p className="text-[4.5vw] leading-[0.1vw]">{number}</p>
        <p className="text-[1.5vw]">{unit}</p>
      </div>
    </div>
  );
};

export default Sign;
