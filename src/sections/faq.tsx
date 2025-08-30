import Comet from "@/components/faq/comet";
import Firefly from "@/components/faq/firefly";
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

const Faq = async () => {
  const faqs = await getFAQsByHackathon(CURRENT_HACKATHON);
  const faqData = groupFAQsByCategory(faqs);

  return (
    <div className="relative text-white flex flex-col items-center w-full bg-faq-radial">
      <div className="flex flex-col px-32 pt-16 pb-28 gap-8 w-full z-10">
        <h1 className="font-title text-6xl text-center">FAQ</h1>

        <div className="flex justify-center gap-28">
          {Object.entries(faqData).map(
            ([category, faqs]: [string, FAQDoc[]]) => (
              <div key={category} className="flex flex-col gap-6 basis-1/2">
                <h2 className="font-title text-3xl text-center">{category}</h2>

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

      {/* Left side graphics */}
      <Comet className="absolute -top-[4rem] -left-[10rem] opacity-10 rotate-6" />
      <Comet className="absolute top-[3rem] -left-[9rem] opacity-30 rotate-6" />
      <Firefly className="absolute bottom-[18rem] left-[4rem]" />
      <Firefly className="absolute bottom-[11rem] left-[0rem]" />
      <Firefly className="absolute bottom-[2rem] left-[5rem]" />

      {/* Right side graphics */}
      <Comet className="absolute top-[10rem] -right-[10rem] opacity-10 -scale-x-100" />
      <Comet className="absolute top-[17rem] -right-[9rem] rotate-6 -scale-x-100" />
      <Firefly className="absolute bottom-[6rem] right-[8rem]" />
      <Firefly className="absolute bottom-[6rem] right-[2rem]" />
      <Firefly className="absolute bottom-0 right-[8rem]" />
    </div>
  );
};

export default Faq;
