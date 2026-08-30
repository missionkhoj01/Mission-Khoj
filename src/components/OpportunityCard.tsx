import {
  MapPin,
  Calendar,
  GraduationCap,
  BadgeDollarSign,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
  Globe2,
  Building2,
  Users,
  IndianRupee,
  Timer,
  Award,
} from 'lucide-react';

import type { Opportunity } from '@/types';
import { categoriesWithCounts } from '@/data/categories';

function formatDate(value: string): string {
  if (
    value === 'Rolling' ||
    value === 'To be announced' ||
    value === 'TBA'
  ) {
    return value;
  }

  const d = new Date(value);

  if (isNaN(d.getTime())) return value;

  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function daysUntil(value: string): number | null {
  if (
    value === 'Rolling' ||
    value === 'To be announced' ||
    value === 'TBA'
  ) {
    return null;
  }

  const d = new Date(value);

  if (isNaN(d.getTime())) return null;

  return Math.ceil(
    (d.getTime() - Date.now()) /
      (1000 * 60 * 60 * 24)
  );
}

interface OpportunityCardProps {
  opportunity: Opportunity;
  matchReason?: string;
}

export function OpportunityCard({
  opportunity,
  matchReason,
}: OpportunityCardProps) {
  const category = categoriesWithCounts.find(
    (c) => c.id === opportunity.category
  );

  const days = daysUntil(opportunity.deadline);

  const fundingTone =
    opportunity.funding === 'Fully Funded'
      ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300/90'
      : opportunity.funding === 'Free'
        ? 'border-sky-500/20 bg-sky-500/10 text-sky-300/90'
        : opportunity.funding === 'Partially Funded'
          ? 'border-violet-500/20 bg-violet-500/10 text-violet-300/90'
          : opportunity.funding === 'Stipend'
            ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300/90'
            : 'border-gold-500/20 bg-gold-500/10 text-gold-300/90';

  const deadlineTone =
    days !== null && days >= 0 && days <= 7
      ? 'text-red-300'
      : days !== null && days <= 30
        ? 'text-gold-300'
        : 'text-ink-100';

  const websiteUrl =
    opportunity.officialWebsite ||
    opportunity.sourceUrl;

  const applyUrl =
    opportunity.applicationUrl ||
    opportunity.sourceUrl;

  return (
    <article className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/25 hover:bg-ink-800/60 sm:p-6">

      {/* Featured */}
      {opportunity.featured && (
        <div className="absolute right-0 top-0 rounded-bl-xl border-b border-l border-gold-500/20 bg-gold-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-300">
          Featured
        </div>
      )}

      {/* Category + Funding */}
      <div className="flex items-start justify-between gap-3 pr-1">
        <span className="min-w-0 truncate text-xs font-medium uppercase tracking-wider text-gold-400/70">
          {category?.name ?? opportunity.category}
        </span>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${fundingTone}`}
        >
          {opportunity.funding}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 line-clamp-3 font-display text-lg font-medium leading-snug text-white">
        {opportunity.name}
      </h3>

      {/* Organization */}
      <div className="mt-2 flex min-w-0 items-center gap-1.5 text-sm text-ink-300">
        <Building2 className="h-3.5 w-3.5 shrink-0 text-ink-400" />

        <span className="truncate">
          {opportunity.organization}
        </span>
      </div>

      {/* Match reason */}
      {matchReason && (
        <p className="mt-3 rounded-lg border border-gold-500/15 bg-gold-500/[0.06] px-3 py-2 text-xs leading-relaxed text-gold-200/90">
          {matchReason}
        </p>
      )}

      {/* Type / Subcategory */}
      {(opportunity.type ||
        opportunity.subcategory) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {opportunity.type && (
            <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[11px] text-ink-200">
              {opportunity.type}
            </span>
          )}

          {opportunity.subcategory && (
            <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[11px] text-ink-300">
              {opportunity.subcategory}
            </span>
          )}
        </div>
      )}

      {/* Description */}
      <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-ink-200">
        {opportunity.description}
      </p>

      {/* Main metadata */}
      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 text-xs">

        <Meta
          icon={<MapPin className="h-3.5 w-3.5" />}
          label="Location"
          value={
            opportunity.location ||
            opportunity.country
          }
        />

        <Meta
          icon={<Calendar className="h-3.5 w-3.5" />}
          label="Deadline"
          value={formatDate(opportunity.deadline)}
          valueClassName={deadlineTone}
        />

        <Meta
          icon={
            <GraduationCap className="h-3.5 w-3.5" />
          }
          label="Eligibility"
          value={opportunity.eligibility}
        />

        <Meta
          icon={
            <BadgeDollarSign className="h-3.5 w-3.5" />
          }
          label="Funding"
          value={opportunity.funding}
        />
      </dl>

      {/* Additional information */}
      {(opportunity.grades?.length ||
        opportunity.ageRange ||
        opportunity.subjects?.length ||
        opportunity.mode ||
        opportunity.providerType ||
        opportunity.duration ||
        opportunity.fee ||
        opportunity.award) && (
        <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-4">

          {/* Grades */}
          {opportunity.grades &&
            opportunity.grades.length > 0 && (
              <InfoRow
                icon={
                  <GraduationCap className="h-3.5 w-3.5" />
                }
                label="For"
              >
                <div className="flex flex-wrap gap-1.5">
                  {opportunity.grades
                    .slice(0, 4)
                    .map((grade) => (
                      <span
                        key={grade}
                        className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] text-ink-200"
                      >
                        {grade}
                      </span>
                    ))}

                  {opportunity.grades.length > 4 && (
                    <span className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] text-ink-400">
                      +
                      {opportunity.grades.length - 4}
                    </span>
                  )}
                </div>
              </InfoRow>
            )}

          {/* Age */}
          {opportunity.ageRange && (
            <InfoRow
              icon={
                <Users className="h-3.5 w-3.5" />
              }
              label="Age"
            >
              <span>{opportunity.ageRange}</span>
            </InfoRow>
          )}

          {/* Subjects */}
          {opportunity.subjects &&
            opportunity.subjects.length > 0 && (
              <InfoRow
                icon={
                  <BookOpen className="h-3.5 w-3.5" />
                }
                label="Subjects"
              >
                <span className="line-clamp-2">
                  {opportunity.subjects.join(', ')}
                </span>
              </InfoRow>
            )}

          {/* Mode */}
          {opportunity.mode && (
            <InfoRow
              icon={
                <Globe2 className="h-3.5 w-3.5" />
              }
              label="Mode"
            >
              <span>{opportunity.mode}</span>
            </InfoRow>
          )}

          {/* Duration */}
          {opportunity.duration && (
            <InfoRow
              icon={
                <Timer className="h-3.5 w-3.5" />
              }
              label="Duration"
            >
              <span>{opportunity.duration}</span>
            </InfoRow>
          )}

          {/* Fee */}
          {opportunity.fee && (
            <InfoRow
              icon={
                <IndianRupee className="h-3.5 w-3.5" />
              }
              label="Fee"
            >
              <span>{opportunity.fee}</span>
            </InfoRow>
          )}

          {/* Award */}
          {opportunity.award && (
            <InfoRow
              icon={
                <Award className="h-3.5 w-3.5" />
              }
              label="Award"
            >
              <span className="line-clamp-2">
                {opportunity.award}
              </span>
            </InfoRow>
          )}

          {/* Provider */}
          {opportunity.providerType && (
            <InfoRow
              icon={
                <Building2 className="h-3.5 w-3.5" />
              }
              label="Provider"
            >
              <span>{opportunity.providerType}</span>
            </InfoRow>
          )}
        </div>
      )}

      {/* Tags */}
      {opportunity.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {opportunity.tags
            .slice(0, 5)
            .map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] text-ink-400"
              >
                #{tag}
              </span>
            ))}

          {opportunity.tags.length > 5 && (
            <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] text-ink-500">
              +{opportunity.tags.length - 5}
            </span>
          )}
        </div>
      )}

      {/* Deadline status */}
      <div className="min-h-[20px]">
        {days !== null && days >= 0 && (
          <p
            className={`mt-4 text-[11px] ${
              days <= 7
                ? 'font-medium text-red-300'
                : 'text-ink-400'
            }`}
          >
            <Clock className="mr-1 inline h-3 w-3" />

            {days === 0
              ? 'Ends today'
              : days === 1
                ? '1 day left'
                : `${days} days left`}
          </p>
        )}

        {opportunity.deadline === 'Rolling' && (
          <p className="mt-4 text-[11px] text-ink-400">
            <Clock className="mr-1 inline h-3 w-3" />
            Applications accepted on a rolling basis
          </p>
        )}

        {(opportunity.deadline === 'To be announced' ||
          opportunity.deadline === 'TBA') && (
          <p className="mt-4 text-[11px] text-ink-400">
            <Clock className="mr-1 inline h-3 w-3" />
            Deadline to be announced
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6">

        {/* Verification */}
        <div className="flex min-h-[24px] items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5 text-[11px] text-ink-400">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400/70" />

            <span className="truncate">
              {opportunity.status === 'Verified'
                ? `Verified ${formatDate(
                    opportunity.lastVerified
                  )}`
                : opportunity.status}
            </span>
          </div>

          {opportunity.IndiaEligible && (
            <span className="shrink-0 rounded-full border border-orange-400/10 bg-orange-400/[0.06] px-2 py-0.5 text-[10px] text-orange-200/80">
              India eligible
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-end gap-2">

          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-ink-100 transition-colors hover:border-gold-500/40 hover:text-gold-300"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Website
            </a>
          )}

          {applyUrl && (
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1 rounded-lg bg-gold-500 px-3 py-1.5 text-xs font-medium text-ink-950 transition-colors hover:bg-gold-400"
            >
              Apply

              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Meta({
  icon,
  label,
  value,
  valueClassName = 'text-ink-100',
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="min-w-0">
      <dt className="flex items-center gap-1.5 text-ink-400">
        {icon}
        {label}
      </dt>

      <dd
        className={`mt-1 line-clamp-2 ${valueClassName}`}
      >
        {value}
      </dd>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 text-xs">
      <div className="flex w-20 shrink-0 items-center gap-1.5 text-ink-400">
        {icon}
        {label}
      </div>

      <div className="min-w-0 flex-1 text-ink-200">
        {children}
      </div>
    </div>
  );
}
