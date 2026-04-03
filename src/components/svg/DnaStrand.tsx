"use client";

import { useRef, useEffect, useMemo } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ─── deterministic PRNG (replaces Math.random for hydration safety) ─── */

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

/* ─── palette ─── */
const COLORS = {
  terracotta: "#c45d3e",
  charcoal: "#2a2520",
  muted: "#b8a898",
  mutedLight: "#d4ccc0",
  cream: "#faf8f5",
  // Base pair colors
  atWarm: "#c45d3e", // A-T pairs: terracotta
  atWarmLight: "#d4714f", // A-T lighter
  gcCool: "#b8a898", // G-C pairs: muted warm
  gcCoolLight: "#c9b9a8", // G-C lighter
  // Epigenetic marks
  methylation: "#c45d3e",
  acetylation: "#d4714f",
  phosphorylation: "#a04832",
};

/* ─── geometry constants ─── */
const WIDTH = 300;
const HEIGHT = 480;
const CX = WIDTH / 2;
const BASE_PAIRS = 28;
const HELIX_AMPLITUDE = 48;
const HELIX_TURNS = 4.5;
const BACKBONE_SEGMENTS = BASE_PAIRS * 5; // high-res backbone
const PADDING_TOP = 24;
const PADDING_BOTTOM = 24;
const STRAND_HEIGHT = HEIGHT - PADDING_TOP - PADDING_BOTTOM;

/* ─── base pair sequence (deterministic, biologically plausible) ─── */
const BASE_PAIR_SEQUENCE: ("AT" | "GC")[] = [
  "AT", "GC", "GC", "AT", "GC", "AT", "AT", "GC",
  "GC", "AT", "AT", "AT", "GC", "GC", "AT", "GC",
  "AT", "GC", "AT", "AT", "GC", "GC", "AT", "GC",
  "GC", "AT", "AT", "GC",
];

/* ─── epigenetic mark types ─── */
type MarkShape = "circle" | "diamond" | "cluster" | "triangle";

interface EpiMark {
  x: number;
  y: number;
  shape: MarkShape;
  size: number;
  color: string;
  rotation: number;
  // For particle scatter in rejuvenation mode
  scatterX: number;
  scatterY: number;
  scatterRotation: number;
}

/* ─── helix math ─── */

/** Get x position on helix at parameter t (0..1), for strand offset (0 or PI) */
function helixX(t: number, strandOffset: number): number {
  return CX + Math.sin(t * Math.PI * 2 * HELIX_TURNS + strandOffset) * HELIX_AMPLITUDE;
}

/** Get y position at parameter t (0..1) */
function helixY(t: number): number {
  return PADDING_TOP + t * STRAND_HEIGHT;
}

/**
 * Generate a smooth cubic bezier helix backbone.
 * Uses Catmull-Rom to Bezier conversion for genuinely smooth curves.
 */
function generateHelixPath(strandOffset: number): string {
  const pts: [number, number][] = [];

  for (let i = 0; i <= BACKBONE_SEGMENTS; i++) {
    const t = i / BACKBONE_SEGMENTS;
    pts.push([helixX(t, strandOffset), helixY(t)]);
  }

  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  const tension = 0.3;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];

    const cp1x = p1[0] + (p2[0] - p0[0]) * tension;
    const cp1y = p1[1] + (p2[1] - p0[1]) * tension;
    const cp2x = p2[0] - (p3[0] - p1[0]) * tension;
    const cp2y = p2[1] - (p3[1] - p1[1]) * tension;

    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }

  return d;
}

/**
 * Generate a slightly curved base pair rung connecting the two strands.
 * Uses a quadratic bezier for a gentle arc rather than a straight line.
 */
function generateRungPath(index: number): string {
  const t = (index + 0.5) / BASE_PAIRS;
  const x1 = helixX(t, 0);
  const x2 = helixX(t, Math.PI);
  const y = helixY(t);

  // Control point creates a subtle curve on the rung
  const midX = (x1 + x2) / 2;
  const curveStrength = 4 * Math.sin(t * Math.PI * 6); // varies per rung
  const cpY = y + curveStrength;

  return `M ${x1.toFixed(2)} ${y.toFixed(2)} Q ${midX.toFixed(2)} ${cpY.toFixed(2)} ${x2.toFixed(2)} ${y.toFixed(2)}`;
}

