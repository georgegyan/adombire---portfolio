export interface Project {
  slug: string;
  title: string;
  description: string;
  status: string;
  category: string;
  technologies: string[];

  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  learnings: string[];
  nextSteps: string[];

  github?: string;
  liveUrl?: string;
}