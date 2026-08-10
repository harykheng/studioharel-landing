"use client";

import { useState, type CSSProperties } from "react";

export function IconButton({
  icon = "ph-arrow-up-right",
  tone = "light",
  size = 28,
  onClick,
  style,
}: {
  icon?: string;
  tone?: "light" | "dark";
  size?: number;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  const isLight = tone === "light";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-sm)",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: isLight ? "var(--accent-chip-bg)" : "var(--surface-chip)",
        color: isLight ? "var(--accent-chip-fg)" : "var(--text-primary)",
        opacity: hover ? 0.85 : 1,
        transition: "opacity var(--duration-fast)",
        fontSize: size * 0.55,
        ...style,
      }}
    >
      <i className={`ph-thin ${icon}`} />
    </button>
  );
}
