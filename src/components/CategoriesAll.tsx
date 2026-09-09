import { Reveal } from '@/components/Reveal';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { allOpportunities } from '@/data/allOpportunities';
import type { CategoryId } from '@/types';

export function CategoriesAll({ onSelectCategory }: { onSelectCategory?: (id: CategoryId) => void }) {
  const counts = allOpportunities.filter((o) => o.status !== 'Expired').reduce<Record<string, number>>((acc, o) => {
    acc[o.category] = (acc[o.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Categories</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Explore Beyond the Classroom</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">Start with a category and discover opportunities that match your interests.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 40}>
              <CategoryCard category={{ ...cat, count: counts[cat.id] || 0 }} onClick={() => onSelectCategory?.(cat.id)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
