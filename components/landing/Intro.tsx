"use client";

import { useEffect, useRef } from "react";
import { Logo } from "./Logo";
import styles from "./Intro.module.css";

type IntroWindow = Window & { __shIntro?: number };

/**
 * Full-screen logo shown before the page appears. It only shows when the inline
 * script from lib/intro.ts marked <html> with data-intro (first visit, motion
 * allowed); this component then runs the timeline. Any tap, key or scroll skips it.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const mode = root.dataset.intro;
    const intro = ref.current;
    const logo = logoRef.current;
    const brand = document.querySelector<HTMLElement>("[data-brand]");
    if (!mode || !intro || !logo || !brand) return;

    const start = (window as IntroWindow).__shIntro ?? performance.now();
    const timers: number[] = [];
    const anims: Animation[] = [];
    // `at` counts from when the intro first painted, `after` from now
    const at = (ms: number, fn: () => void) =>
      timers.push(window.setTimeout(fn, Math.max(0, ms - (performance.now() - start))));
    const after = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    const events = ["pointerdown", "keydown", "wheel", "touchmove"] as const;
    let active = true;

    const reveal = () => {
      root.dataset.reveal = "";
    };

    const land = () => {
      active = false;
      events.forEach((t) => window.removeEventListener(t, skip));
      root.dataset.landed = "";
      anims.forEach((a) => a.cancel());
      // keep the reveal transitions running, then drop the intro state
      after(1500, () => {
        delete root.dataset.intro;
        delete root.dataset.reveal;
        delete root.dataset.landed;
      });
    };

    // short: the big logo shrinks into the header logo while the page arrives
    const fly = () => {
      const a = logo.getBoundingClientRect();
      const b = brand.getBoundingClientRect();
      const dx = b.left + b.width / 2 - (a.left + a.width / 2);
      const dy = b.top + b.height / 2 - (a.top + a.height / 2);
      anims.push(
        logo.animate([{ transform: "none" }, { transform: `translate(${dx}px, ${dy}px) scale(${b.width / a.width})` }], {
          duration: 600,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards",
        }),
        intro.animate([{ backgroundColor: getComputedStyle(intro).backgroundColor }, { backgroundColor: "transparent" }], {
          duration: 420,
          easing: "ease-out",
          fill: "forwards",
        }),
      );
      const hint = intro.querySelector("p");
      if (hint) anims.push(hint.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards" }));
      after(220, reveal);
      after(650, land);
    };

    // full: the logo holds for two seconds, then lifts like a curtain
    const lift = () => {
      intro.classList.add(styles.lifting);
      anims.push(
        intro.animate([{ transform: "none" }, { transform: "translateY(-100%)" }], {
          duration: 700,
          easing: "cubic-bezier(.76,0,.24,1)",
          fill: "forwards",
        }),
      );
      after(120, reveal);
      after(750, land);
    };

    const skip = () => {
      if (!active) return;
      active = false;
      timers.forEach(clearTimeout);
      reveal();
      anims.push(intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: "forwards" }));
      after(240, land);
    };

    events.forEach((t) => window.addEventListener(t, skip, { passive: true }));
    if (mode === "full") at(2000, lift);
    else at(750, fly);

    return () => {
      events.forEach((t) => window.removeEventListener(t, skip));
      timers.forEach(clearTimeout);
      anims.forEach((a) => a.cancel());
    };
  }, []);

  return (
    <div ref={ref} className={styles.intro} aria-hidden="true">
      <div className={styles.stage}>
        <div ref={logoRef} className={styles.logo}>
          <Logo draw eager sizes="(max-width: 730px) 54vw, 390px" />
        </div>
        <div className={styles.bar}>
          <i />
        </div>
      </div>
      <p className={styles.hint}>Ketuk untuk lewati</p>
    </div>
  );
}
