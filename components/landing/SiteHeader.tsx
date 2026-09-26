import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Logo } from "./Logo";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "#portofolio", label: "Karya" },
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        {/* data-brand: the intro logo flies into this spot */}
        <a href="#hero" className={styles.brand} aria-label="Studio Harel, ke atas" data-brand>
          <Logo sizes="56px" eager />
        </a>
        <nav aria-label="Navigasi utama" className={`${styles.nav} rv`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <WhatsAppLink location="navbar" className="pill pill--sm">
            WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
