import { useMemo, useState, type ReactNode } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
  MessageCircle,
} from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { OpportunityCard } from '@/components/OpportunityCard';

import { opportunities } from '@/data/opportunities';
import { categoriesWithCounts } from '@/data/categories';

import type { CategoryId, FundingType } from '@/types';

const countries = Array.from(
  new Set(opportunities.map((opportunity) => opportunity.country))
).sort();

const fundingOptions: FundingType[] = [
  'Fully Funded',
  'Partially Funded',
  'Free',
  'Paid',
  'Stipend',
  'Self-Funded',
];

const grades = [
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
  'Undergraduate',
  'Other',
];

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

export function Opportunities({
  activeCategory,
  setActiveCategory,
}: OpportunitiesProps) {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('all');
  const [grade, setGrade] = useState('all');
  const [funding, setFunding] = useState('all');
  const [deadline, setDeadline] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  /*
   * Only active opportunities are displayed.
   * Expired opportunities are excluded everywhere.
   */
  const activeOpportunities = useMemo(
    () => opportunities.filter((opportunity) => opportunity.status !== 'Expired'),
    []
  );

  /*
   * Search + category + filters
   */
  const filtered = useMemo(() => {
    const now = new Date();

    return activeOpportunities
      .filter((opportunity) =>
        activeCategory === 'all'
          ? true
          : opportunity.category === activeCategory
      )

      .filter((opportunity) =>
        country === 'all' ? true : opportunity.country === country
      )

      .filter((opportunity) =>
        funding === 'all' ? true : opportunity.funding === funding
      )

      .filter((opportunity) => {
        if (grade === 'all') return true;

        const eligibility = opportunity.eligibility.toLowerCase();

        if (grade === 'Undergraduate') {
          return (
            eligibility.includes('undergraduate') ||
            eligibility.includes('college') ||
            eligibility.includes('university')
          );
        }

        if (grade === 'Other') {
          return !grades
            .filter((item) => item !== 'Other' && item !== 'Undergraduate')
            .some((item) =>
              eligibility.includes(item.toLowerCase())
            );
        }

        return eligibility.includes(grade.toLowerCase());
      })

      .filter((opportunity) => {
        if (deadline === 'all' || opportunity.deadline === 'Rolling') {
          return true;
        }

        const date = new Date(opportunity.deadline);

        if (Number.isNaN(date.getTime())) {
          return false;
        }

        const diff =
          (date.getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24);

        if (diff < 0) return false;

        if (deadline === 'week') return diff <= 7;
        if (deadline === 'month') return diff <= 31;
        if (deadline === 'quarter') return diff <= 93;

        return true;
      })

      .filter((opportunity) => {
        const q = query.trim().toLowerCase();

        if (!q) return true;

        const category = categoriesWithCounts.find(
          (item) => item.id === opportunity.category
        );

        return (
          opportunity.name.toLowerCase().includes(q) ||
          opportunity.organization.toLowerCase().includes(q) ||
          opportunity.description.toLowerCase().includes(q) ||
          opportunity.country.toLowerCase().includes(q) ||
          opportunity.eligibility.toLowerCase().includes(q) ||
          opportunity.funding.toLowerCase().includes(q) ||
          category?.name.toLowerCase().includes(q) ||
          opportunity.tags.some((tag) =>
            tag.toLowerCase().includes(q)
          )
        );
      });
  }, [
    activeOpportunities,
    activeCategory,
    country,
    grade,
    funding,
    deadline,
    query,
  ]);

  const activeFilterCount =
    [country, grade, funding].filter((value) => value !== 'all').length +
    (deadline !== 'all' ? 1 : 0);

  const hasActiveSearch =
    query.trim().length > 0 || activeFilterCount > 0;

  const reset = () => {
    setCountry('all');
    setGrade('all');
    setFunding('all');
    setDeadline('all');
    setQuery('');
    setActiveCategory('all');
  };

  return (
    <section
      id="opportunities"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Opportunities</p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Opportunities Worth Discovering
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Search and filter curated opportunities. Every listing links
            back to its official source so you can apply with confidence.
          </p>
        </Reveal>

        {/* Search */}
        <Reveal className="mt-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search exams, scholarships, colleges, fellowships..."
              aria-label="Search opportunities"
              className="w-full rounded-xl border border-white/[0.08] bg-ink-850/60 py-4 pl-12 pr-4 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-gold-500/40 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
            />
          </div>
        </Reveal>

        {/* Category chips */}
        <Reveal className="mt-5">
          <div className="flex flex-wrap gap-2">
            <Chip
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              All ({activeOpportunities.length})
            </Chip>

            {categoriesWithCounts.map((category) => (
              <Chip
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name} ({category.count})
              </Chip>
            ))}
          </div>
        </Reveal>

        {/* Filter bar */}
        <Reveal className="mt-5">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setShowFilters((value) => !value)}
              aria-expanded={showFilters}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-ink-200 transition-colors hover:border-gold-500/30 hover:text-white"
            >
              <SlidersHorizontal className="h-4 w-4" />

              Filters

              {activeFilterCount > 0 && (
                <span className="rounded-full bg-gold-500/20 px-1.5 py-0.5 text-[10px] text-gold-300">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs text-ink-400">
                {filtered.length} results
              </span>

              {hasActiveSearch && (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1 text-xs text-ink-300 transition-colors hover:text-gold-300"
                >
                  <X className="h-3 w-3" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 grid gap-4 rounded-xl border border-white/[0.06] bg-ink-850/50 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <FilterSelect
                label="I'm in"
                value={grade}
                onChange={setGrade}
                options={['all', ...grades]}
              />

              <FilterSelect
                label="Country"
                value={country}
                onChange={setCountry}
                options={['all', ...countries]}
              />

              <FilterSelect
                label="Funding"
                value={funding}
                onChange={setFunding}
                options={['all', ...fundingOptions]}
              />

              <FilterSelect
                label="Deadline"
                value={deadline}
                onChange={setDeadline}
                options={deadlineOptions.map((item) => item.id)}
                labels={Object.fromEntries(
                  deadlineOptions.map((item) => [
                    item.id,
                    item.label,
                  ])
                )}
              />
            </div>
          )}
        </Reveal>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((opportunity, index) => (
              <Reveal
                key={opportunity.id}
                delay={Math.min(index * 35, 280)}
              >
                <OpportunityCard opportunity={opportunity} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-ink-850/40 px-6 py-16 text-center">
            <p className="font-display text-xl text-white">
              No results found
            </p>

            <p className="mt-2 max-w-sm text-sm text-ink-300">
              Try adjusting your search or filters — or ask Khoj to
              help you find one.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {hasActiveSearch && (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-gold-500/30"
                >
                  <X className="h-4 w-4" />
                  Clear filters
                </button>
              )}

              <a
                href="#ask"
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-400"
              >
                <MessageCircle className="h-4 w-4" />
                Ask Khoj to help
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Category chip                                                               */
/* -------------------------------------------------------------------------- */

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
        active
          ? 'border-gold-500/40 bg-gold-500/15 text-gold-200'
          : 'border-white/10 text-ink-300 hover:border-white/20 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Filter select                                                               */
/* -------------------------------------------------------------------------- */

function FilterSelect({
  label,
  value,
  onChange,
  options,
  labels,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  labels?: Record<string, string>;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-ink-300">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/40"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {labels?.[option] ??
              (option === 'all'
                ? label === 'I'm in'
                  ? 'Any grade'
                  : `Any ${label.toLowerCase()}`
                : option)}
          </option>
        ))}
      </select>
    </label>
  );
}
