import Image from "next/image";

const Recap = () => {
  // Height in vw so the board (1581×1059 at 82vw ≈ 54.9vw tall) fits at any viewport
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full h-[55vw] overflow-hidden flex flex-col items-center z-40"
      id="recap"
    >
      <Image
        src="/assets/recap/background.png"
        alt="Recap Background"
        width={500}
        height={500}
        className="absolute inset-0 min-w-[105vw] h-full -left-[1vw]"
      />
      <Image
        src="/assets/learn/tree.svg"
        alt="Tree"
        width={200}
        height={800}
        className="absolute -left-[6vw] bottom-[11vw] w-[12vw]"
      />
      <Image
        src="/assets/learn/recapboard2.png"
        alt="Recap Board"
        width={200}
        height={800}
        className="absolute left-[9vw] top-0 w-[82vw]"
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3AQoV3BiRpc?si=s-myjEY33xI-qGXV"
        title="Hackcamp 2025 recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute left-[19vw] top-[13vw] w-[26vw] h-[14.6vw]"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Recap;
