import type { CSSProperties } from "react";
import { problems } from "@/lib/content";
import { InView } from "@/components/InView";
import styles from "./Problems.module.css";

export function Problems() {
  return (
    <section id="masalah" className="section" aria-labelledby="masalah-title">
      <div className="container">
        <div className="section-head">
          <h2 id="masalah-title" className="h2">
            Masalah yang sering kami dengar
          </h2>
          <p className="lead">
            Empat keluhan yang paling sering disampaikan pemilik usaha, dan cara kami menyelesaikannya.
          </p>
        </div>
        <InView as="ul" className={styles.list}>
          {problems.map((p, i) => (
            <li key={p.service} style={{ "--i": i } as CSSProperties}>
              <p className={styles.quote}>&ldquo;{p.quote}&rdquo;</p>
              <p className={styles.solution}>
                <span className="label">Solusi</span>
                {p.solution}
              </p>
              <span className={styles.tag}>{p.service}</span>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}
