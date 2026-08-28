import {
  MapPin,
  Calendar,
  GraduationCap,
  BadgeDollarSign,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import type { Opportunity } from '@/types';
import { categories } from '@/data/categories';

function formatDate(iso: string): string {
  if (iso === 'Rolling') return 'Rolling';

  const d = new Date(iso);

  if (isNaN(d.getTime())) return iso;

  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function daysUntil(iso: string): number | null {
  if (iso === 'Rolling') return null;

  const d = new Date(iso);

  if (isNaN(d.getTime())) return null;

  const diff = Math.ceil(
    (d.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  return diff;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
  matchReason?: string;
}

export function OpportunityCard({
  opportunity,
  matchReason,
}: OpportunityCardProps) {
  const cat = categories.find((c) => c.id === opportunity.category);
  const days = daysUntil(opportunity.deadline);

  const fundingTone =
    opportunity.funding === 'Fully Funded'
      ? 'text-emerald-300/90 bg-emerald-500/10 border-emerald-500/20'
      : opportunity.funding === 'Free'
        ? 'text-sky-300/90 bg-sky-500/10 border-sky-500/20'
        : 'text-gold-300/90 bg-gold-500/10 border-gold-500/20';

  const handleView = () => {
    if (opportunity.sourceUrl) {
      window.open(
        opportunity.sourceUrl,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <article className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-ink-850/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/25 hover:bg-ink-800/60 sm:p-6">

      {/* Category + funding */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-gold-400/70">
          {cat?.name}
        </span>

        <span
          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${fundingTone}`}
        >
          {opportunity.funding}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 font-display text-lg font-medium leading-snug text-white">
        {opportunity.name}
      </h3>

      <p className="mt-1 text-sm text-ink-300">
        {opportunity.organization}
      </p>

      {/* Match reason */}
      {matchReason && (
        <p className="mt-3 rounded-lg border border-gold-500/15 bg-gold-500/[0.06] px-3 py-2 text-xs leading-relaxed text-gold-200/90">
          {matchReason}
        </p>
      )}

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-ink-200">
        {opportunity.description}
      </p>

      {/* Meta */}
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">

        <Meta
          icon={<MapPin className="h-3.5 w-3.5" />}
          label="Location"
          value={opportunity.country}
        />

        <Meta
          icon={<GraduationCap className="h-3.5 w-3.5" />}
          label="Eligibility"
          value={opportunity.eligibility}
        />

        <Meta
          icon={<Calendar className="h-3.5 w-3.5" />}
          label="Deadline"
          value={formatDate(opportunity.deadline)}
        />

        <Meta
          icon={<BadgeDollarSign className="h-3.5 w-3.5" />}
          label="Funding"
          value={opportunity.funding}
        />

      </dl>

      {/* Days remaining */}
      {days !== null && days >= 0 && (
        <p className="mt-3 text-[11px] text-ink-400">
          <Clock className="mr-1 inline h-3 w-3" />

          {days === 0
            ? 'Ends today'
            : days === 1
              ? '1 day left'
              : `${days} days left`}
        </p>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between gap-2 pt-5">

        <div className="flex items-center gap-1.5 text-[11px] text-ink-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/70" />
          <span>
            Verified {formatDate(opportunity.lastVerified)}
          </span>
        </div>

        <div className="flex items-center gap-2">

          {/* Official Source */}
          {opportunity.sourceUrl && (
            <a
              href={opportunity.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-ink-100 transition-colors hover:border-gold-500/40 hover:text-gold-300"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Official Source
            </a>
          )}

          {/* View */}
          <button
            type="button"
            onClick={handleView}
            disabled={!opportunity.sourceUrl}
            className="group/btn inline-flex items-center gap-1 rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-ink-100 transition-colors hover:bg-gold-500 hover:text-ink-950 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/[0.04] disabled:hover:text-ink-100"
          >
            View

            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </button>

        </div>
      </div>
    </article>
  );
}

function Meta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="flex items-center gap-1.5 text-ink-400">
        {icon}
        {label}
      </dt>

      <dd className="text-ink-100">
        {value}
      </dd>
    </div>
  );
}
