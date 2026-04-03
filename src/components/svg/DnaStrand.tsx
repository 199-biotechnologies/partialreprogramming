"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface DnaStrandProps {
  mode?: "aging" | "backup" | "rejuvenation";
}

export function DnaStrand({ mode = "aging" }: DnaStrandProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const marks = svgRef.current.querySelectorAll(".epi-mark");
    const cleanMarks = svgRef.current.querySelectorAll(".clean-mark");
    const backbone = svgRef.current.querySelectorAll(".backbone");

    const ctx = gsap.context(() => {
      if (mode === "aging") {
        // Marks accumulate on scroll
        marks.forEach((mark, i) => {
          gsap.from(mark, {
            opacity: 0,
            scale: 0,
            transformOrigin: "center",
            duration: 0.3,
            scrollTrigger: {
              trigger: svgRef.current,
              start: `top+=${i * 30} 70%`,
              toggleActions: "play none none none",
            },
          });
        });
      }

      if (mode === "backup") {
        // Clean strand glows underneath
        cleanMarks.forEach((mark, i) => {
          gsap.from(mark, {
            opacity: 0,
            duration: 0.8,
            delay: i * 0.05,
            scrollTrigger: {
              trigger: svgRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          });
        });
      }

      if (mode === "rejuvenation") {
        // Marks get stripped away
        marks.forEach((mark, i) => {
          gsap.to(mark, {
            opacity: 0,
            scale: 0,
            transformOrigin: "center",
            ease: "power2.in",
            scrollTrigger: {
              trigger: svgRef.current,
              start: `top+=${i * 20} 60%`,
              end: `top+=${i * 20 + 100} 60%`,
              scrub: true,
            },
          });
        });
        // Backbone brightens
        backbone.forEach((b) => {
          gsap.to(b, {
            stroke: "var(--terracotta)",
            strokeWidth: 3,
            ease: "none",
            scrollTrigger: {
              trigger: svgRef.current,
              start: "top 40%",
              end: "bottom 60%",
              scrub: true,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, [mode]);

  const basePairs = 16;
  const height = 400;
  const width = 300;
  const cx = width / 2;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto h-[400px] w-full max-w-[300px]"
    >
      {/* Double helix backbone */}
      <path
        className="backbone"
        d={generateHelix(cx, height, basePairs, 40, 0)}
        fill="none"
        stroke="var(--muted)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        className="backbone"
        d={generateHelix(cx, height, basePairs, 40, Math.PI)}
        fill="none"
        stroke="var(--muted)"
        strokeWidth={2}
        strokeLinecap="round"
      />

      {/* Base pair rungs */}
      {Array.from({ length: basePairs }).map((_, i) => {
        const y = 20 + (i / basePairs) * (height - 40);
        const phase = (i / basePairs) * Math.PI * 4;
        const x1 = cx + Math.sin(phase) * 40;
        const x2 = cx + Math.sin(phase + Math.PI) * 40;
        return (
          <line
            key={`rung-${i}`}
            x1={x1}
            y1={y}
            x2={x2}
            y2={y}
            stroke="var(--muted-light)"
            strokeWidth={1}
            opacity={0.6}
          />
        );
      })}

      {/* Epigenetic marks (noise) */}
      {Array.from({ length: 20 }).map((_, i) => {
        const y = 15 + ((i * 1.3) / 20) * (height - 30);
        const phase = ((i * 1.3) / 20) * Math.PI * 4;
        const side = i % 2 === 0 ? 1 : -1;
        const x = cx + Math.sin(phase) * 40 * side + (Math.random() - 0.5) * 20;
        return (
          <circle
            key={`mark-${i}`}
            className="epi-mark"
            cx={x}
            cy={y}
            r={3 + (i % 3)}
            fill="var(--terracotta)"
            opacity={0.6}
          />
        );
      })}

      {/* Clean marks (backup copy - only visible in backup mode) */}
      {mode === "backup" &&
        Array.from({ length: basePairs }).map((_, i) => {
          const y = 20 + (i / basePairs) * (height - 40);
          const phase = (i / basePairs) * Math.PI * 4;
          const x = cx + Math.sin(phase) * 40;
          return (
            <circle
              key={`clean-${i}`}
              className="clean-mark"
              cx={x}
              cy={y}
              r={4}
              fill="none"
              stroke="var(--terracotta)"
              strokeWidth={1.5}
              opacity={0}
            />
          );
        })}
    </svg>
  );
}

function generateHelix(
  cx: number,
  height: number,
  points: number,
  amplitude: number,
  offset: number
): string {
  let d = "";
  for (let i = 0; i <= points * 4; i++) {
    const t = i / (points * 4);
    const y = 20 + t * (height - 40);
    const x = cx + Math.sin(t * Math.PI * 4 + offset) * amplitude;
    d += i === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)}` : ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}
