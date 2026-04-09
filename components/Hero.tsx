"use client";

import { useEffect, useRef } from "react";

const highlights = [
  "Production ecommerce platforms",
  "Full-stack web applications",
  "Backend API systems",
  "Business productivity tools",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-fade]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 120 * i);
    });
  }, []);

  return (
    <section
      ref={containerRef}
     className="relative flex flex-col justify-center pt-20 pb-14 md:min-h-screen md:pt-24 md:pb-20"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D5D5D010 1px, transparent 1px), linear-gradient(to bottom, #D5D5D010 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="section-container relative">

        <h1
          data-fade
          className="font-display text-display-xl text-ink-900 leading-[0.92] mb-5 md:mb-6"
        >
          Joseph
          <br />
          Obanovwe
        </h1>

        <div data-fade className="flex items-center gap-3 mb-5 md:mb-8">
          <span className="w-8 h-px bg-amber" />
          <p className="font-mono text-sm text-amber tracking-wide-sm uppercase">
            Full-Stack Software Engineer
          </p>
        </div>

        <p
          data-fade
          className="text-ink-500 text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-10"
        >
          I build production-ready web applications; ecommerce platforms,
          business systems, and scalable backend APIs. using modern JavaScript
          and backend frameworks.
        </p>

        <ul data-fade className="flex flex-wrap gap-2 mb-7 md:mb-12">
          {highlights.map((h) => (
            <li key={h} className="tag">
              {h}
            </li>
          ))}
        </ul>

        <div data-fade className="flex flex-wrap gap-3 items-center">
          <a href="#work" className="btn-primary">
            View Selected Work
          </a>
          <a
            href="https://github.com/joekaro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
