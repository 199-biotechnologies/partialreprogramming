"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DnaStrand } from "@/components/svg/DnaStrand";

export function ActOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const ageCounterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textPanelRef.current) return;

    const steps = textPanelRef.current.querySelectorAll(".step-text");

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const pinDuration = steps.length * 700;

        // Pin the section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          pin: true,
          pinSpacing: true,
        });

        // Background color transition: cream -> cream-dark
        if (bgRef.current) {
          gsap.fromTo(
            bgRef.current,
            { backgroundColor: "var(--cream)" },
            {
              backgroundColor: "var(--cream-dark)",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${pinDuration}`,
                scrub: 1,
              },
            }
          );
        }

        // Biological age counter — ticks up as you scroll through
        if (ageCounterRef.current) {
          const counter = { val: 20 };
          gsap.to(counter, {
            val: 80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${pinDuration}`,
              scrub: 1,
              onUpdate: () => {
                if (ageCounterRef.current) {
                  ageCounterRef.current.textContent = Math.round(counter.val).toString();
                }
              },
            },
          });
        }

        // Text crossfade: pure opacity transitions, no translate
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${pinDuration}`,
            scrub: 1,
          },
        });

        steps.forEach((step, i) => {
          if (i === 0) {
            tl.to(step, { opacity: 0, duration: 0.3 }, i * 1);
          } else if (i < steps.length - 1) {
            tl.fromTo(
              step,
              { opacity: 0 },
              { opacity: 1, duration: 0.3 },
              (i - 1) * 1 + 0.3
            );
            tl.to(step, { opacity: 0, duration: 0.3 }, i * 1);
          } else {
            tl.fromTo(
              step,
              { opacity: 0 },
              { opacity: 1, duration: 0.3 },
              (i - 1) * 1 + 0.3
            );
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile: no pinning, simple scroll-triggered reveals
        const elements = sectionRef.current!.querySelectorAll(".step-text, [class*='reveal']");
        elements.forEach((el, i) => {
          gsap.from(el, {
            y: 30, opacity: 0, duration: 0.8, delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      {/* Animated background layer */}
      <div ref={bgRef} className="absolute inset-0 bg-[var(--cream)]" />

      <div className="relative z-10 flex min-h-[100dvh] items-center px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          {/* Pinned text panel */}
          <div ref={textPanelRef} className="relative">
            <span className="mb-6 block font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] text-[var(--terracotta)] uppercase">
              Act I &mdash; The Problem
            </span>

            {/* Stacked text steps — only one visible at a time */}
            <div className="md:relative md:min-h-[320px]">
              {/* Step 1: headline */}
              <div className="step-text md:absolute md:inset-0">
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight text-[var(--charcoal)] md:text-5xl lg:text-6xl">
                  This is <em className="text-[var(--terracotta)]">aging.</em>
                </h2>
                <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  Every cell accumulates chemical marks on its DNA over a
                  lifetime. Like scratches on a vinyl record, these{" "}
                  <strong className="text-[var(--charcoal)]">epigenetic changes</strong> make
                  the music skip.
                </p>
              </div>

              {/* Step 2: methylation */}
              <div className="step-text mt-8 md:mt-0 md:absolute md:inset-0 opacity-0 md:opacity-0">
                <p className="max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  These marks &mdash; called{" "}
                  <strong className="text-[var(--charcoal)]">DNA methylation</strong>{" "}
                  &mdash; accumulate at specific sites on your genome.
                </p>
                <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  They change which genes are <em>active</em> and which
                  are <em>silenced</em>.
                </p>
              </div>

              {/* Step 3: Waddington landscape */}
              <div className="step-text mt-8 md:mt-0 md:absolute md:inset-0 opacity-0 md:opacity-0">
                <p className="max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  Biologists visualize this through something called the{" "}
                  <strong className="text-[var(--charcoal)]">Waddington landscape</strong>{" "}
                  &mdash; imagine a ball rolling downhill into valleys. Each valley
                  is a cell type: skin, muscle, neuron.
                </p>
                <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  As cells age, the valleys erode. The landscape flattens.
                  Cells begin to <em>lose their identity</em>.
                </p>
              </div>

              {/* Step 4: epigenetic clock */}
              <div className="step-text mt-8 md:mt-0 md:absolute md:inset-0 opacity-0 md:opacity-0">
                <p className="max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  Scientists can now measure this accumulation precisely.
                  It&apos;s called the{" "}
                  <strong className="text-[var(--charcoal)]">epigenetic clock</strong>
                  &mdash;and it ticks in every cell of your body.
                </p>
                <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                  Tracking your <strong className="text-[var(--charcoal)]">biological age</strong> with
                  remarkable accuracy.
                </p>
              </div>

              {/* Step 5: the pull-quote */}
              <div className="step-text mt-8 md:mt-0 md:absolute md:inset-0 flex items-center opacity-0 md:opacity-0">
                <div>
                  <blockquote className="max-w-[50ch] font-[family-name:var(--font-playfair)] text-3xl leading-snug text-[var(--charcoal)] italic md:text-4xl lg:text-5xl">
                    &ldquo;Aging is not the accumulation of damage
                    to the hardware. It&apos;s <span className="text-[var(--terracotta)]">corruption
                    of the software.</span>&rdquo;
                  </blockquote>
                  <p className="mt-6 font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--muted)] uppercase">
                    &mdash; David Sinclair, Harvard Medical School
                  </p>
                  <p className="mt-4 max-w-[50ch] text-sm leading-relaxed text-[var(--muted)]">
                    In 2023, Sinclair&apos;s team published the Information Theory of
                    Aging in <em>Nature Aging</em>, arguing that aging is primarily
                    driven by epigenetic information loss &mdash; not DNA mutations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: DNA illustration + age counter */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Biological age counter */}
            <div className="mb-8 text-center">
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase">
                Biological Age
              </span>
              <div className="mt-1 flex items-baseline justify-center gap-1">
                <span
                  ref={ageCounterRef}
                  className="font-[family-name:var(--font-jetbrains)] text-5xl font-bold tabular-nums text-[var(--terracotta)] md:text-6xl lg:text-7xl"
                >
                  20
                </span>
                <span className="font-[family-name:var(--font-jetbrains)] text-sm text-[var(--muted)]">
                  years
                </span>
              </div>
            </div>

            {/* DNA strand — full height */}
            <div className="h-[50vh] w-full md:h-[60vh]">
              <DnaStrand mode="aging" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
