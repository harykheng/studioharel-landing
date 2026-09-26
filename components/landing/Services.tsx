"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { PRICE_FALLBACK, services } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import styles from "./Services.module.css";

export function Services() {
  const listRef = useRef<HTMLUListElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewImg = useRef<HTMLImageElement>(null);

  // Desktop only: a small preview of the service follows the cursor over closed rows.
  useEffect(() => {
    const list = listRef.current;
    const box = previewRef.current;
    const img = previewImg.current;
    if (!list || !box || !img || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0, active = false;

    const loop = () => {
      const k = still ? 1 : 0.18;
      x += (tx - x) * k;
      y += (ty - y) * k;
      const left = x + 24 + 280 > window.innerWidth ? x - 300 : x + 24;
      box.style.transform = `translate3d(${left}px, ${y - 90}px, 0)`;
      raf = active || Math.abs(tx - x) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    const heads = Array.from(list.querySelectorAll<HTMLElement>("summary[data-preview]"));
    const cleanups = heads.map((head) => {
      const enter = (e: MouseEvent) => {
        if ((head.parentElement as HTMLDetailsElement).open) return;
        img.src = head.dataset.preview ?? "";
        tx = e.clientX;
        ty = e.clientY;
        if (!active) {
          x = tx;
          y = ty;
        }
        active = true;
        box.dataset.on = "true";
        if (!raf) raf = requestAnimationFrame(loop);
      };
      const move = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if ((head.parentElement as HTMLDetailsElement).open) box.dataset.on = "false";
      };
      const leave = () => {
        active = false;
        box.dataset.on = "false";
      };
      head.addEventListener("mouseenter", enter);
      head.addEventListener("mousemove", move);
      head.addEventListener("mouseleave", leave);
      return () => {
        head.removeEventListener("mouseenter", enter);
        head.removeEventListener("mousemove", move);
        head.removeEventListener("mouseleave", leave);
      };
    });
    return () => {
      cleanups.forEach((c) => c());
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="layanan" className="section" aria-labelledby="layanan-title">
      <div className="container">
        <div className="section-head">
          <h2 id="layanan-title" className="h2">
            Layanan dan harga
          </h2>
          <p className="lead">
            Pilih yang paling dekat dengan kebutuhanmu. Estimasi waktu dan biaya kami kirim lewat WhatsApp, sebelum
            pengerjaan dimulai.
          </p>
        </div>
        <ul ref={listRef} className={styles.list}>
          {services.map((s, i) => (
            <li key={s.name}>
              <details
                className={styles.item}
                open={i === 0}
                onToggle={(e) => {
                  if (e.currentTarget.open) trackEvent("service_expand", { service: s.name });
                }}
              >
                <summary className={styles.head} data-preview={s.image?.src}>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.dots} aria-hidden="true" />
                  <span className={styles.price}>{s.price ? `Mulai ${s.price}` : PRICE_FALLBACK}</span>
                  <span className={styles.plus} aria-hidden="true" />
                </summary>
                <div className={styles.body}>
                  <div className={styles.text}>
                    <p>{s.summary}</p>
                    {s.examples.length > 0 && (
                      <p className={styles.examples}>
                        <span className="label">Contoh live</span>
                        {s.examples.map((d) => (
                          <TrackedLink
                            key={d.href}
                            href={d.href}
                            event="portfolio_demo_click"
                            params={{ project: d.project }}
                            className="text-link"
                          >
                            {d.label}
                          </TrackedLink>
                        ))}
                      </p>
                    )}
                    <WhatsAppLink
                      location="layanan"
                      params={{ service: s.name }}
                      message={`Halo Studio Harel, saya tertarik dengan layanan ${s.name}. Boleh minta estimasi waktu & biayanya?`}
                      className="btn btn--sm btn--light"
                    >
                      Tanya soal layanan ini
                    </WhatsAppLink>
                  </div>
                  {s.image && (
                    <Image
                      className={styles.thumb}
                      src={s.image.src}
                      alt={s.image.alt}
                      width={s.image.width}
                      height={s.image.height}
                      sizes="(max-width: 760px) 90vw, 420px"
                    />
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div ref={previewRef} className={styles.preview} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative preview whose src swaps on hover */}
        <img ref={previewImg} alt="" />
      </div>
    </section>
  );
}
