import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {siteConfig.person.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy" className="hover:text-[var(--color-fg)]">
            Privacy
          </Link>
          <a
            href={siteConfig.person.social.github}
            className="hover:text-[var(--color-fg)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href={siteConfig.person.social.linkedin}
            className="hover:text-[var(--color-fg)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
