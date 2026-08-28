import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { OpportunityCard } from '@/components/OpportunityCard';
import { opportunities } from '@/data/opportunities';
import { categories } from '@/data/categories';
import type { CategoryId, FundingType } from '@/types';

const countries = Array.from(new Set(opportunities.map((o) => o.country))).sort();
const fundingOptions: FundingType[] = [
  'Fully Funded',
  'Partially Funded',
  'Free',
  'Paid',
  'Stipend',
  'Self-Funded',
];
const grades = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Undergraduate', 'Other'];
const deadlineOptions = [
  { id: 'all', label: 'Any time' },
  { id: 'week', label: 'This week' },
  { id: 'month', label: 'This month' },
  { id: 'quarter', label: 'Next 3 months' },
];

interface OpportunitiesProps {
  activeCategory: CategoryId | 'all';
  setActiveCategory: (id: CategoryId | 'all') => void;
}

export function Opportunities({ activeCategory, setActiveCategory }: OpportunitiesProps) {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('all');
  const [grade, setGrade] = useState('all');
  const [funding, setFunding] = useState('all');
  const [deadline, setDeadline] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const now = new Date();
    return opportunities
      .filter((o) => o.status !== 'Expired')
      .filter((o) => (activeCategory === 'all' ? true : o.category === activeCategory))
      .filter((o) => (country === 'all' ? true : o.country === country))
      .filter((o) => (funding === 'all' ? true : o.funding === funding))
      .filter((o) => {
        if (grade === 'all') return true;
        return o.eligibility.toLowerCase().includes(grade.replace('Grade ', 'grade').toLowerCase());
      })
      .filter((o) => {
        if (deadline === 'all' || o.deadline === 'Rolling') return true;
        const d = new Date(o.deadline);
        const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        if (deadline === 'week') return diff <= 7;
        if (deadline === 'month') return diff <= 31;
        if (deadline === 'quarter') return diff <= 93;
        return true;
      })
      .filter((o) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          o.name.toLowerCase().includes(q) ||
          o.organization.toLowerCase().includes(q) ||
          o.description.toLowerCase().includes(q) ||
          o.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [activeCategory, country, grade, funding, deadline, query]);

  const activeCount = [country, grade, funding].filter((v) => v !== 'all').length + (deadline !== 'all' ? 1 : 0);

  const reset = () => {
    setCountry('all');
    setGrade('all');
    setFunding('all');
    setDeadline('all');
    setQuery('');
    setActiveCategory('all');
  };

  return (
    <section id="opportunities" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Opportunities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Opportunities Worth Discovering
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Search and filter curated opportunities. Every listing links back to its official
            source so you can apply with confidence.
          </p>
        </Reveal>

        {/* Search bar */}
        <Reveal className="mt-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search scholarships, competitions, research..."
              className="w-full rounded-xl border border-white/[0.08] bg-ink-850/60 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-gold-500/40 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
            />
          </div>
        </Reveal>

        {/* Category chips */}
        <Reveal className="mt-5">
          <div className="flex flex-wrap gap-2">
            <Chip active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
              All
            </Chip>
            {categories.map((c) => (
              <Chip key={c.id} active={activeCategory === c.id} onClick={() => setActiveCategory(c.id)}>
                {c.name}
              </Chip>
            ))}
          </div>
        </Reveal>

        {/* Filter bar */}
        <Reveal className="mt-4">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setShowFilters((s) => !s)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-ink-200 transition-colors hover:border-gold-500/30 hover:text-white"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeCount > 0 && (
                <span className="rounded-full bg-gold-500/20 px-1.5 py-0.5 text-[10px] text-gold-300">
                  {activeCount}
                </span>
              )}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs text-ink-400">{filtered.length} results</span>
              {(activeCount > 0 || query) && (
                <button onClick={reset} className="inline-flex items-center gap-1 text-xs text-ink-300 hover:text-gold-300">
                  <X className="h-3 w-3" /> Clear
                </button>
              )}
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 grid gap-4 rounded-xl border border-white/[0.06] bg-ink-850/50 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <FilterSelect label="I'm in" value={grade} onChange={setGrade} options={['all', ...grades]} />
              <FilterSelect label="Country" value={country} onChange={setCountry} options={['all', ...countries]} />
              <FilterSelect label="Funding" value={funding} onChange={setFunding} options={['all', ...fundingOptions]} />
              <FilterSelect
                label="Deadline"
                value={deadline}
                onChange={setDeadline}
                options={deadlineOptions.map((d) => d.id)}
                labels={Object.fromEntries(deadlineOptions.map((d) => [d.id, d.label]))}
              />
            </div>
          )}
        </Reveal>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((opp, i) => (
              <Reveal key={opp.id} delay={i * 50}>
                <OpportunityCard opportunity={opp} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-ink-850/40 py-16 text-center">
            <p className="font-display text-xl text-white">No results found</p>
            <p className="mt-2 max-w-sm text-sm text-ink-300">
              Try adjusting your filters — or ask Khoj to help you find one.
            </p>
            <a
              href="#ask"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-400"
            >
              <MessageCircle className="h-4 w-4" />
              Ask Khoj to help
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
        active
          ? 'border-gold-500/40 bg-gold-500/15 text-gold-200'
          : 'border-white/10 text-ink-300 hover:border-white/20 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  labels,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  labels?: Record<string, string>;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-ink-400">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-white/[0.08] bg-ink-800 px-3 py-2.5 text-sm text-white transition-colors focus:border-gold-500/40 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink-800">
            {opt === 'all' ? 'Any' : labels?.[opt] ?? opt}
          </option>
        ))}
      </select>
    </label>
  );
}
