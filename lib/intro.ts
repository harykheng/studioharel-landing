/**
 * Brand intro shown before the page appears, once per browser.
 * - "short": the logo draws itself, then shrinks into the header logo (about 1 second).
 * - "full": the logo stays for 2 seconds, then lifts like a curtain.
 * - "off": no intro.
 * Add ?intro (or ?intro=short / ?intro=full) to the URL to play it again.
 */
export const INTRO_MODE: "short" | "full" | "off" = "short";

// Inlined at the top of <body> so it runs before anything paints: it decides
// whether this visit gets the intro and marks <html> so CSS can cover the page.
// Without JavaScript, or with reduced motion, nothing is marked and the page shows as normal.
export const introScript = `(function (defaultMode) {
  try {
    var root = document.documentElement;
    var asked = new URLSearchParams(location.search).get("intro");
    var mode = asked === "short" || asked === "full" ? asked : defaultMode;
    if (mode === "off" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (asked === null && localStorage.getItem("sh-intro")) return;
    localStorage.setItem("sh-intro", "1");
    root.dataset.intro = mode;
    window.__shIntro = performance.now();
  } catch (e) {}
})(${JSON.stringify(INTRO_MODE)});`;
