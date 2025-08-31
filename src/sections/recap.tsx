import Image from "next/image";

const Recap = () => {
  // Container min-height based on background image aspect ratio (2125÷1080 = 196.76vh)
  return (
    <div className="relative bg-[url('/assets/recap/background.png')] bg-cover bg-center bg-no-repeat w-screen h-screen flex flex-col items-center">
      <Image
        src="/assets/learn/tree.svg"
        alt="Tree"
        width={200}
        height={800}
        className="absolute -left-[6vw] bottom-[11vw] w-[12vw]"
      />
      Recap
    </div>
  );
};

export default Recap;
