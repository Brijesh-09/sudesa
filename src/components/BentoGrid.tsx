import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/content';

interface BentoGridProps {
  projects: Project[];
  onNavigate: (slug: string) => void;
}

/**
 * Editorial bento grid for the portfolio section.
 * Each project is assigned a bento cell size based on its index,
 * creating a varied, magazine-like layout rather than uniform cards.
 */
export default function BentoGrid({ projects, onNavigate }: BentoGridProps) {
  // Bento layout pattern: large, medium, small, wide, medium, small...
  // Maps each index to a span + aspect ratio configuration
  const bentoConfigs = [
    { colSpan: 'lg:col-span-7', rowSpan: 'lg:row-span-2', aspect: 'aspect-[4/3] lg:aspect-auto' },
    { colSpan: 'lg:col-span-5', rowSpan: '', aspect: 'aspect-[4/3]' },
    { colSpan: 'lg:col-span-5', rowSpan: '', aspect: 'aspect-[4/3]' },
    { colSpan: 'lg:col-span-7', rowSpan: 'lg:row-span-2', aspect: 'aspect-[4/3] lg:aspect-auto' },
    { colSpan: 'lg:col-span-6', rowSpan: '', aspect: 'aspect-[16/10]' },
    { colSpan: 'lg:col-span-6', rowSpan: '', aspect: 'aspect-[16/10]' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
      {projects.map((project, i) => {
        const config = bentoConfigs[i % bentoConfigs.length];
        return (
          <BentoCard
            key={project.slug}
            project={project}
            colSpan={config.colSpan}
            rowSpan={config.rowSpan}
            aspect={config.aspect}
            onNavigate={onNavigate}
          />
        );
      })}
    </div>
  );
}

interface BentoCardProps {
  project: Project;
  colSpan: string;
  rowSpan: string;
  aspect: string;
  onNavigate: (slug: string) => void;
}

function BentoCard({
  project,
  colSpan,
  rowSpan,
  aspect,
  onNavigate,
}: BentoCardProps) {
  return (
    <article
      onClick={() => onNavigate(project.slug)}
      className={`group relative cursor-pointer overflow-hidden ${colSpan} ${rowSpan} ${aspect}`}
    >
      <img
        src={project.image}
        alt={`${project.name} — ${project.category} interior in ${project.location}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent transition-opacity duration-700 group-hover:from-ink-950/90" />

      {/* Number badge */}
      <div className="absolute left-5 top-5">
        <span className="label-meta text-cream-100/70">{project.number}</span>
      </div>

      {/* Hover arrow */}
      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-cream-100/0 text-cream-100 opacity-0 transition-all duration-700 group-hover:border-cream-100/40 group-hover:opacity-100">
        <ArrowUpRight size={18} strokeWidth={1.5} />
      </div>

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500 lg:text-3xl">
              {project.name}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-cream-300/70">
              <span>{project.category}</span>
              <span className="text-cream-400/30">/</span>
              <span>{project.location}</span>
            </div>
          </div>
          <div className="h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-12" />
        </div>
      </div>
    </article>
  );
}
