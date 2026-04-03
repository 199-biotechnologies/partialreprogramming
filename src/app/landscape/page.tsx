import { ScrollReveal } from "@/components/motion/ScrollReveal";

const companies = [
  {
    name: "Altos Labs",
    mission: "Restoring cell health and resilience through rejuvenation biology",
    funding: "$3B+ raised",
    focus: "Whole-organ rejuvenation",
    wide: true,
  },
  {
    name: "Retro Biosciences",
    mission: "Adding 10 healthy years to human lifespan",
    funding: "$180M raised",
    focus: "Autophagy, reprogramming, plasma",
    wide: false,
  },
  {
    name: "NewLimit",
    mission: "Radically extending the human healthspan",
    funding: "$130M+ raised",
    focus: "Epigenetic reprogramming for liver disease",
    wide: false,
  },
  {
    name: "Turn Biotechnologies",
    mission: "Restoring youthful function through mRNA-based reprogramming",
    funding: "$60M+ raised",
    focus: "Tissue-specific rejuvenation via ERA platform",
    wide: true,
  },
  {
    name: "Life Biosciences",
    mission: "Developing medicines that target the biology of aging",
    funding: "$100M+ raised",
    focus: "First FDA-cleared reprogramming trial (ER-100)",
    wide: true,
  },
  {
    name: "Calico (Alphabet)",
    mission: "Understanding the biology that controls lifespan",
    funding: "Alphabet-backed",
    focus: "Fundamental aging research",
    wide: false,
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
];

export default function LandscapePage() {
  return (
    <div className="px-6 pt-28 pb-20 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
            The Landscape
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.15] tracking-tight md:text-6xl">
            Who&apos;s working on{" "}
            <em className="text-[var(--terracotta)]">this?</em>
          </h1>
          <p className="mt-4 max-w-[55ch] text-lg text-[var(--text-secondary)]">
            A growing constellation of labs, companies, and researchers are
            racing to bring partial reprogramming from the bench to the bedside.
          </p>
        </ScrollReveal>

        {/* Companies */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl tracking-tight">
              Companies
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
            {companies.map((c, i) => (
              <ScrollReveal
                key={c.name}
                delay={i * 0.05}
                className={c.wide ? "md:col-span-2 md:max-w-[70%]" : ""}
              >
                <div className="group rounded-lg border border-[var(--muted-light)] bg-[var(--cream)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--terracotta)]/30 hover:shadow-[0_4px_20px_rgba(196,93,62,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                      {c.name}
                    </h3>
                    <span className="shrink-0 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)]">
                      {c.funding}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {c.mission}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--terracotta)]">
                    {c.focus}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Key Figures */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl tracking-tight">
              Key Figures
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {figures.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.05}>
                <div className="border-l-2 border-[var(--terracotta)]/30 pl-5 py-2 transition-colors hover:border-[var(--terracotta)]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--charcoal)]">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {f.role}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-xs text-[var(--muted)]">
                    {f.affiliation}
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
