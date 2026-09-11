import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { projects } from '@/data/content';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (to: string) => void;
}

export default function ProjectDetailPage({
  slug,
  onNavigate,
}: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-950">
        <div className="text-center">
          <p className="font-serif text-3xl text-cream-100">Project not found</p>
          <button
            onClick={() => onNavigate('/')}
            className="mt-6 btn-gold"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={`${project.name} — ${project.category} interior in ${project.location}`}
            className="h-full w-full object-cover animate-scale-in"
            style={{ animationFillMode: 'forwards', opacity: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/20 to-ink-950" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-9xl">
            <button
              onClick={() => onNavigate('/work')}
              className="group mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-cream-100/70 transition-colors duration-500 hover:text-gold-500"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:-translate-x-1"
              />
              Back to Work
            </button>
            <p className="label-meta">Project {project.number}</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-cream-100 lg:text-8xl">
              {project.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-widest text-cream-300">
              <span>{project.category}</span>
              <span className="text-cream-400/30">/</span>
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-ink-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="reveal mb-8 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Introduction</span>
          </div>
          <p className="reveal reveal-delay-1 font-serif text-2xl font-light leading-relaxed text-cream-100 lg:text-4xl lg:leading-[1.3]">
            {project.intro}
          </p>
        </div>
      </section>

      {/* Large image */}
      <section className="bg-ink-950 px-6 pb-8 lg:px-12">
        <div className="reveal mx-auto max-w-9xl">
          <div className="image-zoom aspect-[16/9] overflow-hidden">
            <img
              src={project.gallery[1] ?? project.image}
              alt={`${project.name} — interior detail`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Design narrative + details */}
      <section className="bg-ink-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="reveal mb-8 flex items-center gap-3">
                <span className="gold-line" />
                <span className="label-meta">Design Narrative</span>
              </div>
              <p className="reveal reveal-delay-1 text-lg font-light leading-relaxed text-cream-400">
                {project.narrative}
              </p>

              <div className="reveal reveal-delay-2 mt-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="gold-line" />
                  <span className="label-meta">Design Approach</span>
                </div>
                <p className="text-lg font-light leading-relaxed text-cream-400">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Project details sidebar */}
            <div className="lg:col-span-5">
              <div className="reveal reveal-delay-1 border-l border-cream-400/10 pl-8">
                <div className="mb-8 flex items-center gap-3">
                  <span className="gold-line" />
                  <span className="label-meta">Project Details</span>
                </div>
                <dl className="space-y-6">
                  {[
                    { label: 'Type', value: project.details.type },
                    { label: 'Location', value: project.details.location },
                    { label: 'Scope', value: project.details.scope },
                    { label: 'Status', value: project.details.status },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 border-b border-cream-400/10 pb-4"
                    >
                      <dt className="label-meta-muted">{item.label}</dt>
                      <dd className="text-sm text-cream-100">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Material palette */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="gold-line" />
                    <span className="label-meta">Material Palette</span>
                  </div>
                  <ul className="space-y-2">
                    {project.materialPalette.map((mat) => (
                      <li
                        key={mat}
                        className="flex items-center gap-3 text-sm text-cream-400"
                      >
                        <span className="h-1 w-1 bg-gold-500" />
                        {mat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {/* <section className="bg-ink-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-12 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Key Features</span>
          </div>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={feature.label}
                className="reveal group border-t border-cream-400/10 py-8"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={1.5}
                    className="mt-1 text-gold-500"
                  />
                  <div>
                    <p className="label-meta-muted">{feature.label}</p>
                    <p className="mt-2 font-serif text-lg text-cream-100 transition-colors duration-500 group-hover:text-gold-500">
                      {feature.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Image gallery */}
      <section className="bg-ink-900 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-12 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Gallery</span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-5">
            {project.gallery.map((img, i) => {
              const isWide = i === 0 || i === 3;
              const span = isWide ? 'md:col-span-8' : 'md:col-span-4';
              const aspect = isWide ? 'aspect-[16/10]' : 'aspect-[4/3]';
              return (
                <div
                  key={i}
                  className={`reveal image-zoom overflow-hidden ${span}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={aspect}>
                    <img
                      src={img}
                      alt={`${project.name} — gallery image ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-ink-900 px-6 py-24 lg:px-12 lg:py-32">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">In Summary</span>
            <span className="gold-line" />
          </div>
          <p className="font-serif text-2xl font-light italic leading-relaxed text-cream-100 lg:text-4xl lg:leading-[1.3]">
            {project.closingStatement}
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
  headline="Let's create a space worth remembering."
  body="For residences, workplaces and commercial spaces, Sudesa Interiors brings together design, detail and execution to create interiors built to last."
  primaryCta="Start Your Project"
  secondaryCta="Talk to Us"
  onPrimary={() => onNavigate('/contact')}
  phoneNumber="+919XXXXXXXXX"
/>

      {/* Next projects */}
      <section className="bg-ink-950 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-9xl">
          <div className="reveal mb-10 flex items-center gap-3">
            <span className="gold-line" />
            <span className="label-meta">Continue Exploring</span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {otherProjects.slice(0, 2).map((p) => (
              <button
                key={p.slug}
                onClick={() => onNavigate(`/project/${p.slug}`)}
                className="group text-left"
              >
                <div className="image-zoom relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="label-meta">Project {p.number}</p>
                    <h3 className="mt-1 font-serif text-2xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500 lg:text-3xl">
                      {p.name}
                    </h3>
                  </div>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-cream-400 transition-all duration-500 group-hover:translate-x-1 group-hover:text-gold-500"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
