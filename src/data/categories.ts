import { Reveal } from '@/components/Reveal';
import { CategoryCard } from '@/components/CategoryCard';
import { categoriesWithCounts } from '@/data/categories';
import type { CategoryId } from '@/types';

interface CategoriesProps {
  onSelectCategory?: (id: CategoryId) => void;
}

export function Categories({
  onSelectCategory,
}: CategoriesProps) {
  return (
    <section
      id="categories"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            Categories
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Explore Beyond the Classroom
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Opportunities can change a student’s path. Start by exploring what interests you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesWithCounts.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={i * 60}
            >
              <CategoryCard
                category={cat}
                onClick={() =>
                  onSelectCategory?.(cat.id)
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}    description:
      'Mathematics, science, computing and subject-specific Olympiads.',
    icon: 'Medal',
    count: 0,
  },
  {
    id: 'fellowships',
    name: 'Fellowships',
    description:
      'Student, youth, leadership and academic fellowship opportunities.',
    icon: 'Award',
    count: 0,
  },
  {
    id: 'internships',
    name: 'Internships',
    description:
      'Student internships, work experience and career exposure.',
    icon: 'BriefcaseBusiness',
    count: 0,
  },
  {
    id: 'research',
    name: 'Research',
    description:
      'Research programs, science projects, labs and academic opportunities.',
    icon: 'FlaskConical',
    count: 0,
  },
  {
    id: 'summer-programs',
    name: 'Summer Programs',
    description:
      'Summer schools, camps and academic enrichment programs.',
    icon: 'Sun',
    count: 0,
  },
  {
    id: 'courses',
    name: 'Courses',
    description:
      'Free and paid courses, certifications and learning programs.',
    icon: 'BookOpen',
    count: 0,
  },
  {
    id: 'mentorships',
    name: 'Mentorship',
    description:
      'Career conversations, mentors and guidance programs.',
    icon: 'Users',
    count: 0,
  },
  {
    id: 'volunteering',
    name: 'Volunteering',
    description:
      'Youth volunteering and community opportunities.',
    icon: 'HeartHandshake',
    count: 0,
  },
  {
    id: 'grants',
    name: 'Grants',
    description:
      'Student project grants, funding and awards.',
    icon: 'Banknote',
    count: 0,
  },
  {
    id: 'learning',
    name: 'Free Learning',
    description:
      'Free courses, lectures and learning resources.',
    icon: 'BookOpen',
    count: 0,
  },
  {
    id: 'international',
    name: 'International',
    description:
      'Global programs, exchanges and international opportunities.',
    icon: 'Globe2',
    count: 0,
  },
  {
    id: 'other',
    name: 'Other Opportunities',
    description:
      'Other useful opportunities for students.',
    icon: 'Rocket',
    count: 0,
  },
];

/**
 * Automatically calculate the number of active opportunities
 * in each category.
 *
 * Expired opportunities are excluded.
 */
export const categoriesWithCounts: Category[] = categories.map((category) => ({
  ...category,
  count: opportunities.filter(
    (opportunity) =>
      opportunity.category === category.id &&
      opportunity.status !== 'Expired'
  ).length,
}));
