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
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');

  const handleSelectCategory = (id: CategoryId) => {
    setActiveCategory(id);
    // smooth-scroll to opportunities after state set
    requestAnimationFrame(() => {
      document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Categories onSelectCategory={handleSelectCategory} />
        <Opportunities activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <OpportunityFinder />
        <AskKhoj />
        <Guides />
        <Deadlines />
        <Stories />
        <About />
        <InstagramSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
