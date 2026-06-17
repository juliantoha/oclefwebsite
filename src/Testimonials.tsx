import { useEffect, useRef, useState } from 'react';
import { annotate } from 'rough-notation';
import { Star } from 'lucide-react';

/* Hand-drawn rough-notation that draws itself when scrolled into view. An
   optional `delay` lets the mark fire after the quote has settled, so the
   orange "signs" a finished sentence rather than being drawn mid-read. */
function Annotate({
  children,
  type = 'underline',
  color = '#eb6a18',
  strokeWidth = 3,
  delay = 0,
}: {
  children: React.ReactNode;
  type?: 'underline' | 'circle';
  color?: string;
  strokeWidth?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const a = annotate(el, {
      type,
      color,
      strokeWidth,
      padding: type === 'circle' ? [6, 10] : 2,
      multiline: type === 'underline',
      iterations: 2,
      animationDuration: reduce ? 0 : 900,
    });
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          timer = window.setTimeout(() => a.show(), reduce ? 0 : delay);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
      try {
        a.remove();
      } catch {
        /* annotation already gone */
      }
    };
  }, [type, color, strokeWidth, delay]);
  return (
    <span ref={ref} className="relative whitespace-nowrap">
      {children}
    </span>
  );
}

/* Fade + rise the figure once when it scrolls into view (instant under
   reduced-motion). */
function useReveal(): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

type TestimonialProps = {
  gradient: string;
  fg: string;
  sub: string;
  theme: 'light' | 'dark';
  author: string;
  /* Optional, true detail only — leave undefined to ship just "Oclef parent". */
  context?: string;
  stars?: boolean;
  children: React.ReactNode;
};

/* One art-directed editorial pull-quote on a full-bleed band. */
function Testimonial({
  gradient,
  fg,
  sub,
  theme,
  author,
  context,
  stars = true,
  children,
}: TestimonialProps) {
  const [ref, visible] = useReveal();
  return (
    <section
      className="relative isolate overflow-hidden px-5 py-14 sm:py-20"
      style={{ background: gradient }}
    >
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <figure
        ref={ref as React.RefObject<HTMLElement>}
        className="relative mx-auto max-w-2xl transition-all duration-500 ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
      >
        {/* Oversized ghosted quotation glyph — a pure tint of the text color */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-1 -top-10 z-0 select-none font-display-serif italic leading-[0.7] sm:-left-3 sm:-top-14"
          style={{ fontSize: 'clamp(6rem, 14vw, 11rem)', color: fg, opacity: theme === 'dark' ? 0.12 : 0.09 }}
        >
          “
        </span>

        <blockquote
          className="relative z-10 font-display-serif italic tracking-[-0.01em]"
          style={{ color: fg, fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)', lineHeight: 1.25 }}
        >
          {children}
        </blockquote>

        <figcaption className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {stars && (
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-[#eb6a18]" fill="#eb6a18" />
              ))}
            </div>
          )}
          <div className="font-lato text-base font-bold" style={{ color: fg }}>
            {author}
            {/* context: optional, fill with a TRUE detail (e.g. 'Parent since 2023') — leave undefined */}
            {context && (
              <span className="font-normal" style={{ color: sub }}>{` · ${context}`}</span>
            )}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

const PEACH = 'radial-gradient(120% 90% at 18% -10%, #fff1de 0%, #ffe0ba 55%, #f6cf9e 100%)';
const BLUE = 'radial-gradient(120% 90% at 18% -10%, #ddf0fa 0%, #c4e5f4 55%, #a9d6ec 100%)';
const NAVY = 'radial-gradient(120% 90% at 18% -10%, #0a5a7d 0%, #004a69 42%, #002642 100%)';

export function TiffanyTestimonial() {
  return (
    <Testimonial gradient={PEACH} fg="#004a69" sub="#9a8a78" theme="light" author="Tiffany Q.">
      “Oclef’s daily lessons have given my daughter a sense of belonging and{' '}
      <Annotate type="underline" delay={450}>confidence</Annotate>.”
    </Testimonial>
  );
}

export function NgaTestimonial() {
  return (
    <Testimonial gradient={BLUE} fg="#004a69" sub="#4a6b7a" theme="light" author="Nga C.">
      “Oclef has transformed my son’s{' '}
      <Annotate type="underline" delay={450}>love for music</Annotate>, making it a cherished part of his
      daily routine.”
    </Testimonial>
  );
}

export function JiTestimonial() {
  return (
    <Testimonial gradient={NAVY} fg="#ffffff" sub="rgba(255,255,255,0.55)" theme="dark" author="Ji W.">
      “The daily feedback from Oclef has made a significant difference in my child’s progress and{' '}
      <Annotate type="circle" strokeWidth={2} delay={450}>enjoyment</Annotate> of music.”
    </Testimonial>
  );
}
