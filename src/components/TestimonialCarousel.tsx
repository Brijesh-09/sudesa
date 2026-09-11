import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/content';

/**
 * Horizontally scrollable testimonial carousel.
 * Shows multiple cards in a row with drag/scroll and arrow controls.
 * Designed to accommodate any number of reviews.
 */
export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector('figure')?.offsetWidth ?? 400;
    const gap = 48;
    const distance = cardWidth + gap;
    container.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Controls */}
      <div className="reveal mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="gold-line" />
          <span className="label-meta">Client Voices</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="flex h-11 w-11 items-center justify-center border border-cream-400/20 text-cream-100 transition-colors duration-500 hover:border-gold-500 hover:text-gold-500"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex h-11 w-11 items-center justify-center border border-cream-400/20 text-cream-100 transition-colors duration-500 hover:border-gold-500 hover:text-gold-500"
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-12 overflow-x-auto pb-4 lg:gap-12"
      >
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="reveal flex w-[85vw] shrink-0 snap-center flex-col sm:w-[420px] lg:w-[480px]"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <Quote size={32} strokeWidth={1} className="text-gold-500/40" />
            <blockquote className="mt-6 flex-1 font-serif text-xl font-light italic leading-relaxed text-cream-100 lg:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-cream-400/10 pt-6">
              <p className="text-sm text-cream-100">{t.name}</p>
              <p className="mt-1 label-meta-muted">{t.project}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-ultra text-muted">
        <div className="h-px w-12 bg-cream-400/20" />
        <span>Scroll for more reviews</span>
      </div>
    </div>
  );
}
