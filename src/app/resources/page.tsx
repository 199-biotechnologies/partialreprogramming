import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources — Partial Reprogramming",
  description:
    "The best videos, podcasts, books, courses, and communities for learning about partial reprogramming and cellular rejuvenation.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
