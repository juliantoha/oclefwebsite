import {
  ArrowUpRight,
  Sparkle,
  Music,
  Music2,
  Music4,
  Mic,
  Headphones,
  Radio,
  Guitar,
  Drum,
  AudioLines,
  Disc3,
  Star,
  Trophy,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { scrollToForm, CtaButton } from './Sections';

const DAY = '/images/hero-day.jpg';
const NIGHT = '/images/hero-night.jpg';
const TEAL = '#1f3942';

function Label({ children, align = 'center' }: { children: React.ReactNode; align?: 'center' | 'start' }) {
  return (
    <div className={`flex items-center gap-2 ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
      <Sparkle className="h-3 w-3 text-[#e8702a]" strokeWidth={1.5} />
      <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">{children}</span>
      <Sparkle className="h-3 w-3 text-[#e8702a]" strokeWidth={1.5} />
    </div>
  );
}

const ROW_1 = [Music, Music2, GraduationCap, Mic, Headphones, BookOpen, AudioLines, Radio];
const ROW_2 = [Drum, Guitar, Disc3, Trophy, Music4, Star, BookOpen, Headphones];

function Marquee({ icons, dir }: { icons: typeof ROW_1; dir: 'left' | 'right' }) {
  const row = [...icons, ...icons];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max gap-3 ${dir === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
        {row.map((Icon, i) => (
          <div
            key={i}
            className="liquid-glass h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0"
          >
            <Icon className="h-6 w-6 text-white/85" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}

const TIMELINE = [
  { when: 'Mon–Fri', what: '1-on-1 Lessons', detail: 'Live online' },
  { when: 'Daily', what: 'Kaizen Practice', detail: '5AM–8PM' },
  { when: 'Monthly', what: 'Recitals & Events', detail: 'In person' },
];

export function BentoShowcase() {
  return (
    <section id="snapshot" className="scroll-mt-20 bg-[#0a0e12] text-white antialiased px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 lg:py-20">
      {/* Header row */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 md:mb-10">
        <div className="max-w-3xl">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight">
            A teacher with your child,{' '}
            <span className="font-display-serif italic text-[#e8702a]">every day.</span>
          </h2>
          <p className="mt-4 text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-3xl">
            Oclef pairs your child with a real piano teacher five days a week — building skill,
            confidence, and a lifelong love of music, one day at a time. A decade of daily
            teaching, distilled into a method that actually works.
          </p>
        </div>
        <CtaButton variant="glass" size="md" onClick={scrollToForm} className="shrink-0">
          Let’s Start Today
        </CtaButton>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* Column 1 — Daily rhythm with image bg */}
        <div className="relative rounded-2xl bg-black overflow-hidden min-h-[420px] md:min-h-0 flex flex-col">
          <img src={NIGHT} alt="" className="absolute inset-0 h-full w-full object-cover slow-pan opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
          <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
            <Label>The Daily Rhythm</Label>
            <div className="flex-1" />
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-4 text-[13px]">
              {TIMELINE.map((r) => (
                <div key={r.what} className="contents">
                  <span className="text-white/90 font-medium whitespace-nowrap">{r.when}</span>
                  <span className="flex items-center gap-2 text-white">
                    <Sparkle className="h-3 w-3 text-white/50 shrink-0" strokeWidth={1.5} />
                    {r.what}
                  </span>
                  <span className="text-right text-white/55 whitespace-nowrap">{r.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 — Parent voice + stat */}
        <div className="grid grid-rows-1 md:grid-rows-[auto_1fr] gap-4 md:gap-5">
          {/* Parent voice */}
          <div className="noise-overlay relative overflow-hidden rounded-2xl p-5 md:p-6" style={{ background: TEAL }}>
            <Label align="start">Parent Voice</Label>
            <p className="mt-4 text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85">
              “Oclef’s daily lessons have given my daughter a sense of belonging and confidence.
              The progress — and the joy — speak for themselves.”
            </p>
            <p className="mt-4 text-[13px] text-white/90">
              <span className="font-semibold">Tiffany Q.</span>
              <span className="text-white/55"> — Parent, Oclef Family</span>
            </p>
          </div>

          {/* Stat */}
          <div className="relative rounded-2xl bg-black overflow-hidden min-h-[260px] flex flex-col">
            <img src={DAY} alt="" className="absolute inset-0 h-full w-full object-cover slow-pan opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-6 text-center">
              <span className="font-lato font-light tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white drop-shadow-lg">
                90%<span className="text-[#e8702a]">+</span>
              </span>
              <span className="mt-2 text-white/85 text-sm">Student success rate</span>
            </div>
          </div>
        </div>

        {/* Column 3 — Daily skills marquee + reach us */}
        <div className="grid grid-rows-1 md:grid-rows-[1fr_auto] gap-4 md:gap-5">
          {/* Marquee */}
          <div className="relative rounded-2xl bg-black overflow-hidden min-h-[360px] flex flex-col p-5 md:p-6">
            <Label>What They Master</Label>
            <div className="flex-1" />
            <div className="flex flex-col gap-3">
              <Marquee icons={ROW_1} dir="left" />
              <Marquee icons={ROW_2} dir="right" />
            </div>
          </div>

          {/* Reach us */}
          <div className="noise-overlay relative overflow-hidden rounded-2xl p-5 md:p-6" style={{ background: TEAL }}>
            <Label align="start">Reach Us</Label>
            <div className="mt-4 space-y-1">
              <p className="text-white/90 text-sm">hi@oclef.com</p>
              <p className="text-white/90 text-sm">+1 (408) 915-5524</p>
            </div>
            <CtaButton variant="glass" size="md" onClick={scrollToForm} fullWidth className="mt-5">
              Book a Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
