"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Waveform } from "@/components/svg/Waveform";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const fadeTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title entrance
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from(waveRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.9,
      });

      // Fade text appears as you scroll
      gsap.from(fadeTextRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: fadeTextRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        ease: "power2.out",
      });

      // Parallax on title
      gsap.to(titleRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden px-6 pt-32 pb-20 md:px-10"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
          <div>
            <h1
              ref={titleRef}
              className="font-[family-name:var(--font-playfair)] text-5xl leading-[1.1] tracking-tighter text-[var(--charcoal)] md:text-7xl lg:text-8xl"
            >
              Your body is
              <br />
              <em className="text-[var(--terracotta)]">playing a song.</em>
            </h1>
            <p
              ref={subtitleRef}
              className="mt-6 max-w-[50ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl"
            >
              Every one of your 37 trillion cells carries the complete
              instructions for life. A melody written in DNA, performed by the
              machinery of the cell.
            </p>
          </div>
          <div ref={waveRef}>
            <Waveform />
          </div>
        </div>

        <p
          ref={fadeTextRef}
          className="mx-auto mt-32 max-w-[55ch] text-center font-[family-name:var(--font-playfair)] text-2xl leading-snug text-[var(--text-secondary)] md:mt-48 md:text-3xl"
        >
          But over time, the music starts to{" "}
          <span className="text-[var(--terracotta)]">skip.</span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-[var(--muted)] uppercase">
            Scroll
          </span>
          <div className="h-8 w-px bg-[var(--muted)] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
