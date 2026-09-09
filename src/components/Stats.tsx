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
      value: activeOpportunities.filter((o) => o.category === 'scholarships').length,
      label: 'Scholarships',
    },
    {
      value: activeOpportunities.filter((o) => o.category === 'exams').length,
      label: 'Exams',
    },
    {
      value: activeOpportunities.filter(
        (o) => o.category === 'competitions' || o.category === 'olympiads'
      ).length,
      label: 'Competitions & Olympiads',
    },
  ];

  return (
    <section className="border-y border-white/[0.05] bg-ink-900/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center sm:text-left">
                <p className="font-sans tabular-nums text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl">
                  {stat.value.toLocaleString('en-IN')}
                </p>
                <p className="mt-3 text-sm text-ink-300">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
