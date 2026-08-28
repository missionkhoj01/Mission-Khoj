import { Compass } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface LogoProps {
  className?: string;
  showHindi?: boolean;
  onClick?: () => void;
}

export function Logo({ className = '', showHindi = true, onClick }: LogoProps) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-lg border border-gold-500/30 bg-gold-500/5 transition-all duration-500 group-hover:border-gold-500/50 group-hover:bg-gold-500/10" />
        <Compass className="h-5 w-5 text-gold-400 transition-transform duration-700 group-hover:rotate-45" strokeWidth={1.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-white">
          Mission Khoj
        </span>
        {showHindi && (
          <span className="mt-0.5 text-[10px] font-light tracking-[0.2em] text-gold-400/60">
            {siteConfig.hindiName}
          </span>
        )}
      </span>
    </a>
  );
}
