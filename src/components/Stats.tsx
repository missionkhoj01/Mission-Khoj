import { Reveal } from '@/components/Reveal';
import { opportunities } from '@/data/opportunities';

export function Stats() {
  // Only count active opportunities.
  const activeOpportunities = opportunities.filter(
    (opportunity) => opportunity.status !== 'Expired'
  );

  const totalOpportunities = activeOpportunities.length;

  const scholarships = activeOpportunities.filter(
    (opportunity) => opportunity.category === 'scholarships'
  ).length;

  const exams = activeOpportunities.filter(
    (opportunity) => opportunity.category === 'exams'
  ).length;

  const competitionsAndOlympiads = activeOpportunities.filter(
    (opportunity) =>
      opportunity.category === 'competitions' ||
      opportunity.category === 'olympiads'
  ).length;

  const stats = [
    {
      value: totalOpportunities,
      label: 'Opportunities',
    },
    {
      value: scholarships,
      label: 'Scholarships',
    },
    {
      value: exams,
      label: 'Exams',
    },
    {
      value: competitionsAndOlympiads,
      label: 'Competitions & Olympiads',
    },
  ];

  return (
    <section className="border-y border-white/[0.05] bg-ink-900/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center sm:text-left">
                <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-1.5 text-sm text-ink-300">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
