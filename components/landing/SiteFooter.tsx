import Image from "next/image";
import { contact } from "@/lib/content";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.bar}`}>
        <a href="#hero" className={styles.logo}>
          <Image src="/assets/logo-ink.png" alt="Studio Harel" width={1068} height={477} sizes="64px" />
        </a>
        <p className={styles.note}>© 2026 Studio Harel. Halaman ini dibangun dari nol, tanpa template.</p>
        <a href={contact.instagram.href} target="_blank" rel="noopener" className="text-link">
          Instagram {contact.instagram.handle}
        </a>
      </div>
    </footer>
  );
}
