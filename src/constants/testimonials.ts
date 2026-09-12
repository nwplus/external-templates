export interface Testimonial {
  name: string;
  pronouns: string;
  role: string;
  year: string;
  program: string;
  testimonial: string;
  photo: string;
  devpost?: string;
  linkedin?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jonathan Cai",
    pronouns: "he/him",
    role: "Dev",
    year: "2nd year",
    program: "Computer Science • Statistics",
    testimonial:
      "This hackathon was the first time I properly built something all the way through, and that experience gave me a real boost in confidence. It made me feel like I could take on harder problems and actually follow through on ideas I had. That early success encouraged me to join more hackathons and keep exploring things I was curious about. The lessons I learned and the momentum I gained from that project helped me land my first internship. More than anything, it showed me the value of trying new things, even if I don't have everything figured out at the start.",
    photo: "/assets/stats-and-testimonials/testimonials-jonathan.png",
    devpost: "https://devpost.com/software/selectelect",
    linkedin: "https://www.linkedin.com/in/jonathan-cai-843873314/",
  },
  {
    name: "Abdul Khalifa",
    pronouns: "he/him",
    role: "Software/Product",
    year: "1st year",
    program: "BCS",
    testimonial:
      "First hackathon, so things were a bit ambiguous. Once we started tackling the project, and failing quickly - we then got the ball rolling on learning new tech stacks and trying different solutions to get something going. Helped me grow because it was the first experience working collaboratively with a group on a software project - it taught me how to prioritize tasks under a time crunch and how dynamic a software project can be in such a short time. Things change quick. I recommend any beginner to attend as you will be forced to learn new technologies, meet cool people and potentially network your way into a job or interesting role.",
    photo: "/assets/stats-and-testimonials/testimonials-abdul.png",
    devpost: "https://devpost.com/software/sign-mate",
    linkedin: "https://www.linkedin.com/in/abdulkhalifa/",
  },
  {
    name: "Isabella Linde",
    pronouns: "she/her",
    role: "Designer/Developer",
    year: "2nd year",
    program: "Integrated Engineering",
    testimonial:
      "As someone who had been self-learning coding alone up until this hackathon, HackCamp gave me the opportunity to finally work on a project with others, put to practice the concepts I had been learning, and make some really good friends, too! Thank you nwPlus for giving me such an encouraging first hackathon experience!",
    photo: "/assets/stats-and-testimonials/testimonials-isabella.png",
    devpost: "https://devpost.com/software/capcap-8xjrw7",
    linkedin: "https://www.linkedin.com/in/isabellalinde/",
  },
];
