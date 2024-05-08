import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyle Voisard",
  initials: "KV",
  location: "Charlotte, North Carolina, USA",
  locationLink: "https://www.google.com/maps/place/Charlotte+NC",
  about:
    "Versatile Full Stack Engineer and CTO crafting impactful consumer software products with a focus on innovative user experiences.",
  summary:
    "As CTO at FarOut Guides, my focus is on amplifying our small team by pioneering solutions and steering technological innovation to enhance the outdoor experiences of our users. My decade in tech has seen me transition from engineering in large corporations, with teams of hundreds, to setting the technological direction of a lean company serving hundreds of thousands of users globally. This journey has honed my ability to lead with a team-first, solution-oriented approach, emphasizing scalable product development and fostering innovation across diverse team sizes and company cultures.",
  avatarUrl: "https://faroutguides.com/wp-content/uploads/2021/10/image-3-2-e1634571453191-468x468.png",
  personalWebsiteUrl: "",
  contact: {
    email: "KVoisard@gmail.com",
    tel: "+15135059380",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "The Ohio State University",
      degree: "B.S. Computer Science and Engineering",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "FarOut Guides",
      link: "https://faroutguides.com",
      badges: ["Hybrid"],
      title: "Principal Engineer → Chief Technology Officer",
      logo: "",
      start: "2019",
      end: "Present",
      description:
        "Lead company technical direction, development and maintenance of all distribution platforms (iOS, Android, Web App), and oversee hiring and delivery of development teams. Regularly pitch projects and execute from idea to implementation.",
    },
    {
      company: "Nationwide Insurance",
      link: "https://multiproduct.nationwide.com/multi-quote/getting-started",
      badges: [],
      title: "Intern → Junior Developer → Senior Developer",
      logo: "",
      start: "2013",
      end: "2019",
      description:
        "Grew from fresh college graduate to team lead thanks to mentors and collegues. Worked on diverse systems from legacy mainframe interfaces to (at the time) cutting edge JS frameworks. Successfully pitched and lead a small team to create an iOS companion app for our mainline sales product. Awarded CEO Outstanding Contribution.",
    },
    {
      company: "Arch City Tavern",
      link: "https://archcitytavern.com",
      badges: [],
      title: "Web Solutions Developer",
      logo: "",
      start: "2013",
      end: "2014",
      description:
        "Consulted on digital strategy and developed a custom website, managing all aspects from design to maintenance. Successfully crafted and implemented the company's digital presence, enhancing the tavern's online image and customer engagement.",
    },
  ],
  skills: [
    "Swift",
    "SwiftUI",
    "TypeScript",
    "JavaScript",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Vercel",
    "Supabase",
    "Serverless",
    "AI/ML",
    "Fine-Tuning",
    "Embeddings",
    "RAG",
  ],
  projects: [
    {
      title: "NanoCast",
      techStack: [
        "Side Project",
        "Next.js",
        "Node.js",
        "Vercel",
        "Supabase",
        "OpenAI",
      ],
      description:
        "Consumer product that creates a personalized weekly news brief based on user’s interests delivered in podcast format.",
      logo: "https://www.nanocast.ai/_next/static/media/cover_photo.aa1e6834.png",
      link: {
        label: "nanocast.ai",
        href: "https://nanocast.ai/",
      },
    },
    {
      title: "Usher",
      techStack: [
        "Side Project",
        "Swift",
        "SwiftUI",
        "Pinecone Vector Database",
        "OpenAI",
      ],
      description:
        "iOS chatbot with RAG capabilities to help baseball fans navigate their gameday activities.",
      logo: "",
      link: {
        label: "Usher",
        href: "https://apps.apple.com/in/app/usherai/id6447387944",
      },
    },
    {
      title: "Brief Kinesthesia Test",
      techStack: [
        "Capstone Project",
        "Java",
      ],
      description:
        "Android app  used by hospital researchers to gauge stroke patients’ kinesthetic degradation. Created in partnership with The Ohio State James hospital researchers.",
      logo: "",
      link: {
        label: "BKT",
        href: "",
      },
    },
  ],
} as const;