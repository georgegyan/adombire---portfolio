import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({
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
      <h1 className="text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-(--muted)">
        {project.description}
      </p>
    </main>
  );
}