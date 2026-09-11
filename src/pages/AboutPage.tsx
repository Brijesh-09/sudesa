import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import Statistic from '@/components/Statistic';
import {
  studioInfo,
  aboutPageImages,
  processSteps,
  services,
} from '@/data/content';

interface AboutPageProps {
  onNavigate: (to: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutPageImages.hero}
            alt="Sudesa Interiors — luxury interior design studio"
            className="h-full w-full object-cover animate-scale-in"
            style={{ animationFillMode: 'forwards', opacity: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/20 to-ink-950" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-9xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />
              <span className="label-meta">About the Studio</span>
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] text-cream-100 lg:text-8xl">
              A studio built on
              <br />
              <span className="text-cream-400">timeless intent.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ink-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="reveal sticky top-32">
                <div className="mb-6 flex items-center gap-3">
                  <span className="gold-line" />
                  <span className="label-meta">Our Philosophy</span>
                </div>
                <h2 className="font-serif text-4xl leading-[1.15] text-cream-100 lg:text-5xl">
                  Design that stands beyond the moment.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="reveal reveal-delay-1 space-y-6 text-lg font-light leading-relaxed text-cream-400">
                <p>
                  Sudesa Interiors is a design studio founded on the belief that
                  interiors should endure — not just physically, but
                  aesthetically and emotionally. We design spaces that resist
                  the pull of passing trends, favouring a quieter, more
                  considered approach to luxury.
                </p>
                <p>
                  Every project begins with listening. We seek to understand the
                  way our clients live, work and move through space, allowing
                  the design to emerge from real needs rather than imposed
                  style.
                </p>
                <p>
                  The result is interiors that feel inevitable — where
                  structure, material, light and function arrive at a natural
                  balance, and where every detail earns its place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy image */}
      <section className="bg-ink-950 px-6 pb-8 lg:px-12">
        <div className="reveal mx-auto max-w-9xl">
          <div className="image-zoom aspect-[16/9] overflow-hidden">
            <img
              src={aboutPageImages.philosophy}
              alt="Sudesa Interiors — considered interior architecture"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-ink-900 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Portrait */}
            <div className="reveal lg:col-span-5">
              <div className="image-zoom relative aspect-[3/4] overflow-hidden">
                <img
                  src={aboutPageImages.portrait}
                  alt={`${studioInfo.founder}, ${studioInfo.founderTitle}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="reveal reveal-delay-1 mb-6 flex items-center gap-3">
                <span className="gold-line" />
                <span className="label-meta">The Founder</span>
              </div>
              <h2 className="reveal reveal-delay-1 font-serif text-4xl leading-[1.15] text-cream-100 lg:text-6xl">
                {studioInfo.founder}
              </h2>
              <p className="reveal reveal-delay-2 mt-2 label-meta-muted">
                {studioInfo.founderTitle}
              </p>

              <div className="reveal reveal-delay-3 mt-8 space-y-5 text-base font-light leading-relaxed text-cream-400 lg:text-lg">
                <p>
                  Punit Mishra, the visionary Founder and Principal Designer of
                  Sudesa Interiors.
                </p>
                <p>
                  Guided by the firm's defining philosophy of crafting timeless
                  interiors, Punit has quietly orchestrated a design revolution
                  in the city, boasting an extraordinary portfolio of over 480
                  successfully delivered residential, commercial, and office
                  spaces.
                </p>
                <p>
                  Rather than chasing fleeting design fads, his work is
                  celebrated for its structural precision, refined material
                  palettes, and enduring aesthetic appeal.
                </p>
                <p>
                  Whether crafting a high-octane corporate headquarters, a
                  premium retail space, or an intimate luxury residence,
                  Punit's bespoke methodology ensures that every square foot
                  seamlessly fuses functional luxury with longevity — proving
                  that true design excellence doesn't just capture the current
                  moment, it stands the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 480+ stat */}
      <section className="border-y border-cream-400/10 bg-ink-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <Statistic
                value={480}
                suffix="+"
                label="Successfully Delivered Projects"
                large
              />
            </div>
            <div className="reveal reveal-delay-1 flex flex-col justify-center">
              <p className="font-serif text-2xl font-light leading-relaxed text-cream-400 lg:text-3xl">
                Over a decade of designing and delivering residential,
                commercial and office interiors across India — each one guided
                by the same belief that good design should last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / services preview */}
      <section className="bg-ink-900 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <SectionHeader
            label="Expertise"
            title="What We Do"
            subtitle="From the first concept to the final detail, every element is thoughtfully considered."
          />

          <div className="mt-16 grid grid-cols-1 gap-px lg:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={service}
                className="reveal group relative flex items-center justify-between border-b border-cream-400/10 py-6 transition-colors duration-500 hover:bg-ink-800 lg:py-8"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-2xl text-cream-400/30 transition-colors duration-500 group-hover:text-gold-500 lg:text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500 lg:text-2xl">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-ink-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <SectionHeader label="Methodology" title="Our Approach" />

          <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-5">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="reveal group relative border-t border-cream-400/10 py-10 md:py-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="block font-serif text-5xl text-cream-400/20 transition-colors duration-500 group-hover:text-gold-500 lg:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-cream-400">
                  {step.description}
                </p>
                <div className="absolute left-0 top-0 h-0 w-px bg-gold-500 transition-all duration-700 group-hover:h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Let's create a space worth remembering."
        body="For residences, workplaces and commercial spaces, Sudesa Interiors brings together design, detail and execution to create interiors built to last."
        primaryCta="Start Your Project"
        secondaryCta="View Our Work"
        onPrimary={() => onNavigate('/contact')}
        onSecondary={() => onNavigate('/work')}
      />
    </>
  );
}
