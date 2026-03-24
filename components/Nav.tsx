"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-50/95 backdrop-blur-sm border-b border-ink-200"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-14 md:h-16">

          <Link
            href="/"
            className="font-mono text-sm font-medium text-ink-900 tracking-tight hover:text-amber transition-colors"
          >
            JO<span className="text-amber">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm text-ink-500 hover:text-ink-900 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:obanovwejoseph@gmail.com"
            className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
          >
            Get in touch
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-ink-900 transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink-900 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink-900 transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>

        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink-50 border-t border-ink-200 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-base text-ink-700 hover:text-ink-900 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:obanovwejoseph@gmail.com"
            className="btn-primary mt-6 text-sm w-full justify-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
