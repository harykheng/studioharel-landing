"use client";

import type { ReactNode } from "react";
import { trackEvent, whatsappHref } from "@/lib/tracking";

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

/**
 * Plain link to wa.me so it works without JavaScript; the click is also
 * reported to GTM as `whatsapp_click` with where it happened, plus any extra params.
 */
export function WhatsAppLink({
  location,
  message,
  params,
  className = "pill",
  icon = true,
  children,
}: {
  location: string;
  message?: string;
  params?: Record<string, unknown>;
  className?: string;
  icon?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener"
      onClick={() => trackEvent("whatsapp_click", { click_location: location, ...params })}
    >
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}
