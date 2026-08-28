import { ArrowRight, Compass, Sparkles, Star, ShieldCheck, GraduationCap } from 'lucide-react';
import { Button } from '@/components/Button';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/[0.04] blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-gold-600/[0.03] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — copy */}
          <div className="animate-fade-up">
            <p className="eyebrow">Mission Khoj · Student-Led Initiative</p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover What’s
              <br />
              <span className="text-gradient-gold">Possible.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              We help students discover scholarships, competitions, research programs, learning
              opportunities and more — opportunities that often exist beyond the classroom.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#opportunities">
                <Button size="lg" variant="primary">
                  Explore Opportunities
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="#finder">
                <Button size="lg" variant="secondary">
                  Find Opportunities for Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold-400/70" /> Free to explore
              </span>
              <span className="text-ink-600">·</span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-gold-400/70" /> Built for students
              </span>
              <span className="text-ink-600">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400/70" /> Carefully researched
              </span>
            </div>
          </div>

          {/* Right — discovery visual */}
          <div className="relative hidden h-[480px] lg:block">
            <DiscoveryVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscoveryVisual() {
  return (
    <div className="relative h-full w-full">
      {/* compass ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[340px] w-[340px]">
          <div className="absolute inset-0 rounded-full border border-gold-500/15 animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-gold-500/10" />
          <div className="absolute inset-12 rounded-full border border-white/[0.04]" />
          {/* compass marks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <span
              key={deg}
              className="absolute left-1/2 top-1/2 h-[340px] w-px origin-top"
              style={{ transform: `rotate(${deg}deg)` }}
            >
              <span className="absolute top-0 h-2 w-px bg-gold-500/20" />
            </span>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="h-12 w-12 text-gold-400/40 animate-pulse-glow" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* glowing path */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 480" fill="none">
        <path
          d="M60 440 C 120 360, 100 280, 180 220 S 280 120, 340 60"
          stroke="url(#pathGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <defs>
          <linearGradient id="pathGrad" x1="0" y1="480" x2="400" y2="0">
            <stop stopColor="#c19a4e" stopOpacity="0" />
            <stop offset="0.5" stopColor="#cda85c" stopOpacity="0.5" />
            <stop offset="1" stopColor="#f5ecd6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* floating opportunity cards */}
      <div className="absolute left-2 top-8 w-44 animate-float-slow rounded-xl border border-white/[0.08] bg-ink-800/80 p-3 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-wider text-gold-400/70">Scholarship</p>
        <p className="mt-1 font-display text-sm text-white">Future Scholars</p>
        <p className="mt-1 text-[11px] text-ink-400">Fully Funded</p>
      </div>

      <div
        className="absolute right-4 top-32 w-44 animate-float-slow rounded-xl border border-white/[0.08] bg-ink-800/80 p-3 backdrop-blur-md"
        style={{ animationDelay: '1.5s' }}
      >
        <p className="text-[10px] uppercase tracking-wider text-gold-400/70">Research</p>
        <p className="mt-1 font-display text-sm text-white">Young Researchers</p>
        <p className="mt-1 text-[11px] text-ink-400">Grades 10–12</p>
      </div>

      <div
        className="absolute bottom-10 left-12 w-44 animate-float-slow rounded-xl border border-white/[0.08] bg-ink-800/80 p-3 backdrop-blur-md"
        style={{ animationDelay: '3s' }}
      >
        <p className="text-[10px] uppercase tracking-wider text-gold-400/70">Competition</p>
        <p className="mt-1 font-display text-sm text-white">Global Youth Award</p>
        <p className="mt-1 text-[11px] text-ink-400">Free entry</p>
      </div>

      {/* stars */}
      <Star className="absolute right-16 top-4 h-3 w-3 fill-gold-400/40 text-gold-400/40 animate-pulse-glow" />
      <Star className="absolute left-20 bottom-24 h-2.5 w-2.5 fill-gold-400/30 text-gold-400/30 animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </div>
  );
}
