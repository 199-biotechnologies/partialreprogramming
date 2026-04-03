"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ─── Data ──────────────────────────────────────────────── */

const companies = [
  {
    name: "Altos Labs",
    tagline: "The most-funded bet on biological rejuvenation",
    mission: "Restoring cell health and resilience through rejuvenation biology",
    funding: "$3B+ raised",
    focus: "Whole-organ rejuvenation",
  },
  {
    name: "Retro Biosciences",
    tagline: "Backed by Sam Altman to add a decade to human lifespan",
    mission: "Adding 10 healthy years to human lifespan",
    funding: "$180M raised",
    focus: "Autophagy, reprogramming, plasma",
  },
  {
    name: "NewLimit",
    tagline: "Co-founded by Brian Armstrong to crack epigenetic aging",
    mission: "Radically extending the human healthspan",
    funding: "$130M+ raised",
    focus: "Epigenetic reprogramming for liver disease",
  },
  {
    name: "Turn Biotechnologies",
    tagline: "Pioneering mRNA-based rejuvenation therapies",
    mission: "Restoring youthful function through mRNA-based reprogramming",
    funding: "$60M+ raised",
    focus: "Tissue-specific rejuvenation via ERA platform",
  },
  {
    name: "Life Biosciences",
    tagline: "First to take reprogramming into an FDA-cleared human trial",
    mission: "Developing medicines that target the biology of aging",
    funding: "$100M+ raised",
    focus: "First FDA-cleared reprogramming trial (ER-100)",
  },
  {
    name: "Calico (Alphabet)",
    tagline: "Google's long-term bet on understanding lifespan",
    mission: "Understanding the biology that controls lifespan",
    funding: "Alphabet-backed",
    focus: "Fundamental aging research",
  },
  {
    name: "Shift Bioscience",
    tagline: "AI-driven discovery of optimal reprogramming targets",
    mission: "Using machine learning to map the epigenetic landscape of aging and find safe reprogramming routes",
    funding: "$12M+ raised",
    focus: "Computational aging biology & epigenetic targets",
  },
  {
    name: "Rejuvenate Bio",
    tagline: "Gene therapy to reverse aging in companion animals first",
    mission: "Developing gene therapies that reverse biological age, starting with dogs",
    funding: "$15M+ raised",
    focus: "Combinatorial gene therapy for age reversal",
  },
  {
    name: "Conception Biosciences",
    tagline: "Extending human fertility through ovarian rejuvenation",
    mission: "Making human eggs from stem cells to transform reproductive aging",
    funding: "$80M+ raised",
    focus: "In vitro gametogenesis & reproductive longevity",
  },
];

const clinicalTrials = [
  {
    trial: "ER-100",
    company: "Life Biosciences",
    target: "Glaucoma (vision loss)",
    phase: "Phase I",
    status: "Enrolling",
  },
  {
    trial: "ALT-100",
    company: "Altos Labs",
    target: "Liver fibrosis",
    phase: "Pre-clinical",
    status: "IND-enabling",
  },
  {
    trial: "NL-201",
    company: "NewLimit",
    target: "Liver disease",
    phase: "Pre-clinical",
    status: "Lead optimization",
  },
  {
    trial: "ERA-01",
    company: "Turn Biotechnologies",
    target: "Osteoarthritis (joint)",
    phase: "Pre-clinical",
    status: "Animal studies",
  },
  {
    trial: "RB-001",
    company: "Retro Biosciences",
    target: "Undisclosed",
    phase: "Pre-clinical",
    status: "Discovery",
  },
  {
    trial: "CDNF-201",
    company: "Calico / AbbVie",
    target: "Neurodegeneration",
    phase: "Phase II",
    status: "Ongoing",
  },
];

const figures = [
  {
    name: "Shinya Yamanaka",
    role: "Discoverer of reprogramming factors",
    affiliation: "Kyoto University / Altos Labs",
  },
  {
    name: "David Sinclair",
    role: "Pioneer of epigenetic age reversal",
    affiliation: "Harvard Medical School",
  },
  {
    name: "Juan Carlos Izpisua Belmonte",
    role: "First to show in vivo partial reprogramming",
    affiliation: "Salk Institute / Altos Labs",
  },
  {
    name: "Vittorio Sebastiano",
    role: "Co-founder of Turn Bio, mRNA reprogramming",
    affiliation: "Stanford University",
  },
  {
    name: "Steve Horvath",
    role: "Inventor of the epigenetic clock",
    affiliation: "Altos Labs (prev. UCLA)",
  },
  {
    name: "Brian Armstrong",
    role: "Co-founder of NewLimit, Coinbase CEO",
    affiliation: "NewLimit",
  },
  {
    name: "Sam Altman",
    role: "Lead backer of Retro Biosciences ($180M)",
    affiliation: "Retro Biosciences (investor)",
  },
];

