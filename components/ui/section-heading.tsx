interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-(--muted)">
          {description}
        </p>
      )}
    </div>
  );
}