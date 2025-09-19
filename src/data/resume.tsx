import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alisha Tripathi",
  initials: "",
  url: "https://alisha-portfolio.vercel.app",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer specializing in building scalable web applications with modern frontend and backend technologies.",
  summary:
    "I’m a Full Stack Developer passionate about building scalable web and decentralized platforms. I’ve contributed to open-source projects, led web development for college tech festivals and communities, and engineered innovative solutions like ResourceX, a decentralized GPU-sharing platform. I thrive at the intersection of technology, product development, and community engagement.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tripathialisha03@gmail.com",
    tel: "+918109082272",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alisha3693",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alisha-tripathi-b4591a2a5/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ECell Website Team",
      href: "https://ecell.iiitnr.ac.in/esummit",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/esummit.png",
      start: "May 2024",
      end: "Mar 2025",
      description:
        "Implemented responsive UI, optimized assets, reducing page load time by 35% and improving mobile rendering by 50%.",
    },
    {
      company: "GSSOC",
      badges: [],
      href: "",
      location: "Remote",
      title: "Open Source",
      logoUrl: "/gssoc.jpeg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Explored and contributed to diverse open-source codebases, raising pull requests across multiple projects. Gained hands-on experience with Git, CI/CD pipelines, and community-driven development.",
    },
  ],
  education: [
    {
      school: "IIIT Naya Raipur",
      href: "https://www.iiitnr.ac.in/",
      degree: "B.Tech Computer Science",
      logoUrl: "/iiit.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "ResourceX",
      href: "",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Developed a secure peer-to-peer GPU exchange with passwordless SSH authentication, integrated Tailscale VPN for low-latency connections, and designed a Docker sandbox with configurable resource limits. Built a job scheduler for 100+ concurrent tasks and applied Gemini-based ML code analysis achieving 90%+ anomaly detection accuracy.",
      technologies: [
        "React.js",
        "Next.js",
        "Typescript",
        "MongoDB",
        "Docker",
        "SSH",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
        "Accernity UI",
        "Vanta Js",
      ],
      links: [],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/resourcex.png",
      video: undefined,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "",
      dates: "2024",
      active: true,
      description: "Ed Tech Platform with stress management",
      technologies: [
        "React.js",
        "Node.js",
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://magicui.design",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/magicuidesign/magicui",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      image: "/zenlearn.png",
      video: undefined,
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Technovate Fest",
      href: "https://technovate2025.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Built and deployed the Technovate Fest website with responsive design, secure online payments for 1000+ tickets, and an admin dashboard for real-time tracking, improving user experience and reducing manual effort by 40%.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://technovate2025.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alisha3693/Technovate2025",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/technovate.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Jungle Safari-Smart Inventory Management System",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "ungle Safari Naya Raipur was our hackathon sponsor at that time where we build an Inventory Management system an e-commerce marketplace , AI powered  sentiment Analysis of user feedback, also key feature as VR store version of E-commerce marketplace",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://automatic.chat",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/jungle.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Byte 3.0 – Midnight Blockchain Track",
      dates: "2024",
      location: "IIIT Jabalpur",
      description: "Winner of the Midnight Blockchain Track.",
      win: "Winner",
      links: [],
    },
    {
      title: "Hack-o-Harbor Hackathon",
      dates: "2024",
      location: "IIIT Naya Raipur",
      description: "Developed projects leading to runner-up position.",
      win: "Runner-up",
      links: [],
    },
    {
      title: "DSU Dev Hack 2.0 – MongoDB Track",
      dates: "2024",
      location: "Bengaluru",
      description: "Built MongoDB-powered projects and won the track.",
      win: "Winner",
      links: [],
    },
    {
      title: "CodeHer, Bit2Byte-IIITNR",
      dates: "2024",
      location: "IIIT Naya Raipur",
      description: "Won the Competetive Programming Contest.",
      win: "Winner",
      links: [],
    },
    {
      title: "TOP 5 at Industry Academia Meet (IAM), IIIT-NR",
      dates: "2024",
      location: "IIIT Naya Raipur",
      description: "",
      links: [
        {
          title: "Website",
          href: "https://ecell.iiitnr.ac.in/esummit",
        },
      ],
    },
  ],
} as const;
