import SectionHeading from "@/components/ui/section-heading";

const journey = [
  {
    title: "Foundations",
    description:
      "Learning programming fundamentals and understanding how software works.",
  },
  {
    title: "Web Development",
    description:
      "Exploring HTML, CSS, JavaScript, React, APIs, and databases.",
  },
  {
    title: "Backend & Systems",
    description:
      "Working with Python, Django, authentication systems, APIs, and databases.",
  },
  {
    title: "AI & Modern Development",
    description:
      "Exploring AI-assisted development, LLM integrations, and modern workflows.",
  },
  {
    title: "Building",
    description:
      "Creating real-world applications and experimenting with product ideas.",
  },
  {
    title: "Teaching",
    description:
      "Sharing technology concepts through educational content.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="container-custom section-padding"
    >
      <SectionHeading
        eyebrow="Journey"
        title="Growth through building."
        description="My path has been driven by curiosity, experimentation, and consistent learning."
      />

      <div className="grid gap-6">
        {journey.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-(--border) p-6"
          >
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-(--muted)">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}