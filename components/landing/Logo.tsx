import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Logo.module.css";

type Line = { x1: number; y1: number; x2: number; y2: number; w: number; len?: number; delay?: number };

// The mark redrawn from the logo file: a vertical bar with three strokes from its centre.
const STILL: Line[] = [
  { x1: 241.5, y1: 8, x2: 241.5, y2: 468, w: 53 },
  { x1: 241.5, y1: 238, x2: 4, y2: 238, w: 57 },
  { x1: 241.5, y1: 238, x2: 78.5, y2: 74, w: 53 },
  { x1: 241.5, y1: 238, x2: 73, y2: 405, w: 53 },
];

// For drawing, the bar is split in two so every stroke can grow out of the centre.
const DRAWN: Line[] = [
  { x1: 241.5, y1: 239, x2: 241.5, y2: 8, w: 53, len: 231, delay: 0 },
  { x1: 241.5, y1: 237, x2: 241.5, y2: 468, w: 53, len: 231, delay: 0 },
  { x1: 241.5, y1: 238, x2: 4, y2: 238, w: 57, len: 238, delay: 0.1 },
  { x1: 241.5, y1: 238, x2: 78.5, y2: 74, w: 53, len: 232, delay: 0.16 },
  { x1: 241.5, y1: 238, x2: 73, y2: 405, w: 53, len: 238, delay: 0.22 },
];

export function LogoMark({ className, draw = false }: { className?: string; draw?: boolean }) {
  return (
    <svg className={className} viewBox="4 8 264 461" aria-hidden="true">
      <g stroke="currentColor" fill="none">
        {(draw ? DRAWN : STILL).map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            strokeWidth={l.w}
            style={draw ? ({ "--len": l.len, "--d": `${l.delay}s` } as CSSProperties) : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

/** Orange mark plus the white STUDIO HAREL wordmark, in the proportions of the logo file. */
export function Logo({ sizes, eager = false, draw = false }: { sizes: string; eager?: boolean; draw?: boolean }) {
  return (
    <span className={draw ? `${styles.logo} ${styles.draw}` : styles.logo}>
      <LogoMark className={styles.mark} draw={draw} />
      <Image
        className={styles.word}
        src="/assets/wordmark-light.png"
        alt=""
        width={760}
        height={456}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
      />
    </span>
  );
}
