import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "surviquest",
    title: "SurviQuest",
    description:
      "Online survey builder platform with response analytics, authentication, and export capabilities.",
    status: "In Development",
    category: "SaaS",
    technologies: [
      "React",
      "Django",
      "JWT",
      "Tailwind CSS",
      "Recharts",
    ],
  },

  {
    slug: "agrolink",
    title: "AgroLink",
    description:
      "Digital marketplace connecting farmers directly with buyers.",
    status: "Hackathon Project",
    category: "Marketplace",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
  },

  {
    slug: "ai-recruitment-system",
    title: "AI Recruitment System",
    description:
      "AI-powered recruitment and interview assessment platform.",
    status: "In Development",
    category: "AI",
    technologies: [
      "ASP.NET Core",
      "React",
      "JWT",
      "SignalR",
    ],
  },

  {
    slug: "blessed-foundation",
    title: "Blessed Foundation Website",
    description:
      "Volunteer registration, gallery management, and content platform for a non-profit organization.",
    status: "Completed",
    category: "Web",
    technologies: [
      "Django",
      "React",
    ],
  },

  {
    slug: "brainquest-quiz",
    title: "BrainQuest Quiz",
    description:
      "Interactive quiz platform for educational purposes.",
    status: "Completed",
    category: "Web",
    technologies: [
      "Django",
      "React",
    ],
  },

  {
    slug: "event-management-system",
    title: "Event Management System",
    description:
      "Platform for creating, managing, and promoting events.",
    status: "In Development",
    category: "Web",
    technologies: [
      "Django",
      "React",
    ],
  },
];