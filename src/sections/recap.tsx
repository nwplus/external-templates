import Image from "next/image";

const Recap = () => {
  // Container min-height based on background image aspect ratio (2125÷1080 = 196.76vh)
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-screen h-screen flex flex-col items-center z-40"
      id="recap"
    >
      <Image
        src="/assets/recap/background.png"
        alt="Recap Background"
        width={500}
        height={500}
        className="absolute inset-0 min-w-[105vw] h-[100vh] top-[0vh] -left-[1vw]"
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
        className="absolute left-[19vw] top-[13vw] w-[26vw] h-[27vh]"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Recap;
