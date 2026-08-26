import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudySection from "@/components/projects/case-study-section";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="container-custom py-24">
      <div className="mb-20">
        <span className="rounded-full border px-3 py-1 text-sm">
          {project.status}
        </span>

        <h1 className="mt-6 text-6xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-(--muted)">
          {project.description}
        </p>
      </div>

      <CaseStudySection
        title="The Problem"
        content={project.problem}
      />

      <CaseStudySection
        title="The Solution"
        content={project.solution}
      />

      <CaseStudySection
        title="Architecture"
        content={project.architecture}
      />

      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-4 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">
          Challenges
        </h2>

        <ul className="space-y-3">
          {project.challenges.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">
          What I Learned
        </h2>

        <ul className="space-y-3">
          {project.learnings.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          What&apos;s Next
        </h2>

        <ul className="space-y-3">
          {project.nextSteps.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}