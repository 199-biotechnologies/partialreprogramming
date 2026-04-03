"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const milestones = [
  {
    year: "2006",
    title: "The Discovery",
    description:
      "Shinya Yamanaka identifies four transcription factors that can reprogram adult cells into stem cells. A revolution begins.",
    detail: "Nobel Prize in Physiology or Medicine, 2012",
  },
  {
    year: "2016",
    title: "First Reversal in Mice",
    description:
      "Juan Carlos Izpisua Belmonte's lab at the Salk Institute shows that cyclic expression of Yamanaka factors extends lifespan in prematurely aging mice.",
    detail: "Ocampo et al., Cell",
  },
  {
    year: "2020",
    title: "Vision Restored",
    description:
      "David Sinclair's lab at Harvard uses three of the four factors (OSK) to restore vision in aged mice by resetting the epigenetic clock in retinal cells.",
    detail: "Lu et al., Nature",
  },
  {
    year: "2022",
    title: "Billions Pour In",
    description:
      "Altos Labs launches with $3 billion, recruiting Yamanaka himself. Retro Biosciences, NewLimit, and Turn Bio secure major funding. The race is on.",
    detail: "Largest biotech launch in history",
  },
  {
    year: "2025",
    title: "Memory Restored",
    description:
      "Partial reprogramming restores learning and memory in aged mice to youthful levels, demonstrating the brain is not beyond reach.",
    detail: "Published in Neuron",
  },
  {
    year: "2026",
    title: "First Human Trial",
    description:
      "Life Biosciences receives FDA clearance for the first human trial of epigenetic reprogramming, targeting vision loss from glaucoma.",
    detail: "ER-100, Phase I clinical trial",
  },
];

export function ActFour() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll(".timeline-item");

      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        });
      });

      // Animate the timeline line growing
      const line = sectionRef.current!.querySelector(".timeline-line-fill");
      if (line) {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--cream)] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
          Act IV &mdash; The Proof
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.15] tracking-tight md:text-5xl">
          It <em className="text-[var(--terracotta)]">works.</em>
        </h2>
        <p className="mt-4 max-w-[55ch] text-lg text-[var(--text-secondary)]">
          Two decades of accelerating breakthroughs, from a laboratory
          curiosity to the first human trials.
        </p>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--muted-light)] md:left-1/2 md:-translate-x-1/2">
            <div className="timeline-line-fill absolute inset-0 w-full bg-[var(--terracotta)]" />
          </div>

          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`timeline-item relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:ml-auto md:pl-16"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-[var(--terracotta)] bg-[var(--cream)] md:left-auto ${
                    i % 2 === 0
                      ? "md:right-[-6.5px] md:left-auto"
                      : "md:left-[-6.5px]"
                  }`}
                />

                <span className="block font-[family-name:var(--font-jetbrains)] text-2xl font-bold text-[var(--terracotta)]">
                  {m.year}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-xl text-[var(--charcoal)]">
                  {m.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                  {m.description}
                </p>
                <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)]">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
