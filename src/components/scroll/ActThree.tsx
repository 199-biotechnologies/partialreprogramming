"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DnaStrand } from "@/components/svg/DnaStrand";

export function ActThree() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1800",
        pin: true,
        pinSpacing: true,
      });

      const steps = sectionRef.current!.querySelectorAll(".mechanism-step");
      steps.forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          y: 40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${i * 450} top`,
            end: `top+=${i * 450 + 300} top`,
            scrub: true,
          },
        });
      });

      // Factor pulse animation
      const factors = sectionRef.current!.querySelectorAll(".factor-badge");
      factors.forEach((f, i) => {
        gsap.from(f, {
          scale: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${800 + i * 100} top`,
            end: `top+=${900 + i * 100} top`,
            scrub: true,
          },
        });
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
        {/* Text */}
        <div>
          <span className="mechanism-step mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
            Act III &mdash; The Mechanism
          </span>

          <h2 className="mechanism-step font-[family-name:var(--font-playfair)] text-4xl leading-[1.15] tracking-tight md:text-5xl">
            Polishing{" "}
            <em className="text-[var(--terracotta)]">the disc.</em>
          </h2>

          <p className="mechanism-step mt-6 max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            In 2006, Shinya Yamanaka discovered four proteins that can reset a
            cell&apos;s epigenetic state. They&apos;re called the{" "}
            <strong className="text-[var(--charcoal)]">
              Yamanaka factors
            </strong>
            :
          </p>

          {/* Factor badges */}
          <div className="mechanism-step mt-6 flex flex-wrap gap-3">
            {[
              { letter: "O", name: "Oct4", desc: "Master regulator" },
              { letter: "S", name: "Sox2", desc: "Stem cell maintenance" },
              { letter: "K", name: "Klf4", desc: "Cell identity" },
              { letter: "M", name: "c-Myc", desc: "Gene activator" },
            ].map((factor) => (
              <div
                key={factor.letter}
                className="factor-badge flex items-center gap-3 rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] px-4 py-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--terracotta)] font-[family-name:var(--font-jetbrains)] text-sm font-bold text-[var(--cream)]">
                  {factor.letter}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--charcoal)]">
                    {factor.name}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mechanism-step mt-8 max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            Applied continuously, these factors turn an adult cell all the way
            back into a stem cell &mdash; a{" "}
            <strong className="text-[var(--charcoal)]">factory reset</strong>{" "}
            that erases its identity.
          </p>

          <p className="mechanism-step mt-6 max-w-[45ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            But applied in short, controlled pulses? The cell gets{" "}
            <strong className="text-[var(--charcoal)]">younger</strong> while
            keeping its identity intact. A skin cell stays a skin cell. A neuron
            stays a neuron.{" "}
            <em className="text-[var(--terracotta)]">Just younger.</em>
          </p>

          {/* Reboot vs Reset visual */}
          <div className="mechanism-step mt-8 flex gap-4">
            <div className="rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] px-5 py-4 opacity-40">
              <p className="text-sm font-semibold text-[var(--muted)] line-through">
                Factory Reset
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Erases identity
              </p>
            </div>
            <div className="rounded-lg border-2 border-[var(--terracotta)] bg-[var(--cream)] px-5 py-4">
              <p className="text-sm font-semibold text-[var(--terracotta)]">
                Reboot
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Keeps identity, clears errors
              </p>
            </div>
          </div>
        </div>

        {/* Rejuvenation illustration */}
        <div className="flex items-center justify-center">
          <DnaStrand mode="rejuvenation" />
        </div>
      </div>
    </section>
  );
}
