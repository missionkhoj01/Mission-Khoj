import { Quote, ArrowRight, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { stories } from '@/data/content';

export function Stories() {
  return (
    <section id="stories" className="scroll-mt-20 border-t border-white/[0.05] bg-ink-900/30 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Student Stories</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Students Who Discovered More
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Real discovery happens when a student finds an opportunity they didn’t know existed.
          </p>
        </Reveal>

        <div className="mt-6">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[11px] text-ink-400">
            <Star className="h-3 w-3 text-gold-400/60" /> Example stories — replaced with real submissions
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-ink-850/50 p-6 transition-all duration-500 hover:border-gold-500/20 hover:bg-ink-800/60">
                <Quote className="h-7 w-7 text-gold-500/30" />
                <p className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink-100">
                  “{s.quote}”
                </p>

                <div className="mt-6 rounded-lg border border-white/[0.05] bg-white/[0.015] p-3">
                  <p className="text-xs text-ink-400">What they learned</p>
                  <p className="mt-1 text-sm text-ink-200">{s.learned}</p>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-white/[0.05] pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/5 font-display text-sm text-gold-300">
                    {s.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{s.name}</p>
                    <p className="text-xs text-ink-400">{s.country} · {s.opportunity}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="#ask"
            className="group inline-flex items-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/[0.06] px-6 py-3 text-sm font-medium text-gold-200 transition-all hover:bg-gold-500/15"
          >
            Share Your Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
