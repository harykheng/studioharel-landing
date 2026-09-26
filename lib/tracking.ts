import { sendGTMEvent } from "@next/third-parties/google";

export const WHATSAPP_NUMBER = "6281292567788";

export const DEFAULT_WA_MESSAGE =
  "Halo Studio Harel, saya mau konsultasi soal website untuk usaha saya.";

export function trackEvent(event: string, params?: Record<string, unknown>) {
  sendGTMEvent({ event, ...params });
}

export function whatsappHref(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
