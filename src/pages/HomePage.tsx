import { ArrowRight, ArrowUpRight, Instagram } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import BentoGrid from '@/components/BentoGrid';
import Statistic from '@/components/Statistic';
import CTASection from '@/components/CTASection';
import ParallaxImage from '@/components/ParallaxImage';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import {
  projects,
  services,
  processSteps,
  achievements,
  studioInfo,
  founderPortrait,
  journalImages,
} from '@/data/content';

interface HomePageProps {
  onNavigate: (to: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <Hero onNavigate={onNavigate} />

      {/* SECTION 2 — BRAND STATEMENT */}
      <section className="bg-ink-950 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-10 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Our Philosophy</span>
          </div>

          <h2 className="reveal reveal-delay-1 font-serif text-3xl leading-[1.2] text-cream-100 lg:text-6xl">
            Design that stands beyond
            <br />
            <span className="text-gold-500">the moment.</span>
          </h2>

          <div className="reveal reveal-delay-2 mt-12 h-px w-24 bg-gold-500/40" />

          <p className="reveal reveal-delay-3 mt-12 max-w-2xl text-lg font-light leading-relaxed text-cream-400 lg:text-xl">
            At Sudesa Interiors, every space is conceived as a balance of
            structure, material, light and function. Our approach avoids
            fleeting trends in favour of interiors that feel relevant today
            and remain compelling for years to come.
          </p>
        </div>
      </section>

      {/* SECTION 3 — 480+ PROJECTS */}
      <section className="border-y border-cream-400/10 bg-ink-900 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-16 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">By the Numbers</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="reveal-left lg:col-span-5">
              <Statistic
                value={480}
                suffix="+"
                label="Projects Delivered"
                large
              />
            </div>

            <div className="reveal-right flex flex-col justify-end gap-10 lg:col-span-7 lg:flex-row lg:items-end lg:gap-12">
              {[
                { label: 'Residential', count: '240+' },
                { label: 'Commercial', count: '140+' },
                { label: 'Office', count: '100+' },
              ].map((item) => (
                <div key={item.label} className="reveal">
                  <span className="block font-serif text-4xl leading-none text-cream-100 lg:text-5xl">
                    {item.count}
                  </span>
                  <p className="mt-3 label-meta-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SELECTED PROJECTS (PREVIEW) */}
      <section
        id="work"
        className="bg-ink-950 px-6 py-28 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-9xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              label="Portfolio"
              title="Selected Work"
              subtitle="A curated selection of spaces shaped by precision, character and purpose."
            />

            <button
              onClick={() => onNavigate('/work')}
              className="reveal reveal-delay-2 group hidden items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-500 transition-colors duration-500 hover:text-cream-100 lg:flex"
            >
              View All Projects

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Bento grid — show first 4 projects as preview */}
          <div className="mt-16">
            <BentoGrid
              projects={projects.slice(0, 4)}
              onNavigate={(slug) => onNavigate(`/project/${slug}`)}
            />
          </div>

          {/* Mobile view-all button */}
          <div className="mt-12 lg:hidden">
            <button
              onClick={() => onNavigate('/work')}
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-500 transition-colors duration-500 hover:text-cream-100"
            >
              View All Projects

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURED PROJECT STORY */}
      <section className="bg-ink-900 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-10 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Featured Project</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Image */}
            <div className="lg:col-span-7">
              <img
                src={projects[0].image}
                alt={`${projects[0].name} — interior design case study`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <p className="reveal reveal-delay-1 label-meta">
                Project {projects[0].number}
              </p>

              <h3 className="reveal reveal-delay-1 mt-4 font-serif text-4xl text-cream-100 lg:text-5xl">
                {projects[0].name}
              </h3>

              <div className="reveal reveal-delay-3 mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-cream-400/10 py-8">
                <div>
                  <p className="label-meta-muted">Type</p>
                  <p className="mt-2 text-sm text-cream-100">
                    {projects[0].details.type}
                  </p>
                </div>

                <div>
                  <p className="label-meta-muted">Location</p>
                  <p className="mt-2 text-sm text-cream-100">
                    {projects[0].details.location}
                  </p>
                </div>

                <div>
                  <p className="label-meta-muted">Scope</p>
                  <p className="mt-2 text-sm text-cream-100">
                    {projects[0].details.scope}
                  </p>
                </div>

                <div>
                  <p className="label-meta-muted">Design Direction</p>
                  <p className="mt-2 text-sm text-cream-100">
                    Warm Oak, Stone, Brass
                  </p>
                </div>
              </div>

              <p className="reveal reveal-delay-4 mt-8 font-serif text-xl font-light italic leading-relaxed text-cream-400">
                "{projects[0].narrative}"
              </p>

              <button
                onClick={() => onNavigate(`/project/${projects[0].slug}`)}
                className="reveal reveal-delay-4 group mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-500 transition-colors duration-500 hover:text-cream-100"
              >
                View Project

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ABOUT PUNIT MISHRA */}
      <section className="bg-ink-950 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Portrait */}
            <div className="reveal-left lg:col-span-5">
              <ParallaxImage
                src={founderPortrait}
                alt={`${studioInfo.founder}, ${studioInfo.founderTitle} at ${studioInfo.name}`}
                className="aspect-[3/4] w-full"
                speed={0.06}
              />
            </div>

            {/* Text */}
            <div className="reveal-right flex flex-col justify-center lg:col-span-7">
              <div className="reveal reveal-delay-1 mb-6 flex items-center gap-3">
                <span className="gold-line" />
                <span className="label-meta">The Founder</span>
              </div>

              <h2 className="reveal reveal-delay-1 font-serif text-4xl leading-[1.15] text-cream-100 lg:text-6xl">
                The Vision Behind Sudesa
              </h2>

              <div className="reveal reveal-delay-2 mt-8">
                <p className="font-serif text-2xl text-gold-500">
                  {studioInfo.founder}
                </p>

                <p className="mt-1 label-meta-muted">
                  {studioInfo.founderTitle}
                </p>
              </div>

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

              <button
                onClick={() => onNavigate('/about')}
                className="reveal reveal-delay-4 group mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-500 transition-colors duration-500 hover:text-cream-100"
              >
                Discover Our Story

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — SERVICES */}
      <section
        id="services"
        className="bg-ink-900 px-6 py-28 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-9xl">
          <SectionHeader
            label="Capabilities"
            title="What We Do"
            subtitle="From the first concept to the final detail, every element is thoughtfully considered."
          />

          <div className="mt-16 grid grid-cols-1 gap-px lg:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={service}
                className="reveal group relative flex items-center justify-between border-b border-cream-400/10 py-6 transition-colors duration-500 hover:bg-ink-800 lg:py-8"
                style={{ transitionDelay: `${(i % 2) * 50}ms` }}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-2xl text-cream-400/30 transition-colors duration-500 group-hover:text-gold-500 lg:text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="font-serif text-xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500 lg:text-2xl">
                    {service}
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-cream-400/0 transition-all duration-500 group-hover:text-gold-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — THE SUDESA APPROACH */}
      <section className="bg-ink-950 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-9xl">
          <SectionHeader label="Methodology" title="Our Approach" />

