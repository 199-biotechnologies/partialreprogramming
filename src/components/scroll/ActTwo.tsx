"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DnaStrand } from "@/components/svg/DnaStrand";

export function ActTwo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1200",
        pin: true,
        pinSpacing: true,
      });

      // Reveal text and illustration
      const elements = sectionRef.current!.querySelectorAll(".reveal-step");
      elements.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${i * 400} top`,
            end: `top+=${i * 400 + 300} top`,
            scrub: true,
          },
        });
      });

      // Glow effect on the backup copy
      if (revealRef.current) {
        gsap.from(revealRef.current, {
          opacity: 0,
          scale: 0.95,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top+=400 top",
            end: "top+=800 top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-[var(--cream)] px-6 py-20 md:px-10"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
        {/* Illustration - backup copy */}
        <div ref={revealRef} className="order-2 md:order-1 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[var(--terracotta)] opacity-[0.04] blur-3xl" />
            <DnaStrand mode="backup" />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <span className="reveal-step mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
            Act II &mdash; The Revelation
          </span>

          <h2 className="reveal-step font-[family-name:var(--font-playfair)] text-4xl leading-[1.15] tracking-tight md:text-5xl">
            The backup copy{" "}
            <em className="text-[var(--terracotta)]">still exists.</em>
          </h2>

          <p className="reveal-step mt-6 max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            Here&apos;s the remarkable thing: underneath all that epigenetic
            noise, your cells still hold a complete copy of their youthful
            instructions.
          </p>

          <p className="reveal-step mt-6 max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            The original recording hasn&apos;t been destroyed. The DNA sequence
            &mdash; the hardware &mdash; is largely intact. What&apos;s
            corrupted is the{" "}
            <strong className="text-[var(--charcoal)]">
              epigenetic software
            </strong>{" "}
            that tells each cell which genes to play and which to silence.
          </p>

          <p className="reveal-step mt-8 max-w-[45ch] font-[family-name:var(--font-playfair)] text-2xl leading-snug text-[var(--charcoal)]">
            Your cells haven&apos;t forgotten how to be young.
            <br />
            <em className="text-[var(--terracotta)]">
              They just can&apos;t read the instructions anymore.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
