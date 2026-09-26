import { contact } from "@/lib/content";
import { InView } from "@/components/InView";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="kontak" className={styles.contact} aria-labelledby="kontak-title">
      <div className={`container ${styles.inner}`}>
        <InView className={styles.head} threshold={0.5}>
          <h2 id="kontak-title" className={`display ${styles.title}`}>
            Ceritakan kebutuhanmu.
            <br />
            Kami balas dengan <span className="accent">estimasi waktu dan biaya.</span>
          </h2>
        </InView>
        <p className={styles.sub}>
          Kirim pesan singkat soal usaha dan kebutuhanmu. Estimasinya kami kirim sebelum pengerjaan dimulai.
        </p>
        <div className={styles.actions}>
          <WhatsAppLink location="kontak">Chat via WhatsApp</WhatsAppLink>
        </div>
        <dl className={styles.channels}>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <WhatsAppLink location="kontak" className="" icon={false}>
                {contact.phoneDisplay}
              </WhatsAppLink>
            </dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={contact.instagram.href} target="_blank" rel="noopener">
                {contact.instagram.handle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
