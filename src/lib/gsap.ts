"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis {
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    lerp: 0.1,
  });

  // Sync Lenis scroll position with ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // Drive Lenis from the GSAP ticker so it stays perfectly in sync
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  lenisInstance = lenis;
  return lenis;
}

export function destroySmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export { gsap, ScrollTrigger };
