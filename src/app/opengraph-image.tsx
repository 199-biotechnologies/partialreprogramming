import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Partial Reprogramming — The Science of Cellular Youth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#faf8f5",
          padding: "80px 100px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Main headline */}
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.15,
            color: "#1a1a18",
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Your cells hold a backup copy of their youth
        </div>

        {/* Terracotta accent line */}
        <div
          style={{
            width: 120,
            height: 3,
            backgroundColor: "#c45d3e",
            marginTop: 40,
            marginBottom: 40,
            borderRadius: 2,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#6b6860",
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Partial Reprogramming — The Science of Cellular Youth
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 100,
            fontSize: 14,
            color: "#9c9a93",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
          }}
        >
          199 Biotechnologies
        </div>
      </div>
    ),
    { ...size },
  );
}
