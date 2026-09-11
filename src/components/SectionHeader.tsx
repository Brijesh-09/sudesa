interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`reveal max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      {label && (
        <div
          className={`mb-6 flex items-center gap-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="gold-line" />
          <span className="label-meta">{label}</span>
        </div>
      )}
      <h2
        className={`font-serif text-4xl leading-[1.1] lg:text-6xl ${
          dark ? 'text-ink-950' : 'text-cream-100'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg font-light leading-relaxed ${
            dark ? 'text-ink-700' : 'text-cream-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
