"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "The Science" },
    { href: "/landscape", label: "The Landscape" },
    { href: "/evidence", label: "The Evidence" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--cream)]/90 backdrop-blur-md shadow-[0_1px_0_var(--muted-light)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-lg tracking-tight text-[var(--charcoal)] transition-opacity hover:opacity-70"
        >
          Partial Reprogramming
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden text-sm tracking-wide transition-colors md:block ${
                pathname === link.href
                  ? "text-[var(--terracotta)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--charcoal)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
