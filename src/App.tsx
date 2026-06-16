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
  VideoTestimonials,
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

function RevealLayer({ image, progress }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);
    return () => window.removeEventListener('resize', sizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reveal = revealRef.current;
    if (!canvas || !reveal) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scroll reveal — a soft glow expanding from the scene center until the
    // warm image fills the viewport.
    if (progress > 0) {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r = progress * Math.hypot(canvas.width, canvas.height) * 1.4;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const mask = `url(${canvas.toDataURL()})`;
    reveal.style.maskImage = mask;
    reveal.style.webkitMaskImage = mask;
    reveal.style.maskSize = '100% 100%';
    reveal.style.webkitMaskSize = '100% 100%';
  }, [progress]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none' }}
      />
      <div
        ref={revealRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{ backgroundImage: `url(${image})` }}
      />
    </>
  );
}

const NAV_ITEMS = [
  { label: 'Why Oclef', id: 'why' },
  { label: 'How it Works', id: 'how' },
  { label: 'Comparison', id: 'comparison' },
  { label: 'Oclef Pro', id: 'pro' },
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

  useEffect(() => {
    const sync = () => {
      const wrap = scrollWrapRef.current;
      if (!wrap) return;
      const max = wrap.offsetHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setScrollProgress((prev) => (Math.abs(prev - p) > 0.0005 ? p : prev));
      setNavDark(window.scrollY > wrap.offsetHeight - 80);

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
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
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
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-white text-gray-900 hover:bg-gray-100'
          }`}
        >
          Sign Up
        </button>
      </nav>

      <div ref={scrollWrapRef} className="relative" style={{ height: '300vh' }}>
      <section className="sticky top-0 w-full overflow-hidden h-screen bg-[#02040f]" style={{ height: '100dvh' }}>
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
                  className="absolute left-full"
                  style={{ opacity: 1 - wordSwap, letterSpacing: '0.08em' }}
                >
                  …
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
            <CtaButton variant="glass" size="lg" onClick={() => scrollToId('book')}>
              Start Playing
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
      <NgaTestimonial />
      <VideoTestimonials />
      <PricingSection />
      <GetStarted />
      <FAQ />
      <JiTestimonial />
      <Locations />
      <FooterForm />
    </div>
  );
}