/**
 * Generate deterministic epigenetic marks using seeded PRNG.
 * Variety of shapes, sizes, and positions along the helix.
 */
function generateEpiMarks(): EpiMark[] {
  const rng = seededRandom(42);
  const marks: EpiMark[] = [];
  const shapes: MarkShape[] = ["circle", "diamond", "cluster", "triangle"];
  const colors = [COLORS.methylation, COLORS.acetylation, COLORS.phosphorylation];

  for (let i = 0; i < 32; i++) {
    const t = (i * 1.15 + rng() * 0.5) / 32;
    const clampedT = Math.min(Math.max(t, 0.02), 0.98);
    const strandSide = i % 2 === 0 ? 0 : Math.PI;
    const baseX = helixX(clampedT, strandSide);
    const baseY = helixY(clampedT);

    // Offset outward from the helix backbone
    const offsetDir = i % 2 === 0 ? 1 : -1;
    const offset = 6 + rng() * 10;

    marks.push({
      x: baseX + offsetDir * offset,
      y: baseY + (rng() - 0.5) * 6,
      shape: shapes[Math.floor(rng() * shapes.length)],
      size: 2.5 + rng() * 3,
      color: colors[Math.floor(rng() * colors.length)],
      rotation: rng() * 360,
      // Pre-compute scatter targets for rejuvenation dissolve
      scatterX: baseX + offsetDir * (40 + rng() * 60),
      scatterY: baseY + (rng() - 0.5) * 80,
      scatterRotation: rng() * 720 - 360,
    });
  }

  return marks;
}

/* ─── SVG mark renderers ─── */

function renderMarkShape(mark: EpiMark, index: number, className: string) {
  const key = `${className}-${index}`;
  const common = {
    className,
    "data-idx": index,
    opacity: 0.7,
  };

  switch (mark.shape) {
    case "circle":
      return (
        <circle
          key={key}
          {...common}
          cx={mark.x}
          cy={mark.y}
          r={mark.size}
          fill={mark.color}
        />
      );

    case "diamond":
      return (
        <rect
          key={key}
          {...common}
          x={mark.x - mark.size}
          y={mark.y - mark.size}
          width={mark.size * 2}
          height={mark.size * 2}
          fill={mark.color}
          transform={`rotate(45 ${mark.x} ${mark.y})`}
        />
      );

    case "triangle": {
      const s = mark.size * 1.3;
      const points = [
        `${mark.x},${mark.y - s}`,
        `${mark.x - s * 0.87},${mark.y + s * 0.5}`,
        `${mark.x + s * 0.87},${mark.y + s * 0.5}`,
      ].join(" ");
      return (
        <polygon
          key={key}
          {...common}
          points={points}
          fill={mark.color}
          transform={`rotate(${mark.rotation} ${mark.x} ${mark.y})`}
        />
      );
    }

    case "cluster": {
      // 3 small circles in a triangular arrangement
      const r = mark.size * 0.55;
      const spread = mark.size * 0.7;
      return (
        <g key={key} {...common}>
          <circle cx={mark.x} cy={mark.y - spread} r={r} fill={mark.color} />
          <circle
            cx={mark.x - spread * 0.87}
            cy={mark.y + spread * 0.5}
            r={r}
            fill={mark.color}
          />
          <circle
            cx={mark.x + spread * 0.87}
            cy={mark.y + spread * 0.5}
            r={r}
            fill={mark.color}
          />
        </g>
      );
    }
  }
}

/* ─── component ─── */

interface DnaStrandProps {
  mode?: "aging" | "backup" | "rejuvenation";
}

