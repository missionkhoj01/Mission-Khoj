import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Compass;

  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850/50 p-6 text-left transition-all duration-500 hover:border-gold-500/25 hover:bg-ink-800/60 hover:-translate-y-1"
    >
      {/* glow */}
      <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-500/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold-500/10" />

      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/[0.06]">
        <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
      </span>

      <h3 className="mt-4 font-display text-lg font-medium text-white">{category.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">{category.description}</p>

      <div className="mt-5 flex w-full items-center justify-between">
        <span className="text-xs text-ink-400">{category.count} opportunities</span>
        <span className="inline-flex items-center gap-1 text-sm text-gold-300 transition-transform duration-300 group-hover:translate-x-0.5">
          Explore
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
