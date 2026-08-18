"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

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

  // Underline is a background gradient (not an absolutely-positioned bar) with
  // box-decoration-break: clone so it draws separately under each wrapped
  // line instead of stretching across the whole multi-line bounding box.
  const style: CSSProperties = {
    color: "var(--orange-500)",
    backgroundImage: "linear-gradient(var(--accent-primary), var(--accent-primary))",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 100%",
    backgroundSize: drawn ? "100% 3px" : "0% 3px",
    paddingBottom: 6,
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
    transition: "background-size .9s var(--ease-out) .9s",
  };

  return (
    <span ref={ref} style={style}>
      {children}
    </span>
  );
}
