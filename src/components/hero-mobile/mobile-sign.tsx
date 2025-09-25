import Image from "next/image";

const Sign = ({
  number,
  unit,
  className,
}: {
  number: string | number;
  unit: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <Image src="/assets/hero/sign.svg" alt="sign" width={350} height={200} />
      <div className="absolute left-1/2 -translate-x-1/2 top-[30%] flex flex-col gap-[4vw] items-center font-title text-title">
        <p className="text-[12vw] leading-[0.1vw]">{number}</p>
        <p className="text-[5vw]">{unit}</p>
      </div>
    </div>
  );
};

export default Sign;
