"use client";

import { useEffect, useRef, type ElementType, type HTMLAttributes, type ReactNode } from "react";

/**
 * Marks its element with data-inview="in" the first time it scrolls into view,
 * so CSS can play an entrance animation. Content is never hidden by default:
 * only elements that start below the fold get data-inview="armed", which CSS
 * may use to hide purely decorative parts until they arrive. Without JS, or
 * with reduced motion, nothing is marked and everything stays visible.
 */
export function InView({
  as = "div",
  threshold = 0.3,
  children,
  ...rest
}: {
  as?: "div" | "ul" | "ol" | "article" | "figure";
  threshold?: number;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top > window.innerHeight * 0.85) el.dataset.inview = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.inview = "in";
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
