"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/tracking";

/** Anchor that reports a GTM event on click. External links open in a new tab. */
export function TrackedLink({
  href,
  event,
  params,
  className,
  children,
}: {
  href: string;
  event: string;
  params?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      onClick={() => trackEvent(event, params)}
    >
      {children}
    </a>
  );
}
