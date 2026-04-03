"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: unknown = null;

export async function initSmoothScroll() {
  if (lenisInstance) return lenisInstance;

  try {
    const { default: Lenis } = await import("lenis");
    const lenis = new Lenis({ lerp: 0.1 });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    lenisInstance = lenis;
    return lenis;
  } catch {
    // Lenis failed to load — site works fine without smooth scroll
    console.warn("Lenis smooth scroll unavailable, falling back to native scroll");
    return null;
  }
}

export function destroySmoothScroll() {
  if (lenisInstance && typeof (lenisInstance as { destroy: () => void }).destroy === "function") {
    (lenisInstance as { destroy: () => void }).destroy();
    lenisInstance = null;
  }
}

export { gsap, ScrollTrigger };
