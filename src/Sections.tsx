import { useEffect, useRef, useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Users,
  MonitorSmartphone,
  Music4,
  Trophy,
  LineChart,
  GraduationCap,
  Clock,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Minus,
  Phone,
  MapPin,
  Sparkle,
  Sparkles,
  Activity,
  Play,
  Loader2,
  CalendarCheck,
} from 'lucide-react';

const NAVY = '#004a69';

export const scrollToForm = () =>
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#eb6a18]">
      <Sparkle className="h-3 w-3 shrink-0" strokeWidth={1.5} />
      {children}
      <Sparkle className="h-3 w-3 shrink-0" strokeWidth={1.5} />
    </span>
  );
}

/**
 * The one button used across the whole site. Same geometry + hover everywhere;
 * only the surface changes per background:
 *  - primary : solid orange (the brand CTA, works on light and navy)
 *  - glass   : liquid-glass (matches the hero, for dark/cinematic surfaces)
 *  - light   : white on dark
 *  - dark    : near-black on light
 */
type ButtonVariant = 'primary' | 'glass' | 'light' | 'dark';
export function CtaButton({
  children,
  variant = 'primary',
  size = 'lg',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  className = '',
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}) {
  const sizes = size === 'lg' ? 'text-base px-9 py-4' : 'text-sm px-6 py-3';
  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[#eb6a18] text-white hover:bg-[#cf5d12] shadow-lg shadow-[#eb6a18]/25 hover:shadow-xl hover:shadow-[#eb6a18]/40',
    glass: 'liquid-glass text-white hover:bg-white/[0.08]',
    light: 'bg-white text-[#004a69] hover:bg-gray-100',
    dark: 'bg-gray-900 text-white hover:bg-gray-800',
  };
  // Default action is scrolling to the booking form, but a type="submit" button
  // must not hijack its own click with a scroll — the form's onSubmit owns it.
  const handleClick = onClick ?? (type === 'submit' ? undefined : scrollToForm);
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none transition-all duration-200 hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 ${sizes} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────  Intro band  ───────────────────────── */
export function IntroBand() {
  return (
    <section id="intro" className="scroll-mt-20 bg-white py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
          Weekly lessons{' '}
          <span className="font-display-serif italic text-[#eb6a18]">don’t work.</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
          With daily 1-on-1 lessons, your child will love piano and make real progress
          without the struggle.
        </p>
        <p className="mt-4 text-base text-gray-500 leading-relaxed">
          Get a free consultation and your child’s first piano assessment, so you can see the
          difference daily lessons make.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton size="lg">See the Daily Difference</CtaButton>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <img
            src="/images/yelp-400-families.png"
            alt="Rated a 5-star business on Yelp by 400+ families"
            className="h-auto w-60"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Why Oclef  ───────────────────────── */
export function WhyOclef() {
  return (
    <section id="why" className="scroll-mt-20 bg-[#fff6ed] py-20 sm:py-28 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Why Oclef?</SectionLabel>
        <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl md:text-6xl leading-[0.95]">
          <span className="font-display-serif italic">Piano</span>{' '}
          <span className="font-lato font-bold">Every Day</span>
        </h2>
      </div>

      <div className="mt-12 max-w-2xl mx-auto space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
        <p>
          Every parent signs up for piano lessons to help their child find joy in music.
          Unfortunately, within the first three years, most piano students face problems
          leading to{' '}
          <span className="font-semibold text-gray-900">
            83% of children dropping out
          </span>{' '}
          or being musically illiterate. The root cause? Taking piano lessons once-a-week.
        </p>
        <p>
          When taking once-a-week lessons, students are left on their own to practice. Most
          parents don’t know how to help them. So most students don’t practice correctly, or
          at all. They just wait until their next lesson. This broken system creates the
          painful result of the piano student eventually dropping out or being illiterate.
        </p>
        <p>
          By shifting to the Oclef Method, where children receive 1-on-1 guidance five days a
          week, success rates for piano students{' '}
          <span className="font-semibold text-gray-900">soar above 90%</span>. Our goal at
          Oclef is clear: to empower every student to grow and thrive through the joy of
          learning music. Join us to provide your child with daily 1-on-1 classes by a teacher
          that makes their learning experience into a journey of enjoyment and personal growth.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton size="lg">Set My Child Up to Succeed</CtaButton>
      </div>
    </section>
  );
}

/* ─────────────────────────  How it works  ───────────────────────── */
const STEPS: {
  icon: typeof CalendarDays;
  title: string;
  body: string;
}[] = [
  {
    icon: CalendarDays,
    title: 'Daily 1-on-1 Lessons',
    body: 'Your child connects with their piano teacher 5 times a week, 1:1 online. Whether they’re pure beginners or building upon years of study, our professors adjust to each student.',
  },
  {
    icon: Users,
    title: 'Practice, Performance & Community',
    body: 'Daily Kaizen guided practice is just the start. Weekly performance seminars and monthly in-person recitals and events build your child’s confidence, community, and love of the stage, the social and emotional side of learning.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Oclef Pro Software',
    body: 'With Oclef Pro, our learning management software, all your child’s recordings, assignments, assessments, and lesson notes are seamlessly organized. Progress is tracked and everything you need is at your fingertips.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-white py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl leading-tight">
            Three parts,{' '}
            <span className="font-display-serif italic">one complete education</span>
          </h2>
        </div>

        <div className="mt-14 sm:mt-20 grid md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex flex-col gap-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#eb6a18]/20 hover:shadow-[0_18px_48px_rgba(17,24,39,0.12)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb6a18]/10 transition-colors duration-300 group-hover:bg-[#eb6a18]/15">
                  <step.icon size={26} className="text-[#eb6a18]" strokeWidth={1.75} />
                </div>
                <span className="font-lato text-5xl font-light leading-none text-gray-200 transition-colors duration-300 group-hover:text-[#eb6a18]/25">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-gray-900 text-xl font-semibold leading-snug">{step.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <CtaButton size="lg">Give my Child Piano Every Day</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Comparison  ───────────────────────── */
const COMP_COLS = ['Online Video Courses', 'Piano App', 'Once-a-week Piano Lessons'];
const COMP_ROWS: { feature: string; values: boolean[]; highlight?: boolean }[] = [
  { feature: 'Interactive Learning', values: [true, true, true] },
  { feature: 'Real-Time Feedback', values: [false, true, true] },
  { feature: 'Learning Management Software', values: [true, true, false] },
  { feature: 'Daily Practice Accountability', values: [false, false, false], highlight: true },
  { feature: 'Personalized Curriculum', values: [false, false, true] },
  { feature: 'Performance Opportunities', values: [false, false, true] },
  { feature: 'Events & Community', values: [false, false, false] },
  { feature: 'Monthly Assessments', values: [false, false, false] },
];

function Mark({ on }: { on: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full"
      style={{ background: on ? '#00952e' : '#b9314f' }}
    >
      {on ? <Check size={16} className="text-white" /> : <X size={16} className="text-white" />}
    </span>
  );
}

export function Comparison() {
  const [swiped, setSwiped] = useState(false);
  const strongTint = 'rgba(235,106,24,0.30)';
  const oclefTint = 'rgba(235,106,24,0.16)';
  const glow = '0 0 34px rgba(235,106,24,0.28)';
  // Opaque backing for the pinned first column so cells sliding under it on
  // mobile (horizontal swipe) are hidden, keeping the row labels readable.
  const col1Bg = '#012c40';
  return (
    <section
      id="comparison"
      className="scroll-mt-20 py-20 sm:py-28 px-5"
      style={{ background: 'radial-gradient(120% 90% at 50% 0%, #004a69 0%, #002642 55%, #02040f 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>The difference</SectionLabel>
          <h2 className="mt-4 text-white text-4xl sm:text-5xl leading-tight">
            See how Oclef{' '}
            <span className="font-display-serif italic text-[#eb6a18]">compares</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            One thing decides whether a child learns piano: practicing every day, with someone
            there to catch the mistakes before they stick. It’s the single biggest factor in
            success, and the one thing only Oclef guarantees.
          </p>
        </div>

        {/* Swipe hint — the table overflows on small screens */}
        <div
          className={`sm:hidden mb-4 flex justify-center transition-opacity duration-300 ${
            swiped ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80">
            Swipe to compare
            <ArrowRight size={14} className="animate-swipe" />
          </span>
        </div>

        <div className="overflow-x-auto" onScroll={() => setSwiped(true)}>
          <div className="min-w-[480px] relative">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-2 sm:gap-3">
              <div
                className="liquid-glass rounded-t-xl flex items-center px-4 py-4 text-sm font-semibold text-white/80"
                style={{ position: 'sticky', left: 0, zIndex: 20, backgroundColor: col1Bg }}
              >
                Features
              </div>
              {COMP_COLS.map((c) => (
                <div
                  key={c}
                  className="liquid-glass rounded-t-xl px-2 py-4 text-center text-white/80 text-sm font-semibold leading-tight"
                >
                  {c}
                </div>
              ))}
              <div
                className="liquid-glass rounded-t-xl px-2 py-4 text-center text-white text-lg font-bold font-lato"
                style={{ background: 'rgba(235,106,24,0.9)' }}
              >
                Oclef
              </div>
            </div>

            {/* Rows */}
            {COMP_ROWS.map((row, ri) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.4fr_repeat(4,1fr)] gap-2 sm:gap-3 mt-2 sm:mt-3 ${
                  row.highlight ? 'relative z-10' : ''
                }`}
              >
                <div
                  className={`liquid-glass rounded-xl px-4 flex text-white text-sm sm:text-base ${
                    row.highlight
                      ? 'flex-col items-start justify-center gap-1 py-4 ring-1 ring-[#eb6a18]/60'
                      : 'items-center font-medium py-4 sm:py-5'
                  }`}
                  style={{
                    // Inline position overrides liquid-glass's position:relative so the
                    // label column actually pins while the row scrolls horizontally.
                    position: 'sticky',
                    left: 0,
                    zIndex: 20,
                    ...(row.highlight
                      ? { background: `linear-gradient(${strongTint}, ${strongTint}), ${col1Bg}`, boxShadow: glow }
                      : { backgroundColor: col1Bg }),
                  }}
                >
                  {row.highlight ? (
                    <>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#eb6a18]">
                        <Sparkles size={12} strokeWidth={2} /> The #1 success factor
                      </span>
                      <span className="font-bold leading-tight">{row.feature}</span>
                      <span className="text-white/55 text-xs leading-snug">
                        What actually decides if your child learns piano
                      </span>
                    </>
                  ) : (
                    row.feature
                  )}
                </div>
                {row.values.map((v, ci) => (
                  <div
                    key={ci}
                    className={`liquid-glass rounded-xl flex items-center justify-center min-h-[56px] ${
                      row.highlight ? 'ring-1 ring-[#eb6a18]/50' : ''
                    }`}
                    style={row.highlight ? { background: strongTint, boxShadow: glow } : undefined}
                  >
                    <Mark on={v} />
                  </div>
                ))}
                <div
                  className={`liquid-glass rounded-xl flex items-center justify-center min-h-[56px] ${
                    row.highlight ? 'ring-2 ring-[#eb6a18]' : ''
                  }`}
                  style={{
                    background: row.highlight ? 'rgba(235,106,24,0.55)' : oclefTint,
                    boxShadow: row.highlight ? '0 0 34px rgba(235,106,24,0.5)' : undefined,
                  }}
                >
                  <Mark on={true} />
                </div>
                {ri === 0 && <span className="sr-only">Oclef column</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Oclef Pro  ───────────────────────── */
const PRO_FEATURES = [
  {
    icon: Activity,
    name: 'Activity Feed',
    headline: 'Every day, a step forward.',
    body: 'With Oclef Pro, you’ll see the journey unfold, with daily notes, feedback, recordings, and quizzes, all in one place. It’s more than a record of progress; it’s a reflection of growth, day by day.',
    tag: 'Stay in tune with every moment.',
    image: '/images/pro-activity-feed.jpg',
  },
  {
    icon: Music4,
    name: 'Assignments',
    headline: 'Practice with purpose.',
    body: 'From personalized feedback to instant access to sheet music, Oclef Pro makes every assignment meaningful. Your child will know not just what to practice, but why, transforming effort into artistry.',
    tag: 'Because every great performance starts with the right preparation.',
    image: '/images/pro-assignments.jpg',
  },
  {
    icon: Sparkles,
    name: 'Music Theory',
    headline: 'The building blocks of brilliance.',
    body: 'Interactive quizzes take students from “Do-Re-Mi” to decoding a Beethoven symphony or improvising a jazz riff. Oclef Pro makes theory engaging, step by step.',
    tag: 'Foundations that make the complex feel simple.',
    image: '/images/pro-music-theory.jpg',
  },
  {
    icon: Trophy,
    name: 'Performances & Recitals',
    headline: 'A gallery of greatness.',
    body: 'Every recital, every recording, preserved forever. Whether it’s Chopin or Coldplay, your child’s milestones are captured, so you can relive the moments that matter most.',
    tag: 'Celebrate their evolution, one performance at a time.',
    image: '/images/pro-performances-recitals.jpg',
  },
  {
    icon: LineChart,
    name: 'Monthly Assessments',
    headline: 'Insights that connect.',
    body: 'Monthly progress reports from their professor, delivered through Oclef Pro, keep parents informed and engaged. It’s clear, actionable feedback that reflects not just how they’re growing, but where they’re headed.',
    tag: 'Designed to keep parents, students, and professors in sync.',
    image: '/images/pro-monthly-assessments.jpg',
  },
];

export function OclefPro() {
  const [open, setOpen] = useState(0);
  return (
    <section id="pro" className="scroll-mt-20 bg-[#fff6ed] py-20 sm:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <SectionLabel>Oclef Pro</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl leading-tight">
            Unlocking potential,{' '}
            <span className="font-display-serif italic">one note at a time</span>
          </h2>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            At Oclef, piano is our instrument, but growth is our purpose. Oclef Pro is our
            software that brings the “Piano Every Day” philosophy to life, connecting students,
            parents, and professors in a seamless experience where every day counts.
          </p>
        </div>

        <div className="space-y-3">
          {PRO_FEATURES.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.name}
                className={`rounded-xl border bg-white overflow-hidden transition-colors ${
                  isOpen ? 'border-[#eb6a18]/40' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <f.icon
                      size={20}
                      className={isOpen ? 'text-[#eb6a18]' : 'text-gray-400'}
                      strokeWidth={1.75}
                    />
                    <span
                      className={`text-lg font-semibold ${isOpen ? 'text-[#eb6a18]' : 'text-gray-900'}`}
                    >
                      {f.name}
                    </span>
                  </span>
                  {isOpen ? (
                    <Minus size={20} className="text-[#eb6a18] shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-7">
                    <h3 className="text-gray-900 text-xl font-semibold leading-tight">
                      {f.headline}
                    </h3>
                    <p className="mt-3 max-w-3xl text-gray-600 text-[15px] leading-relaxed">{f.body}</p>
                    <p className="mt-3 text-gray-900 font-display-serif italic">{f.tag}</p>

                    {/* Software screenshot — full width so the UI is legible */}
                    <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                        <span className="ml-2 text-[11px] text-gray-400 font-medium">
                          Oclef Pro · {f.name}
                        </span>
                      </div>
                      <img
                        src={f.image}
                        alt={`Oclef Pro ${f.name} screenshot`}
                        loading="lazy"
                        className="block w-full h-auto bg-[#fafafa]"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton size="lg">Unlock My Child’s Potential</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Student story videos  ───────────────────────── */
type StoryCard = { name: string; caption: string; gradient: string; image?: string; video?: string };
const STORY_CARDS: StoryCard[] = [
  { name: 'Sarah & Mia', caption: 'How daily lessons ended the practice battle', gradient: 'linear-gradient(160deg, #e8a87c 0%, #b85c38 100%)' },
  { name: 'The Okonkwo Family', caption: 'Finally sure her daughter is truly learning', gradient: 'linear-gradient(160deg, #7494a8 0%, #2e4a5c 100%)' },
  { name: 'Daniel & Leo', caption: 'Finding a musical community to belong to', gradient: 'linear-gradient(160deg, #9aa884 0%, #56653f 100%)' },
  { name: 'The Chen Family', caption: 'Preparing for college and life beyond', gradient: 'linear-gradient(160deg, #c98c93 0%, #7a4a52 100%)' },
];

export function VideoTestimonials() {
  const [active, setActive] = useState<StoryCard | null>(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="reviews" className="scroll-mt-20 bg-[#fff6ed] py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Family stories</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl leading-tight">
            Real families.{' '}
            <span className="font-display-serif italic text-[#eb6a18]">Real stories.</span>
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Parents and their kids share how Oclef changed their experience with piano, from
            daily practice to real progress, community, and what comes next.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STORY_CARDS.map((s) => (
            <button
              key={s.name}
              onClick={() => setActive(s)}
              className="group isolate relative block aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl text-left"
            >
              {/* Media: a real video plays muted/looping inline as a silent preview;
                  tapping the card opens the lightbox to enlarge it with sound. Falls
                  back to an image poster, then a gradient placeholder. */}
              {s.video ? (
                <video
                  src={s.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : s.image ? (
                <img src={s.image} alt={s.name} className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 rounded-2xl transition-transform duration-500 group-hover:scale-105" style={{ background: s.gradient }} />
              )}

              {/* Legibility scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/40 bg-black/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play size={20} className="ml-0.5 text-white" fill="white" />
                </span>
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-sm sm:text-base font-semibold text-white">{s.name}</p>
                <p className="mt-1 text-[13px] sm:text-[15px] leading-snug text-white/80">{s.caption}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton size="lg">Start Your Family’s Story</CtaButton>
        </div>
      </div>

      {/* Video lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} story`}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
              {active.video ? (
                <video src={active.video} controls autoPlay className="h-full w-full bg-black" />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center"
                  style={{ background: active.gradient }}
                >
                  <p className="font-display-serif italic text-2xl text-white sm:text-3xl">
                    {active.name}’s story is coming soon.
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-white/85">
                    We’re filming our families’ stories right now. The best way to see if Oclef is
                    right for your child is a quick, free consultation.
                  </p>
                  <button
                    onClick={() => {
                      setActive(null);
                      scrollToForm();
                    }}
                    className="mt-1 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#004a69] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
                  >
                    Book a Free Consultation
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────  Proof stats strip  ───────────────────────── */
type Stat = { target?: number; prefix?: string; suffix?: string; static?: string; label: string };
const STATS: Stat[] = [
  { target: 90, suffix: '%+', label: 'Student success rate' },
  { target: 5, suffix: ' days', label: 'Of 1-on-1 lessons a week' },
  { target: 30, suffix: '-day', label: 'Money-back guarantee' },
  { static: '6AM–8PM', label: 'Practice support, every day' },
];

/* Number that eases up from 0 → target the first time it scrolls into view */
function CountUp({ target, prefix = '', suffix = '', duration = 1500 }: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    let timer = 0;
    let start = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        // Safety net: guarantee the final value even if rAF is throttled.
        timer = window.setTimeout(() => setVal(target), duration + 200);
        const tick = (t: number) => {
          if (!start) start = t;
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setVal(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [target, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-[#fff6ed] py-14 sm:py-16 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${i !== 0 ? 'md:border-l md:border-gray-200' : ''}`}
          >
            <div className="font-lato font-light text-4xl sm:text-5xl tracking-tight text-[#eb6a18]">
              {s.static ? (
                s.static
              ) : (
                <CountUp target={s.target!} prefix={s.prefix} suffix={s.suffix} />
              )}
            </div>
            <div className="mt-2 text-[15px] text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────  Getting started (3 steps)  ───────────────────────── */
const START_STEPS = [
  {
    n: '1',
    title: 'Book a free consultation',
    body: 'A 30-minute conversation about your child, your goals, and whether the daily model is right for them. No commitment.',
  },
  {
    n: '2',
    title: 'Meet & get a custom plan',
    body: 'We assess your child’s level and design a learning path built entirely around them.',
  },
  {
    n: '3',
    title: 'Start daily lessons',
    body: 'Your child begins 1-on-1 lessons five days a week from home, backed by our 30-day guarantee.',
  },
];

export function GetStarted() {
  return (
    <section className="px-5 py-20 sm:py-28" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Getting started</SectionLabel>
          <h2 className="mt-4 text-white text-4xl sm:text-5xl leading-tight">
            Starting is <span className="font-display-serif italic text-[#eb6a18]">simple</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Three easy steps, and the first one is completely free.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-10">
          {/* Connecting line behind the step badges (desktop) */}
          <div
            className="hidden md:block absolute top-7 left-[16.667%] right-[16.667%] h-px z-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(235,106,24,0.5) 0%, rgba(255,255,255,0.18) 50%, rgba(235,106,24,0.5) 100%)',
            }}
          />
          {START_STEPS.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative z-10 mx-auto w-14 h-14 rounded-full bg-[#eb6a18] text-white font-semibold text-lg flex items-center justify-center ring-4 ring-[#eb6a18]/15 shadow-lg shadow-[#eb6a18]/30">
                {s.n}
              </div>
              <h3 className="mt-6 text-white text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/65 text-[15px] leading-relaxed max-w-[280px] mx-auto">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton>Book a Free Consultation</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FAQ  ───────────────────────── */
const FAQS = [
  {
    q: 'Do I need to buy a piano or digital keyboard for my child to learn at Oclef?',
    a: 'Yes, having a piano or digital keyboard is essential for daily practice and making the most of Oclef lessons.',
  },
  {
    q: 'What age do you accept students to learn at your school?',
    a: 'Oclef welcomes students from 7 years old, ideal for engaging in structured learning and making daily lessons productive.',
  },
  {
    q: 'How does your 30-day money back guarantee work?',
    a: 'We’re confident in our program’s value and want you to feel the same. Our 30-day money-back guarantee allows new students to pay tuition upfront and try our classes without financial risk. If you’re not satisfied, simply let us know within 30 days of enrollment, and we’ll issue a full refund.',
  },
  {
    q: 'Do you provide support for National or State Piano Exams?',
    a: 'Yes, we offer comprehensive support for various piano examinations with our daily lessons and continuous assessment model.',
  },
  {
    q: 'Is Oclef suitable for absolute beginners or those who’ve struggled with piano before?',
    a: 'Absolutely! Our adaptive method suits all levels, ensuring joy and success in piano learning from absolute beginners to highly experienced students.',
  },
  {
    q: 'What if my child can’t attend a lesson?',
    a: 'If your child misses a lesson, they receive tailored support to continue progressing, whether through additional materials or guided practice.',
  },
  {
    q: 'Do you provide any in-person instruction or is it completely online?',
    a: 'While primarily online, Oclef offers in-person recital opportunities, social events and classes to build community, and immersive in-person piano camps alongside our year-round curriculum.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 bg-[#fff6ed] py-20 sm:py-28 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl leading-tight">
            Frequently asked{' '}
            <span className="font-display-serif italic">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-xl bg-white border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#eb6a18] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 -mt-1 text-gray-600 leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton size="lg">Ask Us Anything</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Locations  ───────────────────────── */
const LOCATIONS = [
  { region: 'California', name: 'Oclef Evergreen', addr: '3623 Cobbert Drive, San Jose, CA 95148', phone: '(408) 915-5524' },
  { region: 'California', name: 'Oclef Los Gatos', addr: '15466 Los Gatos Blvd., Los Gatos, CA 95032', phone: '(408) 915-5524' },
  { region: 'California', name: 'Oclef Pleasanton', addr: '1807 Santa Rita Rd, Pleasanton, CA 94566', phone: '(925) 218-0054' },
  { region: 'California', name: 'Oclef Cupertino', addr: '20660 Stevens Creek Blvd, Cupertino, CA 95014', phone: '(408) 915-5524' },
  { region: 'California', name: 'Morgan Hill', addr: '305 Vineyard Town Ctr Wy, Morgan Hill, CA 95037', phone: '(408) 915-5524' },
  { region: 'California', name: 'Oclef Los Altos & Mountain View', addr: '655 Castro Street, Mountain View, CA 94041', phone: '(408) 915-5524' },
  { region: 'Virginia', name: 'Oclef Loudoun', addr: '42395 Ryan Rd, Brambleton, VA 20148', phone: '(925) 218-0054' },
  { region: 'Washington', name: 'Oclef Bellevue', addr: '1645 140th N.E., Bellevue, WA 98005', phone: '(425) 209-0608' },
];

export function Locations() {
  return (
    <section className="bg-white py-14 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <SectionLabel>Our community</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-3xl sm:text-5xl leading-tight">
            Trusted by families across{' '}
            <span className="font-display-serif italic">America</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base text-gray-600 leading-relaxed">
            Daily lessons happen online, with in-person recitals, camps, and events at studios
            across California and Washington.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.name}
              href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
              className="group relative flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-3.5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#eb6a18]/40 hover:shadow-xl hover:shadow-gray-200/60"
            >
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#eb6a18]/10 transition-colors duration-300 group-hover:bg-[#eb6a18]/20">
                <MapPin size={18} className="text-[#eb6a18] sm:hidden" strokeWidth={1.75} />
                <MapPin size={20} className="hidden text-[#eb6a18] sm:block" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] text-[#eb6a18]/80">
                  {loc.region}
                </p>
                <h3 className="mt-0.5 text-base font-semibold text-gray-900 leading-snug">{loc.name}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-snug">{loc.addr}</p>
                <p className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors group-hover:text-[#eb6a18]">
                  <Phone size={13} strokeWidth={2} />
                  {loc.phone}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Meet the teachers  ───────────────────────── */
/* To surface a teacher's credentials, fill in `degree` (e.g. 'M.M., Piano Performance')
   and `years` (e.g. '12 years teaching'). Rows render only when the real value is set —
   no placeholder labels ship to parents. */
type Teacher = {
  name: string;
  title: string;
  initial: string;
  gradient: string;
  image?: string;
  degree?: string;
  years?: string;
};
const TEACHERS: Teacher[] = [
  { name: 'Dr. Phong', title: 'Co-Founder', initial: 'P', gradient: 'linear-gradient(160deg, #6aa9a3 0%, #2f6460 100%)' },
  { name: 'Dr. Matthew', title: 'Piano Professor', initial: 'M', gradient: 'linear-gradient(160deg, #e8a87c 0%, #b85c38 100%)' },
  { name: 'Dr. I-Lin', title: 'Piano Professor', initial: 'I', gradient: 'linear-gradient(160deg, #9aa884 0%, #56653f 100%)' },
  { name: 'Dr. Ludwig', title: 'Piano Professor', initial: 'L', gradient: 'linear-gradient(160deg, #7494a8 0%, #2e4a5c 100%)' },
  { name: 'Dr. Justin', title: 'Piano Professor', initial: 'J', gradient: 'linear-gradient(160deg, #c98c93 0%, #7a4a52 100%)' },
  { name: 'Ms. Yuliya', title: 'Piano Professor', initial: 'Y', gradient: 'linear-gradient(160deg, #a585b8 0%, #503a5e 100%)' },
  { name: 'Mr. Connor', title: 'Piano Professor', initial: 'C', gradient: 'linear-gradient(160deg, #d3a15f 0%, #8a5e2a 100%)' },
  { name: 'Dr. Lucy', title: 'Piano Professor', initial: 'L', gradient: 'linear-gradient(160deg, #8f93c4 0%, #45497e 100%)' },
];

export function MeetTheTeachers() {
  return (
    <section id="teachers" className="scroll-mt-20 bg-white py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SectionLabel>Our teachers</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl leading-tight">
            Taught by{' '}
            <span className="font-display-serif italic">world-class teachers</span>
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Your child learns 1-on-1 with accomplished, degreed professors. Every Oclef teacher
            is a master of their craft who will ensure your child learns and improves daily.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
          {TEACHERS.map((t) => (
            <div key={t.name} className="text-center">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
                style={{ background: t.gradient }}
              >
                {t.image ? (
                  <img src={t.image} alt={t.name} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-lato text-6xl font-light text-white/80">
                    {t.initial}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-[#eb6a18]">{t.title}</p>
              {t.degree && (
                <p className="mt-2 flex items-center justify-center gap-1.5 text-[13px] text-gray-500">
                  <GraduationCap size={13} className="shrink-0" /> {t.degree}
                </p>
              )}
              {t.years && (
                <p className="mt-0.5 flex items-center justify-center gap-1.5 text-[13px] text-gray-500">
                  <Clock size={13} className="shrink-0" /> {t.years}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <CtaButton size="lg">Meet Your Child’s Teacher</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Founder note  ───────────────────────── */
const FOUNDER_PARAS = [
  'In my last year of touring as a concert pianist I kept hearing the same problem. “My nephew quit piano.” “My daughter fights me every time she practices.” Different cities, same quiet defeat. So I went looking for why.',
  'What I found is a quiet epidemic almost no one names. Millions of children are failing at the piano inside their own homes, and parents draw the only conclusion the situation offers. “Piano isn’t for them.” “The teacher wasn’t a good fit.” “My child isn’t talented.” None of it is true. The child is not failing. The system is. It hands a child one lesson a week, then sends them home to practice alone for six days. Inside that design, 83% drop out or stay musically illiterate within three years.',
  'So I stopped touring, moved to the Bay Area, and went to work inside a struggling piano school to see the problem from the floor. Then I opened a software company, Oclef, and we rebuilt those six days. Every day at the piano. A real feedback loop in the room, catching the mistake the moment it happens and building the right habit in its place. A path shaped around the child by people who know them by name.',
  'If your child has already quit piano or is having trouble getting to the piano every day, talk with us before you give up.',
  'And if they are just beginning, you are lucky.',
  'Because what your child learns here is not just piano. They learn how to focus, how to be confident, how to persist when doing something hard, how to recover, and how to begin again, tomorrow.',
  'That is the whole promise. Piano Every Day. Skills for life.',
];

export function FounderNote() {
  return (
    <section className="bg-[#fff6ed] py-20 sm:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          {/* Founder photo (placeholder) */}
          <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:sticky lg:top-24">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
              style={{ background: 'linear-gradient(160deg, #0d5577 0%, #002642 100%)' }}
            >
              <span className="font-lato text-6xl font-light text-white/70">JT</span>
            </div>
            <p className="mt-4 text-center lg:text-left font-semibold text-gray-900">Julian Toha</p>
            <p className="text-center lg:text-left text-sm text-gray-500">Founder, Oclef</p>
          </div>

          {/* The note */}
          <div>
            <SectionLabel>A note from our founder</SectionLabel>
            <h2 className="mt-4 text-gray-900 text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1]">
              The problem was never{' '}
              <span className="font-display-serif italic text-[#eb6a18]">your child.</span>
            </h2>
            <div className="mt-6 space-y-5 text-gray-600 text-base leading-relaxed">
              {FOUNDER_PARAS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Signature (placeholder) */}
            <div className="mt-8">
              <p className="font-display-serif italic text-3xl text-gray-800">Julian Toha</p>
              <p className="mt-1 text-sm text-gray-500">Founder, Oclef</p>
            </div>

            <div className="mt-8">
              <CtaButton size="lg">Talk With Us</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Consultation form + footer  ───────────────────────── */
type FieldInputMode = 'text' | 'email' | 'tel' | 'numeric' | 'none';
function FloatingField({
  label,
  name,
  type = 'text',
  required = false,
  inputMode,
  autoComplete,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputMode?: FieldInputMode;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        name={name}
        required={required}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder=" "
        aria-label={label}
        className="peer w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 pt-6 pb-2 text-base text-white transition-all duration-200 focus:border-[#eb6a18] focus:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#eb6a18]/25"
      />
      <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 transition-all duration-200 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-[#eb6a18] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-white/50">
        {label}
        {required && <span className="text-[#eb6a18]"> *</span>}
      </label>
    </div>
  );
}

/**
 * Where booking submissions are sent (Formspree). Submissions POST here as
 * FormData with an Accept: application/json header, so Formspree returns JSON
 * and the form shows its inline success/error state without a page redirect.
 * Swap this URL to repoint the form at a different Formspree form or backend.
 */
const FORM_ENDPOINT = 'https://formspree.io/f/xykaorvo';

const CALL_PROMISES = [
  'A free 30-minute video call, at a time that suits you',
  'An honest assessment of your child’s level and goals',
  'A custom daily-practice plan built around your child',
];

export function FooterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    const form = e.currentTarget;
    setStatus('submitting');
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        // No endpoint wired yet — simulate a successful round-trip so the
        // confirmation UX is fully testable. Set FORM_ENDPOINT above to go live.
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer style={{ background: NAVY }} className="text-white pt-20 sm:pt-28 px-5">
      <div className="max-w-5xl mx-auto">
        <div id="book" className="scroll-mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="mt-4 text-white text-4xl sm:text-5xl leading-tight">
              Book your free{' '}
              <span className="font-display-serif italic text-[#eb6a18]">consultation</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              A relaxed 1-on-1 call — no pressure, no commitment. Here’s what you’ll get:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {CALL_PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#eb6a18]" strokeWidth={2} />
                  {p}
                </li>
              ))}
            </ul>
            <img
              src="/images/yelp-400-families.png"
              alt="Rated a 5-star business on Yelp by 400+ families"
              className="mt-8 w-52 rounded-md"
            />
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-start rounded-2xl border border-white/15 bg-white/[0.06] p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00952e]/20 text-[#9be7ad]">
                <CalendarCheck size={26} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white">You’re all set.</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                Thanks — we’ve got your details. A member of the Oclef team will reach out within
                one business day to schedule your free consultation. Keep an eye on your phone and
                inbox.
              </p>
            </div>
          ) : (
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <FloatingField label="Parent first name" name="parent_first_name" required autoComplete="given-name" />
              <FloatingField label="Parent last name" name="parent_last_name" required autoComplete="family-name" />
              <FloatingField label="Email address" name="email" type="email" required inputMode="email" autoComplete="email" className="sm:col-span-2" />
              <FloatingField label="Phone number" name="phone" type="tel" required inputMode="tel" autoComplete="tel" className="sm:col-span-2" />
              <FloatingField label="Child / children name(s)" name="child_names" autoComplete="off" className="sm:col-span-2" />
              <div className="relative sm:col-span-2">
                <select
                  name="referral_source"
                  aria-label="Where did you hear about us"
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-white/15 bg-white/[0.06] px-4 py-4 text-base text-white transition-all duration-200 focus:border-[#eb6a18] focus:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#eb6a18]/25"
                >
                  <option value="" disabled className="text-gray-900">
                    – Where did you hear about us? –
                  </option>
                  <option className="text-gray-900">Friend/Family</option>
                  <option className="text-gray-900">School Flyer</option>
                  <option className="text-gray-900">Yelp</option>
                  <option className="text-gray-900">Google</option>
                  <option className="text-gray-900">Other</option>
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                />
              </div>
              {status === 'error' && (
                <p className="sm:col-span-2 -mb-1 text-sm text-[#ffb4a8]">
                  Something went wrong sending your details. Please try again in a moment.
                </p>
              )}
              <CtaButton
                type="submit"
                disabled={status === 'submitting'}
                fullWidth
                className="sm:col-span-2 mt-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Booking…
                  </>
                ) : (
                  'Book My Free Consultation'
                )}
              </CtaButton>
              <p className="sm:col-span-2 text-center text-xs text-white/45">
                Free 30-minute call · no commitment · we never share your details.
              </p>
            </form>
          )}
        </div>

        <div className="mt-20 border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/images/oclef-logo-white.png" alt="Oclef" className="h-6 w-auto" />
            <span className="text-xl font-lato">Oclef</span>
          </div>
          <p className="text-white/50 text-sm">
            Copyright © 2026 Oclef. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
