import { Reveal } from '@/components/Reveal';
import { opportunities } from '@/data/opportunities';

export function Stats() {
  const activeOpportunities = opportunities.filter(
    (opportunity) => opportunity.status !== 'Expired'
  );

  const stats = [
    {
      value: activeOpportunities.length,
      label: 'Opportunities',
    },
    {
      value: activeOpportunities.filter(
        (o) => o.category === 'scholarships'
      ).length,
      label: 'Scholarships',
    },
    {
      value: activeOpportunities.filter(
        (o) => o.category === 'exams'
      ).length,
      label: 'Exams',
    },
    {
      value: activeOpportunities.filter(
        (o) =>
          o.category === 'competitions' ||
          o.category === 'olympiads'
      ).length,
      label: 'Competitions & Olympiads',
    },
  ];

  return (
    <section className="border-y border-white/[0.05] bg-ink-900/40">
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-8 sm:py-14">
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