/* ─── Phase badge colors ───────────────────────────────── */

function phaseBadge(phase: string) {
  if (phase === "Pre-clinical")
    return "bg-[var(--muted)]/20 text-[var(--muted)]";
  if (phase === "Phase I")
    return "bg-[var(--terracotta)]/15 text-[var(--terracotta)]";
  if (phase === "Phase II")
    return "bg-[var(--terracotta-dark)]/20 text-[var(--terracotta-dark)]";
  return "bg-[var(--muted-light)] text-[var(--text-secondary)]";
}

/* ─── Page ─────────────────────────────────────────────── */

export default function LandscapePage() {
  const heroLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroLineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(heroLineRef.current, {
        scaleX: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
        transformOrigin: "left center",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 pt-32 pb-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
              The Landscape
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight md:text-7xl">
              A new science is being{" "}
              <em className="text-[var(--terracotta)]">born.</em>
            </h1>
            <div
              ref={heroLineRef}
              className="mt-6 h-[2px] w-32 bg-[var(--terracotta)]"
            />
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              In under a decade, partial reprogramming has moved from a radical
              hypothesis to a field attracting billions in capital, Nobel laureates,
              and the first FDA-cleared human trial. Here is the full landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Funding Callout ───────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal variant="scale-in">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--muted)] uppercase">
                Total capital deployed
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-5xl tracking-tight text-[var(--charcoal)] md:text-7xl">
                $5B+
              </span>
              <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                Since 2021, over five billion dollars has flowed into
                reprogramming and longevity biotech &mdash; more than the entire
                preceding decade of aging research funding combined.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Companies ─────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Companies
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              From stealth-mode startups to Alphabet subsidiaries, the field is
              growing fast.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.04}>
                <div className="group h-full rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-[2px] hover:border-l-[var(--terracotta)] hover:shadow-[0_4px_24px_rgba(196,93,62,0.07)]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                      {c.name}
                    </h3>
                    <span className="shrink-0 font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                      {c.funding}
                    </span>
                  </div>
                  <p className="mt-1 text-sm italic text-[var(--text-secondary)]">
                    {c.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {c.mission}
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--terracotta)]">
                    {c.focus}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical Trials ───────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Clinical Trials
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              Where the science meets regulation. Active and upcoming
              reprogramming-adjacent programs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead>
                  <tr className="border-b border-[var(--muted-light)]">
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Trial
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Company
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Target
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Phase
                    </th>
                    <th className="pb-3 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clinicalTrials.map((t, i) => (
                    <tr
                      key={t.trial}
                      className="border-b border-[var(--muted-light)]/50 transition-colors hover:bg-[var(--cream)]/50"
                    >
                      <td className="py-4 pr-6 font-[family-name:var(--font-jetbrains)] text-sm font-medium text-[var(--charcoal)]">
                        {t.trial}
                      </td>
                      <td className="py-4 pr-6 text-sm text-[var(--text-secondary)]">
                        {t.company}
                      </td>
                      <td className="py-4 pr-6 text-sm text-[var(--text-secondary)]">
                        {t.target}
                      </td>
                      <td className="py-4 pr-6">
                        <span
                          className={`inline-block rounded-full px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[11px] font-medium ${phaseBadge(t.phase)}`}
                        >
                          {t.phase}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--text-secondary)]">
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Figures ────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Key Figures
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              The scientists, founders, and investors shaping the field.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {figures.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.04}>
                <div className="group h-full border-l-2 border-[var(--muted-light)] p-8 transition-all duration-300 hover:border-l-[var(--terracotta)]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {f.role}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)]">
                    {f.affiliation}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal variant="scale-in">
            <p className="mx-auto max-w-[50ch] font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[var(--charcoal)] md:text-2xl">
              &ldquo;We are at the very beginning of a transformation in
              medicine &mdash; from treating disease to restoring youth.&rdquo;
            </p>
            <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider text-[var(--muted)]">
              THE LANDSCAPE IS STILL FORMING. THIS PAGE WILL GROW.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
