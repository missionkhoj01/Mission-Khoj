import { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { guides } from '@/data/guides';
import type { Guide } from '@/types';

export function Guides() {
  const [active, setActive] = useState<Guide | null>(null);

  return (
    <section id="guides" className="scroll-mt-20 border-t border-white/[0.05] bg-ink-900/30 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Guides</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Make Your Application Stronger
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Practical guides to help you find, prepare, and submit stronger applications.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g, i) => (
            <Reveal key={g.id} delay={i * 50}>
              <button
                onClick={() => setActive(g)}
                className="group flex h-full w-full flex-col rounded-2xl border border-white/[0.06] bg-ink-850/50 p-5 text-left transition-all duration-500 hover:border-gold-500/25 hover:bg-ink-800/60 hover:-translate-y-1"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-gold-400/70">
                  {g.category}
                </span>
                <h3 className="mt-3 font-display text-base font-medium leading-snug text-white">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">{g.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs text-ink-400">
                    <Clock className="h-3.5 w-3.5" /> {g.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-gold-300 transition-transform group-hover:translate-x-0.5">
                    Read Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <GuideReader guide={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function GuideReader({ guide, onClose }: { guide: Guide; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 sm:p-8">
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative my-auto w-full max-w-2xl animate-scale-in rounded-2xl border border-white/[0.08] bg-ink-900 p-6 sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-ink-300 hover:bg-white/[0.06] hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs font-medium uppercase tracking-wider text-gold-400/70">{guide.category}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{guide.title}</h2>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-400">
          <Clock className="h-3.5 w-3.5" /> {guide.readTime}
        </p>

        <div className="mt-8 space-y-7">
          {guide.body.map((section, i) => (
            <div key={i}>
              <h3 className="font-display text-lg font-medium text-gold-200">{section.heading}</h3>
              <div className="mt-3 space-y-3">
                {section.body.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-ink-200">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
