"use client";

import { useRef, useEffect, useMemo } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const frontiers = [
  {
    company: "Life Biosciences",
    status: "Phase I Trial",
    target: "Vision loss (glaucoma)",
    detail:
      "First FDA-cleared human trial of epigenetic reprogramming. The door is open.",
  },
  {
    company: "Retro Biosciences",
    status: "Clinical Stage",
    target: "Neurodegeneration",
    detail:
      "Autophagy-based rejuvenation therapy in human trials, targeting the aging brain.",
  },
  {
    company: "NewLimit",
    status: "Pre-Clinical",
    target: "Liver disease",
    detail:
      "Computational epigenetic reprogramming approaching the clinic with precision targeting.",
  },
  {
    company: "Altos Labs",
    status: "Research",
    target: "Whole-organ rejuvenation",
    detail:
      "Testing reprogramming on intact organs maintained outside the body. The most ambitious bet.",
  },
];

// Deterministic floating particle positions
function useParticles(count: number) {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 13) % 100}%`,
      size: 2 + (i % 3),
      delay: (i * 0.4) % 5,
      duration: 4 + (i % 4),
    }));
  }, [count]);
}

export function ActFive() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const particles = useParticles(30);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main headline — dramatic entrance
      const headline = sectionRef.current!.querySelector(".closing-headline");
      if (headline) {
        gsap.from(headline, {
          y: 80,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headline,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Company cards — staggered entrance
      const cards = sectionRef.current!.querySelectorAll(".frontier-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // "Call to wonder" text
      const wonder = sectionRef.current!.querySelector(".call-to-wonder");
      if (wonder) {
        gsap.from(wonder, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wonder,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Closing "if -> when" line — parallax float
      if (closingRef.current) {
        gsap.fromTo(
          closingRef.current,
          { y: 60, opacity: 0 },
          {
            y: -30,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: closingRef.current,
              start: "top 90%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      // Floating particles — gentle drift
      const particleEls = sectionRef.current!.querySelectorAll(".particle");
      particleEls.forEach((p) => {
        const el = p as HTMLElement;
        gsap.to(el, {
          y: -30 - Math.random() * 40,
          x: -10 + Math.random() * 20,
          opacity: 0.15 + Math.random() * 0.2,
          duration: parseFloat(el.dataset.duration || "5"),
          delay: parseFloat(el.dataset.delay || "0"),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Decorative background "2026" — slow parallax
      const bgYear = sectionRef.current!.querySelector(".bg-year");
      if (bgYear) {
        gsap.fromTo(
          bgYear,
          { y: 80 },
          {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--charcoal)] px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      {/* Floating particles — cellular activity */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle pointer-events-none absolute rounded-full bg-[var(--terracotta)] opacity-[0.06]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          data-delay={p.delay}
          data-duration={p.duration}
        />
      ))}

      {/* Large decorative "2026" in background */}
      <div className="bg-year pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center">
        <span
          className="font-[family-name:var(--font-jetbrains)] text-[20vw] font-bold leading-none text-[var(--cream)] opacity-[0.02]"
        >
          2026
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <span className="mb-8 block font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] text-[var(--terracotta)] uppercase">
          Act V &mdash; The Threshold
        </span>

        <h2 className="closing-headline max-w-[18ch] font-[family-name:var(--font-playfair)] text-5xl leading-[1.05] tracking-tight text-[var(--cream)] md:text-7xl lg:text-8xl">
          The first patients are{" "}
          <em className="text-[var(--terracotta)]">being treated now.</em>
        </h2>

        {/* Company cards — 2x2 grid */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:gap-6">
          {frontiers.map((f) => (
            <div
              key={f.company}
              className="frontier-card group relative overflow-hidden rounded-xl border border-[var(--cream)]/10 bg-[var(--charcoal)] p-6 transition-all duration-500 hover:border-[var(--terracotta)]/40 md:p-8"
            >
              {/* Gradient border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(191,111,74,0.08) 0%, transparent 50%, rgba(191,111,74,0.04) 100%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--cream)] md:text-2xl">
                      {f.company}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--cream)] opacity-50">
                      {f.target}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[var(--terracotta)]/30 bg-[var(--terracotta)]/5 px-3 py-1.5 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--terracotta)] uppercase">
                    {f.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--cream)] opacity-60">
                  {f.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to wonder */}
        <div className="call-to-wonder mt-24 border-t border-[var(--cream)]/10 pt-16">
          <p className="mx-auto max-w-[52ch] text-center text-lg leading-relaxed text-[var(--cream)] opacity-60 md:text-xl">
            For the first time in human history, we have the tools to ask
            whether the deep program of aging can be reversed &mdash; not
            someday, but <em className="text-[var(--cream)] opacity-100">now</em>.
          </p>
        </div>

        {/* Closing line — parallax float */}
        <div ref={closingRef} className="mt-20 md:mt-28">
          <p className="mx-auto max-w-[50ch] text-center font-[family-name:var(--font-playfair)] text-3xl leading-snug text-[var(--cream)] md:text-4xl lg:text-5xl">
            The question is no longer{" "}
            <em className="text-[var(--cream)] opacity-40">if</em> aging can
            be reversed.
          </p>
          <p className="mx-auto mt-4 max-w-[50ch] text-center font-[family-name:var(--font-playfair)] text-3xl leading-snug md:text-4xl lg:text-5xl">
            It&apos;s{" "}
            <em className="text-[var(--terracotta)]">when.</em>
          </p>
        </div>

        {/* Subtle closing line */}
        <div className="mt-24 flex justify-center">
          <div className="h-px w-24 bg-[var(--terracotta)] opacity-30" />
        </div>
      </div>
    </section>
  );
}
