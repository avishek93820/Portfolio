interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-14 md:mb-16">
      <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-3">
        {label}
      </span>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
