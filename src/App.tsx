import { useEffect, useState } from 'react';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Categories } from '@/components/Categories';
import { Opportunities } from '@/components/Opportunities';
import { OpportunityFinder } from '@/components/OpportunityFinder';
import { AskKhoj } from '@/components/AskKhoj';
import { Guides } from '@/components/Guides';
import { Stories } from '@/components/Stories';
import { About } from '@/components/About';
import { InstagramSection } from '@/components/InstagramSection';
import { Footer } from '@/components/Footer';

import type { CategoryId } from '@/types';

type Route =
  | 'home'
  | 'opportunities'
  | 'finder'
  | 'ask'
  | 'guides'
  | 'stories'
  | 'about';

function getRoute(): Route {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  switch (path) {
    case '/opportunities':
      return 'opportunities';
    case '/finder':
      return 'finder';
    case '/ask':
      return 'ask';
    case '/guides':
      return 'guides';
    case '/stories':
      return 'stories';
    case '/about':
      return 'about';
    default:
      return 'home';
  }
}

function App() {
  const [route, setRoute] = useState<Route>(getRoute);
  const [activeCategory, setActiveCategory] =
    useState<CategoryId | 'all'>('all');

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setRoute(getRoute());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (id: CategoryId) => {
    setActiveCategory(id);
    navigate('/opportunities');
  };

  const renderHome = () => (
    <>
      <Hero />
      <Stats />

      <Categories onSelectCategory={handleSelectCategory} />

      <section className="border-y border-white/[0.05] bg-ink-900/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <HomeLink
              title="Opportunities"
              description="Browse scholarships, exams, colleges, competitions, fellowships and more."
              href="/opportunities"
              onClick={navigate}
            />
            <HomeLink
              title="Opportunity Finder"
              description="Use filters to narrow opportunities by grade, country, funding, mode and eligibility."
              href="/finder"
              onClick={navigate}
            />
            <HomeLink
              title="Ask Khoj"
              description="Ask questions and get help choosing the right opportunities."
              href="/ask"
              onClick={navigate}
            />
            <HomeLink
              title="Guides"
              description="Practical guides for applications, scholarships, exams and student opportunities."
              href="/guides"
              onClick={navigate}
            />
            <HomeLink
              title="Stories"
              description="Read student stories, lessons and experiences from opportunity seekers."
              href="/stories"
              onClick={navigate}
            />
            <HomeLink
              title="About"
              description="Learn why Mission Khoj exists and how the student-led project works."
              href="/about"
              onClick={navigate}
            />
          </div>
        </div>
      </section>

      <InstagramSection />
    </>
  );

  const renderRoute = () => {
    switch (route) {
      case 'opportunities':
        return (
          <Opportunities
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        );
      case 'finder':
        return <OpportunityFinder />;
      case 'ask':
        return <AskKhoj />;
      case 'guides':
        return <Guides />;
      case 'stories':
        return <Stories />;
      case 'about':
        return (
          <>
            <About />
            <InstagramSection />
          </>
        );
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-ink-950">
      <Navigation onNavigate={navigate} />

      <main className="pt-16">
        {renderRoute()}
      </main>

      <Footer />
    </div>
  );
}

function HomeLink({
  title,
  description,
  href,
  onClick,
}: {
  title: string;
  description: string;
  href: string;
  onClick: (path: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick(href);
      }}
      className="group rounded-2xl border border-white/[0.07] bg-ink-850/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/25 hover:bg-ink-800/60"
    >
      <p className="text-lg font-semibold text-white transition-colors group-hover:text-gold-300">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">
        {description}
      </p>
      <span className="mt-5 inline-block text-xs font-medium uppercase tracking-wider text-gold-400">
        Explore →
      </span>
    </a>
  );
}

export default App;
