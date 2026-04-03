import type { Metadata } from "next";
import EvidenceContent from "./EvidenceContent";

export const metadata: Metadata = {
  title: "The Evidence — Partial Reprogramming",
  description:
    "13 landmark papers that built the science of cellular rejuvenation. From Yamanaka's 2006 discovery to the 2026 human trial.",
};

export default function EvidencePage() {
  return <EvidenceContent />;
}
