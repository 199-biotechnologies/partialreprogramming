import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://partialreprogramming.vercel.app"),
  title: "Partial Reprogramming — The Science of Cellular Youth",
  description:
    "An interactive guide to partial reprogramming: how scientists are learning to reverse cellular aging without erasing cell identity.",
  authors: [{ name: "Boris Djordjevic" }],
  openGraph: {
    title: "Partial Reprogramming — The Science of Cellular Youth",
    description:
      "Your cells hold a backup copy of their youth. Scientists are learning how to access it. An in-depth editorial by 199 Biotechnologies.",
    type: "website",
    siteName: "Partial Reprogramming",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partial Reprogramming — The Science of Cellular Youth",
    description:
      "Your cells hold a backup copy of their youth. Scientists are learning how to access it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-[100dvh] antialiased">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
