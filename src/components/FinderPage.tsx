import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { OpportunityCard } from '@/components/OpportunityCard';
import { Reveal } from '@/components/Reveal';
import { allOpportunities } from '@/data/allOpportunities';
import { categories } from '@/data/categories';

export function FinderPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [funding, setFunding] = useState('all');
  const [grade, setGrade] = useState('all');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allOpportunities.filter((o) => {
      if (o.status === 'Expired') return false;
      if (category !== 'all' && o.category !== category) return false;
      if (funding !== 'all' && o.funding !== funding) return false;
      if (grade !== 'all' && !(o.grades?.includes(grade) || o.eligibility.toLowerCase().includes(grade.toLowerCase()))) return false;
      if (!q) return true;
      return [o.name,o.organization,o.description,o.eligibility,o.country,...(o.tags || [])].some((x) => x.toLowerCase().includes(q));
    });
  }, [category, funding, grade, query]);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Opportunity Finder</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">Find what fits you</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-300">Search the full Mission Khoj catalog and narrow it down by category, funding and education level.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 rounded-2xl border border-white/[0.06] bg-ink-850/50 p-5 sm:grid-cols-2 lg:grid-cols-4">
          <label className="relative lg:col-span-2"><Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, subject, organization..." className="w-full rounded-lg border border-white/10 bg-ink-800 py-3 pl-10 pr-3 text-sm text-white placeholder:text-ink-400 focus:outline-none" /></label>
          <Select label="Category" value={category} onChange={setCategory} options={['all', ...categories.map((c) => c.id)]} />
          <Select label="Funding" value={funding} onChange={setFunding} options={['all','Fully Funded','Partially Funded','Free','Paid','Stipend','Self-Funded']} />
          <Select label="Grade / Level" value={grade} onChange={setGrade} options={['all','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Undergraduate','Postgraduate']} />
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-ink-300"><SlidersHorizontal className="h-4 w-4 text-gold-400" />{results.length} opportunities match your filters.</div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.slice(0, 60).map((opp, i) => <Reveal key={opp.id} delay={Math.min(i * 25, 250)}><OpportunityCard opportunity={opp} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return <label className="flex flex-col gap-1.5"><span className="text-xs text-ink-400">{label}</span><select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-white/[0.08] bg-ink-800 px-3 py-2.5 text-sm text-white focus:outline-none"><option value="all">Any</option>{options.filter((x) => x !== 'all').map((x) => <option key={x} value={x}>{x}</option>)}</select></label>;
}
