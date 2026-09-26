"use client";

import { useEffect, useRef } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./MobileCta.module.css";

/**
 * Phones only: a WhatsApp button pinned to the bottom of the screen, shown
 * between the hero and the contact section (both have their own button).
 */
export function MobileCta() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    const hero = document.getElementById("hero");
    const end = document.getElementById("kontak");
    if (!bar || !hero || !end) return;
    let heroVisible = true;
    let endReached = false;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroVisible = e.isIntersecting;
        else endReached = e.isIntersecting || e.boundingClientRect.top < 0;
      }
      bar.dataset.show = String(!heroVisible && !endReached);
    });
    io.observe(hero);
    io.observe(end);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.bar} data-show="false">
      <WhatsAppLink location="mobile_bar" className={`pill ${styles.btn}`}>
        Konsultasi via WhatsApp
      </WhatsAppLink>
    </div>
  );
}
