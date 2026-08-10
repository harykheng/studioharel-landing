"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function Parallax({
  factor,
  centered = false,
  disableBelow,
  style,
  children,
}: {
  factor: number;
  centered?: boolean;
  /** Viewport width (px) below which the parallax offset is skipped — for
   * elements whose desktop-only absolute layout collapses to normal flow
   * on small screens (see .masalah-card in globals.css). */
  disableBelow?: number;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let base = 0;
    const measure = () => {
      const el: HTMLElement = node;
      base = el.offsetParent
        ? el.offsetTop + (el.offsetParent as HTMLElement).offsetTop
        : el.offsetTop;
    };
    measure();

    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (disableBelow && window.innerWidth <= disableBelow) {
          node.style.transform = centered ? "translateX(-50%)" : "";
          return;
        }
        const y = window.scrollY;
        const vh = window.innerHeight;
        const rel = y + vh / 2 - base;
        node.style.transform =
          (centered ? "translateX(-50%) " : "") +
          `translate3d(0,${(rel * factor).toFixed(1)}px,0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [factor, centered, disableBelow]);

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
