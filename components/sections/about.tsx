import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section
      id="about"
      className="container-custom section-padding"
    >
      <SectionHeading
        eyebrow="About"
        title="More than just writing code."
        description="My journey is built around learning, building, experimenting, and sharing knowledge."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-(--muted)">
            I am a Computer Science student and software developer from Ghana
            who enjoys turning ideas into practical software.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-(--muted)">
            My interests span web development, backend systems,
            artificial intelligence, product development, cybersecurity,
            and technology education.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-(--muted)">
            I believe the best way to learn is by building real projects,
            documenting the process, and continuously improving.
          </p>
        </div>

        <div className="rounded-3xl border border-(--border) p-8">
          <div className="space-y-4">
            <div>Started</div>
            <div>↓</div>
            <div>Learned</div>
            <div>↓</div>
            <div>Built</div>
            <div>↓</div>
            <div>Shared</div>
            <div>↓</div>
            <div>Building Products</div>
            <div>↓</div>
            <div>What&apos;s Next</div>
          </div>
        </div>
      </div>
    </section>
  );
}