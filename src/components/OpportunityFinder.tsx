import { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Compass,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { OpportunityCard } from '@/components/OpportunityCard';
import { Button } from '@/components/Button';
import { opportunities } from '@/data/opportunities';

import type { CategoryId, Opportunity } from '@/types';

const grades = [
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
  'Undergraduate',
  'Other',
];

const interests = [
  'STEM',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'AI',
  'Research',
  'Business',
  'Economics',
  'Writing',
  'Social Impact',
  'Arts',
  'Other',
];

const lookingFor = [
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'research', label: 'Research' },
  { id: 'summer', label: 'Summer programs' },
  { id: 'courses', label: 'Courses' },
  { id: 'international', label: 'International opportunities' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'any', label: 'Any opportunity' },
];

const countries = [
  'India',
  'Online / Global',
  'Online + In-person',
  'Multi-country',
  'Regional',
  'Online + Europe',
];

const TOTAL_STEPS = 5;

interface FinderState {
  grade: string;
  country: string;
  interests: string[];
  looking: string[];
  academicProfile: string;
}

const initialState: FinderState = {
  grade: '',
  country: '',
  interests: [],
  looking: [],
  academicProfile: '',
};

export function OpportunityFinder() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FinderState>(initialState);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(
    () => findMatches(form),
    [form]
  );

  const canProceed = useMemo(() => {
    if (step === 0) return form.grade !== '';
    if (step === 1) return form.country !== '';
    if (step === 2) return form.interests.length > 0;
    if (step === 3) return form.looking.length > 0;

    return true;
  }, [step, form]);

  const next = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep((current) => current + 1);
    } else {
      setShowResults(true);
    }
  };

  const back = () => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const reset = () => {
    setForm(initialState);
    setStep(0);
    setShowResults(false);
  };

  const toggle = (
    field: 'interests' | 'looking',
    value: string
  ) => {
    setForm((current) => {
      const currentValues = current[field];

      return {
        ...current,
        [field]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  return (
    <section
      id="finder"
      className="scroll-mt-20 border-t border-white/[0.05] bg-ink-900/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Opportunity Finder</p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Find Opportunities For You
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300">
            Tell Khoj a little about yourself. We’ll help narrow down
            opportunities that fit your interests, level and goals.
          </p>
        </Reveal>

        {!showResults ? (
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-white/[0.07] bg-ink-850/60 p-6 sm:p-8">

              {/* Progress */}
              <div className="mb-8 flex items-center gap-2">
                {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                      index <= step
                        ? 'bg-gold-500/70'
                        : 'bg-white/[0.06]'
                    }`}
                  />
                ))}
              </div>

              <div className="min-h-[280px]">

                {/* Step 1 */}
                {step === 0 && (
                  <StepShell title="What class are you in?">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {grades.map((grade) => (
                        <OptionPill
                          key={grade}
                          active={form.grade === grade}
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              grade,
                            }))
                          }
                        >
                          {grade}
                        </OptionPill>
                      ))}
                    </div>
                  </StepShell>
                )}

                {/* Step 2 */}
                {step === 1 && (
                  <StepShell title="Where are you based?">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {countries.map((country) => (
                        <OptionPill
                          key={country}
                          active={form.country === country}
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              country,
                            }))
                          }
                        >
                          {country}
                        </OptionPill>
                      ))}
                    </div>
                  </StepShell>
                )}

                {/* Step 3 */}
                {step === 2 && (
                  <StepShell
                    title="What are you interested in?"
                    subtitle="Select all that apply."
                  >
                    <div className="flex flex-wrap gap-2.5">
                      {interests.map((interest) => (
                        <OptionPill
                          key={interest}
                          active={form.interests.includes(interest)}
                          onClick={() =>
                            toggle('interests', interest)
                          }
                        >
                          {interest}
                        </OptionPill>
                      ))}
                    </div>
                  </StepShell>
                )}

                {/* Step 4 */}
                {step === 3 && (
                  <StepShell
                    title="What are you looking for?"
                    subtitle="Select all that apply."
                  >
                    <div className="flex flex-wrap gap-2.5">
                      {lookingFor.map((item) => (
                        <OptionPill
                          key={item.id}
                          active={form.looking.includes(item.id)}
                          onClick={() =>
                            toggle('looking', item.id)
                          }
                        >
                          {item.label}
                        </OptionPill>
                      ))}
                    </div>
                  </StepShell>
                )}

                {/* Step 5 */}
                {step === 4 && (
                  <StepShell
                    title="Tell us a little more"
                    subtitle="Optional. This helps improve your matches."
                  >
                    <textarea
                      value={form.academicProfile}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          academicProfile: event.target.value,
                        }))
                      }
                      rows={6}
                      placeholder="For example: I enjoy mathematics and computer science, participate in coding competitions, and want to explore AI research."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-ink-800/60 p-4 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-gold-500/40 focus:outline-none"
                    />

                    <p className="mt-3 text-xs text-ink-400">
                      We don’t store this — it is only used to find
                      matching opportunities in this session.
                    </p>
                  </StepShell>
                )}
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink-300 transition-colors hover:text-white disabled:opacity-30 disabled:hover:text-ink-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                <span className="text-xs text-ink-500">
                  Step {step + 1} of {TOTAL_STEPS}
                </span>

                <Button
                  onClick={next}
                  disabled={!canProceed}
                >
                  {step === TOTAL_STEPS - 1
                    ? 'See Results'
                    : 'Continue'}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </Reveal>
        ) : (
          <FinderResults
            results={results}
            onReset={reset}
          />
        )}
      </div>
    </section>
  );
}

function FinderResults({
  results,
  onReset,
}: {
  results: {
    opportunity: Opportunity;
    reason: string;
  }[];
  onReset: () => void;
}) {
  return (
    <Reveal className="mt-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Your matches</p>

          <h3 className="mt-2 font-display text-2xl font-semibold text-white">
            Opportunities we found for you
          </h3>

          <p className="mt-2 text-sm text-ink-400">
            Ranked using your grade, location, interests and preferences.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-ink-200 transition-colors hover:border-gold-500/30 hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
          Start over
        </button>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {results.map(({ opportunity, reason }) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              matchReason={reason}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/[0.06] bg-ink-850/40 py-14 text-center">
          <Compass className="mx-auto h-8 w-8 text-gold-400/50" />

          <p className="mt-4 font-display text-lg text-white">
            No strong matches yet
          </p>

          <p className="mx-auto mt-2 max-w-md text-sm text-ink-300">
            Try selecting broader interests or choose
            “Any opportunity” to discover more possibilities.
          </p>

          <button
            type="button"
            onClick={onReset}
            className="mt-5 rounded-lg border border-white/10 px-4 py-2 text-sm text-ink-200 hover:border-gold-500/30 hover:text-white"
          >
            Try again
          </button>
        </div>
      )}

      <div className="mt-8 rounded-xl border border-gold-500/15 bg-gold-500/[0.04] p-5 text-center">
        <p className="text-sm text-ink-200">
          Not finding what you need?
        </p>

        <a
          href="#ask"
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200"
        >
          <MessageCircle className="h-4 w-4" />
          Ask Khoj
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in">
      <h3 className="font-display text-xl font-medium text-white">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-1.5 text-sm text-ink-400">
          {subtitle}
        </p>
      )}

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}

function OptionPill({
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
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
        active
          ? 'border-gold-500/50 bg-gold-500/15 text-gold-200'
          : 'border-white/10 bg-ink-800/40 text-ink-200 hover:border-white/20 hover:text-white'
      }`}
    >
      {active && (
        <Check className="h-3.5 w-3.5" />
      )}

      {children}
    </button>
  );
}

function findMatches(
  form: FinderState
): {
  opportunity: Opportunity;
  reason: string;
  score: number;
}[] {
  const activeOpportunities = opportunities.filter(
    (opportunity) =>
      opportunity.status !== 'Expired'
  );

  return activeOpportunities
    .map((opportunity) => {
      let score = 0;
      const reasons: string[] = [];

      const searchText = [
        opportunity.name,
        opportunity.organization,
        opportunity.description,
        opportunity.eligibility,
        opportunity.category,
        opportunity.subcategory,
        opportunity.type,
        opportunity.country,
        opportunity.location,
        opportunity.tags?.join(' '),
        opportunity.subjects?.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      /*
       * LOOKING FOR
       */
      const categoryMap: Record<
        string,
        CategoryId[]
      > = {
        scholarships: ['scholarships'],
        competitions: ['competitions'],
        research: ['research'],
        courses: ['courses', 'learning'],
        international: ['international'],
        leadership: ['fellowships', 'other'],
      };

      if (form.looking.includes('any')) {
        score += 2;
        reasons.push('Matches your broad search.');
      } else {
        for (const preference of form.looking) {
          const matchingCategories =
            categoryMap[preference];

          if (
            matchingCategories?.includes(
              opportunity.category
            )
          ) {
            score += 7;

            if (reasons.length < 2) {
              reasons.push(
                `Matches your interest in ${preference}.`
              );
            }
          }

          if (
            preference === 'summer' &&
            (
              opportunity.category ===
                'summer-programs' ||
              searchText.includes('summer') ||
              opportunity.tags?.some((tag) =>
                tag
                  .toLowerCase()
                  .includes('summer')
              )
            )
          ) {
            score += 7;

            if (reasons.length < 2) {
              reasons.push(
                'Matches your interest in summer programs.'
              );
            }
          }
        }
      }

      /*
       * INTERESTS
       */
      for (const interest of form.interests) {
        const normalizedInterest =
          interest.toLowerCase();

        if (
          searchText.includes(normalizedInterest)
        ) {
          score += 4;

          if (reasons.length < 2) {
            reasons.push(
              `Relevant to ${interest}.`
            );
          }
        }

        const subjectMatch =
          opportunity.subjects?.some(
            (subject) =>
              subject
                .toLowerCase()
                .includes(normalizedInterest) ||
              normalizedInterest.includes(
                subject.toLowerCase()
              )
          );

        if (subjectMatch) {
          score += 3;

          if (reasons.length < 2) {
            reasons.push(
              `Relevant to ${interest}.`
            );
          }
        }
      }

      /*
       * GRADE / ELIGIBILITY
       */
      if (form.grade) {
        const gradeText = form.grade.toLowerCase();

        const gradeMatch =
          searchText.includes(gradeText) ||
          opportunity.grades?.some(
            (grade) =>
              grade
                .toLowerCase()
                .includes(gradeText) ||
              gradeText.includes(
                grade.toLowerCase()
              )
          );

        if (gradeMatch) {
          score += 8;

          if (reasons.length < 2) {
            reasons.push(
              `Suitable for ${form.grade} students.`
            );
          }
        }
      }

      /*
       * COUNTRY / LOCATION
       */
      if (form.country) {
        const countryText =
          form.country.toLowerCase();

        const opportunityCountry =
          opportunity.country?.toLowerCase() ?? '';

        const opportunityLocation =
          opportunity.location?.toLowerCase() ?? '';

        let countryMatch = false;

        if (form.country === 'India') {
          countryMatch =
            opportunityCountry === 'india' ||
            opportunityLocation.includes('india') ||
            opportunity.IndiaEligible === true;
        } else if (
          form.country === 'Online / Global'
        ) {
          countryMatch =
            opportunity.mode
              ?.toLowerCase()
              .includes('online') === true ||
            opportunityLocation.includes('online') ||
            opportunityCountry.includes('global') ||
            opportunityCountry.includes('worldwide');
        } else {
          countryMatch =
            opportunityCountry.includes(countryText) ||
            opportunityLocation.includes(countryText);
        }

        if (countryMatch) {
          score += 5;

          if (reasons.length < 2) {
            reasons.push(
              `Available for students in ${form.country}.`
            );
          }
        }
      }

      /*
       * ACADEMIC PROFILE
       *
       * This is intentionally lightweight.
       * It does not send the text anywhere.
       */
      if (form.academicProfile.trim()) {
        const profileWords = form.academicProfile
          .toLowerCase()
          .split(/[^a-z0-9]+/)
          .filter((word) => word.length >= 4);

        const uniqueWords = Array.from(
          new Set(profileWords)
        );

        let profileMatches = 0;

        for (const word of uniqueWords) {
          if (searchText.includes(word)) {
            profileMatches += 1;
          }
        }

        if (profileMatches > 0) {
          score += Math.min(
            profileMatches * 2,
            8
          );

          if (reasons.length < 2) {
            reasons.push(
              'Matches details in your academic profile.'
            );
          }
        }
      }

      /*
       * FUNDING BOOST
       *
       * Scholarships / free opportunities are
       * especially useful for students.
       */
      if (
        form.looking.includes('scholarships') &&
        (
          opportunity.funding === 'Fully Funded' ||
          opportunity.funding === 'Free' ||
          opportunity.funding ===
            'Partially Funded'
        )
      ) {
        score += 2;
      }

      return {
        opportunity,
        reason:
          reasons[0] ??
          'General match for your profile.',
        score,
      };
    })
    .filter((result) => result.score >= 5)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      const aDeadline =
        new Date(a.opportunity.deadline).getTime();

      const bDeadline =
        new Date(b.opportunity.deadline).getTime();

      if (
        !isNaN(aDeadline) &&
        !isNaN(bDeadline)
      ) {
        return aDeadline - bDeadline;
      }

      return 0;
    })
    .slice(0, 6);
}
