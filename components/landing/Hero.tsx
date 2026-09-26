import type { CSSProperties } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Hero.module.css";

// order in which the parts arrive after the intro
const order = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <span className={styles.plus} aria-hidden="true">
        +
      </span>
      <div className={`wrap ${styles.inner}`}>
        <p className="eyebrow rv" style={order(0)}>
          <span className="n">(01)</span>Website &amp; sistem untuk UMKM
        </p>
        <h1 id="hero-title" className={`display ${styles.title}`}>
          <span className="rv" style={order(1)}>
            Dibangun khusus
          </span>{" "}
          <span className="rv" style={order(2)}>
            untuk usahamu.
          </span>
        </h1>
        <p className={`${styles.sub} rv`} style={order(3)}>
          Landing page, pemesanan online, sampai dashboard stok. Dikerjakan langsung oleh developer berpengalaman 6
          tahun di Tiket.com.
        </p>
        <div className={`${styles.cta} rv`} style={order(4)}>
          <WhatsAppLink location="hero">Konsultasi via WhatsApp</WhatsAppLink>
          <TrackedLink
            href="#portofolio"
            event="view_portfolio_click"
            params={{ click_location: "hero" }}
            className="link"
          >
            Lihat karya
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
