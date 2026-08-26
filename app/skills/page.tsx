import Navbar from "@/components/layout/navbar";
import SkillCard from "@/components/ui/skill-card";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main className="container-custom py-24">
        <div className="mb-20 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-wider text-blue-600">
            Skills
          </p>

          <h1 className="text-5xl font-bold">
            Tools I use to build and learn.
          </h1>

          <p className="mt-6 text-lg text-(--muted)">
            Technology evolves quickly. These are the tools I&apos;m currently
            building with, comfortable using, and actively exploring.
          </p>
        </div>

        <div className="grid gap-8">
          {skills.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </main>
    </>
  );
}