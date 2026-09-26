import { contact } from "@/lib/content";
import { Logo } from "./Logo";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.bar}`}>
        <a href="#hero" className={styles.brand} aria-label="Studio Harel, ke atas">
          <Logo sizes="46px" />
        </a>
        <p className={styles.note}>© 2026 Studio Harel. Dibangun dari nol, tanpa template.</p>
        <a href={contact.instagram.href} target="_blank" rel="noopener" className="link">
          Instagram {contact.instagram.handle}
        </a>
      </div>
    </footer>
  );
}
