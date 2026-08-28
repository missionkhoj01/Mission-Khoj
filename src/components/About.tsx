import { Compass, ShieldCheck, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const principles = [
  {
    icon: Compass,
    title: 'Discover',
    description: 'Find opportunities students may otherwise miss.',
  },
  {
    icon: ShieldCheck,
    title: 'Verify',
    description: 'Prioritize credible sources and link back to official information.',
  },
  {
    icon: TrendingUp,
    title: 'Empower',
    description: 'Give students the information and guidance they need to take the next step themselves.',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">About Mission Khoj</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Opportunity shouldn’t depend on who happens to tell you about it.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-ink-300">
          <p>
            Mission Khoj is a student-led initiative built around a simple idea: talented students
            should be able to discover opportunities beyond the information available in their
            classrooms.
          </p>
          <p>
            We research and organize opportunities so students can spend less time searching and
            more time applying, learning and growing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/[0.06] bg-ink-850/50 p-6 transition-all duration-500 hover:border-gold-500/20 hover:bg-ink-800/60">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/[0.06]">
                  <p.icon className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
