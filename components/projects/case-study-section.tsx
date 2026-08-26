interface Props {
  title: string;
  content: string;
}

export default function CaseStudySection({
  title,
  content,
}: Props) {
  return (
    <section className="mb-16">
      <h2 className="mb-4 text-3xl font-bold">
        {title}
      </h2>

      <p className="max-w-4xl leading-relaxed text-(--muted)">
        {content}
      </p>
    </section>
  );
}