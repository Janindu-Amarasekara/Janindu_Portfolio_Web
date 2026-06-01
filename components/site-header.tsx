"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  // { href: "#case-studies", label: "Work", id: "case-studies" },
  // { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--color-fg)]"
        >
          {siteConfig.person.name}
        </Link>
        <nav
          className="hidden items-center gap-1 text-sm font-medium text-[var(--color-muted)] md:flex"
          aria-label="Primary"
        >
          {nav
            .filter((item) => item.id !== "contact")
            .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 transition-colors hover:text-[var(--color-fg)] ${
                active === item.id
                  ? "bg-[var(--color-chip)]/70 text-[var(--color-fg)]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-accent-fg)] shadow-sm transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/40 md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="m6 6 12 12" />
                  <path d="m18 6-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {open ? (
        <nav
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 px-4 py-3 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-chip)]/60 ${
                    active === item.id
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-fg)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
