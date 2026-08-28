import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/Logo';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm text-ink-200 transition-colors duration-300 hover:text-white hover:bg-white/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#opportunities"
              className="group inline-flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_28px_-6px_rgba(193,154,78,0.6)]"
            >
              Find an Opportunity
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-100 transition-colors hover:bg-white/[0.06] lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ink-900 border-l border-white/[0.08] transition-transform duration-400 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <Logo onClick={() => setOpen(false)} />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-100 hover:bg-white/[0.06]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-3 py-5">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3.5 text-[15px] text-ink-100 transition-colors hover:bg-white/[0.05] hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#opportunities"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3.5 text-sm font-medium text-ink-950"
            >
              Find an Opportunity
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
