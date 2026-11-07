'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type PointerParallaxProps = {
  children: ReactNode;
  className?: string;
};

export function PointerParallax({ children, className }: PointerParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduceMotion) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const commit = () => {
      frame = 0;
      node.style.setProperty('--mx', targetX.toFixed(3));
      node.style.setProperty('--my', targetY.toFixed(3));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(commit);
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      schedule();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    node.addEventListener('pointermove', onMove, { passive: true });
    node.addEventListener('pointerleave', onLeave);

    return () => {
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
