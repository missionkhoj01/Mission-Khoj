import { Reveal } from '@/components/Reveal';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import type { CategoryId } from '@/types';

interface CategoriesProps {
  onSelectCategory?: (id: CategoryId) => void;
}

export function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Categories</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Explore Beyond the Classroom
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Opportunities can change a student’s path. Start by exploring what interests you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <CategoryCard category={cat} onClick={() => onSelectCategory?.(cat.id)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
