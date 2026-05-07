import { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/HeroSection.css';

interface MousePos { x: number; y: number; }

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  mousePos: MousePos;
  repelStrength?: number;
  repelRadius?: number;
  outerRef?: React.RefObject<HTMLDivElement>;
  id: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  registerRef: (id: string, el: HTMLDivElement | null) => void;
}

function FloatingElement({
  children,
  className = '',
  mousePos,
  repelStrength = 28,
  repelRadius = 160,
  outerRef,
  id,
  isSelected,
  onSelect,
  registerRef,
}: FloatingElementProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerDiv = useRef<HTMLDivElement>(null);
  const [offset, setOffset]     = useState<MousePos>({ x: 0, y: 0 });
  const [userPos, setUserPos]   = useState<{ top: number; left: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragData = useRef<{ mouseX: number; mouseY: number; elLeft: number; elTop: number } | null>(null);

  // Repel — disabled while selected
  useEffect(() => {
    if (isSelected) { setOffset({ x: 0, y: 0 }); return; }
    if (!innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = mousePos.x - cx;
    const dy = mousePos.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < repelRadius && dist > 0) {
      const force = (1 - dist / repelRadius) * repelStrength;
      setOffset({ x: -(dx / dist) * force, y: -(dy / dist) * force });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePos, repelRadius, repelStrength, isSelected]);

  // Drag
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragData.current) return;
      setUserPos({
        left: dragData.current.elLeft + (e.clientX - dragData.current.mouseX),
        top:  dragData.current.elTop  + (e.clientY - dragData.current.mouseY),
      });
    };
    const onUp = () => {
      if (!dragData.current) return;
      dragData.current = null;
      setDragging(false);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isSelected) return;
    e.stopPropagation();
    e.preventDefault();
    const el = outerDiv.current;
    if (!el) return;
    const elRect = el.getBoundingClientRect();
    const elLeft = elRect.left + window.scrollX;
    const elTop  = elRect.top  + window.scrollY;
    setUserPos({ left: elLeft, top: elTop });
    dragData.current = { mouseX: e.clientX, mouseY: e.clientY, elLeft, elTop };
    setDragging(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!dragging) onSelect(id);
  };

  const setRef = (el: HTMLDivElement | null) => {
    (outerDiv as React.MutableRefObject<HTMLDivElement | null>).current = el;
    if (outerRef) (outerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    registerRef(id, el);
  };

  const node = (
    <div
      ref={setRef}
      className={`float-el ${className}`}
      style={userPos ? {
        position: 'absolute',
        top:    userPos.top,
        left:   userPos.left,
        right:  'auto',
        bottom: 'auto',
        animationPlayState: dragging ? 'paused' : undefined,
        outline:       isSelected ? '1.5px solid #3B82F6' : undefined,
        outlineOffset: isSelected ? '6px' : undefined,
        cursor: dragging ? 'grabbing' : 'grab',
        zIndex: 9999,
      } : {
        outline:       isSelected ? '1.5px solid #3B82F6' : undefined,
        outlineOffset: isSelected ? '6px' : undefined,
        cursor: isSelected ? 'grab' : undefined,
        zIndex: isSelected ? 20 : undefined,
      }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      data-floating={id}
    >
      <div
        ref={innerRef}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {children}
      </div>
    </div>
  );

  return userPos ? createPortal(node, document.body) : node;
}

function HeroSection() {
  const [mousePos,    setMousePos]    = useState<MousePos>({ x: 0, y: 0 });
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const everyoneRef = useRef<HTMLSpanElement>(null);
  const cursorRef   = useRef<HTMLDivElement>(null);
  const heroRef     = useRef<HTMLElement>(null);
  const iconRefs         = useRef<Map<string, HTMLDivElement>>(new Map());
  const justRectSelected = useRef(false);

  const registerRef = (id: string, el: HTMLDivElement | null) => {
    if (el) iconRefs.current.set(id, el);
    else    iconRefs.current.delete(id);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Rectangle selection — listen for the drawn rect and check our own refs directly
  useEffect(() => {
    const handler = (e: Event) => {
      const r = (e as CustomEvent<{ x: number; y: number; w: number; h: number }>).detail;
      const matched: string[] = [];
      iconRefs.current.forEach((el, id) => {
        const er = el.getBoundingClientRect();
        const overlaps = er.right >= r.x && er.left <= r.x + r.w &&
                         er.bottom >= r.y && er.top <= r.y + r.h;
        if (overlaps) matched.push(id);
      });
      if (matched.length > 0) {
        justRectSelected.current = true;
        setSelectedIds(new Set(matched));
      }
    };
    window.addEventListener('float-rect-drawn', handler);
    return () => window.removeEventListener('float-rect-drawn', handler);
  }, []);

  const handleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id) && next.size === 1) next.clear();
      else { next.clear(); next.add(id); }
      return next;
    });
  };

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
      el.style.width = 'max-content';
      const everyoneW = el.getBoundingClientRect().width;
      el.style.width = '0px';

      if (cancelled) return;

      const wRect = el.getBoundingClientRect();
      const hRect = hero.getBoundingClientRect();

      const topLeft     = { x: wRect.left - 5 - hRect.left, y: wRect.top    - 6 - hRect.top };
      const bottomRight = { x: wRect.left + 5 - hRect.left, y: wRect.bottom + 6 - hRect.top };

      const cRect = cursor.getBoundingClientRect();
      cursor.style.transition = 'none';
      cursor.style.right = 'auto';
      cursor.style.left  = `${cRect.left - hRect.left}px`;
      cursor.style.top   = `${cRect.top  - hRect.top}px`;
      cursor.getBoundingClientRect();

      cursor.style.transition = 'left 0.7s ease-in-out, top 0.7s ease-in-out';
      cursor.style.left = `${topLeft.x}px`;
      cursor.style.top  = `${topLeft.y}px`;

      await wait(700);
      if (cancelled) return;

      el.style.transition = 'opacity 0.15s ease';
      el.style.opacity = '1';

      cursor.style.transition = 'left 0.75s ease-in-out, top 0.75s ease-in-out';
      cursor.style.left = `${bottomRight.x}px`;
      cursor.style.top  = `${bottomRight.y}px`;

      await wait(750);
      if (cancelled) return;

      cursor.style.transition = 'none';
      el.style.transition = 'width 0.85s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.width = `${everyoneW}px`;

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

  const floatProps = (id: string) => ({
    id,
    isSelected: selectedIds.has(id),
    onSelect: handleSelect,
    mousePos,
    registerRef,
  });

  return (
    <section
      ref={heroRef}
      className="hero"
      style={{ position: 'relative', width: '100%', height: '110vh', overflow: 'hidden', background: '#ffffff', flexShrink: 0 }}
      onClick={() => {
        if (justRectSelected.current) { justRectSelected.current = false; return; }
        setSelectedIds(new Set());
      }}
    >
      <img src="/images/Hero-Fox-Bg.svg" className="hero__fox-bg" alt="ACM Design Fox" />

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

      <FloatingElement className="float-button-on"    {...floatProps('button-on')}>
        <img src="/images/Button-On.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-button-off"   {...floatProps('button-off')}>
        <img src="/images/Button-Off.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-pantone-left" {...floatProps('pantone-left')}>
        <img src="/images/Pantone-Head.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-lines"        {...floatProps('lines')}>
        <svg width="140" height="35" viewBox="0 0 72 18" fill="none" aria-hidden="true">
          <rect width="72" height="6" rx="3" fill="#FFAC30" />
          <rect y="12" width="50" height="6" rx="3" fill="#FFAC30" />
        </svg>
      </FloatingElement>
      <FloatingElement className="float-cursor"       {...floatProps('cursor')} outerRef={cursorRef}>
        <img src="/images/Cursor.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-unchecked"    {...floatProps('unchecked')}>
        <img src="/images/Unchecked-Box.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-checked"      {...floatProps('checked')}>
        <img src="/images/Checked-Box.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-dots"         {...floatProps('dots')}>
        <svg width="84" height="21" viewBox="0 0 72 18" fill="none" aria-hidden="true">
          <circle cx="9"  cy="9" r="7" fill="#FFAC30" />
          <circle cx="36" cy="9" r="7" fill="#FFAC30" />
          <circle cx="63" cy="9" r="7" fill="#FFAC30" />
        </svg>
      </FloatingElement>
      <FloatingElement className="float-pantone-right" {...floatProps('pantone-right')}>
        <img src="/images/Pantone.svg" alt="" />
      </FloatingElement>
      <FloatingElement className="float-scroll"       {...floatProps('scroll')}>
        <img src="/images/Scroll-Design.svg" alt="" />
      </FloatingElement>

    </section>
  );
}

export default HeroSection;
