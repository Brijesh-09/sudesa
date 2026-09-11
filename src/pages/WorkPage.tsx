import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import BentoGrid from '@/components/BentoGrid';
import CTASection from '@/components/CTASection';
import {
  projects,
  projectCategories,
} from '@/data/content';
import type { ProjectCategory } from '@/data/content';

interface WorkPageProps {
  onNavigate: (to: string) => void;
}

export default function WorkPage({ onNavigate }: WorkPageProps) {
  const [activeCategory, setActiveCategory] = useState<
    'All' | ProjectCategory
  >('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page header */}
      <section className="bg-ink-950 px-6 pt-40 pb-16 lg:px-12 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-8 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Portfolio</span>
          </div>
          <h1 className="reveal reveal-delay-1 font-serif text-5xl leading-[1.05] text-cream-100 lg:text-8xl">
            Selected Work
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg font-light leading-relaxed text-cream-400">
            A curated selection of spaces shaped by precision, character and
            purpose. Each project represents our commitment to interiors that
            feel relevant today and remain compelling for years to come.
          </p>
        </div>
      </section>

      {/* Category filter + bento grid */}
      <section className="bg-ink-950 px-6 pb-28 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-9xl">
          <div className="reveal flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`border px-5 py-2.5 text-[11px] uppercase tracking-ultra transition-all duration-500 ${
                  activeCategory === cat
                    ? 'border-gold-500 bg-gold-500 text-ink-950'
                    : 'border-cream-400/20 text-cream-400 hover:border-cream-400/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-16">
            <BentoGrid
              projects={filteredProjects}
              onNavigate={(slug) => onNavigate(`/project/${slug}`)}
            />
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-cream-400">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Let's create a space worth remembering."
        body="For residences, workplaces and commercial spaces, Sudesa Interiors brings together design, detail and execution to create interiors built to last."
        primaryCta="Start Your Project"
        secondaryCta="Talk to Us"
        onPrimary={() => onNavigate('/contact')}
        onSecondary={() => onNavigate('/contact')}
      />
    </>
  );
}
