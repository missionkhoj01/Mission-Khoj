import { Instagram, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { siteConfig } from '@/config/site';
import { instaPosts } from '@/data/content';

export function InstagramSection() {
  return (
    <section id="instagram" className="scroll-mt-20 border-t border-white/[0.05] bg-ink-900/30 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Discover with Khoj</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Follow {siteConfig.instagramHandle}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-300">
            Follow {siteConfig.instagramHandle} for quick opportunity discoveries, deadlines and
            application tips.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instaPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 50}>
              <a
                href={siteConfig.instagramFollowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl border border-white/[0.06] p-3 transition-all duration-500 hover:border-gold-500/25 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                <div className="absolute inset-0 bg-grid-faint bg-[size:20px_20px] opacity-30" />
                <Instagram className="absolute right-3 top-3 h-4 w-4 text-white/40 transition-colors group-hover:text-gold-300" />

                <div className="relative">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-gold-300/80">
                    {post.tag}
                  </span>
                  <p className="mt-1 text-xs leading-snug text-ink-100">{post.caption}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={siteConfig.instagramFollowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 text-sm font-medium text-ink-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_28px_-6px_rgba(193,154,78,0.6)]"
          >
            <Instagram className="h-4 w-4" />
            Follow Mission Khoj
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
