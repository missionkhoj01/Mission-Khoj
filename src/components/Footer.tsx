import { Compass, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/5">
                <Compass className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-semibold text-white">Mission Khoj</span>
                <span className="mt-0.5 text-[10px] font-light tracking-[0.2em] text-gold-400/60">
                  {siteConfig.hindiName}
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs font-display text-xl text-ink-100">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink-300">
              Helping students discover opportunities beyond their classroom.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-200 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-200 transition-colors hover:text-gold-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">Follow</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-ink-200 transition-colors hover:text-gold-300"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2 text-sm text-ink-200 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4" />
                  Email
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
          <p className="text-xs leading-relaxed text-ink-400">
            Mission Khoj is an independent student-led initiative. Always verify eligibility,
            deadlines and application requirements on the official opportunity website before
            applying.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {siteConfig.foundedYear} {siteConfig.name}
          </p>
          <p className="text-xs text-ink-500">Built by students, for students.</p>
        </div>
      </div>
    </footer>
  );
}
