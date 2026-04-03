"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setScrollProgress(Math.min(window.scrollY / docHeight, 1));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "/", label: "The Science" },
    { href: "/landscape", label: "The Landscape" },
    { href: "/evidence", label: "The Evidence" },
  ];

  const blurAmount = scrolled ? Math.min(12, 4 + scrollProgress * 8) : 0;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(250, 248, 245, 0.92)"
            : "transparent",
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          boxShadow: scrolled
            ? "0 1px 0 var(--muted-light)"
            : "none",
        }}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress * 100}%`,
            backgroundColor: "var(--terracotta)",
          }}
        />

        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          {/* Brand */}
          <Link
            href="/"
            className="relative font-[family-name:var(--font-playfair)] text-lg tracking-tight text-[var(--charcoal)] transition-opacity hover:opacity-70"
          >
            Partial Reprogramming
            <span
              className="ml-1.5 inline-block align-super text-[0.55em] font-semibold tracking-widest text-[var(--terracotta)]"
              aria-hidden="true"
            >
              199
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[var(--charcoal)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--charcoal)]"
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-[var(--terracotta)] transition-all duration-300 ease-out ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block h-[1.5px] w-5 rounded-full bg-[var(--charcoal)] transition-all duration-300 ease-out"
              style={{
                transform: menuOpen
                  ? "translateY(6.5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-5 rounded-full bg-[var(--charcoal)] transition-all duration-300 ease-out"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="block h-[1.5px] w-5 rounded-full bg-[var(--charcoal)] transition-all duration-300 ease-out"
              style={{
                transform: menuOpen
                  ? "translateY(-6.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-out md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div
          className="flex flex-col items-center gap-10"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="relative font-[family-name:var(--font-playfair)] text-3xl tracking-tight text-[var(--charcoal)] transition-colors hover:text-[var(--terracotta)]"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.4s ${0.15 + i * 0.08}s, transform 0.4s ${0.15 + i * 0.08}s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-[var(--terracotta)] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Decorative mark in mobile menu */}
        <p
          className="absolute bottom-12 text-xs tracking-[0.3em] uppercase text-[var(--muted)]"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.6s 0.35s",
          }}
        >
          199 Biotechnologies
        </p>
      </div>
    </>
  );
}
