import { useMemo, useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
  MessageCircle,
} from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { OpportunityCard } from '@/components/OpportunityCard';
import { opportunities } from '@/data/opportunities';
import { categories } from '@/data/categories';

import type {
  CategoryId,
  FundingType,
} from '@/types';

const countries = Array.from(
  new Set(
    opportunities
      .filter((o) => o.status !== 'Expired')
      .map((o) => o.country)
      .filter(Boolean)
  )
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
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
  'Undergraduate',
  'Postgraduate',
  'Other',
];

const modes = [
  'Online',
  'Offline',
  'Hybrid',
  'Online / Global',
];

const providerTypes = [
  'Government',
  'University',
  'Company',
  'Foundation',
  'NGO',
  'School',
  'International Organization',
  'Other',
];

const deadlineOptions = [
  {
    id: 'all',
    label: 'Any time',
  },
  {
    id: 'week',
    label: 'This week',
  },
  {
    id: 'month',
    label: 'This month',
  },
  {
    id: 'quarter',
    label: 'Next 3 months',
  },
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
  const [mode, setMode] = useState('all');
  const [providerType, setProviderType] = useState('all');
  const [indiaOnly, setIndiaOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  /*
   * Only active opportunities are shown throughout
   * this component.
   */
  const activeOpportunities = useMemo(
    () =>
      opportunities.filter(
        (opportunity) => opportunity.status !== 'Expired'
      ),
    []
  );

  /*
   * Category counts.
   *
   * Expired opportunities are intentionally excluded so
   * the numbers match the opportunities users can actually see.
   */
  const categoryCounts = useMemo(() => {
    return activeOpportunities.reduce<Record<string, number>>(
      (acc, opportunity) => {
        acc[opportunity.category] =
          (acc[opportunity.category] || 0) + 1;

        return acc;
      },
      {}
    );
  }, [activeOpportunities]);

  /*
   * Filter opportunities.
   */
  const filtered = useMemo(() => {
    const now = new Date();

    return activeOpportunities

      /*
       * Category
       */
      .filter((o) =>
        activeCategory === 'all'
          ? true
          : o.category === activeCategory
      )

      /*
       * Country
       */
      .filter((o) =>
        country === 'all'
          ? true
          : o.country === country
      )

      /*
       * Funding
       */
      .filter((o) =>
        funding === 'all'
          ? true
          : o.funding === funding
      )

      /*
       * Grade / education level.
       *
       * Checks both the grades array and the
       * eligibility text for compatibility with
       * older records.
       */
      .filter((o) => {
        if (grade === 'all') return true;

        const selectedGrade = grade.toLowerCase();

        const gradeMatch =
          o.grades?.some(
            (g) =>
              g.toLowerCase() === selectedGrade
          ) ?? false;

        const eligibilityMatch =
          o.eligibility
            ?.toLowerCase()
            .includes(selectedGrade) ?? false;

        return gradeMatch || eligibilityMatch;
      })

      /*
       * Mode
       */
      .filter((o) =>
        mode === 'all'
          ? true
          : o.mode === mode
      )

      /*
       * Provider type
       */
      .filter((o) =>
        providerType === 'all'
          ? true
          : o.providerType === providerType
      )

      /*
       * India eligibility
       */
      .filter((o) => {
        if (!indiaOnly) return true;

        return (
          o.IndiaEligible === true ||
          o.country === 'India' ||
          o.country === 'Online / Global'
        );
      })

      /*
       * Deadline
       */
      .filter((o) => {
        if (
          deadline === 'all' ||
          o.deadline === 'Rolling' ||
          o.deadline === 'To be announced' ||
          o.deadline === 'TBA'
        ) {
          return true;
        }

        const d = new Date(o.deadline);

        if (Number.isNaN(d.getTime())) {
          return true;
        }

        const diff =
          (d.getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24);

        /*
         * Do not show already-passed deadlines
         * when a deadline filter is selected.
         */
        if (diff < 0) {
          return false;
        }

        if (deadline === 'week') {
          return diff <= 7;
        }

        if (deadline === 'month') {
          return diff <= 31;
        }

        if (deadline === 'quarter') {
          return diff <= 93;
        }

        return true;
      })

      /*
       * Search
       */
      .filter((o) => {
        if (!query.trim()) return true;

        const q = query.toLowerCase().trim();

        return (
          o.name?.toLowerCase().includes(q) ||
          o.organization?.toLowerCase().includes(q) ||
          o.description?.toLowerCase().includes(q) ||
          o.eligibility?.toLowerCase().includes(q) ||
          o.country?.toLowerCase().includes(q) ||
          o.category?.toLowerCase().includes(q) ||
          o.type?.toLowerCase().includes(q) ||
          o.subcategory?.toLowerCase().includes(q) ||
          o.location?.toLowerCase().includes(q) ||
          o.mode?.toLowerCase().includes(q) ||
          o.providerType?.toLowerCase().includes(q) ||
          o.grades?.some((g) =>
            g.toLowerCase().includes(q)
          ) ||
          o.subjects?.some((s) =>
            s.toLowerCase().includes(q)
          ) ||
          o.tags?.some((t) =>
            t.toLowerCase().includes(q)
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
    mode,
    providerType,
    indiaOnly,
    query,
  ]);

  /*
   * Count active filters.
   */
  const activeCount =
    [
      country,
      grade,
      funding,
      mode,
      providerType,
    ].filter((v) => v !== 'all').length +
    (deadline !== 'all' ? 1 : 0) +
    (indiaOnly ? 1 : 0);

  /*
   * Reset all filters and category.
   */
  const reset = () => {
    setCountry('all');
    setGrade('all');
    setFunding('all');
    setDeadline('all');
    setMode('all');
    setProviderType('all');
    setIndiaOnly(false);
    setQuery('');
    setActiveCategory('all');
  };

  return (
    <section
      id="opportunities"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">

        {/* Header */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            Opportunity Khoj
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Opportunities Worth Discovering
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Explore scholarships, exams, colleges, competitions,
            fellowships, internships, research programs, courses
            and more — all in one place.
          </p>
        </Reveal>

        {/* Search */}
        <Reveal className="mt-8">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
            />

            <input
              type="text"
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search exams, scholarships, colleges, fellowships..."
              className="w-full rounded-xl border border-white/[0.08] bg-ink-850/60 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-gold-500/40 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
            />
          </div>
        </Reveal>

        {/* Categories */}
        <Reveal className="mt-5">
          <div className="flex flex-wrap gap-2">

            <Chip
              active={activeCategory === 'all'}
              onClick={() =>
                setActiveCategory('all')
              }
            >
              All ({activeOpportunities.length})
            </Chip>

            {categories.map((c) => (
              <Chip
                key={c.id}
                active={
                  activeCategory === c.id
                }
                onClick={() =>
                  setActiveCategory(c.id)
                }
              >
                {c.name} ({categoryCounts[c.id] || 0})
              </Chip>
            ))}
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-4">
          <div className="flex items-center justify-between gap-3">

            <button
              onClick={() =>
                setShowFilters((s) => !s)
              }
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

              <span className="text-xs text-ink-400">
                {filtered.length}{' '}
                {filtered.length === 1
                  ? 'result'
                  : 'results'}
              </span>

              {(activeCount > 0 ||
                query ||
                activeCategory !== 'all') && (
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1 text-xs text-ink-300 hover:text-gold-300"
                >
                  <X className="h-3 w-3" />
                  Clear
                </button>
              )}

            </div>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="mt-4 grid gap-4 rounded-xl border border-white/[0.06] bg-ink-850/50 p-4 sm:grid-cols-2 lg:grid-cols-4">

              <FilterSelect
                label="Grade / Level"
                value={grade}
                onChange={setGrade}
                options={[
                  'all',
                  ...grades,
                ]}
              />

              <FilterSelect
                label="Country"
                value={country}
                onChange={setCountry}
                options={[
                  'all',
                  ...countries,
                ]}
              />

              <FilterSelect
                label="Funding"
                value={funding}
                onChange={setFunding}
                options={[
                  'all',
                  ...fundingOptions,
                ]}
              />

              <FilterSelect
                label="Deadline"
                value={deadline}
                onChange={setDeadline}
                options={deadlineOptions.map(
                  (d) => d.id
                )}
                labels={Object.fromEntries(
                  deadlineOptions.map((d) => [
                    d.id,
                    d.label,
                  ])
                )}
              />

              <FilterSelect
                label="Mode"
                value={mode}
                onChange={setMode}
                options={[
                  'all',
                  ...modes,
                ]}
              />

              <FilterSelect
                label="Provider"
                value={providerType}
                onChange={setProviderType}
                options={[
                  'all',
                  ...providerTypes,
                ]}
              />

              {/* India filter */}
              <label className="flex cursor-pointer items-end gap-3 rounded-lg border border-white/[0.08] px-3 py-2.5 text-sm text-ink-200 transition-colors hover:border-white/20">
                <input
                  type="checkbox"
                  checked={indiaOnly}
                  onChange={(e) =>
                    setIndiaOnly(
                      e.target.checked
                    )
                  }
                  className="mb-0.5 h-4 w-4 accent-gold-500"
                />

                <span>
                  <span className="block text-sm text-white">
                    India eligible
                  </span>

                  <span className="text-[11px] text-ink-400">
                    Show opportunities available to students in India
                  </span>
                </span>
              </label>

            </div>
          )}
        </Reveal>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {filtered.map((opp, i) => (
              <Reveal
                key={opp.id}
                delay={i * 50}
              >
                <OpportunityCard
                  opportunity={opp}
                />
              </Reveal>
            ))}

          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-ink-850/40 py-16 text-center">

            <p className="font-display text-xl text-white">
              No results found
            </p>

            <p className="mt-2 max-w-sm text-sm text-ink-300">
              Try adjusting your filters or searching
              for another opportunity.
            </p>

            <button
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-ink-200 transition-colors hover:border-gold-500/30 hover:text-white"
            >
              <X className="h-4 w-4" />
              Clear filters
            </button>

            <a
              href="#ask"
              className="mt-3 inline-flex items-center gap-2 text-sm text-gold-300 transition-colors hover:text-gold-200"
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

/*
 * Category chip
 */
function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
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

/*
 * Filter select
 */
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

      <span className="text-xs text-ink-400">
        {label}
      </span>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="rounded-lg border border-white/[0.08] bg-ink-800 px-3 py-2.5 text-sm text-white transition-colors focus:border-gold-500/40 focus:outline-none"
      >
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className="bg-ink-800"
          >
            {opt === 'all'
              ? 'Any'
              : labels?.[opt] ?? opt}
          </option>
        ))}
      </select>

    </label>
  );
}
