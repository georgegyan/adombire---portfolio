import Navbar from "@/components/layout/navbar";
import { contentTopics } from "@/data/content";

export default function ContentPage() {
  return (
    <>
      <Navbar />

      <main className="container-custom py-24">
        {/* Hero */}
        <section className="mb-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-600">
            Content & Learning
          </p>

          <h1 className="text-5xl font-bold lg:text-7xl">
            I build.
            <br />
            I learn.
            <br />
            I share.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-(--muted)">
            Beyond building software, I enjoy documenting what I learn,
            sharing knowledge, and helping others understand technology.
          </p>
        </section>

        {/* Python Handbook */}
        <section className="mb-24">
          <div className="rounded-3xl border border-(--border) p-10">
            <h2 className="mb-4 text-4xl font-bold">
              PythonHandBook
            </h2>

            <p className="mb-6 max-w-3xl text-(--muted)">
              A growing open-source repository containing Python concepts,
              practical examples, and beginner-friendly learning resources.
            </p>

            <a
              href="https://github.com/georgegyan/PythonHandBook"
              target="_blank"
              className="inline-flex rounded-xl bg-(--primary) px-5 py-3 text-white"
            >
              View Repository
            </a>
          </div>
        </section>

        {/* Building in Public */}
        <section className="mb-24">
          <h2 className="mb-8 text-4xl font-bold">
            Building in Public
          </h2>

          <p className="max-w-4xl text-lg leading-relaxed text-(--muted)">
            I believe growth happens through building and sharing.
            Instead of waiting until everything is perfect, I document
            what I learn, share projects publicly, and improve through
            consistent experimentation.
          </p>
        </section>

        {/* Topics */}
        <section className="mb-24">
          <h2 className="mb-8 text-4xl font-bold">
            Topics I Enjoy Sharing
          </h2>

          <div className="flex flex-wrap gap-3">
            {contentTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-(--border) px-4 py-2"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        {/* GitHub */}
        <section>
          <div className="rounded-3xl border border-(--border) p-10">
            <h2 className="mb-4 text-4xl font-bold">
              Code Tells The Story
            </h2>

            <p className="text-(--muted)">
              This section will later connect to the GitHub API to
              display repositories, contribution activity, and recent
              development work.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}