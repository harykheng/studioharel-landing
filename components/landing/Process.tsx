import { steps } from "@/lib/content";
import styles from "./Process.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export function Process() {
  return (
    <section id="proses" className="band" aria-labelledby="proses-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">
            <span className="n">(05)</span>Proses
          </p>
          <h2 id="proses-title" className="h2">
            Dari chat pertama sampai website live.
          </h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="n">{pad(i + 1)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className={styles.out}>Hasil: {s.result}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
