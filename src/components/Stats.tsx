import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/Reveal';

export function Stats() {
  return (
    <section className="border-y border-white/[0.05] bg-ink-900/40">
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center sm:text-left">
                <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-ink-300">{stat.label}</p>
                {stat.placeholder && (
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-500">
                    
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
