"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSmoothScroll, destroySmoothScroll } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      initSmoothScroll();
    }, 50);

    return () => {
      clearTimeout(timer);
      destroySmoothScroll();
    };
  }, []);

  // Refresh ScrollTrigger and ensure visibility on route changes
  useEffect(() => {
    window.scrollTo(0, 0);

    // Kill stale ScrollTrigger instances from previous page
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Wait for new page content, then refresh
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);

      // Safety: ensure no elements are stuck at opacity:0
      // This catches any gsap.from() that set opacity:0 but whose
      // ScrollTrigger never fired (already scrolled past, timing issue)
      document.querySelectorAll("[style*='opacity: 0']").forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Only fix elements that look like GSAP set them invisible
        // (they'll have transform set too)
        if (htmlEl.style.transform || htmlEl.style.opacity === "0") {
          // Check if any ScrollTrigger is tracking this element
          const hasTrigger = ScrollTrigger.getAll().some(
            (st) => st.trigger === htmlEl || st.vars?.trigger === htmlEl
          );
          if (!hasTrigger) {
            htmlEl.style.opacity = "";
            htmlEl.style.transform = "";
          }
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
