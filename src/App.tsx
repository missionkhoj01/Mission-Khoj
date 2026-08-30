import { useState } from 'react';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Categories } from '@/components/Categories';
import { Opportunities } from '@/components/Opportunities';
import { OpportunityFinder } from '@/components/OpportunityFinder';
import { AskKhoj } from '@/components/AskKhoj';
import { Guides } from '@/components/Guides';
import { Deadlines } from '@/components/Deadlines';
import { Stories } from '@/components/Stories';
import { About } from '@/components/About';
import { InstagramSection } from '@/components/InstagramSection';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

import type { CategoryId } from '@/types';

function App() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId | 'all'>('all');

  const handleSelectCategory = (id: CategoryId) => {
    setActiveCategory(id);

    requestAnimationFrame(() => {
      document
        .getElementById('opportunities')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    });
  };

  const handleSetActiveCategory = (
    id: CategoryId | 'all'
  ) => {
    setActiveCategory(id);
  };

  return (
    <div className="min-h-screen bg-ink-950 pb-16 lg:pb-0">
      <Navigation />

      <main>
        {/* Hero */}
        <Hero />

        {/* Statistics */}
        <Stats />

        {/* Categories */}
        <Categories
          onSelectCategory={handleSelectCategory}
        />

        {/* Opportunities */}
        <Opportunities
          activeCategory={activeCategory}
          setActiveCategory={handleSetActiveCategory}
        />

        {/* AI / Opportunity Finder */}
        <OpportunityFinder />

        {/* Ask Khoj */}
        <AskKhoj />

        {/* Guides */}
        <Guides />

        {/* Deadlines */}
        <Deadlines />

        {/* Student Stories */}
        <Stories />

        {/* About */}
        <About />

        {/* Instagram */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile / Sticky CTA */}
      <StickyCTA />
    </div>
  );
}

export default App;
