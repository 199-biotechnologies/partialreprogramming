"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { papers, categories, eras, type CategoryKey } from "@/lib/papers";

/* ─── Stats ──────────────────────────────────────────────── */

const stats = [
  { number: "42", label: "Landmark papers" },
  { number: "12", label: "Categories" },
  { number: "20+", label: "Years of research" },
  { number: "2026", label: "First human trial" },
];

/* ─── Organism Badge ───────────────────────────────────── */

function OrganismBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    Mouse:
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Mouse (progeria)":
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Mouse (progeria & WT)":
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Mouse (eye)":
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Mouse (brain)":
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Mouse (heart)":
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Mouse (Alzheimer's)":
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Human cells":
      "bg-[var(--charcoal)]/10 text-[var(--charcoal)] border border-[var(--charcoal)]/15",
    "Human cells + C. elegans":
      "bg-[var(--charcoal)]/10 text-[var(--charcoal)] border border-[var(--charcoal)]/15",
    Human:
      "bg-[var(--terracotta)] text-white border border-[var(--terracotta)]",
    "Human + Mouse":
      "bg-[var(--charcoal)]/10 text-[var(--charcoal)] border border-[var(--charcoal)]/15",
    "Non-human primate":
      "bg-[var(--terracotta-dark)]/15 text-[var(--terracotta-dark)] border border-[var(--terracotta-dark)]/20",
    Frog: "bg-[var(--muted)]/15 text-[var(--text-secondary)] border border-[var(--muted)]/20",
    Review:
      "bg-[var(--muted)]/15 text-[var(--text-secondary)] border border-[var(--muted)]/20",
    Theoretical:
      "bg-[var(--muted)]/15 text-[var(--text-secondary)] border border-[var(--muted)]/20",
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] font-medium leading-none ${
        styles[type] || styles.Review
      }`}
    >
      {type}
    </span>
  );
}

/* ─── Category Badge ─────────────────────────────────────── */

function CategoryBadge({ category }: { category: string }) {
  const label = categories.find((c) => c.key === category)?.label ?? category;
  return (
    <span className="inline-block rounded-full border border-[var(--terracotta)]/15 bg-[var(--terracotta)]/8 px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] font-medium leading-none text-[var(--terracotta-dark)]">
      {label}
    </span>
  );
}

/* ─── Arrow Icon ───────────────────────────────────────── */

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Timeline Line (draws on scroll) ──────────────────── */

function TimelineLine() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.8,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={lineRef}
      className="absolute left-4 top-0 bottom-0 w-px origin-top bg-[var(--terracotta)]/30 md:left-1/2 md:-translate-x-1/2"
    />
  );
}

/* ─── Component ───────────────────────────────────────── */

export default function EvidenceContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  /* Filter papers */
  const filtered =
    activeCategory === "all"
      ? papers
      : papers.filter((p) => p.category === activeCategory);

  /* Sort by year */
  const sorted = [...filtered].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year),
  );

  /* Group into eras */
  const grouped = eras.map((era) => ({
    ...era,
    papers: sorted.filter((p) => {
      const y = parseInt(p.year);
      return y >= era.start && y <= era.end;
    }),
  }));

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 pt-32 pb-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
              The Evidence
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight md:text-7xl">
              The papers that
              <br />
              <em className="text-[var(--terracotta)]">
                changed everything.
              </em>
            </h1>
            <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              From a single discovery in 1962 to the first human trial
              in&nbsp;2026. Seven decades of evidence, in plain&nbsp;English.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Stats ─────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} variant="scale-in">
                <div className="text-center">
                  <span className="block font-[family-name:var(--font-playfair)] text-4xl tracking-tight text-[var(--terracotta)] md:text-6xl">
                    {s.number}
                  </span>
                  <span className="mt-2 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--muted)] uppercase">
                    {s.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Filters ─────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 pt-16 pb-4 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="-mx-6 overflow-x-auto px-6 md:-mx-10 md:px-10">
              <div className="flex gap-2 pb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`shrink-0 rounded-full px-4 py-2 font-[family-name:var(--font-jetbrains)] text-xs font-medium tracking-wide transition-all duration-200 ${
                      activeCategory === cat.key
                        ? "bg-[var(--terracotta)] text-[var(--cream)] shadow-sm"
                        : "bg-[var(--cream-dark)] text-[var(--muted)] hover:bg-[var(--terracotta)]/10 hover:text-[var(--terracotta)]"
                    }`}
                  >
                    {cat.label}
                    {activeCategory === cat.key && (
                      <span className="ml-1.5 inline-block rounded-full bg-white/20 px-1.5 py-0.5 text-[9px]">
                        {cat.key === "all"
                          ? papers.length
                          : papers.filter((p) => p.category === cat.key)
                              .length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 pt-8 pb-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          {grouped.map(
            (era) =>
              era.papers.length > 0 && (
                <div key={era.key} className="mb-16 last:mb-0">
                  {/* Era Header */}
                  <ScrollReveal>
                    <div className="mb-10 text-center">
                      <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
                        {era.label}
                      </h2>
                      <span className="mt-2 inline-block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--muted)] uppercase">
                        {era.range}
                      </span>
                    </div>
                  </ScrollReveal>

                  {/* Papers in this era */}
                  <div className="relative">
                    <TimelineLine />

                    <div className="space-y-12 md:space-y-16">
                      {era.papers.map((p, i) => (
                        <ScrollReveal
                          key={p.year + p.title}
                          delay={i * 0.03}
                          variant={
                            i % 2 === 0 ? "fade-right" : "fade-left"
                          }
                        >
                          <div
                            className={`relative pl-12 md:w-[46%] md:pl-0 ${
                              i % 2 === 0
                                ? "md:pr-14 md:text-right"
                                : "md:ml-auto md:pl-14"
                            }`}
                          >
                            {/* Dot on the line */}
                            <div
                              className={`absolute top-2 left-2 h-3.5 w-3.5 rounded-full border-2 border-[var(--terracotta)] bg-[var(--cream)] transition-colors duration-300 md:left-auto ${
                                i % 2 === 0
                                  ? "md:right-[-7px] md:left-auto"
                                  : "md:left-[-7px]"
                              }`}
                            />

                            {/* Year */}
                            <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-none text-[var(--terracotta)]">
                              {p.year}
                            </span>

                            {/* Badges */}
                            <div
                              className={`mt-3 flex flex-wrap gap-1.5 ${
                                i % 2 === 0 ? "md:justify-end" : ""
                              }`}
                            >
                              <OrganismBadge type={p.organism} />
                              <CategoryBadge category={p.category} />
                            </div>

                            {/* Paper title */}
                            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-base italic leading-snug text-[var(--charcoal)] md:text-lg">
                              {p.doi !== "#" ? (
                                <a
                                  href={p.doi}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline decoration-[var(--terracotta)]/30 underline-offset-2 transition-colors duration-200 hover:decoration-[var(--terracotta)]"
                                >
                                  {p.title}
                                </a>
                              ) : (
                                <span className="underline decoration-[var(--terracotta)]/30 underline-offset-2">
                                  {p.title}
                                </span>
                              )}
                            </h3>

                            {/* Authors / journal */}
                            <p className="mt-1.5 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)]">
                              {p.authors} &middot; {p.journal}
                            </p>

                            {/* Summary */}
                            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                              {p.summary}
                            </p>

                            {/* Read paper link */}
                            {p.doi !== "#" && (
                              <a
                                href={p.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/link mt-3 inline-flex items-center gap-1.5 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--terracotta)] transition-colors hover:text-[var(--terracotta-dark)] ${
                                  i % 2 === 0
                                    ? "md:flex-row-reverse"
                                    : ""
                                }`}
                              >
                                {i % 2 === 0 ? (
                                  <>
                                    Read paper{" "}
                                    <ArrowRight className="rotate-180 transition-transform duration-200 group-hover/link:-translate-x-0.5" />
                                  </>
                                ) : (
                                  <>
                                    Read paper{" "}
                                    <ArrowRight className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                                  </>
                                )}
                              </a>
                            )}
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              ),
          )}

          {/* Empty state when filter yields no results */}
          {sorted.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-[family-name:var(--font-jetbrains)] text-sm text-[var(--muted)]">
                No papers in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal variant="scale-in">
            <p className="mx-auto max-w-[50ch] font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[var(--charcoal)] md:text-2xl">
              &ldquo;The evidence is no longer theoretical&nbsp;&mdash; it is
              clinical, reproducible, and&nbsp;accelerating.&rdquo;
            </p>
            <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider text-[var(--muted)]">
              THIS TIMELINE WILL GROW AS NEW BREAKTHROUGHS&nbsp;EMERGE.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
