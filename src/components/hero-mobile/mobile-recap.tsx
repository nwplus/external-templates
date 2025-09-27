import Image from "next/image";

export default function MobileRecap() {
  return (
    <div className="w-full h-[130vh] -mt-[3vh] relative" id="recap-mobile">
      <Image
        src="/assets/hero/mobile/mobile-grass.png"
        width={1000}
        height={1000}
        alt="grass"
        className="object-cover object-[50%_center] h-full"
      />
      <div className="w-full absolute top-[3vh] h-full p-0 flex">
        <Image
          src="/assets/hero/mobile/mobile-recap3.png"
          width={5000}
          height={5000}
          alt="Recap Board"
          className="object-cover object-[90%_center] h-full"
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WXZEhL0T_-4?si=s-myjEY33xI-qGXV"
          title="Hackcamp 2024 recap"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute left-[10%] top-[17%] w-[80%] h-[18%]"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
