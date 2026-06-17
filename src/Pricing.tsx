import { useEffect, useRef, useState } from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import { scrollToForm, CtaButton, SectionLabel } from './Sections';

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

/* Fade-up-on-view (framer-motion's whileInView, done with IntersectionObserver) */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* 1px gradient ring that follows the cursor */
function SpotlightBorder({
  children,
  className,
  size = 460,
  intensity = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const setVar = (x: string, y: string) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--spot-x', x);
    el.style.setProperty('--spot-y', y);
  };
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setVar(`${e.clientX - r.left}px`, `${e.clientY - r.top}px`);
      }}
      onPointerLeave={() => setVar('-9999px', '-9999px')}
      className={cn('spotlight-border relative rounded-[1.35rem]', className)}
      style={{ ['--size' as string]: `${size}px`, ['--intensity' as string]: `${intensity}` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

type Feature = { text: string; included: boolean };
type Plan = {
  name: string;
  price: string;
  suffix?: string;
  description: string;
  features: Feature[];
  featured?: boolean;
  badge?: string;
  bg: string;
  cta: string;
};

const plan: Plan = {
  name: 'Daily Lessons',
  price: '549',
  suffix: '/mo',
  description: 'Everything your child needs to thrive, all included.',
  bg: 'linear-gradient(180deg, #0a3349 0%, #01202f 100%)',
  featured: true,
  cta: 'Start With a Free Assessment',
  features: [
    { text: 'Daily 1-on-1 lessons (Mon–Fri)', included: true },
    { text: 'Kaizen guided practice, every day', included: true },
    { text: 'Music Theory & Performance Seminar', included: true },
    { text: 'All recitals and events', included: true },
    { text: 'Oclef Pro software', included: true },
  ],
};

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <SpotlightBorder size={460} intensity={0.7} className="h-full p-2 sm:p-3">
      <div
        className="relative flex h-full flex-col rounded-2xl border border-white/10 p-7 sm:p-8"
        style={{ background: plan.bg, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
      >
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#eb6a18] px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-[#eb6a18]/30">
            {plan.badge}
          </div>
        )}

        <FadeUp delay={0}>
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">{plan.name}</div>
        </FadeUp>
        <div className="mt-3 border-t border-white/10" />

        <FadeUp delay={0.1}>
          <div className="mt-10 flex items-baseline gap-2">
            <span className="font-lato text-5xl leading-none font-bold tracking-tight text-white">
              {plan.price === 'Free' ? 'Free' : `$${plan.price}`}
            </span>
            {plan.suffix && <span className="text-lg text-white/70">{plan.suffix}</span>}
          </div>
          <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#eb6a18]/80">
            Billed monthly · no contract
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">{plan.description}</p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-7">
            <CtaButton variant="primary" size="lg" fullWidth onClick={scrollToForm}>
              {plan.cta}
            </CtaButton>
          </div>
        </FadeUp>

        <FadeUp delay={0.4} className="flex flex-1 flex-col">
          <ul className="mt-7 flex flex-1 flex-col">
            {plan.features.map((f, i) => (
              <li
                key={f.text}
                className={cn(
                  'flex items-center gap-3 py-4 text-[15px]',
                  i !== 0 && 'border-t border-white/10',
                  f.included ? 'text-white/85' : 'text-white/40',
                )}
              >
                <span
                  className={cn(
                    'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border',
                    f.included ? 'border-[#eb6a18]/30 bg-[#eb6a18]/15' : 'border-white/10 bg-transparent',
                  )}
                >
                  {f.included ? (
                    <Check className="h-3 w-3 text-[#eb6a18]" strokeWidth={2.5} />
                  ) : (
                    <X className="h-3 w-3 text-white/50" strokeWidth={2} />
                  )}
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </SpotlightBorder>
  );
}

export function PricingSection() {
  return (
    <section
      id="tuition"
      className="scroll-mt-20 relative w-full py-20 sm:py-28"
      style={{ background: 'radial-gradient(120% 90% at 50% 0%, #004a69 0%, #002642 55%, #02040f 100%)' }}
    >
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left — copy (centered on mobile to match the other sections, left-aligned beside the card on desktop) */}
          <div className="text-center md:text-left">
            <FadeUp>
              <SectionLabel>Tuition</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.02em] leading-[1.05] text-white">
                <span className="font-lato font-bold tracking-[-0.03em]">Pricing built around</span>{' '}
                <span className="font-display-serif italic text-[#eb6a18]">daily progress.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-md mx-auto md:mx-0 text-base text-white/60">
                No contract, paid monthly. Start with a free assessment, then daily lessons built
                around your child, backed by a 30-day money-back guarantee.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-8 flex flex-col items-center md:items-start gap-4 text-[15px]">
                <p className="text-white/50">
                  <ShieldCheck className="mr-1.5 inline-block h-4 w-4 align-[-3px] text-[#eb6a18]" strokeWidth={1.5} />
                  30-day money-back guarantee on all new enrollments.
                </p>
                <button
                  onClick={scrollToForm}
                  className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Not ready to commit? Book a free consultation &amp; assessment →
                </button>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <img
                src="/images/yelp-400-families.png"
                alt="Rated a 5-star business on Yelp by 400+ families"
                className="mt-8 w-52 mx-auto md:mx-0 rounded-md"
              />
            </FadeUp>
          </div>

          {/* Right — card */}
          <div className="w-full max-w-md md:mx-auto">
            <PricingCard plan={plan} />
          </div>
        </div>
      </div>
    </section>
  );
}
