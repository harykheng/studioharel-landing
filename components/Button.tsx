"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

const base: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: "var(--tracking-normal)",
  border: "none",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition:
    "background var(--duration-base) var(--ease-out), opacity var(--duration-fast), border-color var(--duration-base)",
};

const sizes: Record<string, CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: 13 },
  md: { padding: "12px 22px", fontSize: 14 },
  lg: { padding: "15px 28px", fontSize: 15 },
};

function variantStyle(variant: string): CSSProperties {
  switch (variant) {
    case "secondary":
      return {
        background: "var(--surface-chip)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-strong)",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--text-primary)",
        border: "1px solid transparent",
      };
    default:
      return {
        background: "var(--accent-primary)",
        color: "var(--text-on-accent)",
        border: "1px solid transparent",
      };
  }
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  style,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  const v = variantStyle(variant);
  const bg =
    variant === "primary" && hover && !disabled
      ? "var(--accent-primary-hover)"
      : v.background;
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        ...base,
        ...sizes[size],
        ...v,
        background: bg,
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
