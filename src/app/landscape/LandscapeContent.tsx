"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import {
  companies as rawCompanies,
  clinicalTrials,
  regulatoryMilestones,
  academicLabs,
  longevityFunds,
  marketStats,
} from "@/lib/landscape-data";
import { people } from "@/lib/people";

/* ─── Helpers ─────────────────────────────────────────── */

/** Parse a funding string like "$5.56B", "$325M+", "Undisclosed" into a numeric value for sorting. */
function parseFunding(s: string): number {
  const cleaned = s.replace(/[^0-9.BMKbmk]/g, "");
  const match = cleaned.match(/^([\d.]+)\s*([BMKbmk]?)/);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  if (isNaN(num)) return 0;
  const unit = match[2].toUpperCase();
  if (unit === "B") return num * 1_000_000_000;
  if (unit === "M") return num * 1_000_000;
  if (unit === "K") return num * 1_000;
  return num;
}

const companies = [...rawCompanies].sort(
  (a, b) => parseFunding(b.totalFunding) - parseFunding(a.totalFunding)
);

/** Group people by category. */
const categoryLabels: Record<string, string> = {
  pioneer: "Pioneers",
  researcher: "Researchers",
  industry: "Industry Leaders",
  "investor-founder": "Investors & Founders",
};
const categoryOrder = ["pioneer", "researcher", "industry", "investor-founder"];
const groupedPeople = categoryOrder
  .map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    members: people.filter((p) => p.category === cat),
  }))
  .filter((g) => g.members.length > 0);

/* ─── Phase badge colors ─────────────────────────────── */

function phaseBadge(phase: string) {
  const p = phase.toLowerCase();
  if (p.includes("pre-ind") || p.includes("preclinical") || p.includes("pre-clinical"))
    return "bg-[var(--muted)]/20 text-[var(--muted)]";
  if (p.includes("phase 1") || p.includes("phase i"))
    return "bg-[var(--terracotta)]/15 text-[var(--terracotta)]";
  if (p.includes("phase 2") || p.includes("phase ii"))
    return "bg-[var(--terracotta-dark)]/20 text-[var(--terracotta-dark)]";
  if (p.includes("pivotal"))
    return "bg-[var(--terracotta-dark)]/20 text-[var(--terracotta-dark)]";
  return "bg-[var(--muted-light)] text-[var(--text-secondary)]";
}

/* ─── Component ──────────────────────────────────────── */

