import { experience, strengths } from "@/lib/content";
import { InView } from "@/components/InView";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="kenapa" className="section" aria-labelledby="tentang-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 id="tentang-title" className="h2">
            Dikerjakan langsung oleh developernya.
          </h2>
          <p className="lead">
            Dari konsultasi sampai website live, kamu berdiskusi langsung dengan developer yang merancang dan menulis
            kodenya.
          </p>
          <ul className={styles.list}>
            {strengths.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <InView className={styles.card}>
          <p className="label">Pengalaman</p>
          <ol className={styles.timeline}>
            {experience.map((e) => (
              <li key={e.place}>
                <span className={styles.when}>{e.when}</span>
                <h3 className={styles.place}>{e.place}</h3>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  );
}
