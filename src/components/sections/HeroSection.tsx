import { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import '../../styles/HeroSection.css';

interface MousePos { x: number; y: number; }

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  mousePos: MousePos;
  repelStrength?: number;
  repelRadius?: number;
  outerRef?: React.RefObject<HTMLDivElement>;
}

function FloatingElement({
  children,
  className = '',
  mousePos,
  repelStrength = 28,
  repelRadius = 160,
  outerRef,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = mousePos.x - cx;
    const dy = mousePos.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < repelRadius && dist > 0) {
      const force = (1 - dist / repelRadius) * repelStrength;
      setOffset({ x: -(dx / dist) * force, y: -(dy / dist) * force });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePos, repelRadius, repelStrength]);

  return (
    <div ref={outerRef} className={`float-el ${className}`}>
      <div
        ref={ref}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

function HeroSection() {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const everyoneRef = useRef<HTMLSpanElement>(null);
  const cursorRef   = useRef<HTMLDivElement>(null);
  const heroRef     = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Hide the everyone wrapper before first paint
  useLayoutEffect(() => {
    if (everyoneRef.current) everyoneRef.current.style.opacity = '0';
  }, []);

  useEffect(() => {
    const el     = everyoneRef.current;
    const cursor = cursorRef.current;
    const hero   = heroRef.current;
    if (!el || !cursor || !hero) return;

    let cancelled = false;
    const wait = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

    document.fonts.ready.then(async () => {
      // Measure natural width of "everyone."
      el.style.width = 'max-content';
      const everyoneW = el.getBoundingClientRect().width;
      el.style.width = '0px';

      if (cancelled) return;

      const wRect = el.getBoundingClientRect();
      const hRect = hero.getBoundingClientRect();

      // Top-left corner of the selection box (inset is -6px top, -5px left)
      const topLeft = {
        x: wRect.left - 5 - hRect.left,
        y: wRect.top  - 6 - hRect.top,
      };
      // Bottom-right of the zero-width box (cursor lands here before the stretch begins)
      const bottomRight = {
        x: wRect.left + 5 - hRect.left,
        y: wRect.bottom + 6 - hRect.top,
      };

      // ── Phase 1: move cursor from its current position to top-left ──
      // Pin the cursor's current CSS-driven position as explicit px so we can transition from it
      const cRect = cursor.getBoundingClientRect();
      cursor.style.transition = 'none';
      cursor.style.right = 'auto';
      cursor.style.left  = `${cRect.left - hRect.left}px`;
      cursor.style.top   = `${cRect.top  - hRect.top}px`;
      cursor.getBoundingClientRect(); // force reflow

      cursor.style.transition = 'left 0.7s ease-in-out, top 0.7s ease-in-out';
      cursor.style.left = `${topLeft.x}px`;
      cursor.style.top  = `${topLeft.y}px`;

      await wait(700);
      if (cancelled) return;

      // ── Phase 2: show the box outline, move cursor to bottom-right ──
      el.style.transition = 'opacity 0.15s ease';
      el.style.opacity = '1';

      cursor.style.transition = 'left 0.75s ease-in-out, top 0.75s ease-in-out';
      cursor.style.left = `${bottomRight.x}px`;
      cursor.style.top  = `${bottomRight.y}px`;

      await wait(750);
      if (cancelled) return;

      // ── Phase 3: stretch the box to reveal "everyone." ──
      cursor.style.transition = 'none';
      el.style.transition = 'width 0.85s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.width = `${everyoneW}px`;

      // Track cursor to the actual bottom-right corner as the box grows
      const animStart    = performance.now();
      const animDuration = 850;
      const syncCursor = () => {
        if (cancelled) return;
        const wr = el.getBoundingClientRect();
        const hr = hero.getBoundingClientRect();
        cursor.style.left = `${wr.right  + 5 - hr.left}px`;
        cursor.style.top  = `${wr.bottom + 6 - hr.top}px`;
        if (performance.now() - animStart < animDuration + 100)
          requestAnimationFrame(syncCursor);
      };
      requestAnimationFrame(syncCursor);
    });

    return () => { cancelled = true; };
  }, []);

  return (
    <section ref={heroRef} className="hero" style={{ position: 'relative', width: '100%', height: '110vh', overflow: 'hidden', background: '#ffffff', flexShrink: 0 }}>

      <img src="/images/Hero-Fox-Bg.svg" className="hero__fox-bg" alt="ACM Design Fox" />

      {/* ── Title ── */}
      <div className="hero__title">
        <h1>
          <span className="title-main">Design education, for </span>
          <span className="title-everyone-wrapper" ref={everyoneRef}>
            <span className="title-everyone-clip">
              <span className="title-everyone">everyone.</span>
            </span>
            <span className="title-box" aria-hidden="true">
              <span className="title-box__handle title-box__handle--tl" />
              <span className="title-box__handle title-box__handle--tr" />
              <span className="title-box__handle title-box__handle--bl" />
              <span className="title-box__handle title-box__handle--br" />
            </span>
          </span>
        </h1>
      </div>

      {/* ── Floating elements ── */}

      <FloatingElement className="float-button-on" mousePos={mousePos}>
        <img src="/images/Button-On.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-button-off" mousePos={mousePos}>
        <img src="/images/Button-Off.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-pantone-left" mousePos={mousePos}>
        <img src="/images/Pantone-Head.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-lines" mousePos={mousePos}>
        <svg width="140" height="35" viewBox="0 0 72 18" fill="none" aria-hidden="true">
          <rect width="72" height="6" rx="3" fill="#FFAC30" />
          <rect y="12" width="50" height="6" rx="3" fill="#FFAC30" />
        </svg>
      </FloatingElement>

      <FloatingElement className="float-cursor" mousePos={mousePos} outerRef={cursorRef}>
        <img src="/images/Cursor.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-unchecked" mousePos={mousePos}>
        <img src="/images/Unchecked-Box.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-checked" mousePos={mousePos}>
        <img src="/images/Checked-Box.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-dots" mousePos={mousePos}>
        <svg width="84" height="21" viewBox="0 0 72 18" fill="none" aria-hidden="true">
          <circle cx="9"  cy="9" r="7" fill="#FFAC30" />
          <circle cx="36" cy="9" r="7" fill="#FFAC30" />
          <circle cx="63" cy="9" r="7" fill="#FFAC30" />
        </svg>
      </FloatingElement>

      <FloatingElement className="float-pantone-right" mousePos={mousePos}>
        <img src="/images/Pantone.svg" alt="" />
      </FloatingElement>

      <FloatingElement className="float-scroll" mousePos={mousePos}>
        <img src="/images/Scroll-Design.svg" alt="" />
      </FloatingElement>

    </section>
  );
}

export default HeroSection;
