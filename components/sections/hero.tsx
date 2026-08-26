import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container-custom py-20 lg:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <div>
          <div className="mb-6 inline-flex rounded-full border border-(--border) px-4 py-2 text-sm">
            SOFTWARE DEVELOPER • BUILDER • TECHNOLOGY ENTHUSIAST
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight lg:text-7xl">
            Building software,
            <br />
            exploring AI,
            <br />
            and sharing the journey.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-(--muted)">
            Computer Science student, developer, and founder of AdoStack Axis.
            I build web applications, experiment with AI, create educational
            technology content, and document what I learn along the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-(--primary) px-6 py-3 text-white font-medium"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-(--border) px-6 py-3 font-medium"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Architecture Card */}
          <div className="absolute -left-10 top-10 hidden w-52 rounded-2xl border border-(--border) bg-(--card) p-4 shadow-lg lg:block">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-(--muted)">
              System Flow
            </p>

            <div className="space-y-2 text-sm">
              <div>Frontend</div>
              <div>↓</div>
              <div>API Layer</div>
              <div>↓</div>
              <div>Database</div>
              <div>↓</div>
              <div>AI Services</div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mx-auto overflow-hidden rounded-3xl border border-(--border) bg-(--card) p-3 shadow-xl">
            <Image
              src="/images/profile.jpeg"
              alt="Adombire George Gyan Kwame"
              width={700}
              height={800}
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}