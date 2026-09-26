import { contact } from "@/lib/content";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="kontak" className={styles.contact} aria-labelledby="kontak-title">
      <span className={styles.plus} aria-hidden="true">
        +
      </span>
      <div className={`wrap ${styles.inner}`}>
        <p className="eyebrow">
          <span className="n">(07)</span>Kontak
        </p>
        <h2 id="kontak-title" className={`display ${styles.title}`}>
          Ceritakan kebutuhanmu.
        </h2>
        <p className={styles.sub}>Kami balas dengan estimasi waktu dan biaya, sebelum pengerjaan dimulai.</p>
        <WhatsAppLink location="kontak">Chat via WhatsApp</WhatsAppLink>
        <ul className={styles.line}>
          <li>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <WhatsAppLink location="kontak" className="" icon={false}>
              {contact.phoneDisplay}
            </WhatsAppLink>
          </li>
          <li>
            <a href={contact.instagram.href} target="_blank" rel="noopener">
              {contact.instagram.handle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
