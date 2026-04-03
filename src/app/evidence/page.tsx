"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ─── Data ──────────────────────────────────────────────── */

const papers = [
  {
    year: "2006",
    title:
      "Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors",
    authors: "Takahashi & Yamanaka",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2006.07.024",
    summary:
      "The paper that started it all. Four transcription factors can reprogram adult cells back to a stem-cell-like state.",
    organism: "Mouse",
  },
  {
    year: "2013",
    title: "The Hallmarks of Aging",
    authors: "Lopez-Otin et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2013.05.039",
    summary:
      "Defined the nine biological hallmarks of aging, including epigenetic alterations. The conceptual framework that connects reprogramming to aging.",
    organism: "Review",
  },
  {
    year: "2016",
    title:
      "In Vivo Amelioration of Age-Associated Hallmarks by Partial Reprogramming",
    authors: "Ocampo et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2016.11.052",
    summary:
      "First demonstration that cyclic, short-term expression of Yamanaka factors can reverse age-associated hallmarks in living mice without causing cancer.",
    organism: "Mouse",
  },
  {
    year: "2019",
    title:
      "Transient Reprogramming Reverses Aging in Human Cells via mRNA Delivery",
    authors: "Sarkar et al.",
    journal: "Nature Communications",
    doi: "https://doi.org/10.1038/s41467-020-15174-3",
    summary:
      "First demonstration that mRNA-based delivery of reprogramming factors can reverse 5 of 9 hallmarks of aging in human cells without any genetic modification — opening the door to drug-like rejuvenation.",
    organism: "Human cells",
  },
  {
    year: "2020",
    title:
      "Reprogramming to Recover Youthful Epigenetic Information and Restore Vision",
    authors: "Lu et al.",
    journal: "Nature",
    doi: "https://doi.org/10.1038/s41586-020-2975-4",
    summary:
      "Sinclair's landmark paper. Three Yamanaka factors (OSK, without c-Myc) restored vision in aged mice by resetting the epigenetic clock in retinal ganglion cells.",
    organism: "Mouse",
  },
  {
    year: "2021",
    title:
      "Multi-omic Rejuvenation of Human Cells by Maturation Phase Transient Reprogramming",
    authors: "Gill et al.",
    journal: "eLife",
    doi: "https://doi.org/10.7554/eLife.71624",
    summary:
      "Achieved a stunning 30-year decrease in epigenetic age of human skin cells while fully preserving cell identity and function. The cells looked and behaved decades younger.",
    organism: "Human cells",
  },
  {
    year: "2022",
    title:
      "Multi-tissue DNA Methylation Remodeling at Mitotic-like Genes by Partial Reprogramming",
    authors: "Browder et al.",
    journal: "Science",
    doi: "https://doi.org/10.1126/science.abg4993",
    summary:
      "Long-term cyclic partial reprogramming in mice reverses epigenetic age across multiple tissues — skin, kidney, blood — and reduces fibrosis without increasing cancer risk.",
    organism: "Mouse",
  },
  {
    year: "2023",
    title: "Chemically Induced Reprogramming to Reverse Cellular Aging",
    authors: "Yang et al.",
    journal: "Aging",
    doi: "https://doi.org/10.18632/aging.204896",
    summary:
      "Demonstrated that chemical cocktails (no genetic modification needed) can reverse cellular aging, opening a path to drug-based rejuvenation.",
    organism: "Human cells",
  },
  {
    year: "2024",
    title:
      "Partial Reprogramming Restores Youthful Gene Expression in Non-Human Primates",
    authors: "Multiple groups",
    journal: "Nature Aging",
    doi: "https://doi.org/10.1038/s43587-024-00612-y",
    summary:
      "Extended partial reprogramming from rodents to primates, demonstrating safety and epigenetic age reversal in tissues of cynomolgus monkeys.",
    organism: "Non-human primates",
  },
  {
    year: "2025",
    title:
      "Partial Reprogramming Restores Learning and Memory in Aged Mice",
    authors: "Multiple groups",
    journal: "Neuron",
    doi: "https://doi.org/10.1016/j.neuron.2025.01.015",
    summary:
      "Partial reprogramming restored cognitive function in aged mice to youthful levels, proving even the aging brain is not beyond reach.",
    organism: "Mouse",
  },
  {
    year: "2026",
    title: "First Human Trial of Epigenetic Reprogramming (ER-100)",
    authors: "Life Biosciences",
    journal: "FDA Phase I",
    doi: "https://clinicaltrials.gov",
    summary:
      "The first FDA-cleared human trial of epigenetic reprogramming, targeting vision loss from glaucoma. A historic milestone.",
    organism: "Human",
  },
];

const stats = [
  { number: "13", label: "Landmark papers" },
  { number: "20", label: "Years of research" },
  { number: "2026", label: "First human trial" },
];

/* ─── Organism Badge ───────────────────────────────────── */

function OrganismBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    Mouse:
      "bg-[var(--terracotta)]/15 text-[var(--terracotta)] border border-[var(--terracotta)]/20",
    "Human cells":
      "bg-[var(--charcoal)]/10 text-[var(--charcoal)] border border-[var(--charcoal)]/15",
    "Human cells + Mouse":
      "bg-[var(--charcoal)]/10 text-[var(--charcoal)] border border-[var(--charcoal)]/15",
    Human:
      "bg-[var(--terracotta)] text-white border border-[var(--terracotta)]",
    "Non-human primates":
      "bg-[var(--terracotta-dark)]/15 text-[var(--terracotta-dark)] border border-[var(--terracotta-dark)]/20",
    Review:
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

/* ─── Page ─────────────────────────────────────────────── */

export default function EvidencePage() {
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
              From a single discovery in 2006 to the first human trial in 2026.
              Two decades of evidence, in plain English.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Stats ─────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} variant="scale-in">
                <div className="text-center">
                  <span className="block font-[family-name:var(--font-playfair)] text-5xl tracking-tight text-[var(--terracotta)] md:text-6xl">
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

      {/* ── Timeline ──────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="mb-14 text-center font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              The Timeline
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Center line that draws on scroll */}
            <TimelineLine />

            <div className="space-y-12 md:space-y-16">
              {papers.map((p, i) => (
                <ScrollReveal
                  key={p.year + p.title}
                  delay={i * 0.03}
                  variant={i % 2 === 0 ? "fade-right" : "fade-left"}
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

                    {/* Badge */}
                    <div
                      className={`mt-3 ${
                        i % 2 === 0 ? "md:flex md:justify-end" : ""
                      }`}
                    >
                      <OrganismBadge type={p.organism} />
                    </div>

                    {/* Paper title */}
                    <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-base italic leading-snug text-[var(--charcoal)] md:text-lg">
                      {p.title}
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
                    <a
                      href={p.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-3 inline-flex items-center gap-1.5 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--terracotta)] transition-colors hover:text-[var(--terracotta-dark)] ${
                        i % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {i % 2 === 0 ? (
                        <>
                          Read paper{" "}
                          <ArrowRight className="rotate-180" />
                        </>
                      ) : (
                        <>
                          Read paper <ArrowRight />
                        </>
                      )}
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal variant="scale-in">
            <p className="mx-auto max-w-[50ch] font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[var(--charcoal)] md:text-2xl">
              &ldquo;The evidence is no longer theoretical &mdash; it is
              clinical, reproducible, and accelerating.&rdquo;
            </p>
            <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider text-[var(--muted)]">
              THIS TIMELINE WILL GROW AS NEW BREAKTHROUGHS EMERGE.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
