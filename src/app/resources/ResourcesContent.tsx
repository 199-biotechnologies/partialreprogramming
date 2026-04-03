"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { resources, type Resource } from "@/lib/resources";

/* ─── Filter types ────────────────────────────────────── */

const filterTypes = [
  { key: "all", label: "All" },
  { key: "video", label: "Videos" },
  { key: "podcast", label: "Podcasts" },
  { key: "book", label: "Books" },
  { key: "blog-newsletter", label: "Blogs" },
  { key: "social", label: "X / Twitter" },
  { key: "conference", label: "Conferences" },
  { key: "course", label: "Courses" },
  { key: "community", label: "Communities" },
] as const;

type FilterKey = (typeof filterTypes)[number]["key"];

/* ─── Badge colour map ────────────────────────────────── */

const badgeStyles: Record<Resource["type"], string> = {
  video:
    "bg-[var(--terracotta)]/10 text-[var(--terracotta)]",
  podcast:
    "bg-[var(--charcoal)]/10 text-[var(--charcoal)]",
  book:
    "bg-[var(--terracotta)]/15 text-[var(--terracotta-dark,var(--terracotta))]",
  "blog-newsletter":
    "bg-[var(--muted)]/15 text-[var(--muted)]",
  social:
    "bg-[var(--text-secondary)]/10 text-[var(--text-secondary)]",
  conference:
    "bg-[var(--terracotta)]/10 text-[var(--terracotta)]",
  course:
    "bg-[var(--charcoal)]/10 text-[var(--charcoal)]",
  community:
    "bg-[var(--muted)]/15 text-[var(--muted)]",
};

const typeLabels: Record<Resource["type"], string> = {
  video: "Video",
  podcast: "Podcast",
  book: "Book",
  "blog-newsletter": "Blog / Newsletter",
  social: "X / Twitter",
  conference: "Conference",
  course: "Course",
  community: "Community",
};

/* ─── Arrow icon ──────────────────────────────────────── */

function ArrowUpRight({ className = "" }: { className?: string }) {
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
        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Component ───────────────────────────────────────── */

export default function ResourcesContent() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? resources
      : resources.filter((r) => r.type === activeFilter);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 pt-32 pb-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--terracotta)] uppercase">
              Resources
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] tracking-tight md:text-7xl">
              Go <em className="text-[var(--terracotta)]">deeper.</em>
            </h1>
            <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              The best videos, podcasts, books, and communities for understanding
              the science of cellular&nbsp;rejuvenation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Filter pills ──────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-8 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {filterTypes.map((f) => {
                const isActive = activeFilter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className={`rounded-full px-4 py-1.5 font-[family-name:var(--font-jetbrains)] text-xs tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--charcoal)] text-[var(--cream)]"
                        : "bg-[var(--cream)] text-[var(--text-secondary)] hover:bg-[var(--charcoal)]/5 hover:text-[var(--charcoal)]"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Resource cards grid ───────────────────────────── */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((resource, i) => (
              <ScrollReveal key={resource.id} delay={Math.min(i * 0.05, 0.3)}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-[var(--muted-light)] bg-[var(--cream)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--terracotta)]/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-8"
                >
                  {/* Type badge */}
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest uppercase ${badgeStyles[resource.type]}`}
                  >
                    {typeLabels[resource.type]}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl leading-snug tracking-tight text-[var(--charcoal)] md:text-2xl">
                    {resource.title}
                  </h3>

                  {/* Creator */}
                  {resource.creator && (
                    <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-xs tracking-wide text-[var(--muted)]">
                      {resource.creator}
                      {resource.platform && (
                        <span className="text-[var(--muted-light)]">
                          {" "}
                          &middot; {resource.platform}
                        </span>
                      )}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {resource.description}
                  </p>

                  {/* Visit link indicator */}
                  <span className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-jetbrains)] text-xs tracking-wide text-[var(--terracotta)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Visit <ArrowUpRight />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="py-20 text-center text-[var(--muted)]">
              No resources found for this category.
            </p>
          )}
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────── */}
      <section className="bg-[var(--cream-dark)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal>
            <span className="mb-4 block font-[family-name:var(--font-jetbrains)] text-xs tracking-widest text-[var(--muted)] uppercase">
              Contribute
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight md:text-4xl">
              Know a great resource we&rsquo;re missing?
            </h2>
            <p className="mx-auto mt-4 max-w-[45ch] text-[var(--text-secondary)]">
              This list is curated by 199&nbsp;Biotechnologies. If you know a
              video, paper, or community that belongs here, we&rsquo;d love to
              hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
