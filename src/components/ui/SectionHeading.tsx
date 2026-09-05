type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow ? (
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-sans text-2xl font-semibold leading-relaxed text-ink md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="font-serif text-base leading-loose text-ink/80">
          {description}
        </p>
      ) : null}
    </div>
  );
}
