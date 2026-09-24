export interface Testimonial {
  name: string;
  pronouns: string;
  role: string;
  year: string;
  program: string;
  testimonial: string;
  devpost?: string;
  linkedin?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Wakana Kuwayama",
    pronouns: "",
    role: "Designer/Developer",
    year: "3rd year",
    program: "",
    testimonial:
      "HackCamp was my very first hackathon, and I went in with no idea what to expect. That ended up being the best part! My team learned everything as we went, we celebrated every small win, and had so much fun building something together that weekend. I also loved meeting so many other beginner hackers and swapping ideas with people who were just as new and excited as I was. That experience is what got me psyched about tech and pushed me to keep exploring it beyond the classroom. The energy and community stuck with me so much that I ended up even joining nwPlus to help create that experience for the next group of hackers!",
  },
  {
    name: "Sabrina Yuan",
    pronouns: "",
    role: "Designer/Developer",
    year: "3rd year",
    program: "",
    testimonial:
      "HackCamp was my first hackathon and it set the bar really high for any hackathon I'll do in the future. The workshops were made for beginners, which really helped since I didn't have much experience going in, and I learned so much from all the different topics they covered. Building a project in one weekend gave me the chance to see what I could actually do under pressure, and after the event I kept working on projects on my own. It also gave me something to add to my resume, which helped a lot since I didn't have many projects on there before.",
  },
  {
    name: "Sunny Su",
    pronouns: "",
    role: "UI/UX Designer",
    year: "2nd year",
    program: "",
    testimonial:
      "With no prior hackathon experience or idea of what a hackathon entails, participating in HackCamp gave me the chance to explore something I was curious about while learning new skills and making new friends. I came across the event by chance in my first year, and being curious, intrigued, and a little scared about what it was all about, I decided to give it a try, and I am glad I did. Working through the night with friends, going through trial and error, and learning together as we went, we were able to turn an idea into something real. HackCamp showed me that even if something seems intimidating at first, when you are willing to learn, work hard, and give something new a try, you are capable of creating more than you might expect. You never know how much fun you might have while learning something new!",
  },
];
