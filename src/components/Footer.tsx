import { ArrowUpRight } from 'lucide-react';
import { navLinks, studioInfo } from '@/data/content';

interface FooterProps {
  onNavigate: (to: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      onNavigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate(href);
    }
  };

  return (
    <footer className="border-t border-cream-400/10 bg-ink-950">
      <div className="mx-auto max-w-9xl px-6 py-20 lg:px-12 lg:py-28">
        {/* Top — wordmark */}
        <div className="reveal flex flex-col items-start justify-between gap-12 border-b border-cream-400/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <h2 className="font-serif text-5xl text-cream-100 lg:text-7xl">
              Sudesa
            </h2>
            <p className="mt-3 label-meta-muted">Interiors</p>
          </div>
          <p className="max-w-md font-serif text-xl font-light leading-relaxed text-cream-400 lg:text-right">
            Timeless interiors, structural precision, refined materials and
            functional luxury.
          </p>
        </div>

        {/* Middle — links + contact */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Navigation */}
          <div>
            <p className="label-meta mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="group flex items-center gap-1 text-sm text-cream-400 transition-colors duration-500 hover:text-cream-100"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-meta mb-6">Contact</p>
            <ul className="space-y-3 text-sm text-cream-400">
              <li>
                <a
                  href={`tel:${studioInfo.phone.replace(/\s/g, '')}`}
                  className="transition-colors duration-500 hover:text-cream-100"
                >
                  {studioInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="transition-colors duration-500 hover:text-cream-100"
                >
                  {studioInfo.email}
                </a>
              </li>
              <li>{studioInfo.location}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="label-meta mb-6">Social</p>
            <ul className="space-y-3 text-sm text-cream-400">
              <li>
                <a
                  href={studioInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-cream-100"
                >
                  Instagram — {studioInfo.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${studioInfo.whatsapp.replace(/[^\d]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-cream-100"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="label-meta mb-6">Enquiries</p>
            <button
              onClick={() => handleNav('/contact')}
              className="btn-gold"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom — legal */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream-400/10 pt-10 text-[11px] uppercase tracking-ultra text-muted md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {studioInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
