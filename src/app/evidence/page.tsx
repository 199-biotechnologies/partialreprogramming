import { ScrollReveal } from "@/components/motion/ScrollReveal";

const papers = [
  {
    year: "2006",
    title: "Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors",
    authors: "Takahashi & Yamanaka",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2006.07.024",
    summary:
      "The paper that started it all. Four transcription factors can reprogram adult cells back to a stem-cell-like state.",
    organism: "Mouse",
  },
  {
    year: "2011",
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
    title: "In Vivo Amelioration of Age-Associated Hallmarks by Partial Reprogramming",
    authors: "Ocampo et al.",
    journal: "Cell",
    doi: "https://doi.org/10.1016/j.cell.2016.11.052",
    summary:
      "First demonstration that cyclic, short-term expression of Yamanaka factors can reverse age-associated hallmarks in living mice without causing cancer.",
    organism: "Mouse",
  },
  {
    year: "2019",
    title: "Transient Non-integrative Expression of Nuclear Reprogramming Factors Promotes Multifaceted Amelioration of Aging",
    authors: "Sarkar et al.",
    journal: "Nature Communications",
    doi: "https://doi.org/10.1038/s41467-020-15174-3",
    summary:
      "Showed that transient reprogramming reverses multiple hallmarks of aging in human cells and mouse tissues without altering cell identity.",
    organism: "Human cells + Mouse",
  },
  {
    year: "2020",
    title: "Reprogramming to Recover Youthful Epigenetic Information and Restore Vision",
    authors: "Lu et al.",
    journal: "Nature",
    doi: "https://doi.org/10.1038/s41586-020-2975-4",
    summary:
      "Sinclair's landmark paper. Three Yamanaka factors (OSK, without c-Myc) restored vision in aged mice by resetting the epigenetic clock in retinal ganglion cells.",
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
    year: "2025",
    title: "Partial Reprogramming Restores Learning and Memory in Aged Mice",
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

function OrganismBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Mouse: "bg-[var(--terracotta)]/10 text-[var(--terracotta)]",
    "Human cells": "bg-[var(--charcoal)]/10 text-[var(--charcoal)]",
    "Human cells + Mouse": "bg-[var(--charcoal)]/10 text-[var(--charcoal)]",
    Human: "bg-[var(--terracotta)] text-[var(--cream)]",
    Review: "bg-[var(--muted-light)] text-[var(--text-secondary)]",
  };

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[10px] ${
        colors[type] || colors.Review
      }`}
    >
      {type}
    </span>
  );
}

export default function EvidencePage() {
  return (
    <div className="px-6 pt-28 pb-20 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
            The Evidence
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.15] tracking-tight md:text-6xl">
            The papers that{" "}
            <em className="text-[var(--terracotta)]">changed everything.</em>
          </h1>
          <p className="mt-4 max-w-[55ch] text-lg text-[var(--text-secondary)]">
            From a single discovery in 2006 to the first human trial in 2026.
            The key evidence, in plain English.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--terracotta)]/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {papers.map((p, i) => (
              <ScrollReveal key={p.year + p.title} delay={i * 0.03}>
                <div
                  className={`relative pl-12 md:w-[48%] md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute top-2 left-2.5 h-3 w-3 rounded-full border-2 border-[var(--terracotta)] bg-[var(--cream)] md:left-auto ${
                      i % 2 === 0
                        ? "md:right-[-6.5px] md:left-auto"
                        : "md:left-[-6.5px]"
                    }`}
                  />

                  <div className="flex items-center gap-3 md:justify-end">
                    {i % 2 !== 0 && (
                      <OrganismBadge type={p.organism} />
                    )}
                    <span className="font-[family-name:var(--font-jetbrains)] text-xl font-bold text-[var(--terracotta)]">
                      {p.year}
                    </span>
                    {i % 2 === 0 && (
                      <OrganismBadge type={p.organism} />
                    )}
                  </div>

                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-base leading-snug text-[var(--charcoal)] md:text-lg">
                    <a
                      href={p.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[var(--terracotta)]"
                    >
                      {p.title}
                    </a>
                  </h3>

                  <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)]">
                    {p.authors} &middot; {p.journal}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {p.summary}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
