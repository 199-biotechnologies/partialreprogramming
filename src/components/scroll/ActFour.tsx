"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const milestones = [
  {
    year: "2006",
    title: "The Discovery",
    description:
      "Shinya Yamanaka identifies four transcription factors that can reprogram adult cells into stem cells.",
    detail: "Nobel Prize in Physiology or Medicine, 2012",
    highlight: false,
  },
  {
    year: "2016",
    title: "First Reversal in Mice",
    description:
      "Juan Carlos Izpisua Belmonte's lab at the Salk Institute shows that cyclic expression of Yamanaka factors extends lifespan in prematurely aging mice.",
    detail: "Ocampo et al., Cell",
    highlight: false,
  },
  {
    year: "2020",
    title: "Vision Restored",
    description:
      "David Sinclair's lab at Harvard uses three of the four factors (OSK) to restore vision in aged mice by resetting the epigenetic clock in retinal cells.",
    detail: "Lu et al., Nature",
    highlight: false,
  },
  {
    year: "2022",
    title: "Billions Pour In",
    description:
      "Altos Labs launches with $3 billion, recruiting Yamanaka himself. Retro Biosciences, NewLimit, and Turn Bio secure major funding. The race is on.",
    detail: "Largest biotech launch in history",
    highlight: false,
  },
  {
    year: "2025",
    title: "Memory Restored",
    description:
      "Partial reprogramming restores learning and memory in aged mice to youthful levels, demonstrating the brain is not beyond reach.",
    detail: "Published in Neuron",
    highlight: false,
  },
  {
    year: "2026",
    title: "First Human Trial",
    description:
      "Life Biosciences receives FDA clearance for the first human trial of epigenetic reprogramming, targeting vision loss from glaucoma.",
    detail: "ER-100, Phase I clinical trial",
    highlight: true,
  },
];

export function ActFour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header entrance
      const header = sectionRef.current!.querySelector(".section-header");
      if (header) {
        gsap.from(header, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Horizontal progress bar at the top
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1,
            },
          }
        );
      }

      // Timeline milestones — spring-like entrances
      const items = sectionRef.current!.querySelectorAll(".timeline-item");
      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Timeline line fill
      const lineFill = sectionRef.current!.querySelector(".timeline-line-fill");
      if (lineFill) {
        gsap.fromTo(
          lineFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1,
            },
          }
        );
      }

      // 2026 highlight card — special glow pulse
      const highlightCard = sectionRef.current!.querySelector(".highlight-card");
      if (highlightCard) {
        gsap.from(highlightCard, {
          boxShadow: "0 0 0px rgba(191,111,74,0)",
          scrollTrigger: {
            trigger: highlightCard,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
        // Pulsing glow after entrance
        gsap.to(highlightCard, {
          boxShadow:
            "0 0 40px rgba(191,111,74,0.15), 0 0 80px rgba(191,111,74,0.08)",
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1,
          scrollTrigger: {
            trigger: highlightCard,
            start: "top 80%",
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
      className="relative bg-[var(--cream)] px-6 py-24 md:px-10 md:py-32"
    >
      {/* Horizontal progress bar */}
      <div className="fixed left-0 top-0 z-50 h-[2px] w-full">
        <div
          ref={progressRef}
          className="h-full origin-left bg-[var(--terracotta)]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="section-header mb-20">
          <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] text-[var(--terracotta)] uppercase">
            Act IV &mdash; The Proof
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight text-[var(--charcoal)] md:text-5xl lg:text-6xl">
            It <em className="text-[var(--terracotta)]">works.</em>
          </h2>
          <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
            Two decades of accelerating breakthroughs. From a laboratory
            curiosity to the <strong className="text-[var(--charcoal)]">first human trials</strong>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--muted-light)] md:left-1/2 md:-translate-x-1/2">
            <div className="timeline-line-fill absolute inset-0 w-full bg-[var(--terracotta)] opacity-60" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`timeline-item relative pl-16 md:w-[48%] md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-20 md:text-right"
                    : "md:ml-auto md:pl-20"
                }`}
              >
                {/* Connecting dot on the line */}
                <div
                  className={`absolute top-4 left-4 h-4 w-4 rounded-full border-2 md:left-auto ${
                    m.highlight
                      ? "border-[var(--terracotta)] bg-[var(--terracotta)]"
                      : "border-[var(--terracotta)] bg-[var(--cream)]"
                  } ${
                    i % 2 === 0
                      ? "md:right-[-8px] md:left-auto"
                      : "md:left-[-8px]"
                  }`}
                />

                {/* Decorative connector line from dot to card */}
                <div
                  className={`absolute top-[18px] hidden h-px bg-[var(--terracotta)] opacity-20 md:block ${
                    i % 2 === 0
                      ? "right-0 w-16"
                      : "left-0 w-16"
                  }`}
                />

                {/* Content card */}
                <div
                  className={`${
                    m.highlight
                      ? "highlight-card rounded-2xl border-2 border-[var(--terracotta)]/30 bg-[var(--cream)] p-6 shadow-md md:p-8"
                      : ""
                  }`}
                >
                  {/* Year — BIG */}
                  <span className="block font-[family-name:var(--font-jetbrains)] text-5xl font-bold tabular-nums text-[var(--terracotta)] md:text-6xl lg:text-7xl">
                    {m.year}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl text-[var(--charcoal)] md:text-3xl">
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                    {m.description}
                  </p>

                  {/* Detail tag */}
                  <p className="mt-3 font-[family-name:var(--font-jetbrains)] text-xs tracking-wide text-[var(--muted)]">
                    {m.detail}
                  </p>

                  {/* Special badge for 2026 */}
                  {m.highlight && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--terracotta)]/30 bg-[var(--terracotta)]/5 px-4 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-[var(--terracotta)] animate-pulse" />
                      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--terracotta)] uppercase">
                        Happening now
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
