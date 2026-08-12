import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import "@phosphor-icons/web/thin";
import "@phosphor-icons/web/bold";

const GTM_ID = "GTM-KG5BPZBT";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Harel — Website & Dashboard untuk UMKM",
  description:
    "Website dan dashboard yang dibangun sesuai kebutuhan bisnismu. Tampilan dan fitur menyesuaikan cara kerja bisnismu, bukan sebaliknya.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
