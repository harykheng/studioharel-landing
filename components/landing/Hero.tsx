import Image from "next/image";
import { Fragment } from "react";
import { liveProjects, proof, work } from "@/lib/content";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Hero.module.css";

const phoneScreens = [work.ordi[0], work.ordi[2], work.ordi[4]];

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={`display ${styles.title}`}>
            Website dan sistem yang dibangun <span className="accent">khusus</span> untuk usahamu.
          </h1>
          <p className={styles.sub}>
            Landing page, pemesanan online, sampai dashboard stok dan invoice. Dirancang dan dikoding langsung oleh
            developer dengan pengalaman 6 tahun di Tiket.com.
          </p>
          <div className={styles.cta}>
            <WhatsAppLink location="hero">Konsultasi via WhatsApp</WhatsAppLink>
            <TrackedLink
              href="#portofolio"
              event="view_portfolio_click"
              params={{ click_location: "hero" }}
              className="text-link"
            >
              Lihat studi kasus
            </TrackedLink>
          </div>
          <dl className={styles.proof}>
            {proof.map((p) => (
              <div key={p.value}>
                <dt>{p.value}</dt>
                <dd>{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className={styles.stack}>
          <div className={styles.win}>
            <div className={styles.winBar} aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className={styles.winView}>
              <Image
                src={work.dashboard.src}
                alt={work.dashboard.alt}
                width={work.dashboard.width}
                height={work.dashboard.height}
                sizes="(max-width: 860px) 88vw, 520px"
                loading="eager"
              />
            </div>
          </div>
          <div className={styles.phone}>
            {phoneScreens.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={i === 0 ? s.alt : ""}
                width={s.width}
                height={s.height}
                sizes="(max-width: 860px) 30vw, 170px"
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
          <figcaption className={styles.cap}>
            <span>Dashboard stok</span>
            <span>Ordi Cafe</span>
          </figcaption>
        </figure>
      </div>

      <div className={styles.marquee}>
        <p className="sr-only">Proyek yang sudah live: {liveProjects.join(", ")}.</p>
        <div className={styles.track} aria-hidden="true">
          {[0, 1].map((copy) => (
            <p key={copy}>
              {liveProjects.map((name) => (
                <Fragment key={name}>
                  {name} <b>✱</b>{" "}
                </Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
