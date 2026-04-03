"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ─── palette ─── */
const LAYER_COLORS = [
  "#c45d3e", // terracotta (primary)
  "#d4714f", // warm clay
  "#b8533a", // deep terracotta
  "#e08a5e", // amber
  "#a04832", // burnt sienna
  "#c97a56", // copper
  "#8b3a28", // dark rust
];

const LAYER_COUNT = 7;
const WIDTH = 1200;
const HEIGHT = 300;
const CENTER_Y = HEIGHT / 2;
const POINTS = 120; // high-res path segments

/* ─── wave math ─── */

interface LayerParams {
  amplitude: number;
  frequency: number;
  phase: number;
  yOffset: number;
}

function getLayerParams(index: number): LayerParams {
  return {
    amplitude: 38 - index * 4.5,
    frequency: 0.008 + index * 0.0012,
    phase: index * 0.7,
    yOffset: CENTER_Y + (index - 3) * 6,
  };
}

/**
 * Generate a smooth cubic bezier path (C commands) for a sine-like wave.
 * Each segment uses two control points to approximate the curve between sample points,
 * producing a genuinely smooth result rather than jagged L-command polylines.
 */
function generateWavePath(
  params: LayerParams,
  harmonicShift = 0,
  ampDecay = 1,
  phaseDisrupt = 0
): string {
  const { amplitude, frequency, phase, yOffset } = params;
  const step = WIDTH / POINTS;
  const pts: [number, number][] = [];

  for (let i = 0; i <= POINTS; i++) {
    const x = i * step;
    const t = x * frequency;

    // primary sine + two harmonics for richness
    const primary = Math.sin(t + phase + phaseDisrupt) * amplitude * ampDecay;
    const harmonic2 =
      Math.sin(t * 2.2 + phase * 1.6 + harmonicShift) *
      amplitude *
      0.25 *
      ampDecay;
    const harmonic3 =
      Math.sin(t * 3.7 + phase * 0.8 + harmonicShift * 1.4) *
      amplitude *
      0.12 *
      ampDecay;

    const y = yOffset + primary + harmonic2 + harmonic3;
    pts.push([x, y]);
  }

  // Build cubic bezier path using Catmull-Rom to Bezier conversion
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];

    // Catmull-Rom tangents scaled for cubic bezier control points
    const tension = 0.35;
    const cp1x = p1[0] + (p2[0] - p0[0]) * tension;
    const cp1y = p1[1] + (p2[1] - p0[1]) * tension;
    const cp2x = p2[0] - (p3[0] - p1[0]) * tension;
    const cp2y = p2[1] - (p3[1] - p1[1]) * tension;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }

  return d;
}

function getCleanPath(index: number): string {
  return generateWavePath(getLayerParams(index));
}

function getDistortedPath(index: number): string {
  const params = getLayerParams(index);
  // Each layer distorts differently for organic chaos
  const harmonicShift = 2.5 + index * 0.8;
  const ampDecay = 0.3 + index * 0.05;
  const phaseDisrupt = 1.8 + index * 0.6;

  // Override with chaotic parameters
  const chaotic: LayerParams = {
    ...params,
    frequency: params.frequency * (1.6 + index * 0.15),
    amplitude: params.amplitude * (0.6 + index * 0.08),
  };

  return generateWavePath(chaotic, harmonicShift, ampDecay, phaseDisrupt);
}

/* ─── component ─── */

export function Waveform() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>(".wave-line");

    const ctx = gsap.context(() => {
      paths.forEach((path, i) => {
        // Morph wave shape: harmonic -> chaotic
        gsap.to(path, {
          attr: { d: getDistortedPath(i) },
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 65%",
            end: "bottom 15%",
            scrub: 1.8,
          },
        });

        // Opacity shift and dash fragmentation
        gsap.to(path, {
          opacity: 0.15 + i * 0.06,
          strokeDasharray: `${6 + i * 3} ${3 + i * 2.5}`,
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 45%",
            end: "bottom 20%",
            scrub: 1.8,
          },
        });
      });

      // Animate the glow filter intensity
      const blur = svgRef.current?.querySelector("#waveGlowBlur");
      if (blur) {
        gsap.to(blur, {
          attr: { stdDeviation: 1 },
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 50%",
            end: "bottom 25%",
            scrub: 1.5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const layerOpacities = [0.8, 0.65, 0.5, 0.4, 0.3, 0.22, 0.15];
  const layerWidths = [2.2, 1.9, 1.6, 1.4, 1.2, 1.0, 0.8];

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Glow filter for the primary wave layers */}
        <filter id="waveGlow" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur
            id="waveGlowBlur"
            in="SourceGraphic"
            stdDeviation="4"
            result="blur"
          />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Subtle outer glow for depth */}
        <filter id="waveOuterGlow" x="-15%" y="-40%" width="130%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="glow" />
          <feColorMatrix
            in="glow"
            type="matrix"
            values="1 0 0 0 0  0 0.4 0 0 0  0 0 0.2 0 0  0 0 0 0.3 0"
            result="coloredGlow"
          />
          <feComposite in="SourceGraphic" in2="coloredGlow" operator="over" />
        </filter>
      </defs>

      {/* Background glow layer (lowest two waves duplicated as blurred glow) */}
      {[0, 1].map((i) => (
        <path
          key={`glow-${i}`}
          d={getCleanPath(i)}
          fill="none"
          stroke={LAYER_COLORS[i]}
          strokeWidth={layerWidths[i] * 3}
          opacity={0.08}
          strokeLinecap="round"
          filter="url(#waveOuterGlow)"
        />
      ))}

      {/* Main wave layers */}
      {Array.from({ length: LAYER_COUNT }).map((_, i) => (
        <path
          key={i}
          className="wave-line"
          d={getCleanPath(i)}
          fill="none"
          stroke={LAYER_COLORS[i]}
          strokeWidth={layerWidths[i]}
          opacity={layerOpacities[i]}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={i < 3 ? "url(#waveGlow)" : undefined}
        />
      ))}
    </svg>
  );
}
