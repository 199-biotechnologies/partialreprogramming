"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Waveform() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll(".wave-line");

    const ctx = gsap.context(() => {
      paths.forEach((path, i) => {
        const original = path.getAttribute("d") || "";
        // Create progressively distorted wave
        gsap.to(path, {
          attr: {
            d: getDistortedPath(i),
          },
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        });
        gsap.to(path, {
          opacity: 0.3 + i * 0.1,
          strokeDasharray: `${8 + i * 4} ${4 + i * 3}`,
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 40%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 200"
      className="w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="wave-line"
          d={getCleanPath(i)}
          fill="none"
          stroke="var(--terracotta)"
          strokeWidth={2 - i * 0.4}
          opacity={0.8 - i * 0.2}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function getCleanPath(index: number): string {
  const yOffset = 100 + index * 12;
  const amp = 30 - index * 5;
  let d = `M 0 ${yOffset}`;
  for (let x = 0; x <= 800; x += 10) {
    const y = yOffset + Math.sin((x / 60) + index * 0.5) * amp;
    d += ` L ${x} ${y.toFixed(1)}`;
  }
  return d;
}

function getDistortedPath(index: number): string {
  const yOffset = 100 + index * 12;
  const amp = 30 - index * 5;
  let d = `M 0 ${yOffset}`;
  for (let x = 0; x <= 800; x += 10) {
    const noise = Math.sin(x * 0.3 + index) * 15 + Math.cos(x * 0.7) * 10;
    const decay = Math.sin((x / 60) + index * 0.5) * (amp * 0.3);
    const y = yOffset + decay + noise;
    d += ` L ${x} ${y.toFixed(1)}`;
  }
  return d;
}
