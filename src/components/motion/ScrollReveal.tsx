"use client";

import { useRef, useEffect, Children, cloneElement, isValidElement } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Variant = "fade-up" | "fade-left" | "fade-right" | "scale-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: Variant;
  stagger?: number;
  as?: React.ElementType;
}

function getVariantProps(variant: Variant, y: number) {
  switch (variant) {
    case "fade-left":
      return { x: -60, opacity: 0 };
    case "fade-right":
      return { x: 60, opacity: 0 };
    case "scale-in":
      return { scale: 0.9, opacity: 0 };
    case "fade-up":
    default:
      return { y, opacity: 0 };
  }
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  variant = "fade-up",
  stagger,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const fromProps = getVariantProps(variant, y);

    // Check if GSAP ScrollTrigger is available
    const hasScrollTrigger =
      typeof ScrollTrigger !== "undefined" && ScrollTrigger.getAll;

    if (stagger && stagger > 0) {
      // Stagger mode: animate direct children sequentially
      const childElements = ref.current.children;
      if (childElements.length === 0) return;

      if (hasScrollTrigger) {
        const ctx = gsap.context(() => {
          gsap.from(Array.from(childElements), {
            ...fromProps,
            duration: 0.8,
            delay,
            stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
        return () => ctx.revert();
      } else {
        // IntersectionObserver fallback for stagger
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                Array.from(childElements).forEach((child, i) => {
                  const el = child as HTMLElement;
                  el.style.transition = `opacity 0.8s ease ${delay + i * stagger}s, transform 0.8s ease ${delay + i * stagger}s`;
                  el.style.opacity = "1";
                  el.style.transform = "none";
                });
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );
        // Set initial hidden state
        Array.from(childElements).forEach((child) => {
          const el = child as HTMLElement;
          el.style.opacity = "0";
          if (variant === "fade-left") el.style.transform = "translateX(-60px)";
          else if (variant === "fade-right")
            el.style.transform = "translateX(60px)";
          else if (variant === "scale-in") el.style.transform = "scale(0.9)";
          else el.style.transform = `translateY(${y}px)`;
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
      }
    } else {
      // Single element mode
      if (hasScrollTrigger) {
        const ctx = gsap.context(() => {
          gsap.from(ref.current, {
            ...fromProps,
            duration: 1,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
        return () => ctx.revert();
      } else {
        // IntersectionObserver fallback
        const el = ref.current;
        el.style.opacity = "0";
        if (variant === "fade-left") el.style.transform = "translateX(-60px)";
        else if (variant === "fade-right")
          el.style.transform = "translateX(60px)";
        else if (variant === "scale-in") el.style.transform = "scale(0.9)";
        else el.style.transform = `translateY(${y}px)`;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.style.transition = `opacity 1s ease ${delay}s, transform 1s ease ${delay}s`;
                el.style.opacity = "1";
                el.style.transform = "none";
                observer.unobserve(el);
              }
            });
          },
          { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
      }
    }
  }, [delay, y, variant, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
