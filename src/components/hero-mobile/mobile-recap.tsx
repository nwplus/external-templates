import Image from "next/image";

export default function MobileRecap() {
  return (
    <div className="w-full h-[130vh] -mt-[3vh] relative">
      <Image
        src="/assets/hero/mobile/mobile-grass.png"
        width={1000}
        height={1000}
        alt="grass"
        className="object-cover object-[50%_center]"
      />
      <div className="w-full absolute top-[3vh] h-[110vh]  p-0">
        <Image
          src="/assets/hero/mobile/mobile-recap.svg"
          width={2000}
          height={2000}
          alt="Recap Board"
          className="object-cover object-[110%_center] inset-0 h-full"
        />
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WXZEhL0T_-4?si=s-myjEY33xI-qGXV"
        title="Hackcamp 2024 recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute left-[14vw] top-[21vh] w-[75vw] h-[20vh]"
        allowFullScreen
      ></iframe>
    </div>
  );
}
