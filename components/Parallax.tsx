"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function Parallax({
  factor,
  centered = false,
  style,
  children,
}: {
  factor: number;
  centered?: boolean;
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
  }, [factor, centered]);

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
