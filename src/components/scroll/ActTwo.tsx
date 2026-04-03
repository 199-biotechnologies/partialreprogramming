"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DnaStrand } from "@/components/svg/DnaStrand";

export function ActTwo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const stillExistsRef = useRef<HTMLSpanElement>(null);
  const dimImageRef = useRef<HTMLDivElement>(null);
  const clearImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const pinDuration = 1800;

        // Pin the section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          pin: true,
          pinSpacing: true,
        });

        // Master timeline for sequenced reveals
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${pinDuration}`,
            scrub: 1,
          },
        });

        // Label entrance
        const label = sectionRef.current!.querySelector(".act-label");
        if (label) {
          tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.1 }, 0);
        }

        // Headline entrance
        const headline = sectionRef.current!.querySelector(".act-headline");
        if (headline) {
          tl.fromTo(
            headline,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.15 },
            0.05
          );
        }

        // "still exists" text glow pulse
        if (stillExistsRef.current) {
          tl.fromTo(
            stillExistsRef.current,
            { textShadow: "0 0 0px transparent" },
            {
              textShadow:
                "0 0 30px rgba(191,111,74,0.4), 0 0 60px rgba(191,111,74,0.2)",
              duration: 0.2,
            },
            0.15
          );
        }

        // Body paragraphs
        const paras = sectionRef.current!.querySelectorAll(".reveal-para");
        paras.forEach((p, i) => {
          tl.fromTo(
            p,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.12 },
            0.2 + i * 0.12
          );
        });

        // Warm radial glow intensifies
        if (glowRef.current) {
          tl.fromTo(
            glowRef.current,
            { opacity: 0, scale: 0.6 },
            { opacity: 1, scale: 1.2, duration: 0.6 },
            0.1
          );
        }

        // Image transition: dim -> clear
        if (dimImageRef.current && clearImageRef.current) {
          tl.fromTo(
            dimImageRef.current,
            { opacity: 0.8 },
            { opacity: 0, duration: 0.3 },
            0.3
          );
          tl.fromTo(
            clearImageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 },
            0.35
          );
        }

        // DNA reveal with scale
        if (revealRef.current) {
          tl.fromTo(
            revealRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.2 },
            0.15
          );
        }

        // Key line — large, emotional entrance
        const keyLine = sectionRef.current!.querySelector(".key-line");
        if (keyLine) {
          tl.fromTo(
            keyLine,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.15 },
            0.55
          );
        }
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile: no pinning, simple scroll-triggered reveals
        const elements = sectionRef.current!.querySelectorAll(".act-label, .act-headline, .reveal-para, .key-line");
        elements.forEach((el, i) => {
          gsap.from(el, {
            y: 30, opacity: 0, duration: 0.8, delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          });
        });

        // DNA reveal
        if (revealRef.current) {
          gsap.from(revealRef.current, {
            opacity: 0, scale: 0.95, duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: revealRef.current, start: "top 85%", toggleActions: "play none none none" },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--cream)]"
    >
      <div className="flex min-h-[100dvh] items-center px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
          {/* Left: Image metaphor + DNA illustration */}
          <div className="relative order-2 flex items-center justify-center md:order-1">
            {/* Warm radial glow */}
            <div
              ref={glowRef}
              className="pointer-events-none absolute inset-0 opacity-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(191,111,74,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative w-full max-w-md">
              {/* Dim/noisy state — fades out */}
              <div
                ref={dimImageRef}
                className="absolute inset-0 flex items-center justify-center opacity-80"
              >
                <div className="relative h-64 w-full rounded-2xl border border-[var(--muted-light)] bg-[var(--cream-dark)] md:h-80">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
                    <div className="h-1 w-3/4 rounded bg-[var(--muted)] opacity-30" />
                    <div className="h-1 w-1/2 rounded bg-[var(--muted)] opacity-20" />
                    <div className="h-1 w-2/3 rounded bg-[var(--muted)] opacity-25" />
                    <div className="mt-4 h-1 w-3/4 rounded bg-[var(--muted)] opacity-30" />
                    <div className="h-1 w-1/3 rounded bg-[var(--muted)] opacity-15" />
                    <p className="mt-6 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--muted)] uppercase">
                      Corrupted epigenome
                    </p>
                  </div>
                  {/* Noise overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-[0.06] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />
                </div>
              </div>

              {/* Clear/bright state — fades in */}
              <div
                ref={clearImageRef}
                className="relative flex items-center justify-center opacity-0"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border-2 border-[var(--terracotta)]/20 bg-[var(--cream)] shadow-lg md:h-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DnaStrand mode="backup" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--cream)] to-transparent p-4">
                    <p className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--terracotta)] uppercase">
                      Original instructions intact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 md:order-2">
            <span className="act-label mb-6 block font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] text-[var(--terracotta)] uppercase opacity-0">
              Act II &mdash; The Revelation
            </span>

            <h2 className="act-headline font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight text-[var(--charcoal)] opacity-0 md:text-5xl lg:text-6xl">
              The backup copy{" "}
              <em>
                <span
                  ref={stillExistsRef}
                  className="text-[var(--terracotta)]"
                >
                  still exists.
                </span>
              </em>
            </h2>

            <p className="reveal-para mt-8 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl">
              Here&apos;s the remarkable part: beneath all that
              epigenetic noise, your cells still carry a{" "}
              <strong className="text-[var(--charcoal)]">complete&nbsp;copy</strong> of
              their youthful&nbsp;instructions.
            </p>

            <p className="reveal-para mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl">
              The original recording hasn&apos;t been destroyed.
              The DNA sequence &mdash; the hardware &mdash; is <em>largely intact</em>.
            </p>

            <p className="reveal-para mt-4 max-w-[42ch] text-lg leading-relaxed text-[var(--text-secondary)] opacity-0 md:text-xl">
              What&apos;s corrupted is the{" "}
              <strong className="text-[var(--charcoal)]">epigenetic software</strong> that
              tells each cell which genes to play and which to silence.
            </p>

            {/* Key emotional line — BIG */}
            <div className="key-line mt-12 opacity-0">
              <p className="max-w-[50ch] font-[family-name:var(--font-playfair)] text-3xl leading-snug text-[var(--charcoal)] md:text-4xl">
                Your cells haven&apos;t forgotten how to be young.
              </p>
              <p className="mt-3 max-w-[50ch] font-[family-name:var(--font-playfair)] text-3xl leading-snug md:text-4xl">
                <em className="text-[var(--terracotta)]">
                  They just can&apos;t read the instructions anymore.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
