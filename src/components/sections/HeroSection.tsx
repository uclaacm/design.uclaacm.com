import { useState, useEffect, useRef, type ReactNode } from 'react';
import '../../styles/HeroSection.css';

interface MousePos { x: number; y: number; }

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  mousePos: MousePos;
  repelStrength?: number;
  repelRadius?: number;
}

/**
 * Wraps any element so it gently pushes away from the cursor
 * and slides back to its original spot when the cursor leaves.
 */
function FloatingElement({
  children,
  className = '',
  mousePos,
  repelStrength = 28,
  repelRadius = 160,
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
    <div
      ref={ref}
      className={`float-el ${className}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section className="hero" style={{ position: 'relative', width: '100%', height: '110vh', overflow: 'hidden', background: '#ffffff', flexShrink: 0 }}>

      {/* Fox + background combined */}
      <img src="/images/Hero-Fox-Bg.svg" className="hero__fox-bg" alt="ACM Design Fox" />

      {/* ── Title ── */}
      <div className="hero__title">
        <h1>
          <span className="title-main">Design education, for </span>
          <span className="title-everyone-wrapper">
            <span className="title-everyone">everyone.</span>
            {/* Figma-style selection box */}
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

      {/* Toggle ON */}
      <FloatingElement className="float-button-on" mousePos={mousePos}>
        <img src="/images/Button-On.svg" alt="" />
      </FloatingElement>

      {/* Toggle OFF */}
      <FloatingElement className="float-button-off" mousePos={mousePos}>
        <img src="/images/Button-Off.svg" alt="" />
      </FloatingElement>

      {/* Pantone chip — left (#FFAC30) */}
      <FloatingElement className="float-pantone-left" mousePos={mousePos}>
        <img src="/images/Pantone-Head.svg" alt="" />
      </FloatingElement>

      {/* Three horizontal bars */}
      <FloatingElement className="float-lines" mousePos={mousePos}>
        <svg width="140" height="35" viewBox="0 0 72 18" fill="none" aria-hidden="true">
          <rect width="72" height="6" rx="3" fill="#FFAC30" />
          <rect y="12" width="50" height="6" rx="3" fill="#FFAC30" />
        </svg>
      </FloatingElement>


      {/* Cursor arrow */}
      <FloatingElement className="float-cursor" mousePos={mousePos}>
        <img src="/images/Cursor.svg" alt="" />
      </FloatingElement>

      {/* Unchecked checkbox */}
      <FloatingElement className="float-unchecked" mousePos={mousePos}>
        <img src="/images/Unchecked-Box.svg" alt="" />
      </FloatingElement>

      {/* Checked checkbox */}
      <FloatingElement className="float-checked" mousePos={mousePos}>
        <img src="/images/Checked-Box.svg" alt="" />
      </FloatingElement>

      {/* Three dots */}
      <FloatingElement className="float-dots" mousePos={mousePos}>
        <svg width="84" height="21" viewBox="0 0 72 18" fill="none" aria-hidden="true">
          <circle cx="9"  cy="9" r="7" fill="#FFAC30" />
          <circle cx="36" cy="9" r="7" fill="#FFAC30" />
          <circle cx="63" cy="9" r="7" fill="#FFAC30" />
        </svg>
      </FloatingElement>

      {/* Pantone swatch — right (#FFA216) */}
      <FloatingElement className="float-pantone-right" mousePos={mousePos}>
        <img src="/images/Pantone.svg" alt="" />
      </FloatingElement>

      {/* Scroll / nav pill */}
      <FloatingElement className="float-scroll" mousePos={mousePos}>
        <img src="/images/Scroll-Design.svg" alt="" />
      </FloatingElement>

    </section>
  );
}

export default HeroSection;
