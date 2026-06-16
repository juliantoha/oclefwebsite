import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  CtaButton,
  IntroBand,
  WhyOclef,
  HowItWorks,
  StatsStrip,
  Comparison,
  GetStarted,
  OclefPro,
  MeetTheTeachers,
  VideoTestimonials,
  FounderNote,
  FAQ,
  Locations,
  FooterForm,
} from './Sections';
import { PricingSection } from './Pricing';
import { TiffanyTestimonial, NgaTestimonial, JiTestimonial } from './Testimonials';

const BG_IMAGE_1 = '/images/hero-night.jpg';
const BG_IMAGE_2 = '/images/hero-day.jpg';

interface RevealLayerProps {
  image: string;
  progress: number;
}

const HIDDEN_MASK = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)';

/**
 * Scroll-driven night→day reveal. A soft radial mask grows from the scene
 * center until the warm image fills the viewport. Done with a pure CSS
 * gradient mask (no canvas, no toDataURL) so it stays smooth on mobile.
 */
function RevealLayer({ image, progress }: RevealLayerProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = revealRef.current;
    if (!reveal) return;
    let mask = HIDDEN_MASK;
    if (progress > 0.001) {
      const core = progress * 110; // solid (revealed) radius
      const soft = progress * 145; // soft outer edge → the glow
      mask = `radial-gradient(circle at 50% 50%, #000 0%, #000 ${core}%, rgba(0,0,0,0) ${soft}%)`;
    }
    reveal.style.maskImage = mask;
    reveal.style.webkitMaskImage = mask;
  }, [progress]);

  return (
    <div
      ref={revealRef}
      className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
      style={
        {
          backgroundImage: `url(${image})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: HIDDEN_MASK,
          WebkitMaskImage: HIDDEN_MASK,
        } as React.CSSProperties
      }
    />
  );
}

const NAV_ITEMS = [
  { label: 'Why Oclef', id: 'why' },
  { label: 'How it Works', id: 'how' },
  { label: 'Comparison', id: 'comparison' },
  { label: 'Oclef Pro', id: 'pro' },
  { label: 'Teachers', id: 'teachers' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Tuition', id: 'tuition' },
  { label: 'FAQ', id: 'faq' },
];

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function App() {
  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navDark, setNavDark] = useState(false);
  const [activeSection, setActiveSection] = useState('why');
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const sync = () => {
      const wrap = scrollWrapRef.current;
      if (!wrap) return;
      const max = wrap.offsetHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setScrollProgress((prev) => (Math.abs(prev - p) > 0.0005 ? p : prev));
      setNavDark(window.scrollY > wrap.offsetHeight - 80);

      // Mobile sticky CTA: appear once the hero is scrolled past, but hide it
      // while the booking form itself is on screen (so it never covers the form).
      const pastHero = window.scrollY > wrap.offsetHeight - window.innerHeight;
      const book = document.getElementById('book');
      const bookInView = book ? book.getBoundingClientRect().top < window.innerHeight - 80 : false;
      const nextSticky = pastHero && !bookInView;
      setShowSticky((prev) => (prev !== nextSticky ? nextSticky : prev));

      // Scrollspy: the active nav item is the last section whose top has passed
      // just beneath the fixed nav.
      let current = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection((prev) => (prev !== current ? current : prev));
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    // Fallback for embedded contexts where programmatic scrolling doesn't emit
    // scroll events; the setState calls bail out when nothing changed.
    const interval = window.setInterval(sync, 150);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
      window.clearInterval(interval);
    };
  }, []);

  // Headline word morph: "Make" → "Piano" over the 15%–50% scroll window, so the
  // completed slogan lands while the warm scene is still blooming in behind it.
  const wordSwap = Math.min(1, Math.max(0, (scrollProgress - 0.15) / 0.35));

  // Tagline + CTA are the "answer" to the headline's open invitation — reveal them
  // only after the slogan has resolved into "Piano Every Day".
  const ctaReveal = Math.min(1, Math.max(0, (scrollProgress - 0.5) / 0.25));

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 transition-colors duration-300 ${
          navDark ? 'bg-[#fff6ed]/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="flex items-center gap-2.5">
          <img
            src="/images/oclef-logo-white.png"
            alt="Oclef logo"
            className="h-7 w-auto transition-[filter] duration-300"
            style={{ filter: navDark ? 'invert(1)' : 'none' }}
          />
          <span
            className={`text-2xl font-lato transition-colors duration-300 ${
              navDark ? 'text-gray-900' : 'text-white'
            }`}
          >
            Oclef
          </span>
        </div>

        <div
          className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 backdrop-blur-md border rounded-full px-2 py-2 items-center gap-1 transition-colors duration-300 ${
            navDark ? 'bg-gray-900/5 border-gray-900/10' : 'bg-white/20 border-white/30'
          }`}
        >
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? navDark
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900'
                    : navDark
                      ? 'text-gray-700 hover:bg-gray-900/10 hover:text-gray-900'
                      : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scrollToId('book')}
          className={`hidden lg:block text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 ${
            navDark
              ? 'bg-[#eb6a18] text-white hover:bg-[#cf5d12]'
              : 'bg-white text-gray-900 hover:bg-gray-100'
          }`}
        >
          Book a Free Call
        </button>
      </nav>

      <div ref={scrollWrapRef} className="relative bg-[#02040f]" style={{ height: '300vh' }}>
      <section className="sticky top-0 w-full overflow-hidden h-screen bg-[#02040f]" style={{ height: '100svh' }}>
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        <RevealLayer image={BG_IMAGE_2} progress={scrollProgress} />

        <div className="absolute top-[14%] left-0 right-0 z-50 flex flex-col items-center text-center px-5 pointer-events-none">
          <h1 className="text-white leading-[0.95]" aria-label="Make Every Day. Piano Every Day.">
            <span
              className="block hero-anim hero-reveal"
              style={{ animationDelay: '0.25s' }}
              aria-hidden="true"
            >
              {/* "Make" dissolves into "Piano" as the scroll reveals the warm scene,
                  completing the slogan: Make Every Day → Piano Every Day. */}
              <span
                className="grid justify-items-center font-display-serif italic font-normal text-5xl sm:text-7xl md:text-8xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                <span
                  className="col-start-1 row-start-1 font-display-serif italic"
                  style={{
                    opacity: 1 - wordSwap,
                    transform: `translateY(${-16 * wordSwap}px)`,
                    filter: `blur(${10 * wordSwap}px)`,
                  }}
                >
                  Make
                </span>
                <span
                  className="col-start-1 row-start-1 font-display-serif italic"
                  style={{
                    opacity: wordSwap,
                    transform: `translateY(${16 * (1 - wordSwap)}px)`,
                    filter: `blur(${10 * (1 - wordSwap)}px)`,
                  }}
                >
                  Piano
                </span>
              </span>
            </span>
            <span
              className="block font-lato font-bold text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: '-0.04em', animationDelay: '0.42s' }}
              aria-hidden="true"
            >
              {/* Trailing "..." sits in "Make Every Day…" and fades as the parent
                  scrolls, resolving into the finished promise "Piano Every Day". */}
              <span className="relative inline-block">
                Every Day
                <span
                  className="absolute left-full whitespace-nowrap"
                  style={{ opacity: 1 - wordSwap, letterSpacing: '0.08em' }}
                  aria-hidden="true"
                >
                  <span className="hero-dot">.</span>
                  <span className="hero-dot">.</span>
                  <span className="hero-dot">.</span>
                </span>
              </span>
            </span>
          </h1>
        </div>

        <div
          className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-50 flex flex-col items-center text-center px-5 gap-5 sm:gap-6 pointer-events-none"
          style={{
            opacity: ctaReveal,
            transform: `translateY(${(1 - ctaReveal) * 24}px)`,
            transition: 'opacity 0.2s linear',
          }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-white/75">
            A real teacher to help your child learn every day.{' '}
            <span className="text-white font-semibold whitespace-nowrap">Not once a week.</span>
          </p>

          <div style={{ pointerEvents: ctaReveal > 0.5 ? 'auto' : 'none' }}>
            <CtaButton variant="glass" size="lg" onClick={() => scrollToId('intro')}>
              Start Learning
            </CtaButton>
          </div>
        </div>

        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 8) }}
        >
          <div
            className="flex flex-col items-center gap-1 text-white/70 hero-anim hero-fade"
            style={{ animationDelay: '1.2s' }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </div>
      </section>
      </div>

      <IntroBand />
      <WhyOclef />
      <TiffanyTestimonial />
      <HowItWorks />
      <StatsStrip />
      <Comparison />
      <OclefPro />
      <MeetTheTeachers />
      <NgaTestimonial />
      <VideoTestimonials />
      <PricingSection />
      <GetStarted />
      <FAQ />
      <JiTestimonial />
      <FounderNote />
      <Locations />
      <FooterForm />

      {/* Always-in-reach booking CTA for mobile/tablet (desktop has the nav button). */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[90] lg:hidden border-t border-black/5 bg-[#fff6ed]/95 px-4 pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-300 ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <CtaButton variant="primary" fullWidth onClick={() => scrollToId('book')}>
          Book a Free Consultation
        </CtaButton>
      </div>
    </div>
  );
}
