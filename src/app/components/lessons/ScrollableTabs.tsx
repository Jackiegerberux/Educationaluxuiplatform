import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollableTabsProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollableTabs({ children, className = '' }: ScrollableTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 size-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all shadow-lg"
        >
          <ChevronLeft className="size-4" />
        </button>
      )}

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="flex gap-1.5 overflow-x-auto pb-1 hide-scrollbar transition-[padding] duration-200"
        style={{
          paddingLeft: canScrollLeft ? 32 : 4,
          paddingRight: canScrollRight ? 32 : 4,
        }}
      >
        {children}
      </div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 size-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all shadow-lg"
        >
          <ChevronRight className="size-4" />
        </button>
      )}

      {/* Edge fade gradients */}
      {canScrollLeft && (
        <div className="absolute left-7 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-10" />
      )}
      {canScrollRight && (
        <div className="absolute right-7 top-0 bottom-0 w-5 bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-10" />
      )}
    </div>
  );
}
