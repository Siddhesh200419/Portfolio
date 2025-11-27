import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "zomato-clone-mern",
    title: "Food Ordering Platform (MERN)",
    description:
      "A full-stack food ordering and delivery platform with separate user, admin, and backend services built on the MERN stack.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/Zomato_Clone_Mern",
    url: "https://zomato-clone-mern-frontend.onrender.com",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RBAC"],
  },
  {
    id: "bookworm-fullstack",
    title: "Book Sharing App",
    description:
      "A full-stack book sharing application with a Node/Express + MongoDB backend and an Expo mobile client for posting and managing books.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/React-Native-BookWorm.git",
    url: "https://github.com/Siddhesh200419/React-Native-BookWorm.git",
    tags: ["Node.js", "Express.js", "MongoDB", "React Native", "Expo", "JWT"],
  },
  {
    id: "weather-app-expo",
    title: "Weather App (Expo)",
    description:
      "A cross-platform weather app built with Expo and React Native that supports city search, current conditions, and 7-day forecasts.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/Weather-App.git",
    url: "https://github.com/Siddhesh200419/Weather-App.git",
    tags: ["React Native", "Expo", "NativeWind", "Axios", "AsyncStorage"],
  },
  {
    id: "startup-pitch-hub",
    title: "Startup Pitch Hub",
    description:
      "A modern Next.js application for creating, browsing, and searching startup ideas with GitHub auth and Sanity-backed content.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/Startup-App.git",
    url: "https://startup-app-ruddy.vercel.app/",
    tags: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS", "Auth.js"],
  },
  {
    id: "wanderlust-node",
    title: "Property Listings Platform",
    description:
      "A server-rendered Node.js and Express application for creating, browsing, and reviewing property listings with authentication and image uploads.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/Major-Project.git",
    url: "https://github.com/Siddhesh200419/Major-Project.git",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport", "Cloudinary"],
  },
  {
    id: "swiggy-clone-react",
    title: "Food Delivery UI",
    description:
      "A React and Redux-based food delivery interface that consumes Swiggy APIs for restaurant browsing, menu viewing, and cart management.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/Swiggy.git",
    url: "https://swiggy-beta-olive.vercel.app",
    tags: ["React.js", "Redux", "Tailwind CSS", "REST API", "Vercel"],
  },
  // 🔥 Chatty – realtime chat app
  {
    id: "chatty-mern-realtime",
    title: "Realtime Chat App (MERN)",
    description:
      "A real-time chat application with authentication, online status, image sharing, and Socket.io-based messaging built on the MERN stack.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Siddhesh200419/Chat-App",
    url: "https://chatty-frontend-i6cv.onrender.com",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Cloudinary",
      "JWT",
      "Zustand",
    ],
  },
  // 🌐 Portfolio — Private Repo 🔒
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "A modern personal portfolio website to showcase my projects, skills, and experience with a dark aesthetic and smooth animations.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private, // 📌 Private!
    projectType: ProjectType.Personal,
    githubUrl: undefined, // ❌ No link exposed
    url: "https://siddheshgite.vercel.app", // keep your real deployed URL
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];

export default projects;
