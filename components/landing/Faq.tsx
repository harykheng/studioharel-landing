"use client";

import { faqs } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="tanya" className="section" aria-labelledby="tanya-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <h2 id="tanya-title" className="h2">
            Tanya jawab
          </h2>
          <p className="lead">Pertanyaanmu belum ada di sini? Tanyakan langsung, kami balas lewat WhatsApp.</p>
          <WhatsAppLink location="tanya_jawab" className="text-link" icon={false}>
            Tanya lewat WhatsApp
          </WhatsAppLink>
        </div>
        <div className={styles.list}>
          {faqs.map((f) => (
            <details
              key={f.q}
              className={styles.item}
              onToggle={(e) => {
                if (e.currentTarget.open) trackEvent("faq_open", { question: f.q });
              }}
            >
              <summary className={styles.q}>
                <span>{f.q}</span>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.a}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
