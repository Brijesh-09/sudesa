import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, studioInfo } from '@/data/content';
import { useScrollPosition } from '@/hooks/useScroll';

interface NavbarProps {
  onNavigate: (to: string) => void;
  currentPath: string;
}

export default function Navbar({ onNavigate, currentPath }: NavbarProps) {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = currentPath === '/' || currentPath === '';
  const scrolled = scrollY > 40;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (isHome) {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      onNavigate(href);
    }
  };

  const navBg = scrolled
    ? 'bg-ink-950/85 backdrop-blur-md border-b border-cream-400/10'
    : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${navBg}`}
      >
        <nav className="mx-auto flex max-w-9xl items-center justify-between px-6 py-5 lg:px-12">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="group flex items-center gap-2.5"
            aria-label="Sudesa Interiors home"
          >
                <img src="/images/sudesa-logo-mark-tm-transparent.png" alt="" className="brand-mark h-9 w-24 object-contain object-center" />
            <span className="flex flex-col items-start leading-none">
              <span className="font-serif text-lg tracking-wide text-cream-100 transition-colors duration-500 group-hover:text-gold-500 lg:text-xl">SUDESA</span>
              <span className="mt-1 text-[7px] uppercase tracking-[0.28em] text-muted transition-colors duration-500 group-hover:text-gold-500">Interiors</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="group relative text-[11px] uppercase tracking-ultra text-cream-100/80 transition-colors duration-500 hover:text-gold-500"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNav('/contact')}
              className="btn-gold !py-2.5 !px-6"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-cream-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-950 transition-opacity duration-700 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5">
          <img src="/images/sudesa-logo-mark-tm-transparent.png" alt="" className="brand-mark h-9 w-24 object-contain object-center" />
            <span className="font-serif text-xl text-cream-100">SUDESA</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-cream-100"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-16 pt-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="group flex items-baseline gap-4 border-b border-cream-400/10 py-5 text-left"
                style={{
                  transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms',
                }}
              >
                <span className="label-meta text-gold-500/60">
                  0{i + 1}
                </span>
                <span className="font-serif text-4xl text-cream-100 transition-colors duration-500 group-hover:text-gold-500">
                  {link.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="space-y-4">
            <button
              onClick={() => handleNav('/contact')}
              className="btn-gold w-full"
            >
              Start a Project
            </button>
            <div className="flex items-center justify-between pt-4 text-[11px] uppercase tracking-ultra text-muted">
              <span>{studioInfo.location}</span>
              <span>{studioInfo.instagram}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
