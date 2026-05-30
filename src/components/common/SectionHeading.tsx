interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

