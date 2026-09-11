interface CTASectionProps {
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  phoneNumber?: string;
}

export default function CTASection({
  headline,
  body,
  primaryCta,
  secondaryCta,
  onPrimary,
  phoneNumber,
}: CTASectionProps) {
  return (
    <section className="bg-ink-950 px-6 py-28 lg:px-12 lg:py-40">
      <div className="reveal mx-auto max-w-5xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="gold-line" />
          <span className="label-meta">Let's Begin</span>
          <span className="gold-line" />
        </div>

        <h2 className="font-serif text-4xl leading-[1.15] text-cream-100 lg:text-7xl">
          {headline}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-cream-400">
          {body}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={onPrimary} className="btn-gold">
            {primaryCta}
          </button>

          {secondaryCta && phoneNumber && (
            <a
              href={`tel:${phoneNumber}`}
              className="btn-outline"
            >
              {secondaryCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}