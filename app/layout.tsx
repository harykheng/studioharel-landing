import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { introScript } from "@/lib/intro";
import "./globals.css";

const GTM_ID = "GTM-KG5BPZBT";

// Archivo is variable on both weight and width; the italic is used for the hero line.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Harel — Website & Dashboard untuk UMKM",
  description:
    "Website dan sistem yang dibangun khusus untuk usahamu: landing page, pemesanan online, sampai dashboard stok dan invoice. Dikerjakan langsung oleh developer dengan pengalaman 6 tahun di Tiket.com.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#131211",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // the intro script below marks <html> before hydration
    <html lang="id" className={archivo.variable} suppressHydrationWarning>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
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