export default function LandscapeContent() {
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
              hypothesis to a field attracting billions in capital, Nobel&nbsp;laureates,
              and the first FDA-cleared human trial. Here is the full&nbsp;landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Market Stats ─────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal variant="scale-in">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--muted)] uppercase">
                Total longevity sector investment (2024)
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-5xl tracking-tight text-[var(--charcoal)] md:text-7xl">
                $8.49B
              </span>
              <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                Across 331 deals in 2024 alone&nbsp;&mdash; a 220% increase from
                2023. Cellular reprogramming is the most capital-intensive
                longevity domain.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-10 grid max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketStats.slice(2).map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.05}>
                <div className="rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] p-5 text-center">
                  <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)] uppercase">
                    {s.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                    {s.value}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[10px] text-[var(--muted)]">
                    {s.source} ({s.year})
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Companies ────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Companies
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              {companies.length} companies driving partial reprogramming and
              cellular rejuvenation, sorted by total funding.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((c, i) => {
              const isInactive =
                c.status === "acquired" || c.status === "merged";
              return (
                <ScrollReveal key={c.name} delay={i * 0.04}>
                  <div
                    className={`group h-full cursor-default rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-[2px] hover:border-l-[var(--terracotta)] hover:shadow-[0_4px_24px_rgba(196,93,62,0.07)] ${
                      isInactive ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                        {c.name}
                      </h3>
                      <span className="shrink-0 font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                        {c.totalFunding}
                      </span>
                    </div>

                    {isInactive && (
                      <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[10px] font-medium tracking-wider text-[var(--terracotta)] uppercase">
                        {c.status === "acquired"
                          ? `Acquired`
                          : `Merged`}
                      </p>
                    )}

                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {c.mission}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {c.approach}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                        {c.hq}
                      </span>
                      <span className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                        Est. {c.founded}
                      </span>
                    </div>

                    <p className="mt-3 font-[family-name:var(--font-jetbrains)] text-xs leading-relaxed text-[var(--terracotta)]">
                      {c.pipelineStatus}
                    </p>

                    {c.website && c.website !== "N/A (stealth)" && (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)] underline decoration-[var(--muted-light)] underline-offset-2 transition-colors hover:text-[var(--terracotta)]"
                      >
                        {c.website.replace(/^https?:\/\/(www\.)?/, "")}
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Clinical Trials ──────────────────────────────── */}
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
              <table className="w-full min-w-[800px] text-left">
                <thead>
                  <tr className="border-b border-[var(--muted-light)]">
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Trial
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Sponsor
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Indication
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Phase
                    </th>
                    <th className="pb-3 pr-6 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      CT.gov ID
                    </th>
                    <th className="pb-3 font-[family-name:var(--font-jetbrains)] text-[11px] font-normal tracking-widest text-[var(--muted)] uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clinicalTrials.map((t) => {
                    const isNctId = t.nctId.startsWith("NCT");
                    return (
                      <tr
                        key={t.nctId}
                        className="border-b border-[var(--muted-light)]/50 transition-colors hover:bg-[var(--cream)]/50"
                      >
                        <td className="py-4 pr-6 text-sm text-[var(--charcoal)]">
                          <p className="font-medium">{t.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                            {t.intervention}
                          </p>
                        </td>
                        <td className="py-4 pr-6 text-sm text-[var(--text-secondary)]">
                          {t.sponsor}
                        </td>
                        <td className="py-4 pr-6 text-sm text-[var(--text-secondary)]">
                          {t.indication}
                        </td>
                        <td className="py-4 pr-6">
                          <span
                            className={`inline-block rounded-full px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[11px] font-medium ${phaseBadge(t.phase)}`}
                          >
                            {t.phase}
                          </span>
                        </td>
                        <td className="py-4 pr-6 font-[family-name:var(--font-jetbrains)] text-xs">
                          {isNctId ? (
                            <a
                              href={`https://clinicaltrials.gov/study/${t.nctId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[var(--terracotta)] underline decoration-[var(--terracotta)]/30 underline-offset-2 hover:decoration-[var(--terracotta)]"
                            >
                              {t.nctId}
                            </a>
                          ) : (
                            <span className="text-[var(--muted)]">
                              {t.nctId}
                            </span>
                          )}
                        </td>
                        <td className="py-4">
                          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--text-secondary)]">
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Regulatory milestones — pre-IND programs */}
          {regulatoryMilestones.length > 0 && (
            <ScrollReveal>
              <h3 className="mt-16 font-[family-name:var(--font-playfair)] text-2xl tracking-tight md:text-3xl">
                Regulatory Milestones
              </h3>
              <p className="mt-2 max-w-[50ch] text-sm text-[var(--text-secondary)]">
                Pre-IND programs with significant regulatory progress but not yet in clinical trials.
              </p>
              <div className="mt-8 space-y-4">
                {regulatoryMilestones.map((m) => (
                  <div
                    key={m.company}
                    className="rounded-xl border border-[var(--muted-light)] bg-white/50 p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                          {m.company}
                        </h4>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                          {m.indication}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-[var(--terracotta)]/20 bg-[var(--terracotta)]/5 px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[var(--terracotta)] uppercase">
                        {m.milestone} &mdash; {m.date}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {m.program}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                      {m.notes}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── Key Figures ───────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Key Figures
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              The scientists, founders, and investors shaping the field&nbsp;&mdash;{" "}
              {people.length} individuals across {categoryOrder.length} categories.
            </p>
          </ScrollReveal>

          {groupedPeople.map((group) => (
            <div key={group.category} className="mt-12">
              <ScrollReveal>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--charcoal)] md:text-2xl">
                  {group.label}
                </h3>
              </ScrollReveal>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.members.map((f, i) => (
                  <ScrollReveal key={f.id} delay={i * 0.04}>
                    <div className="group h-full border-l-2 border-[var(--muted-light)]/30 p-6 transition-all duration-300 hover:border-l-[var(--terracotta)]">
                      <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                        {f.name}
                      </h4>
                      <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--terracotta)]">
                        {f.role}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {f.contribution}
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                        {f.affiliation}
                      </p>
                      {f.links && f.links.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-3">
                          {f.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[var(--muted)] underline decoration-[var(--muted-light)] underline-offset-2 transition-colors hover:text-[var(--terracotta)]"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Academic Labs ─────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Academic Labs
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              The research groups producing the foundational science behind
              cellular reprogramming.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {academicLabs.map((lab, i) => (
              <ScrollReveal key={lab.principalInvestigator} delay={i * 0.05}>
                <div className="group h-full rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-[2px] hover:border-l-[var(--terracotta)] hover:shadow-[0_4px_24px_rgba(196,93,62,0.07)]">
                  <p className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-wider text-[var(--terracotta)] uppercase">
                    {lab.institution}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                    {lab.principalInvestigator}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                    {lab.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {lab.focus}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                    {lab.keyContributions}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-jetbrains)] text-[10px] italic text-[var(--muted)]">
                    {lab.notableConnection}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Funding Ecosystem ────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Funding Ecosystem
            </h2>
            <p className="mt-3 max-w-[50ch] text-sm text-[var(--text-secondary)]">
              {longevityFunds.length} venture funds, foundations, and company
              builders financing the longevity revolution.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {longevityFunds.map((fund, i) => (
              <ScrollReveal key={fund.name} delay={i * 0.03}>
                <div className="group h-full rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] p-6 transition-all duration-300 hover:border-l-[2px] hover:border-l-[var(--terracotta)]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-base text-[var(--charcoal)]">
                    {fund.name}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider text-[var(--terracotta)] uppercase">
                    {fund.type}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[11px] text-[var(--muted)]">
                    {fund.aum}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {fund.focus}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {fund.notableInvestments.map((inv) => (
                      <span
                        key={inv}
                        className="rounded-full bg-[var(--muted-light)]/50 px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[10px] text-[var(--muted)]"
                      >
                        {inv}
                      </span>
                    ))}
                  </div>
                  {fund.website && (
                    <a
                      href={fund.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-[family-name:var(--font-jetbrains)] text-[10px] text-[var(--muted)] underline decoration-[var(--muted-light)] underline-offset-2 transition-colors hover:text-[var(--terracotta)]"
                    >
                      {fund.website.replace(/^https?:\/\/(www\.)?/, "")}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ───────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal variant="scale-in">
            <p className="mx-auto max-w-[50ch] font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[var(--charcoal)] md:text-2xl">
              &ldquo;We are at the very beginning of a transformation in
              medicine&nbsp;&mdash; from treating disease to restoring&nbsp;youth.&rdquo;
            </p>
            <p className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider text-[var(--muted)]">
              THE LANDSCAPE IS STILL FORMING. THIS PAGE WILL&nbsp;GROW.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
