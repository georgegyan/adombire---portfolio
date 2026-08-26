import Navbar from "@/components/layout/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="container-custom py-24">
        <section className="mb-32">
          <h1 className="text-5xl font-bold lg:text-7xl">
            More than just writing code.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-(--muted)">
            I&apos;m a Computer Science student, software developer, and builder
            from Ghana who enjoys transforming ideas into practical software,
            exploring emerging technologies, and sharing knowledge through
            projects and content.
          </p>
        </section>

        {/* Personal Story */}
        <section className="mb-32">
          <h2 className="mb-8 text-4xl font-bold">
            Personal Story
          </h2>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-(--muted)">
            <p>
              My journey into technology started with curiosity about how
              software works and how digital products are built.
            </p>

            <p>
              Over time, that curiosity evolved into building websites,
              APIs, full-stack applications, and experimenting with
              artificial intelligence.
            </p>

            <p>
              Rather than focusing only on tutorials, I prefer learning
              through building. Every project becomes an opportunity to
              understand a new concept, solve a real problem, and improve
              my skills.
            </p>

            <p>
              Today, my interests sit at the intersection of software,
              artificial intelligence, product development, education,
              and entrepreneurship.
            </p>
          </div>
        </section>

        {/* Journey */}
        <section className="mb-32">
          <h2 className="mb-12 text-4xl font-bold">
            My Journey
          </h2>

          <div className="space-y-6">
            <div className="rounded-3xl border border-(--border) p-8">
              <h3 className="mb-3 text-2xl font-semibold">
                Foundations
              </h3>

              <p className="text-(--muted)">
                Learning programming fundamentals and understanding how
                software systems work.
              </p>
            </div>

            <div className="rounded-3xl border border-(--border) p-8">
              <h3 className="mb-3 text-2xl font-semibold">
                Web Development
              </h3>

              <p className="text-(--muted)">
                Exploring JavaScript, React, APIs, databases, and modern
                frontend development.
              </p>
            </div>

            <div className="rounded-3xl border border-(--border) p-8">
              <h3 className="mb-3 text-2xl font-semibold">
                Backend & Systems
              </h3>

              <p className="text-(--muted)">
                Working with Python, Django, PostgreSQL, authentication,
                APIs, and software architecture.
              </p>
            </div>

            <div className="rounded-3xl border border-(--border) p-8">
              <h3 className="mb-3 text-2xl font-semibold">
                AI & Product Building
              </h3>

              <p className="text-(--muted)">
                Exploring AI-powered applications, SaaS products, and
                modern development workflows.
              </p>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-32">
          <h2 className="mb-8 text-4xl font-bold">
            My Approach
          </h2>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-(--muted)">
            <p>
              Software engineering is more than writing code.
            </p>

            <p>
              For me, it is about understanding problems, designing
              solutions, building products, and continuously improving.
            </p>

            <p>
              Every project is an opportunity to learn something new and
              transform ideas into practical tools that people can use.
            </p>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-32">
          <h2 className="mb-8 text-4xl font-bold">
            What I&apos;m Building Toward
          </h2>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-(--muted)">
            <p>
              My long-term goal is to build products that combine
              software, artificial intelligence, education, and
              entrepreneurship.
            </p>

            <p>
              Through personal projects, educational content, and
              AdoStack Axis, I&apos;m exploring how technology can solve
              real-world problems while helping others learn and grow.
            </p>
          </div>
        </section>

        {/* AdoStack Axis */}
        <section>
          <div className="rounded-3xl border border-(--border) p-10">
            <h2 className="mb-6 text-4xl font-bold">
              AdoStack Axis
            </h2>

            <p className="max-w-3xl text-lg text-(--muted)">
              AdoStack Axis is my technology initiative focused on
              software development, AI solutions, SaaS products,
              educational technology, and digital innovation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}