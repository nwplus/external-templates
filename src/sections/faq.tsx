import Comet from "@/components/faq/comet";
import Firefly from "@/components/faq/firefly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const Faq = () => {
  const faqData: FaqSection[] = [
    {
      title: "General",
      items: [
        {
          question: "What is HackCamp?",
          answer:
            "HackCamp is a beginner-friendly hackathon designed to introduce newcomers to the world of coding and technology. It's a supportive environment where participants can learn, build, and showcase their first projects.",
        },
        {
          question: "When and where is HackCamp being held?",
          answer:
            "HackCamp will be held on [Date] at [Location]. Please check our official website for the most up-to-date information about timing and venue details.",
        },
        {
          question: "Will the entire event be recorded?",
          answer:
            "Portions of the event may be recorded for documentation and promotional purposes. Participants will be notified of any recording activities, and we respect privacy preferences.",
        },
        {
          question: "Who can participate in HackCamp?",
          answer:
            "HackCamp is open to all skill levels, with a special focus on beginners. Whether you're a complete beginner or have some experience, you're welcome to join and learn.",
        },
        {
          question: "What if I've never been to a hackathon before?",
          answer:
            "Perfect! HackCamp is specifically designed for first-time hackers. We provide mentorship, workshops, and resources to help you get started and feel comfortable throughout the event.",
        },
        {
          question:
            "I'm not sure if I've done a hackathon — what counts as one?",
          answer:
            "A hackathon is any event where you build a project within a set timeframe, usually 24-48 hours. If you're unsure, you're probably in the right place! HackCamp welcomes all experience levels.",
        },
        {
          question: "Do I need to attend Learn Day AND Build Night?",
          answer:
            "While we recommend attending both for the full experience, you can choose to attend either Learn Day or Build Night based on your schedule and interests.",
        },
        {
          question: "I've registered/RSVPed but I can no longer attend!",
          answer:
            "Please let us know as soon as possible if you can't attend. This helps us plan better and potentially offer your spot to someone on the waitlist.",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          question: "How do teams work?",
          answer:
            "Teams typically consist of 2-4 people with diverse skills. We'll help facilitate team formation during the event, or you can come with pre-formed teams.",
        },
        {
          question: "When can I start hacking?",
          answer:
            "Official hacking begins during Build Night. However, you can start brainstorming and planning your project ideas anytime!",
        },
        {
          question: "What about prizes?",
          answer:
            "We have various prizes for different categories including Best Beginner Project, Most Creative Solution, and more. All participants receive swag and certificates.",
        },
        {
          question: "How many prizes can my team win?",
          answer:
            "Teams can win multiple prizes if their project excels in different categories. However, the main prizes are typically limited to one per team.",
        },
        {
          question: "Can I submit/work on previous projects?",
          answer:
            "Projects should be built during the hackathon timeframe. You can use existing libraries and frameworks, but the core project should be new work.",
        },
        {
          question:
            "Can I submit projects from hackathons other than HackCamp?",
          answer:
            "No, submissions should be projects created specifically during HackCamp. This ensures fairness and aligns with the learning objectives of the event.",
        },
        {
          question: "Can I submit a prototype? e.g Figma, website builders",
          answer:
            "Yes! Prototypes, mockups, and proof-of-concepts are welcome. We value the learning process and creative thinking behind your ideas.",
        },
      ],
    },
  ];

  return (
    <div className="relative text-white flex flex-col items-center min-h-screen w-full bg-faq-radial">
      <div className="flex flex-col px-32 pt-16 pb-28 gap-8 w-full z-10">
        <h1 className="font-title text-6xl text-center">FAQ</h1>

        <div className="flex justify-center gap-28">
          {faqData.map((section) => (
            <div key={section.title} className="flex flex-col gap-6 basis-1/2">
              <h2 className="font-title text-3xl text-center">
                {section.title}
              </h2>

              <Accordion type="multiple" className="flex flex-col gap-4">
                {section.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.title}-${index}`}
                  >
                    <AccordionTrigger className="text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-loose text-slate-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
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