          <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-5 md:gap-0">
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

                {/* Vertical gold line on hover */}
                <div className="absolute left-0 top-0 h-0 w-px bg-gold-500 transition-all duration-700 group-hover:h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — ACHIEVEMENTS */}
      <section
        id="achievements"
        className="border-y border-cream-400/10 bg-ink-950 px-6 py-28 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-10 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Recognition</span>
          </div>

          <h2 className="reveal reveal-delay-1 font-serif text-4xl leading-[1.1] text-cream-100 lg:text-7xl">
            Built on Experience
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Primary stat */}
            <div className="reveal reveal-delay-2 lg:col-span-5">
              <Statistic
                value={480}
                suffix="+"
                label="Successfully Delivered Projects"
                large
              />
            </div>

            {/* Achievement list */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px">
                {achievements.map((item, i) => (
                  <div
                    key={item.label}
                    className="reveal flex items-center justify-between border-t border-cream-400/10 py-6"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="label-meta text-cream-400">
                      {item.label}
                    </span>

                    <span className="text-sm font-light text-muted italic">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="bg-ink-900 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-9xl">
          <TestimonialCarousel />
        </div>
      </section>

      {/* SECTION 11 — INSTAGRAM / VISUAL JOURNAL */}
      <section className="bg-ink-950 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-9xl">
          <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="gold-line" />
                <span className="label-meta">Visual Journal</span>
              </div>

              <h2 className="font-serif text-4xl text-cream-100 lg:text-6xl">
                From the Studio
              </h2>
            </div>

            <a
              href={studioInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-500 transition-colors duration-500 hover:text-cream-100"
            >
              <Instagram size={16} strokeWidth={1.5} />

              Follow us on Instagram

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Instagram Reel Grid */}
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {journalImages.map((item, i) => (
              <a
                key={i}
                href={item.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-scale image-zoom group relative aspect-square overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={item.preview}
                  alt={`Studio Instagram Reel ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/30" />

                <Instagram
                  size={20}
                  strokeWidth={1.5}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cream-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <CTASection
  headline="Let's create a space worth remembering."
  body="For residences, workplaces and commercial spaces, Sudesa Interiors brings together design, detail and execution to create interiors built to last."
  primaryCta="Start Your Project"
  secondaryCta="Talk to Us"
  onPrimary={() => onNavigate('/contact')}
  phoneNumber="+919XXXXXXXXX"
/>
    </>
  );
}