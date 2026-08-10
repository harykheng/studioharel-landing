"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function UnderlineHighlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setDrawn(true));
      return () => cancelAnimationFrame(raf);
    }
    const section = node.closest("section");
    const target = section ?? node;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ position: "relative", display: "inline-block", color: "var(--blue-500)" }}>
      {children}
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: -6,
          width: "100%",
          height: 3,
          borderRadius: 2,
          background: "var(--accent-primary)",
          transform: drawn ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform .7s var(--ease-out) .3s",
        }}
      />
    </span>
  );
}
