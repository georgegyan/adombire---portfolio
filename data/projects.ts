import { Project } from "@/types/project";

export const projects: Project[] = [
  {
      slug: "surviquest",
      title: "SurviQuest",
      description: "Online survey builder platform with response analytics, authentication, and export capabilities.",
      status: "In Development",
      category: "SaaS",
      technologies: [
          "React",
          "Django",
          "JWT",
          "Tailwind CSS",
          "Recharts",
      ],
      problem: "Many organizations and individuals need a simple way to create surveys, collect responses, and analyze feedback without relying on expensive enterprise solutions.",
      solution: "SurviQuest allows users to create surveys, share links, collect responses, and gain insights through analytics dashboards.",
      architecture: "Frontend built with React and Tailwind CSS. Backend powered by Django REST APIs with JWT authentication and analytics processing.",
      challenges: [
        "Designing flexible survey models",
        "Handling response analytics",
        "Building secure authentication",
        "Creating reusable question types",
    ],
      learnings: [
        "API design and integration",
        "Authentication flows",
        "Analytics visualization with Recharts",
        "Full-stack architecture",
      ],
      nextSteps: [
        "AI survey generation",
        "Advanced analytics and reporting",
        "Team collaboration features",
        "Custom branding and theming",
      ]
  },

  {
      slug: "agrolink",
      title: "AgroLink",
      description: "Digital marketplace connecting farmers directly with buyers.",
      status: "Hackathon Project",
      category: "Marketplace",
      technologies: [
          "React",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
      ],
      problem: "Many farmers face challenges in reaching buyers directly, often relying on intermediaries that reduce their profits.",
      solution: "AgroLink provides a direct platform for farmers to list their products and connect with potential buyers, eliminating the need for intermediaries.",
      architecture: "Frontend built with React, backend powered by Node.js and Express, database managed by PostgreSQL with Prisma ORM.",
      challenges: [
          "Ensuring trust and transparency in transactions",
          "Building a scalable marketplace infrastructure",
          "Implementing effective search and recommendation algorithms",
      ],
      learnings: [
          "Full-stack development with modern JavaScript frameworks",
          "Database design and optimization",
          "User experience design for marketplace applications",
      ],
      nextSteps: [
          "Integrating payment processing capabilities",
          "Adding user review and rating systems",
          "Implementing advanced search filters",
      ]
  },

  {
      slug: "ai-recruitment-system",
      title: "AI Recruitment System",
      description: "AI-powered recruitment and interview assessment platform.",
      status: "In Development",
      category: "AI",
      technologies: [
          "ASP.NET Core",
          "React",
          "JWT",
          "SignalR",
      ],
      problem: "Manual recruitment processes are time-consuming and may lead to suboptimal candidate selection.",
      solution: "The AI Recruitment System automates the initial screening process using AI algorithms to match candidates with job requirements more efficiently.",
      architecture: "The system consists of a frontend built with React, a backend powered by ASP.NET Core, and an AI engine for candidate evaluation.",
      challenges: [
          "Ensuring the AI algorithms are fair and unbiased",
          "Integrating the AI system with existing HR workflows",
          "Maintaining data privacy and security",
      ],
      learnings: [
          "Implementing machine learning models for recruitment purposes",
          "Designing user-friendly interfaces for HR professionals",
          "Managing and maintaining AI systems in a production environment",
      ],
      nextSteps: [
          "Expanding the AI capabilities to include more sophisticated assessment criteria",
          "Integrating feedback mechanisms to continuously improve the AI models",
          "Developing mobile applications for on-the-go access to the recruitment platform",
      ]
  },

  {
      slug: "blessed-foundation",
      title: "Blessed Foundation Website",
      description: "Volunteer registration, gallery management, and content platform for a non-profit organization.",
      status: "Completed",
      category: "Web",
      technologies: [
          "Django",
          "React",
      ],
      problem: "Inefficient volunteer management and limited content reach for the non-profit organization.",
      solution: "The Blessed Foundation Website provides a centralized platform for volunteer registration, gallery management, and content sharing to enhance community engagement.",
      architecture: "The website is built with Django for the backend and React for the frontend, ensuring a responsive and user-friendly experience.",
      challenges: [
          "Managing and updating a large volume of content",
          "Ensuring seamless integration with existing volunteer management tools",
          "Optimizing the website for performance and accessibility",
      ],
      learnings: [
          "Content management strategies for non-profit organizations",
          "Frontend development with React for dynamic user interfaces",
          "Backend development with Django for robust application logic",
      ],
      nextSteps: [
          "Implementing advanced search and filtering capabilities",
          "Adding social media integration for broader reach",
          "Developing mobile-responsive design elements",
      ]
  },

  {
      slug: "brainquest-quiz",
      title: "BrainQuest Quiz",
      description: "Interactive quiz platform for educational purposes.",
      status: "Completed",
      category: "Web",
      technologies: [
          "Django",
          "React",
      ],
      problem: "Limited interactivity and engagement in traditional educational quiz formats.",
      solution: "The BrainQuest Quiz platform offers an interactive and engaging experience for users to test their knowledge across various subjects.",
      architecture: "The platform is built with Django for the backend and React for the frontend, ensuring a responsive and user-friendly experience.",
      challenges: [
          "Designing engaging and educational quiz content",
          "Implementing a robust scoring and feedback system",
          "Ensuring the platform is accessible to users with disabilities",
      ],
      learnings: [
          "Creating interactive web applications with React",
          "Developing backend APIs with Django",
          "Implementing user authentication and authorization",
      ],
      nextSteps: [
          "Adding multiplayer features to enhance social learning",
          "Integrating gamification elements to increase user engagement",
          "Developing mobile applications for on-the-go access to the quiz platform",
      ]
  },

  {
      slug: "event-management-system",
      title: "Event Management System",
      description: "Platform for creating, managing, and promoting events.",
      status: "In Development",
      category: "Web",
      technologies: [
          "Django",
          "React",
      ],
      problem: "Inefficient event planning and promotion processes for the organization.",
      solution: "My Event Management System provides a centralized platform for creating, managing, and promoting events, streamlining the entire event lifecycle.",
      architecture: "The system is built with Django for the backend and React for the frontend, ensuring a responsive and user-friendly experience.",
      challenges: [
          "Designing an intuitive user interface for event management",
          "Implementing a robust calendar and scheduling system",
          "Ensuring the platform is accessible to users with disabilities",
      ],
      learnings: [
          "Event planning and coordination strategies",
          "User interface design for web applications",
          "Backend development with Django for handling event data",
      ],
      nextSteps: [
        "Integrating payment processing for event registrations",
        "Adding social media sharing and promotion features",
        "Developing mobile applications for on-the-go event management",
      ]
  },
];