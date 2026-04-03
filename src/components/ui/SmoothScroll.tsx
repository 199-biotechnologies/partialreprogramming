"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSmoothScroll, destroySmoothScroll } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let DOM settle before initializing smooth scroll
    const timer = setTimeout(() => {
      initSmoothScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      destroySmoothScroll();
    };
  }, []);

  // Refresh ScrollTrigger on route changes
  useEffect(() => {
    // Wait for page content to render, then refresh all triggers
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    // Scroll to top on navigation
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
