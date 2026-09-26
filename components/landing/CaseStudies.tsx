import Image from "next/image";
import { featuredCase, otherCases } from "@/lib/content";
import { InView } from "@/components/InView";
import { TrackedLink } from "@/components/TrackedLink";
import { PhoneSet } from "./PhoneSet";
import styles from "./CaseStudies.module.css";

const phoneClass = [styles.left, styles.middle, styles.right];

export function CaseStudies() {
  return (
    <section id="portofolio" className="section" aria-labelledby="kasus-title">
      <div className="container">
        <div className="section-head">
          <h2 id="kasus-title" className="h2">
            Studi kasus
          </h2>
          <p className="lead">Enam proyek sudah live dan bisa dicoba langsung. Berikut beberapa di antaranya.</p>
        </div>

        <InView as="article" className={styles.featured} aria-labelledby="kasus-ordi">
          <div className={styles.stage}>
            {featuredCase.screens.map((s, i) => (
              <Image
                key={s.src}
                className={`${styles.phone} ${phoneClass[i]}`}
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(max-width: 820px) 34vw, 170px"
                quality={90}
              />
            ))}
          </div>
          <div className={styles.info}>
            <p className="label">Pemesanan online · FnB</p>
            <h3 id="kasus-ordi" className={`display ${styles.caseTitle}`}>
              {featuredCase.name}
            </h3>
            <dl className={styles.facts}>
              {featuredCase.facts.map((f) => (
                <div key={f.term}>
                  <dt>{f.term}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <TrackedLink
              href={featuredCase.demo.href}
              event="portfolio_demo_click"
              params={{ project: featuredCase.demo.project }}
              className="btn btn--light"
            >
              {featuredCase.demo.label}
            </TrackedLink>
          </div>
        </InView>

        <ul className={styles.grid}>
          {otherCases.map((c) => (
            <li key={c.name} className={styles.card}>
              <div className={styles.frame}>
                {c.image ? (
                  <Image
                    className={styles.shot}
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    sizes="(max-width: 700px) 92vw, 380px"
                    quality={90}
                  />
                ) : (
                  c.phones && <PhoneSet phones={c.phones} sizes="(max-width: 700px) 26vw, 110px" />
                )}
              </div>
              <h3 className={styles.cardTitle}>{c.name}</h3>
              <p className={styles.cardText}>{c.summary}</p>
              <p className={styles.links}>
                {c.links.map((l) => (
                  <TrackedLink
                    key={l.href}
                    href={l.href}
                    event="portfolio_demo_click"
                    params={{ project: l.project }}
                    className="text-link"
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
