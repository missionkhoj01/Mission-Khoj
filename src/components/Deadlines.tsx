import { useMemo, useState } from 'react';
import { Calendar, ArrowRight, AlertCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { deadlines } from '@/data/content';
import { categories } from '@/data/categories';
import type { DeadlineEntry } from '@/types';

interface DeadlineFilter {
  id: 'week' | 'month' | 'quarter';
  label: string;
}

const FILTERS: DeadlineFilter[] = [
  { id: 'week', label: 'This week' },
  { id: 'month', label: 'This month' },
  { id: 'quarter', label: 'Next 3 months' },
];

function daysUntil(iso: string): number {
  return Math.ceil((new Date(iso).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

interface SortedDeadline extends DeadlineEntry {
  days: number;
}

export function Deadlines() {
  const [filter, setFilter] = useState<DeadlineFilter['id']>('month');

  const sorted = useMemo<SortedDeadline[]>(() => {
    const maxDays = filter === 'week' ? 7 : filter === 'month' ? 31 : 93;
    return deadlines
      .filter((d) => d.status !== 'Expired')
      .map((d) => ({ ...d, days: daysUntil(d.deadline) }))
      .filter((d) => d.days >= 0 && d.days <= maxDays)
      .sort((a, b) => a.days - b.days);
  }, [filter]);

  return (
    <section id="deadlines" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Deadline Tracker</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Don’t Miss the Deadline.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Upcoming application deadlines, sorted by urgency. Set your own reminders — we’re
            building notifications next.
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === f.id
                    ? 'border-gold-500/40 bg-gold-500/15 text-gold-200'
                    : 'border-white/10 text-ink-300 hover:border-white/20 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {sorted.length > 0 ? (
          <Reveal className="mt-8">
            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/30 via-white/[0.06] to-transparent" />
              <ul className="space-y-3">
                {sorted.map((d) => {
                  const cat = categories.find((c) => c.id === d.category);
                  const urgent = d.days <= 7;
                  return (
                    <li key={d.id} className="relative pl-12">
                      <span
                        className={`absolute left-[12px] top-5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                          urgent ? 'border-gold-400 bg-gold-500/30' : 'border-white/20 bg-ink-800'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            urgent ? 'bg-gold-300' : 'bg-ink-400'
                          }`}
                        />
                      </span>
                      <div className="group rounded-xl border border-white/[0.06] bg-ink-850/50 p-4 transition-all duration-300 hover:border-gold-500/20 hover:bg-ink-800/60 sm:p-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0">
                            <h3 className="truncate font-display text-base font-medium text-white">
                              {d.opportunityName}
                            </h3>
                            <p className="mt-0.5 text-xs text-ink-400">
                              {cat?.name} · {formatDate(d.deadline)}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-medium ${
                                urgent
                                  ? 'bg-gold-500/15 text-gold-200'
                                  : d.days <= 31
                                  ? 'bg-white/[0.06] text-ink-100'
                                  : 'bg-white/[0.03] text-ink-300'
                              }`}
                            >
                              {d.days === 0
                                ? 'Today'
                                : d.days === 1
                                ? '1 day left'
                                : `${d.days} days left`}
                            </span>
                            <a
                              href="#opportunities"
                              className="hidden shrink-0 items-center gap-1 text-xs text-gold-300 transition-transform hover:translate-x-0.5 sm:inline-flex"
                            >
                              View <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ) : (
          <Reveal className="mt-8">
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-ink-850/40 p-6 text-ink-300">
              <AlertCircle className="h-5 w-5 text-ink-400" />
              <p className="text-sm">No deadlines in this range. Try a wider filter.</p>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-8 text-center">
          <a
            href="#opportunities"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200"
          >
            <Calendar className="h-4 w-4" /> Explore all opportunities
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
