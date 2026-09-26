import { PRICE_FALLBACK, services } from "@/lib/content";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="layanan" className="band" aria-labelledby="layanan-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">
            <span className="n">(04)</span>Layanan
          </p>
          <h2 id="layanan-title" className="h2">
            Pilih yang paling dekat dengan kebutuhanmu.
          </h2>
        </div>
        {/* each row opens WhatsApp with a message about that service */}
        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s.name}>
              <WhatsAppLink
                location="layanan"
                params={{ service: s.name }}
                message={`Halo Studio Harel, saya tertarik dengan layanan ${s.name}. Boleh minta estimasi waktu & biayanya?`}
                className={styles.row}
                icon={false}
              >
                <span className={styles.name}>{s.name}</span>
                <span className={styles.desc}>{s.summary}</span>
                <span className={styles.cta}>{s.price ? `Mulai ${s.price}` : PRICE_FALLBACK}</span>
              </WhatsAppLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
