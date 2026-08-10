import type { ReactNode } from "react";

export function Badge({
  children,
  dot = true,
}: {
  children: ReactNode;
  dot?: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-widest)",
        textTransform: "uppercase",
        color: "var(--text-secondary)",
      }}
    >
      {dot && (
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--accent-primary)",
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}

export function Tag({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent";
}) {
  const bg = tone === "accent" ? "var(--accent-chip-bg)" : "var(--surface-chip)";
  const fg = tone === "accent" ? "var(--accent-chip-fg)" : "var(--text-secondary)";
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        background: bg,
        color: fg,
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 500,
        border: tone === "neutral" ? "1px solid var(--border-subtle)" : "none",
      }}
    >
      {children}
    </span>
  );
}
