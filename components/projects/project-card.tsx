import Link from "next/link";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group h-full rounded-3xl border border-(--border) bg-(--card) p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-(--border) px-3 py-1 text-xs">
            {project.category}
          </span>

          <span className="text-sm text-(--muted)">
            {project.status}
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold">
          {project.title}
        </h2>

        <p className="mb-6 text-(--muted)">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}