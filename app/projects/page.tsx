import { projects } from "@/data/projects";
import Navbar from "@/components/layout/navbar";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="container-custom py-24">
        <div className="mb-20 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-wider text-blue-600">
            Projects
          </p>

          <h1 className="text-5xl font-bold">
            Building ideas into products.
          </h1>

          <p className="mt-6 text-lg text-(--muted)">
            A collection of projects that reflect my learning journey,
            experimentation, and product-building mindset.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </main>
    </>
  );
}
