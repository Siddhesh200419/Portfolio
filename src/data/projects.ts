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
  // 🎬 AI Image Based Short Video Generator — Private Repo 🔒
  {
    id: "ai-short-video-generator",
    title: "AI Image Based Short Video Generator",
    description:
      "An AI-powered platform that converts user prompts into complete multimedia short videos using LLM-driven script generation, AI image synthesis, and text-to-speech pipelines with event-driven rendering.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: undefined,
    url: undefined,
    tags: [
      "Google Gemini",
      "LLM",
      "Remotion",
      "Inngest",
      "Text-to-Speech",
      "AI Image Generation",
      "Next.js",
    ],
  },
  // 📊 Social Media Trend Analysis using LLMs — Private Repo 🔒
  {
    id: "social-media-trend-analysis",
    title: "Social Media Trend Analysis using LLMs",
    description:
      "An end-to-end real-time trend intelligence system that ingests Bluesky social data via atproto APIs, applies engagement-weighted trend detection, zero-shot topic classification, and multilingual sentiment analysis to surface actionable insights.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: undefined,
    url: undefined,
    tags: [
      "LLM",
      "DistilBART-MNLI",
      "BERT",
      "atproto",
      "Bluesky",
      "NLP",
      "Sentiment Analysis",
      "Python",
    ],
  },
  // 🌐 Portfolio — Private Repo 🔒
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "A modern personal portfolio website to showcase my projects, skills, and experience with a dark aesthetic and smooth animations.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: undefined,
    url: "https://siddheshgite.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },

  {
  id: "social-media-trend-analysis",
  title: "Trend Pulse - Bluesky Social Media Analytics",
  description:
    "A full-stack application that analyzes Bluesky posts in real-time, detects trends, categorizes topics, and provides sentiment analysis using BERT and Mistral models. Features a Flask REST API backend and a React + Vite frontend with dashboards for trending categories, topic search, and detailed sentiment breakdowns.",
  icon: "/skills/flask.png",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/Siddhesh200419/Social-Media-Trends-Analysis-LLM.git",
  url: undefined,
  tags: [
    "Python",
    "Flask",
    "React.js",
    "Vite",
    "BERT",
    "Mistral",
    "atproto",
    "Bluesky",
    "NLP",
    "Sentiment Analysis",
  ],
},

{
  id: "caneiq-precision-farming",
  title: "CaneIQ - Precision Farming for Sugarcane",
  description:
    "A Flutter mobile app for sugarcane farmers combining on-device AI, field monitoring, and smart farming insights. Features a farm health dashboard, TFLite-powered disease scanner, AI query assistant, weather forecasts, GIS map view, and Marathi localization support.",
  icon: "/skills/flutter.svg", // replace with a Flutter icon path if you have one
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/Siddhesh200419/Cane-IQ_Precision_Sugarcane_Farming.git",
  url: "https://github.com/Siddhesh200419/Cane-IQ_Precision_Sugarcane_Farming.git",
  tags: [
    "Flutter",
    "Dart",
    "TFLite",
    "Riverpod",
    "Hive",
    "GIS",
    "On-device ML",
    "Localization",
  ],
},
];

export default projects;