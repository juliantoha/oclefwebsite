import { useEffect, useRef, useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Users,
  MonitorSmartphone,
  Music4,
  Trophy,
  LineChart,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Minus,
  Phone,
  MapPin,
  ShieldCheck,
  Sparkle,
  Sparkles,
  Activity,
  Play,
} from 'lucide-react';

const NAVY = '#004a69';

export const scrollToForm = () =>
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function SectionLabel({ children }: { children: React.ReactNode }) {
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
  onClick = scrollToForm,
  type = 'button',
  fullWidth = false,
  className = '',
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
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
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none transition-all duration-200 hover:scale-[1.03] active:scale-95 ${sizes} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────  Intro band  ───────────────────────── */
export function IntroBand() {
  return (
    <section className="bg-white py-16 sm:py-24 px-5">
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
          <CtaButton size="lg">Book a Free Consultation</CtaButton>
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
        <CtaButton size="lg">Book a Free Consultation</CtaButton>
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
              <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Tuition  ───────────────────────── */
const PLAN_FEATURES = [
  'Daily Piano Lessons (Mon–Fri)',
  'Access to Music Theory, Kaizen & Performance Seminar',
  'Includes all Recitals and Events',
];

export function Tuition() {
  return (
    <section id="tuition" className="scroll-mt-20 bg-[#fff6ed] py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>Tuition</SectionLabel>
          <h2 className="mt-4 text-gray-900 text-4xl sm:text-5xl leading-tight">
            Built to help your child{' '}
            <span className="font-display-serif italic">learn it correctly</span>
          </h2>
          <div className="mt-6 space-y-5 text-gray-600 text-base leading-relaxed">
            <p>
              Our school will help your children learn piano correctly and love it. Don’t make
              the common mistake of trying to learn piano once a week. Weekly lessons may waste
              years of your children’s time and leave them frustrated with learning and
              practicing. Our school is built to prevent that from happening.
            </p>
            <p>
              Instead, we have hundreds of students and parents experiencing successful
              outcomes. Sign up now and we’ll assess your children and build a custom plan that
              will accelerate their piano education. We look forward to welcoming you at Oclef.
            </p>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-white border border-gray-100 p-5">
            <ShieldCheck size={28} className="text-[#eb6a18] shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">30-Day Money-Back Guarantee</p>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                Start your musical journey, attend lessons for 30 days, and experience our
                unique teaching approach without any financial risk.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing card */}
        <div className="rounded-3xl p-8 sm:p-10 text-white shadow-xl" style={{ background: NAVY }}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#eb6a18]">
            Daily Lessons
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-6xl font-bold font-lato">$549</span>
            <span className="text-white/70 text-lg">/month</span>
          </div>
          <p className="mt-1 text-white/60 text-sm">
            per student · no contract, paid monthly
          </p>

          <ul className="mt-8 space-y-4">
            {PLAN_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-[#eb6a18] shrink-0 mt-0.5" />
                <span className="text-white/90">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <button
              onClick={scrollToForm}
              className="w-full bg-[#eb6a18] hover:bg-[#cf5d12] text-white text-base font-semibold px-9 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-95"
            >
              Get Started
            </button>
          </div>
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
  { feature: 'Assessments', values: [false, false, false] },
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
          <div className="min-w-[640px] relative">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-2 sm:gap-3">
              <div />
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
                  style={row.highlight ? { background: strongTint, boxShadow: glow } : undefined}
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
                    <p className="mt-3 max-w-3xl text-gray-600 text-sm leading-relaxed">{f.body}</p>
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
          <CtaButton size="lg">Book a Free Consultation</CtaButton>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STORY_CARDS.map((s) => (
            <button
              key={s.name}
              onClick={() => setActive(s)}
              className="group isolate relative block aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl text-left"
            >
              {/* Thumbnail — drop a real video poster into `image` to replace.
                  The thumbnail is rounded too so its corners stay clipped while it scales on hover. */}
              {s.image ? (
                <img src={s.image} alt={s.name} className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 rounded-2xl transition-transform duration-500 group-hover:scale-105" style={{ background: s.gradient }} />
              )}

              {/* Legibility scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play size={22} className="ml-0.5 text-white" fill="white" />
                </span>
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-semibold text-white">{s.name}</p>
                <p className="mt-1 text-sm leading-snug text-white/80">{s.caption}</p>
              </div>
            </button>
          ))}
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
                  className="flex h-full w-full flex-col items-center justify-center gap-4 text-center"
                  style={{ background: active.gradient }}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/25 backdrop-blur-sm">
                    <Play size={24} className="ml-0.5 text-white" fill="white" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{active.name}</p>
                    <p className="mt-1 text-sm text-white/70">Video coming soon</p>
                  </div>
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
            <div className="mt-2 text-sm text-gray-600">{s.label}</div>
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
              <p className="mt-2 text-white/65 text-sm leading-relaxed max-w-[280px] mx-auto">
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
          <CtaButton size="lg">Book a Free Consultation</CtaButton>
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
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
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
                <h3 className="mt-0.5 text-sm sm:text-base font-semibold text-gray-900 leading-snug">{loc.name}</h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-snug">{loc.addr}</p>
                <p className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 transition-colors group-hover:text-[#eb6a18]">
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

/* ─────────────────────────  Consultation form + footer  ───────────────────────── */
function FloatingField({
  label,
  type = 'text',
  className = '',
}: {
  label: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        placeholder=" "
        aria-label={label}
        className="peer w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 pt-6 pb-2 text-sm text-white transition-all duration-200 focus:border-[#eb6a18] focus:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#eb6a18]/25"
      />
      <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 transition-all duration-200 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-[#eb6a18] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-white/50">
        {label}
      </label>
    </div>
  );
}

export function FooterForm() {
  return (
    <footer style={{ background: NAVY }} className="text-white pt-20 sm:pt-28 px-5">
      <div className="max-w-5xl mx-auto">
        <div id="book" className="scroll-mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="mt-4 text-white text-4xl sm:text-5xl leading-tight">
              Book your{' '}
              <span className="font-display-serif italic text-[#eb6a18]">consultation</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Fill out the form to schedule your free 1-on-1 consultation and Q&amp;A. We’ll
              assess your child and build a custom plan to accelerate their piano education.
            </p>
            <img
              src="/images/yelp-400-families.png"
              alt="Rated a 5-star business on Yelp by 400+ families"
              className="mt-8 w-52 rounded-md"
            />
          </div>

          <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <FloatingField label="Parent first name" />
            <FloatingField label="Parent last name" />
            <FloatingField label="Email address" type="email" className="sm:col-span-2" />
            <FloatingField label="Phone number" type="tel" className="sm:col-span-2" />
            <FloatingField label="Child / children name(s)" className="sm:col-span-2" />
            <div className="relative sm:col-span-2">
              <label className="pointer-events-none absolute left-4 top-3 text-[11px] text-white/50">
                Where did you hear about us?
              </label>
              <select
                aria-label="Where did you hear about us"
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-white/15 bg-white/[0.06] px-4 pt-6 pb-2 text-sm text-white transition-all duration-200 focus:border-[#eb6a18] focus:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#eb6a18]/25"
              >
                <option value="" disabled className="text-gray-900">
                  Select an option
                </option>
                <option className="text-gray-900">Google search</option>
                <option className="text-gray-900">Friend or family</option>
                <option className="text-gray-900">Social media</option>
                <option className="text-gray-900">Other</option>
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
              />
            </div>
            <CtaButton type="submit" onClick={() => {}} fullWidth className="sm:col-span-2 mt-2">
              Book your Consultation
            </CtaButton>
          </form>
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
