import type { Metadata } from "next";
import LandscapeContent from "./LandscapeContent";

export const metadata: Metadata = {
  title: "The Landscape — Partial Reprogramming",
  description:
    "Companies, researchers, and clinical trials driving the partial reprogramming revolution. From Altos Labs to the first human trial.",
};

export default function LandscapePage() {
  return <LandscapeContent />;
}
