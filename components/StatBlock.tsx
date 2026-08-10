import type { ReactNode } from "react";

export function StatBlock({
  value,
  unit,
  label,
  caption,
}: {
  value: ReactNode;
  unit?: ReactNode;
  label: ReactNode;
  caption?: ReactNode;
}) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", minWidth: 160 }}>
      <div style={{ height: 1, background: "var(--divider-accent)", marginBottom: 20 }} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: 4, color: "var(--text-primary)" }}>
        <span
          style={{
            fontFamily: "var(--font-serif-display)",
            fontStyle: "italic",
            fontSize: "var(--text-4xl)",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        {unit && (
          <sup style={{ fontFamily: "var(--font-serif-display)", fontStyle: "italic", fontSize: "var(--text-lg)" }}>
            {unit}
          </sup>
        )}
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-widest)",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </div>
      {caption && (
        <div
          style={{
            marginTop: 6,
            fontSize: "var(--text-xs)",
            color: "var(--text-tertiary)",
            maxWidth: 160,
            lineHeight: "var(--leading-normal)",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
