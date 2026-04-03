"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DnaStrand } from "@/components/svg/DnaStrand";

export function ActOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textPanelRef.current) return;

    const texts = textPanelRef.current.querySelectorAll(".step-text");

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${texts.length * 600}`,
        pin: true,
        pinSpacing: true,
      });

      // Step through text blocks
      texts.forEach((text, i) => {
        if (i === 0) return; // First is visible by default

        gsap.from(text, {
          opacity: 0,
          y: 30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${i * 600} top`,
            end: `top+=${i * 600 + 300} top`,
            scrub: true,
          },
        });

        // Hide previous
        if (i > 0) {
          gsap.to(texts[i - 1], {
            opacity: 0.2,
            y: -20,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 600} top`,
              end: `top+=${i * 600 + 200} top`,
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-[var(--cream-dark)] px-6 py-20 md:px-10"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
        {/* Pinned text */}
        <div ref={textPanelRef} className="relative">
          <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
            Act I &mdash; The Problem
          </span>

          <div className="step-text">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.15] tracking-tight md:text-5xl">
              This is <em className="text-[var(--terracotta)]">aging.</em>
            </h2>
            <p className="mt-6 max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
              Every cell accumulates chemical marks on its DNA over a
              lifetime. Like scratches on a vinyl record, these epigenetic
              changes make the music skip.
            </p>
          </div>

          <div className="step-text mt-8">
            <p className="max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
              These marks &mdash; called{" "}
              <strong className="text-[var(--charcoal)]">
                DNA methylation
              </strong>{" "}
              &mdash; accumulate at specific sites on your genome. They change
              which genes are active and which are silenced.
            </p>
          </div>

          <div className="step-text mt-8">
            <p className="max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
              Scientists can now measure this accumulation precisely. It&apos;s
              called the{" "}
              <strong className="text-[var(--charcoal)]">
                epigenetic clock
              </strong>
              &mdash;and it ticks in every cell of your body, tracking your
              biological age with remarkable accuracy.
            </p>
          </div>

          <div className="step-text mt-8">
            <p className="max-w-[45ch] font-[family-name:var(--font-playfair)] text-xl leading-snug text-[var(--charcoal)] italic">
              &ldquo;Aging is not the accumulation of damage to the hardware.
              It&apos;s corruption of the software.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              &mdash; David Sinclair, Harvard Medical School
            </p>
          </div>
        </div>

        {/* Animated DNA illustration */}
        <div className="flex items-center justify-center">
          <DnaStrand mode="aging" />
        </div>
      </div>
    </section>
  );
}
