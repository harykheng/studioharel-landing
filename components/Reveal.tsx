"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealTag = "div" | "h1" | "h2" | "p";

export function Reveal({
  index = 0,
  children,
  style,
  className,
  as = "div",
}: {
  index?: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  as?: RevealTag;
}) {
  const Tag = as as RevealTag;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
    if (inView) {
      const raf1 = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
      return () => cancelAnimationFrame(raf1);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const delay = index * 0.08;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(22px)",
        transition: `opacity .55s var(--ease-out) ${delay}s, transform .55s var(--ease-out) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
