"use client";

import { faqs } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="tanya" className="band" aria-labelledby="tanya-title">
      <div className={`wrap ${styles.grid}`}>
        <div className="sec-head">
          <p className="eyebrow">
            <span className="n">(06)</span>Tanya jawab
          </p>
          <h2 id="tanya-title" className="h2">
            Yang sering ditanyakan.
          </h2>
        </div>
        <div className={styles.list}>
          {faqs.map((f) => (
            <details
              key={f.q}
              onToggle={(e) => {
                if (e.currentTarget.open) trackEvent("faq_open", { question: f.q });
              }}
            >
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
