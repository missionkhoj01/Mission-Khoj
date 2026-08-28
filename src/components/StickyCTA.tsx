import { useEffect, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-ink-950/90 backdrop-blur-xl transition-transform duration-400 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href="#finder"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-sm text-ink-100 transition-colors hover:border-gold-500/30"
        >
          <Search className="h-4 w-4" /> Find for me
        </a>
        <a
          href="#opportunities"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-500 py-2.5 text-sm font-medium text-ink-950"
        >
          Explore <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
