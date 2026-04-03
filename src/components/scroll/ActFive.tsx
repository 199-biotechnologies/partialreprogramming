"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const frontiers = [
  {
    company: "Life Biosciences",
    status: "Phase I Trial",
    target: "Vision loss (glaucoma)",
    detail: "First FDA-cleared human trial of epigenetic reprogramming",
  },
  {
    company: "Retro Biosciences",
    status: "Clinical Stage",
    target: "Neurodegeneration",
    detail: "Autophagy-based rejuvenation therapy in human trials",
  },
  {
    company: "NewLimit",
    status: "Pre-Clinical",
    target: "Liver disease",
    detail: "Computational epigenetic reprogramming approaching clinic",
  },
  {
    company: "Altos Labs",
    status: "Research",
    target: "Whole-organ rejuvenation",
    detail: "Testing reprogramming on organs maintained outside the body",
  },
];

export function ActFive() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main statement floats up
      const headline = sectionRef.current!.querySelector(".closing-headline");
      if (headline) {
        gsap.from(headline, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headline,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Cards stagger in
      const cards = sectionRef.current!.querySelectorAll(".frontier-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Closing line
      const closing = sectionRef.current!.querySelector(".closing-line");
      if (closing) {
        gsap.from(closing, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closing,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--charcoal)] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <span className="mb-6 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
          Act V &mdash; The Threshold
        </span>

        <h2 className="closing-headline font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight text-[var(--cream)] md:text-6xl lg:text-7xl">
          The first patients are
          <br />
          <em className="text-[var(--terracotta)]">being treated now.</em>
        </h2>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:gap-6">
          {frontiers.map((f) => (
            <div
              key={f.company}
              className="frontier-card rounded-lg border border-[var(--text-secondary)]/20 bg-[var(--charcoal)] p-6 transition-colors hover:border-[var(--terracotta)]/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--cream)]">
                    {f.company}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {f.target}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--terracotta)]/30 px-3 py-1 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--terracotta)]">
                  {f.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {f.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="closing-line mx-auto mt-20 max-w-[50ch] text-center font-[family-name:var(--font-playfair)] text-2xl leading-snug text-[var(--cream)] md:text-3xl">
          The question is no longer{" "}
          <em className="text-[var(--muted)]">if</em> aging can be reversed.
          <br />
          It&apos;s{" "}
          <em className="text-[var(--terracotta)]">when.</em>
        </p>
      </div>
    </section>
  );
}
