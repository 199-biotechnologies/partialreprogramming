"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Waveform } from "@/components/svg/Waveform";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const fadeTextRef = useRef<HTMLParagraphElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animated gradient background shift on scroll
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          backgroundPosition: "100% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Title Line 1 — clip-path reveal from left
      if (titleLine1Ref.current) {
        gsap.fromTo(
          titleLine1Ref.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.6,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      // Title Line 2 — clip-path reveal from left, staggered
      if (titleLine2Ref.current) {
        gsap.fromTo(
          titleLine2Ref.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.6,
            ease: "power3.out",
            delay: 0.7,
          }
        );
      }

      // Subtitle — fade up
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 1.1,
        }
      );

      // Decorative rule — width expansion
      if (ruleRef.current) {
        gsap.fromTo(
          ruleRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.out",
            delay: 1.4,
          }
        );
      }

      // Waveform — full width entrance with fade
      gsap.fromTo(
        waveRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 1.0,
        }
      );

      // Scroll indicator — continuous bounce
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 2.0 }
        );
        gsap.to(scrollIndicatorRef.current.querySelector(".bounce-line"), {
          y: 8,
          duration: 1.2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // "But over time..." text appears as you scroll
      gsap.fromTo(
        fadeTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: fadeTextRef.current,
            start: "top 85%",
            end: "top 65%",
            scrub: 1,
          },
          ease: "power2.out",
        }
      );

      // Parallax on title — drifts upward as you scroll away
      gsap.to(titleRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Waveform parallax — moves slower than title for depth
      gsap.to(waveRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--cream) 0%, var(--cream-dark) 40%, var(--cream) 70%, var(--cream-dark) 100%)",
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 0%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 pt-32 pb-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          {/* Title block */}
          <div ref={titleRef}>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl leading-[1.05] tracking-tighter text-[var(--charcoal)] md:text-8xl lg:text-9xl">
              <span ref={titleLine1Ref} className="block">
                Your body is
              </span>
              <span ref={titleLine2Ref} className="block">
                <em className="text-[var(--terracotta)]">playing a song.</em>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="mt-8 max-w-[48ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl lg:text-2xl"
            >
              Every one of your <strong className="text-[var(--charcoal)]">37 trillion cells</strong> carries
              the complete instructions for life. A melody written in DNA,
              performed by the machinery of the cell.
            </p>
          </div>

          {/* Decorative horizontal rule */}
          <div
            ref={ruleRef}
            className="my-16 h-px w-full origin-left bg-[var(--muted)] opacity-30 md:my-24"
          />

          {/* Full-width waveform — breaks out of the container */}
        </div>

        <div ref={waveRef} className="w-full opacity-0">
          <Waveform />
        </div>

        <div className="mx-auto max-w-[1400px]">
          <p
            ref={fadeTextRef}
            className="mx-auto mt-24 max-w-[55ch] text-center font-[family-name:var(--font-playfair)] text-3xl leading-snug text-[var(--text-secondary)] md:mt-32 md:text-4xl lg:text-5xl"
          >
            But over time, the music starts to{" "}
            <span className="text-[var(--terracotta)]">skip.</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase">
            Scroll to begin
          </span>
          <div className="bounce-line h-10 w-px bg-[var(--terracotta)] opacity-50" />
        </div>
      </div>
    </section>
  );
}
