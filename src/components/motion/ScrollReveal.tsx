"use client";

import { useRef, useEffect } from "react";
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

function getFromProps(variant: Variant, y: number) {
  switch (variant) {
    case "fade-left":
      return { x: -40, opacity: 0 };
    case "fade-right":
      return { x: 40, opacity: 0 };
    case "scale-in":
      return { scale: 0.95, opacity: 0 };
    case "fade-up":
    default:
      return { y, opacity: 0 };
  }
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  variant = "fade-up",
  stagger,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const fromProps = getFromProps(variant, y);

    // Use IntersectionObserver — reliable, no GSAP dependency for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger && stagger > 0) {
              // Stagger children
              const kids = Array.from(el.children);
              kids.forEach((child, i) => {
                gsap.fromTo(
                  child,
                  { ...fromProps },
                  {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    delay: delay + i * stagger,
                    ease: "power3.out",
                  }
                );
              });
            } else {
              gsap.fromTo(
                el,
                { ...fromProps },
                {
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  duration: 0.9,
                  delay,
                  ease: "power3.out",
                }
              );
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y, variant, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
