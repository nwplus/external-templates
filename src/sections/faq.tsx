import Comet, { CometDefs } from "@/components/faq/comet";
import Firefly, { FireflyDefs } from "@/components/faq/firefly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CURRENT_HACKATHON,
  type FAQDoc,
  getFAQsByHackathon,
  groupFAQsByCategory,
} from "@/lib/firestore";

import Image from "next/image";

const FaqDecorationsMobile = () => {
  return (
    <>
      <Firefly className="absolute top-[5rem] left-[3rem] scale-70" />
      <Firefly className="absolute top-[6rem] left-[0rem] scale-70" />
      <Firefly className="absolute top-[9rem] left-[1rem] scale-70" />
      <Comet className="absolute -top-[1rem] -left-[7rem] opacity-10 rotate-6" />
      <Comet className="absolute top-[50%] -left-[9rem] opacity-30 rotate-4" />

      <Comet className="absolute top-[3rem] -right-[9rem] rotate-6 -scale-x-100" />
    </>
  );
};

const FaqDecorationsDesktop = () => {
  return (
    <>
      {/* Left side graphics */}
      <Comet className="absolute -top-[0rem] -left-[10rem] opacity-10 rotate-6" />
      <Comet className="absolute top-[7rem] -left-[9rem] opacity-30 rotate-6" />
      <Firefly className="absolute bottom-[16rem] left-[4rem]" />
      <Firefly className="absolute bottom-[9rem] left-[0rem]" />
      <Firefly className="absolute bottom-[1rem] left-[5rem]" />

      {/* Right side graphics */}
      <Comet className="absolute top-[13rem] -right-[10rem] opacity-10 -scale-x-100" />
      <Comet className="absolute top-[20rem] -right-[9rem] rotate-6 -scale-x-100" />
      <Firefly className="absolute bottom-[6rem] right-[8rem]" />
      <Firefly className="absolute bottom-[6rem] right-[2rem]" />
      <Firefly className="absolute bottom-0 right-[8rem]" />
    </>
  );
};

const Faq = async () => {
  const faqs = await getFAQsByHackathon(CURRENT_HACKATHON);
  const faqData = groupFAQsByCategory(faqs);

  return (
    <div
      className="relative text-white flex flex-col items-center w-full bg-faq-radial"
      id="faq"
    >
      <div className="flex flex-col w-full z-10">
        <Image
          src="/assets/faq/buffer-grass-bottom.png"
          alt="Buffer grass bottom"
          width={1920}
          height={131}
          className="hidden md:block"
        />
        <Image
          src="/assets/faq/buffer-grass-mobile.svg"
          alt="Buffer grass"
          width={1252}
          height={152}
          className="block -mt-16 mb-8 md:hidden"
        />
        <div className="flex flex-col px-8 md:px-32 pb-28 gap-8">
          <h1 className="font-title text-6xl text-center">FAQ</h1>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-28">
            {Object.entries(faqData).map(
              ([category, faqs]: [string, FAQDoc[]]) => (
                <div key={category} className="flex flex-col gap-6 basis-1/2">
                  <h2 className="font-title text-4xl md:text-3xl text-center">
                    {category}
                  </h2>
                  <Accordion type="multiple" className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`}>
                        <AccordionTrigger className="text-lg">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="leading-loose text-slate-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <CometDefs />
        <FireflyDefs />
      </div>
      <div className="absolute inset-0 md:hidden">
        <FaqDecorationsMobile />
      </div>
      <div className="hidden md:absolute md:inset-0 md:block">
        <FaqDecorationsDesktop />
      </div>
    </div>
  );
};

export default Faq;
