import type { CSSProperties } from "react";
import { IconButton } from "./IconButton";

export function QuoteCard({
  icon = "ph-cube",
  quote,
  style,
}: {
  icon?: string;
  quote: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: 220,
        padding: "18px 16px 16px",
        borderRadius: "var(--radius-lg)",
        background: "var(--surface-glass)",
        border: "1px solid var(--surface-glass-border)",
        boxShadow: "var(--shadow-card)",
        fontFamily: "var(--font-sans)",
        color: "var(--text-secondary)",
        ...style,
      }}
    >
      <IconButton icon="ph-arrow-up-right" style={{ position: "absolute", top: -10, right: -10 }} />
      <i
        className={`ph-thin ${icon}`}
        style={{
          fontSize: 28,
          color: "var(--text-tertiary)",
          display: "block",
          marginBottom: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, lineHeight: "var(--leading-relaxed)" }}>
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
