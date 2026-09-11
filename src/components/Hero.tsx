import { ArrowRight, ArrowDown } from 'lucide-react';
import { heroImage } from '@/data/content';

interface HeroProps {
  onNavigate: (to: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury interior designed living space with warm lighting and refined materials"
          className="h-full w-full object-cover animate-scale-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/30 to-ink-950" />
        <div className="absolute inset-0 bg-ink-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-9xl px-6 lg:px-12">
          {/* Label */}
          <div
            className="mb-6 flex items-center gap-3 opacity-0"
            style={{ animation: 'fade-up 1s 0.3s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            <span className="gold-line" />
            <span className="label-meta">
              Interior Design • Architecture • Bespoke Spaces
            </span>
          </div>

          {/* Headline */}
          <h1
            className="max-w-4xl font-serif text-5xl leading-[1.05] text-cream-100 opacity-0 lg:text-8xl"
            style={{ animation: 'fade-up 1.2s 0.5s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Timeless spaces.
            <br />
            <span className="text-cream-400">Designed with intention.</span>
          </h1>

          {/* Supporting text */}
          <p
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-cream-300 opacity-0 lg:text-lg"
            style={{ animation: 'fade-up 1s 0.8s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Creating refined residential, commercial and office interiors where
            functional luxury meets enduring design.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col items-start gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animation: 'fade-up 1s 1s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            <button
              onClick={() => onNavigate('/work')}
              className="btn-gold group"
            >
              Explore Our Work
              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="btn-outline"
            >
              Begin Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: 'fade-in 1s 1.5s forwards' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-ultra text-cream-300/60">
            Scroll to Explore
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-cream-400/20">
            <div className="absolute inset-x-0 top-0 h-4 w-px bg-gold-500 animate-scroll-hint" />
          </div>
          <ArrowDown size={14} strokeWidth={1} className="text-cream-300/40" />
        </div>
      </div>
    </section>
  );
}
