export function Footer() {
  return (
    <footer className="border-t border-[var(--muted-light)] bg-[var(--cream-dark)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <p className="text-sm text-[var(--text-secondary)]">
          An open educational project. No affiliation with any company
          mentioned.
        </p>
        <div className="mt-4 flex gap-6 text-xs text-[var(--muted)]">
          <a
            href="https://en.wikipedia.org/wiki/Cellular_reprogramming"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--terracotta)]"
          >
            Wikipedia
          </a>
          <a
            href="https://www.nature.com/subjects/cellular-reprogramming"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--terracotta)]"
          >
            Nature
          </a>
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/?term=partial+reprogramming"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--terracotta)]"
          >
            PubMed
          </a>
        </div>
      </div>
    </footer>
  );
}
