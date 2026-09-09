import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { OpportunityCard } from '@/components/OpportunityCard';
import { allOpportunities } from '@/data/allOpportunities';
import { categories } from '@/data/categories';
import type { CategoryId, FundingType } from '@/types';

const PAGE_SIZE = 20;
const fundingOptions: FundingType[] = ['Fully Funded','Partially Funded','Free','Paid','Stipend','Self-Funded'];
const grades = ['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Undergraduate','Postgraduate'];

export function OpportunitiesPage() {
  const initialCategory = new URLSearchParams(window.location.search).get('category');
  const validInitialCategory = categories.some((c) => c.id === initialCategory) ? (initialCategory as CategoryId) : 'all';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>(validInitialCategory);
  const [funding, setFunding] = useState('all');
  const [grade, setGrade] = useState('all');
  const [indiaOnly, setIndiaOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(PAGE_SIZE);

  const active = useMemo(() => allOpportunities.filter((o) => o.status !== 'Expired'), []);
  const counts = useMemo(() => active.reduce<Record<string, number>>((acc, o) => { acc[o.category] = (acc[o.category] || 0) + 1; return acc; }, {}), [active]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return active.filter((o) => {
      if (category !== 'all' && o.category !== category) return false;
      if (funding !== 'all' && o.funding !== funding) return false;
      if (grade !== 'all') {
        const g = grade.toLowerCase();
        if (!(o.grades?.some((x) => x.toLowerCase() === g) || o.eligibility.toLowerCase().includes(g))) return false;
      }
      if (indiaOnly && !o.IndiaEligible && o.country !== 'India') return false;
      if (!q) return true;
      const fields = [o.name,o.organization,o.description,o.eligibility,o.country,o.category,o.location,o.type,o.subcategory,...(o.tags || []),...(o.subjects || [])];
      return fields.some((x) => x?.toLowerCase().includes(q));
    });
  }, [active, category, funding, grade, indiaOnly, query]);

  const reset = () => { setQuery(''); setCategory('all'); setFunding('all'); setGrade('all'); setIndiaOnly(false); };
  const shownCategories = categories.slice(0, visibleCategories);
  const hasMore = visibleCategories < categories.length;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Opportunity Khoj</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">Opportunities Worth Discovering</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-300">Browse scholarships, exams, colleges, competitions, olympiads, fellowships, internships, research, summer programs and more.</p>
        </Reveal>
        <Reveal className="mt-8"><div className="relative"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search opportunities..." className="w-full rounded-xl border border-white/[0.08] bg-ink-850/60 py-4 pl-12 pr-4 text-sm text-white placeholder:text-ink-400 focus:border-gold-500/40 focus:outline-none" /></div></Reveal>
        <Reveal className="mt-5"><div className="flex flex-wrap gap-2">
          <Chip active={category === 'all'} onClick={() => setCategory('all')}>All ({active.length})</Chip>
          {shownCategories.map((c) => <Chip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>{c.name} ({counts[c.id] || 0})</Chip>)}
          {hasMore ? <button onClick={() => setVisibleCategories((n) => Math.min(n + PAGE_SIZE, categories.length))} className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1.5 text-xs font-medium text-gold-300">Show 20 more <ChevronDown className="h-3.5 w-3.5" /></button> : categories.length > PAGE_SIZE ? <button onClick={() => setVisibleCategories(PAGE_SIZE)} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-ink-300">Show less <ChevronUp className="h-3.5 w-3.5" /></button> : null}
        </div></Reveal>
        <Reveal className="mt-4"><div className="flex items-center justify-between"><button onClick={() => setShowFilters((v) => !v)} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-ink-200 hover:border-gold-500/30 hover:text-white"><SlidersHorizontal className="h-4 w-4" />Filters</button><div className="flex items-center gap-3 text-xs text-ink-400"><span>{filtered.length} results</span><button onClick={reset} className="inline-flex items-center gap-1 hover:text-gold-300"><X className="h-3 w-3" />Clear</button></div></div>
          {showFilters && <div className="mt-4 grid gap-4 rounded-xl border border-white/[0.06] bg-ink-850/50 p-4 sm:grid-cols-3"><Select label="Funding" value={funding} onChange={setFunding} options={['all', ...fundingOptions]} /><Select label="Grade / Level" value={grade} onChange={setGrade} options={['all', ...grades]} /><label className="flex items-center gap-3 rounded-lg border border-white/[0.08] px-3 py-2.5 text-sm text-ink-200"><input type="checkbox" checked={indiaOnly} onChange={(e) => setIndiaOnly(e.target.checked)} className="h-4 w-4 accent-gold-500" />India eligible</label></div>}
        </Reveal>
        {filtered.length ? <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((opp, i) => <Reveal key={opp.id} delay={Math.min(i * 30, 300)}><OpportunityCard opportunity={opp} /></Reveal>)}</div> : <div className="mt-12 rounded-2xl border border-white/[0.06] py-16 text-center"><p className="font-display text-xl text-white">No results found</p><button onClick={reset} className="mt-5 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-ink-200 hover:text-white">Clear filters</button></div>}
      </div>
    </section>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) { return <button onClick={onClick} className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${active ? 'border-gold-500/40 bg-gold-500/15 text-gold-200' : 'border-white/10 text-ink-300 hover:border-white/20 hover:text-white'}`}>{children}</button>; }
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) { return <label className="flex flex-col gap-1.5"><span className="text-xs text-ink-400">{label}</span><select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-white/[0.08] bg-ink-800 px-3 py-2.5 text-sm text-white focus:outline-none">{options.map((o) => <option key={o} value={o}>{o === 'all' ? 'Any' : o}</option>)}</select></label>; }
