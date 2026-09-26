"use client";

import Image from "next/image";
import { useState } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Studi kasus" },
  { href: "#proses", label: "Proses" },
  { href: "#tanya", label: "Tanya jawab" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#hero" className={styles.logo}>
          <Image src="/assets/logo-ink.png" alt="Studio Harel" width={1068} height={477} sizes="72px" loading="eager" />
        </a>
        <nav aria-label="Navigasi utama" className={styles.nav}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <WhatsAppLink location="navbar" className="btn btn--sm">
            Konsultasi
          </WhatsAppLink>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-hp"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav id="menu-hp" aria-label="Menu" className={styles.panel} data-open={open}>
        <ul className="container">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
