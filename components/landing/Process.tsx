"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/lib/content";
import styles from "./Process.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export function Process() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  // The step crossing the middle of the screen becomes the big number on the left.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="proses" className="section" aria-labelledby="proses-title">
      <div className="container">
        <div className="section-head">
          <h2 id="proses-title" className="h2">
            Proses kerja
          </h2>
          <p className="lead">Lima langkah, masing-masing dengan hasil yang jelas, dari chat pertama sampai website live.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.counter} aria-hidden="true">
            <span key={active} className={styles.digit}>
              {pad(active + 1)}
            </span>
            <small>{steps[active].title}</small>
          </div>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => {
                  items.current[i] = el;
                }}
                data-index={i}
                className={i === active ? styles.on : undefined}
              >
                <span className={styles.no}>{pad(i + 1)}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <p className={styles.result}>
                  <span className="label">Hasil</span>
                  {s.result}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
