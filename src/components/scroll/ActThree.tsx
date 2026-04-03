"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DnaStrand } from "@/components/svg/DnaStrand";

const factors = [
  { letter: "O", name: "Oct4", desc: "Master regulator of pluripotency" },
  { letter: "S", name: "Sox2", desc: "Stem cell maintenance" },
  { letter: "K", name: "Klf4", desc: "Cell identity gatekeeper" },
  { letter: "M", name: "c-Myc", desc: "Gene expression amplifier" },
];

export function ActThree() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const pinDuration = 2200;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          pin: true,
          pinSpacing: true,
        });

        // Master timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${pinDuration}`,
            scrub: 1,
          },
        });

        // Label + headline
        const label = sectionRef.current!.querySelector(".act-label");
        const headline = sectionRef.current!.querySelector(".act-headline");
        if (label) tl.fromTo(label, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.06 }, 0);
        if (headline) tl.fromTo(headline, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.08 }, 0.02);

        // Yamanaka intro text
        const introText = sectionRef.current!.querySelector(".intro-text");
        if (introText) {
          tl.fromTo(introText, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.08 }, 0.08);
        }

        // Factor badges — staggered pop-in with overshoot
        const badges = sectionRef.current!.querySelectorAll(".factor-badge");
        badges.forEach((badge, i) => {
          tl.fromTo(
            badge,
            { scale: 0, opacity: 0, rotation: -5 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.06,
              ease: "back.out(2.5)",
            },
            0.16 + i * 0.04
          );
        });

        // Continuous vs pulsed explanation
        const stepTexts = sectionRef.current!.querySelectorAll(".mech-step");
        stepTexts.forEach((st, i) => {
          tl.fromTo(st, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.08 }, 0.36 + i * 0.1);
        });

        // Pulse timeline visual
        const pulseViz = sectionRef.current!.querySelector(".pulse-viz");
        if (pulseViz) {
          tl.fromTo(pulseViz, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.08 }, 0.56);
        }

        // Reset vs Reboot cards
        const compCards = sectionRef.current!.querySelectorAll(".comp-card");
        compCards.forEach((card, i) => {
          tl.fromTo(
            card,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.08 },
            0.66 + i * 0.06
          );
        });

        // Before/after split
        const splitPanels = sectionRef.current!.querySelectorAll(".split-panel");
        splitPanels.forEach((panel, i) => {
          tl.fromTo(
            panel,
            { opacity: 0, x: i === 0 ? -30 : 30 },
            { opacity: 1, x: 0, duration: 0.08 },
            0.8 + i * 0.04
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile: no pinning, simple scroll-triggered reveals
        const elements = sectionRef.current!.querySelectorAll(".act-label, .act-headline, .intro-text, .factor-badge, .mech-step, .pulse-viz, .comp-card, .split-panel");
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
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--cream-dark)]"
    >
      <div className="flex min-h-[100dvh] items-start px-6 py-16 md:items-center md:px-10 md:py-0">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Header */}
          <span className="act-label mb-4 block font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] text-[var(--terracotta)] uppercase opacity-0">
            Act III &mdash; The Mechanism
          </span>
          <h2 className="act-headline font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight text-[var(--charcoal)] opacity-0 md:text-5xl lg:text-6xl">
            Polishing <em className="text-[var(--terracotta)]">the disc.</em>
          </h2>

          <div className="mt-10 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
            {/* Left column: text + badges + comparison */}
            <div>
              <p className="intro-text max-w-[48ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl">
                In 2006, <strong className="text-[var(--charcoal)]">Shinya Yamanaka</strong> discovered
                four proteins that can reset a cell&apos;s epigenetic state.
                They&apos;re called the <strong className="text-[var(--charcoal)]">Yamanaka factors</strong>:
              </p>

              {/* OSKM factor badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {factors.map((factor) => (
                  <div
                    key={factor.letter}
                    className="factor-badge flex items-center gap-3 rounded-xl border border-[var(--muted-light)] bg-[var(--cream)] px-3 py-2.5 md:px-5 md:py-4 opacity-0 shadow-sm"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--terracotta)] font-[family-name:var(--font-jetbrains)] text-base font-bold text-[var(--cream)]">
                      {factor.letter}
                    </span>
                    <div>
                      <p className="font-[family-name:var(--font-jetbrains)] text-sm font-semibold text-[var(--charcoal)]">
                        {factor.name}
                      </p>
                      <p className="text-xs text-[var(--muted)]">{factor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery methods */}
              <div className="mech-step mt-10 max-w-[48ch] opacity-0">
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] text-[var(--muted)] uppercase mb-3">
                  Delivery Methods
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--terracotta)]/10 font-[family-name:var(--font-jetbrains)] text-[10px] font-bold text-[var(--terracotta)]">1</span>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      <strong className="text-[var(--charcoal)]">Viral vectors (AAV)</strong> &mdash; inject genetic material directly. Used in the first human trial (ER-100).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--terracotta)]/10 font-[family-name:var(--font-jetbrains)] text-[10px] font-bold text-[var(--terracotta)]">2</span>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      <strong className="text-[var(--charcoal)]">mRNA cocktails</strong> &mdash; temporary, no permanent genetic changes. Developed by Turn Bio.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--terracotta)]/10 font-[family-name:var(--font-jetbrains)] text-[10px] font-bold text-[var(--terracotta)]">3</span>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      <strong className="text-[var(--charcoal)]">Chemical cocktails</strong> &mdash; small molecules, no genetic modification at all (Deng 2013, Yang 2023).
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanation steps */}
              <p className="mech-step mt-10 max-w-[48ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl">
                Applied <strong className="text-[var(--charcoal)]">continuously</strong>, these factors
                turn an adult cell all the way back into a stem cell &mdash; a{" "}
                <em>factory reset</em> that erases its identity.
              </p>

              <p className="mech-step mt-6 max-w-[48ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl">
                But applied in <strong className="text-[var(--charcoal)]">short, controlled pulses</strong>?
                The cell gets <strong className="text-[var(--terracotta)]">younger</strong> while
                keeping its identity intact. A skin cell stays a skin cell.
                A neuron stays a neuron.{" "}
                <em className="text-[var(--terracotta)]">Just younger.</em>
              </p>

              {/* Pulsed expression timeline visual */}
              <div className="pulse-viz mt-8 space-y-3 opacity-0">
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] text-[var(--muted)] uppercase">
                  Expression Pattern
                </p>

                {/* Continuous — solid bar */}
                <div className="flex items-center gap-3">
                  <span className="w-16 md:w-24 shrink-0 text-right font-[family-name:var(--font-jetbrains)] text-[10px] md:text-xs text-[var(--muted)] line-through">
                    Continuous
                  </span>
                  <div className="relative h-4 flex-1 rounded-sm bg-[var(--terracotta)] opacity-20">
                    <div className="absolute -right-2 -top-4 font-[family-name:var(--font-jetbrains)] text-[9px] text-[var(--muted)]">
                      Identity loss
                    </div>
                  </div>
                </div>

                {/* Pulsed — blocks with gaps */}
                <div className="flex items-center gap-3">
                  <span className="w-16 md:w-24 shrink-0 text-right font-[family-name:var(--font-jetbrains)] text-[10px] md:text-xs font-semibold text-[var(--terracotta)]">
                    Pulsed
                  </span>
                  <div className="flex flex-1 gap-1.5">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-4 flex-1 rounded-sm bg-[var(--terracotta)]"
                        style={{ opacity: i % 2 === 0 ? 0.85 : 0.08 }}
                      />
                    ))}
                    <div className="absolute -right-2 -top-4 font-[family-name:var(--font-jetbrains)] text-[9px] text-[var(--terracotta)]" />
                  </div>
                </div>

                <p className="ml-[4.5rem] md:ml-28 font-[family-name:var(--font-jetbrains)] text-[9px] text-[var(--terracotta)]">
                  Rejuvenation without identity loss
                </p>
              </div>

              {/* Factory Reset vs Reboot — larger, more prominent */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="comp-card rounded-xl border border-[var(--muted-light)] bg-[var(--cream)] p-6 opacity-0 opacity-60">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)] opacity-20">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4v12" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--muted)] line-through">
                    Factory Reset
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    Erases cell identity completely. The cell forgets
                    what it was.
                  </p>
                </div>

                <div className="comp-card rounded-xl border-2 border-[var(--terracotta)]/40 bg-[var(--cream)] p-6 opacity-0">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--terracotta)] opacity-10">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4a6 6 0 11-6 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M4 6V10H8" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--terracotta)]">
                    Reboot
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    Keeps identity. Clears epigenetic errors. The cell
                    remembers <em>what</em> it is, but forgets <em>how old</em>.
                  </p>
                </div>
              </div>
              {/* Safety note */}
              <div className="mech-step mt-8 max-w-[48ch] rounded-xl border border-[var(--muted-light)] bg-[var(--cream)] p-5 opacity-0">
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] text-[var(--terracotta)] uppercase mb-2">
                  Safety
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  The biggest concern? <strong className="text-[var(--charcoal)]">Cancer.</strong> The c-Myc
                  factor is a known oncogene. That&apos;s why the first human trial
                  (ER-100) uses only three factors &mdash; Oct4, Sox2, and Klf4
                  &mdash; with c-Myc deliberately excluded.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Expression is controlled by{" "}
                  <strong className="text-[var(--charcoal)]">doxycycline</strong>, an antibiotic
                  that acts as an on/off switch. Stop the doxycycline, stop
                  the reprogramming.
                </p>
              </div>
            </div>

            {/* Right column: Before/After split + DNA */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Before / After split */}
              <div className="grid w-full grid-cols-2 gap-3">
                <div className="split-panel rounded-xl border border-[var(--muted-light)] bg-[var(--cream)] p-4 text-center opacity-0">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-[var(--muted-light)] bg-[var(--cream-dark)]">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-2xl opacity-40">&#x1f9ec;</span>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--muted)] uppercase">
                    Before
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Aged cell
                  </p>
                </div>

                <div className="split-panel rounded-xl border-2 border-[var(--terracotta)]/30 bg-[var(--cream)] p-4 text-center opacity-0">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-[var(--terracotta)]/30 bg-[var(--cream)]">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-2xl">&#x1f9ec;</span>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--terracotta)] uppercase">
                    After
                  </p>
                  <p className="mt-1 text-xs text-[var(--terracotta)]">
                    Rejuvenated
                  </p>
                </div>
              </div>

              {/* DNA illustration */}
              <div className="h-[35vh] w-full md:h-[45vh]">
                <DnaStrand mode="rejuvenation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