export function DnaStrand({ mode = "aging" }: DnaStrandProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Memoize deterministic data so it's stable across renders
  const epiMarks = useMemo(() => generateEpiMarks(), []);
  const strand1Path = useMemo(() => generateHelixPath(0), []);
  const strand2Path = useMemo(() => generateHelixPath(Math.PI), []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const marks = svg.querySelectorAll<SVGElement>(".epi-mark");
    const cleanMarks = svg.querySelectorAll<SVGElement>(".clean-mark");
    const backbone = svg.querySelectorAll<SVGElement>(".backbone");
    const rungs = svg.querySelectorAll<SVGElement>(".base-rung");
    const nucleotides = svg.querySelectorAll<SVGElement>(".nucleotide");

    const ctx = gsap.context(() => {
      if (mode === "aging") {
        // Marks accumulate progressively on scroll
        marks.forEach((mark, i) => {
          gsap.from(mark, {
            opacity: 0,
            scale: 0,
            transformOrigin: "center center",
            duration: 0.4,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: svg,
              start: `top+=${i * 18} 70%`,
              toggleActions: "play none none none",
            },
          });
        });

        // Backbone subtly dulls as marks accumulate
        backbone.forEach((b) => {
          gsap.to(b, {
            stroke: COLORS.mutedLight,
            strokeWidth: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: "top 40%",
              end: "bottom 50%",
              scrub: true,
            },
          });
        });
      }

      if (mode === "backup") {
        // Clean marks fade in as a stored copy
        cleanMarks.forEach((mark, i) => {
          gsap.from(mark, {
            opacity: 0,
            scale: 0,
            transformOrigin: "center center",
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.03,
            scrollTrigger: {
              trigger: svg,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          });
        });

        // Backbone glows with vitality
        backbone.forEach((b) => {
          gsap.to(b, {
            stroke: COLORS.terracotta,
            strokeWidth: 2.5,
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: "top 50%",
              end: "bottom 40%",
              scrub: true,
            },
          });
        });

        // Glow filter intensifies
        const glowBlur = svg.querySelector("#backupGlowBlur");
        if (glowBlur) {
          gsap.to(glowBlur, {
            attr: { stdDeviation: 6 },
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: "top 55%",
              end: "bottom 45%",
              scrub: true,
            },
          });
        }
      }

      if (mode === "rejuvenation") {
        // Marks scatter and dissolve like particles blowing away
        marks.forEach((mark, i) => {
          const data = epiMarks[i];
          if (!data) return;

          gsap.to(mark, {
            x: data.scatterX - data.x,
            y: data.scatterY - data.y,
            rotation: data.scatterRotation,
            opacity: 0,
            scale: 0.2,
            transformOrigin: "center center",
            ease: "power3.in",
            scrollTrigger: {
              trigger: svg,
              start: `top+=${i * 12} 60%`,
              end: `top+=${i * 12 + 120} 60%`,
              scrub: true,
            },
          });
        });

        // Backbone brightens and thickens as rejuvenation occurs
        backbone.forEach((b) => {
          gsap.to(b, {
            stroke: COLORS.terracotta,
            strokeWidth: 3,
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: "top 40%",
              end: "bottom 55%",
              scrub: true,
            },
          });
        });

        // Rungs gain opacity and color
        rungs.forEach((rung, i) => {
          gsap.to(rung, {
            opacity: 0.9,
            strokeWidth: 1.8,
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: `top+=${i * 10} 50%`,
              end: `top+=${i * 10 + 200} 50%`,
              scrub: true,
            },
          });
        });

        // Nucleotide dots glow
        nucleotides.forEach((n, i) => {
          gsap.to(n, {
            opacity: 1,
            r: 3.5,
            ease: "none",
            scrollTrigger: {
              trigger: svg,
              start: `top+=${i * 8} 45%`,
              end: `top+=${i * 8 + 150} 45%`,
              scrub: true,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, [mode, epiMarks]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="mx-auto h-[480px] w-full max-w-[300px]"
    >
      <defs>
        {/* Glow filter for backup mode */}
        <filter id="backupGlow" x="-20%" y="-10%" width="140%" height="120%">
          <feGaussianBlur
            id="backupGlowBlur"
            in="SourceGraphic"
            stdDeviation="3"
            result="blur"
          />
          <feFlood floodColor={COLORS.terracotta} floodOpacity="0.15" result="flood" />
          <feComposite in="flood" in2="blur" operator="in" result="coloredBlur" />
          <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
        </filter>

        {/* Soft ambient glow for nucleotides */}
        <filter id="nucleotideGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>

        {/* Gradient for backbone depth */}
        <linearGradient id="backboneGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.muted} stopOpacity="0.6" />
          <stop offset="50%" stopColor={COLORS.muted} stopOpacity="1" />
          <stop offset="100%" stopColor={COLORS.muted} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="backboneGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.mutedLight} stopOpacity="0.5" />
          <stop offset="50%" stopColor={COLORS.mutedLight} stopOpacity="0.9" />
          <stop offset="100%" stopColor={COLORS.mutedLight} stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* ─── base pair rungs ─── */}
      {Array.from({ length: BASE_PAIRS }).map((_, i) => {
        const pairType = BASE_PAIR_SEQUENCE[i];
        const color = pairType === "AT" ? COLORS.atWarm : COLORS.gcCool;
        return (
          <path
            key={`rung-${i}`}
            className="base-rung"
            d={generateRungPath(i)}
            fill="none"
            stroke={color}
            strokeWidth={1.2}
            opacity={0.45}
            strokeLinecap="round"
          />
        );
      })}

      {/* ─── nucleotide dots at rung endpoints ─── */}
      {Array.from({ length: BASE_PAIRS }).map((_, i) => {
        const t = (i + 0.5) / BASE_PAIRS;
        const pairType = BASE_PAIR_SEQUENCE[i];
        const color1 = pairType === "AT" ? COLORS.atWarm : COLORS.gcCool;
        const color2 = pairType === "AT" ? COLORS.atWarmLight : COLORS.gcCoolLight;
        const x1 = helixX(t, 0);
        const x2 = helixX(t, Math.PI);
        const y = helixY(t);

        return (
          <g key={`nucleotide-pair-${i}`}>
            <circle
              className="nucleotide"
              cx={x1}
              cy={y}
              r={2.5}
              fill={color1}
              opacity={0.7}
              filter="url(#nucleotideGlow)"
            />
            <circle
              className="nucleotide"
              cx={x2}
              cy={y}
              r={2.5}
              fill={color2}
              opacity={0.7}
              filter="url(#nucleotideGlow)"
            />
          </g>
        );
      })}

      {/* ─── double helix backbone (strand 1) ─── */}
      <path
        className="backbone"
        d={strand1Path}
        fill="none"
        stroke="url(#backboneGrad1)"
        strokeWidth={2.2}
        strokeLinecap="round"
        filter={mode === "backup" ? "url(#backupGlow)" : undefined}
      />

      {/* ─── double helix backbone (strand 2) ─── */}
      <path
        className="backbone"
        d={strand2Path}
        fill="none"
        stroke="url(#backboneGrad2)"
        strokeWidth={2}
        strokeLinecap="round"
        filter={mode === "backup" ? "url(#backupGlow)" : undefined}
      />

      {/* ─── epigenetic marks (varied shapes) ─── */}
      {epiMarks.map((mark, i) => renderMarkShape(mark, i, "epi-mark"))}

      {/* ─── clean marks (backup mode reference pattern) ─── */}
      {mode === "backup" &&
        Array.from({ length: BASE_PAIRS }).map((_, i) => {
          const t = (i + 0.5) / BASE_PAIRS;
          const strandSide = i % 2 === 0 ? 0 : Math.PI;
          const x = helixX(t, strandSide);
          const y = helixY(t);
          const pairType = BASE_PAIR_SEQUENCE[i];

          return (
            <g key={`clean-${i}`} className="clean-mark" opacity={0}>
              {/* Outer ring */}
              <circle
                cx={x}
                cy={y}
                r={5}
                fill="none"
                stroke={COLORS.terracotta}
                strokeWidth={1}
                opacity={0.5}
              />
              {/* Inner dot */}
              <circle
                cx={x}
                cy={y}
                r={2}
                fill={pairType === "AT" ? COLORS.atWarm : COLORS.gcCool}
                opacity={0.8}
              />
            </g>
          );
        })}
    </svg>
  );
}
