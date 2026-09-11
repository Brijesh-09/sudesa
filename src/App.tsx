import { useEffect, useState } from 'react';
import BrandLoader from '@/components/BrandLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import WorkPage from '@/pages/WorkPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import { useRouter } from '@/hooks/useRouter';
import { useScrollReveal } from '@/hooks/useScroll';

export default function App() {
  const { route, navigate } = useRouter();
  const [pageKey, setPageKey] = useState(0);
  const [loading, setLoading] = useState(true);

  useScrollReveal();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  // Re-trigger reveal animations on route change
  useEffect(() => {
    setPageKey((k) => k + 1);
  }, [route.path]);

  // Re-run reveal observer after page content renders
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
      );
      document.querySelectorAll(
        '.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-scale:not(.is-visible), .reveal-clip:not(.is-visible)',
      ).forEach((el) => {
        observer.observe(el);
      });
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, [pageKey]);

  const renderPage = () => {
    const path = route.path;

    if (path === '/' || path === '') {
      return <HomePage onNavigate={navigate} />;
    }
    if (path === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (path === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }
    if (path === '/work') {
      return <WorkPage onNavigate={navigate} />;
    }
    if (path.startsWith('/project/')) {
      const slug = path.replace('/project/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 404
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-950">
        <div className="text-center">
          <p className="font-serif text-6xl text-cream-100">404</p>
          <p className="mt-4 text-cream-400">Page not found</p>
          <button onClick={() => navigate('/')} className="mt-8 btn-gold">
            Return Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-ink-950">
      <BrandLoader visible={loading} />
      <Navbar onNavigate={navigate} currentPath={route.path} />
      <main key={pageKey} className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
