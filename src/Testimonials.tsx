import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import { Star } from 'lucide-react';

/* Hand-drawn rough-notation that draws itself when scrolled into view */
function Annotate({
  children,
  type = 'underline',
  color = '#eb6a18',
  strokeWidth = 3,
}: {
  children: React.ReactNode;
  type?: 'underline' | 'circle';
  color?: string;
  strokeWidth?: number;
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
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          a.show();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      try {
        a.remove();
      } catch {
        /* annotation already gone */
      }
    };
  }, [type, color, strokeWidth]);
  return (
    <span ref={ref} className="relative whitespace-nowrap">
      {children}
    </span>
  );
}

function Band({
  bg,
  fg,
  sub,
  author,
  stars = true,
  children,
  cta,
}: {
  bg: string;
  fg: string;
  sub: string;
  author: string;
  stars?: boolean;
  children: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <section className="px-5 py-16 sm:py-24" style={{ background: bg }}>
      <figure className="max-w-3xl mx-auto text-center">
        {stars && (
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-[#eb6a18]" fill="#eb6a18" />
            ))}
          </div>
        )}
        <blockquote
          className="font-display-serif italic text-2xl sm:text-3xl md:text-[2.5rem] leading-snug"
          style={{ color: fg }}
        >
          {children}
        </blockquote>
        <figcaption
          className="mt-6 text-sm font-semibold uppercase tracking-[0.15em]"
          style={{ color: sub }}
        >
          {author}
        </figcaption>
        {cta && <div className="mt-8 flex justify-center">{cta}</div>}
      </figure>
    </section>
  );
}

export function TiffanyTestimonial() {
  return (
    <Band bg="#ffe0ba" fg="#004a69" sub="#9a8a78" author="Tiffany Q.">
      “Oclef’s daily lessons have given my daughter a sense of belonging and{' '}
      <Annotate type="underline">confidence</Annotate>.”
    </Band>
  );
}

export function NgaTestimonial() {
  return (
    <Band bg="#c4e5f4" fg="#004a69" sub="#4a6b7a" author="Nga C." stars={false}>
      “Oclef has transformed my son’s{' '}
      <Annotate type="underline">love for music</Annotate>, making it a cherished part of his
      daily routine.”
    </Band>
  );
}

export function JiTestimonial() {
  return (
    <Band bg="#002642" fg="#ffffff" sub="rgba(255,255,255,0.5)" author="Ji W." stars={false}>
      “The daily feedback from Oclef has made a significant difference in my child’s progress and{' '}
      <Annotate type="circle" strokeWidth={2}>enjoyment</Annotate> of music.”
    </Band>
  );
}
