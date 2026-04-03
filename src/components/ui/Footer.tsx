"use client";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--muted-light)] bg-[var(--cream-dark)]">
      {/* Decorative top border pattern */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 4px, transparent 4px, transparent 12px)",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-16">
        {/* Three-column layout */}
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Column 1: Attribution */}
          <div className="space-y-3">
            <p className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[var(--charcoal)]">
              Partial Reprogramming
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              A project by{" "}
              <span className="font-medium text-[var(--charcoal)]">
                199 Biotechnologies (SG) Pte. Ltd.
              </span>
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Written by{" "}
              <span className="font-medium text-[var(--charcoal)]">
                Boris Djordjevic
              </span>
            </p>
          </div>

          {/* Column 2: Links + Disclaimer */}
          <div className="space-y-5 md:text-center">
            <div className="flex gap-6 text-sm text-[var(--muted)] md:justify-center">
              <a
                href="https://en.wikipedia.org/wiki/Cellular_reprogramming"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 transition-colors duration-200 hover:text-[var(--terracotta)]"
              >
                Wikipedia
              </a>
              <a
                href="https://www.nature.com/subjects/cellular-reprogramming"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 transition-colors duration-200 hover:text-[var(--terracotta)]"
              >
                Nature
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=partial+reprogramming"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 transition-colors duration-200 hover:text-[var(--terracotta)]"
              >
                PubMed
              </a>
            </div>
            <p className="text-xs leading-relaxed text-[var(--muted)]">
              Made with curiosity, not a stethoscope. This is an educational
              resource&nbsp;&mdash; not medical advice. We have no affiliation
              with the companies&nbsp;mentioned.
            </p>
          </div>

          {/* Column 3: Back to top */}
          <div className="flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--terracotta)]"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path
                  d="M7 12V2M7 2L2.5 6.5M7 2L11.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div className="mt-12 border-t border-[var(--muted-light)] pt-6">
          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} 199 Biotechnologies (SG) Pte.
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
