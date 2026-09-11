import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/content';

interface ProjectCardProps {
  project: Project;
  size?: 'large' | 'medium' | 'small';
  onNavigate: (slug: string) => void;
}

export default function ProjectCard({
  project,
  size = 'medium',
  onNavigate,
}: ProjectCardProps) {
  const aspectClass =
    size === 'large'
      ? 'aspect-[4/5] lg:aspect-[5/6]'
      : size === 'small'
        ? 'aspect-[4/3]'
        : 'aspect-[4/5]';

  return (
    <article
      onClick={() => onNavigate(project.slug)}
      className="group cursor-pointer"
    >
      <div className={`image-zoom relative overflow-hidden ${aspectClass}`}>
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} interior in ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90" />

        {/* Number badge */}
        <div className="absolute left-5 top-5">
          <span className="label-meta text-cream-100/70">
            {project.number}
          </span>
        </div>

        {/* Hover arrow */}
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-cream-100/0 text-cream-100 opacity-0 transition-all duration-700 group-hover:border-cream-100/40 group-hover:opacity-100">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500 lg:text-3xl">
            {project.name}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-widest text-muted">
            <span>{project.category}</span>
            <span className="text-cream-400/30">/</span>
            <span>{project.location}</span>
          </div>
        </div>
        <div className="mt-1 h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-12" />
      </div>
    </article>
  );
}
