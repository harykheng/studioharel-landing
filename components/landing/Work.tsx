import Image from "next/image";
import { works } from "@/lib/content";
import { TrackedLink } from "@/components/TrackedLink";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section id="portofolio" className="band" aria-labelledby="karya-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">
            <span className="n">(03)</span>Karya
          </p>
          <h2 id="karya-title" className="h2">
            Sudah live dan bisa dicoba langsung.
          </h2>
        </div>
        <ul className={styles.grid}>
          {works.map((w) => (
            <li key={w.name} className={styles.card}>
              {w.phones ? (
                <div className={`${styles.media} ${styles.phones}`}>
                  {w.phones.map((p) => (
                    <Image
                      key={p.src}
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(max-width: 760px) 27vw, 180px"
                      quality={90}
                    />
                  ))}
                </div>
              ) : (
                w.image && (
                  <div className={styles.media}>
                    <Image
                      src={w.image.src}
                      alt={w.image.alt}
                      width={w.image.width}
                      height={w.image.height}
                      sizes="(max-width: 760px) 92vw, 600px"
                      quality={90}
                    />
                  </div>
                )
              )}
              <div className={styles.meta}>
                <h3>{w.name}</h3>
                <span>{w.category}</span>
              </div>
              <p className={styles.links}>
                {w.links.map((l) => (
                  <TrackedLink
                    key={l.href}
                    href={l.href}
                    event="portfolio_demo_click"
                    params={{ project: l.project }}
                    className="link"
                  >
                    {l.label}
                  </TrackedLink>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
