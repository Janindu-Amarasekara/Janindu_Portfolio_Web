import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-medium tracking-wide text-[var(--color-accent)]">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
          That URL is not part of this portfolio. Head back to the home page to see experience,
          skills, and contact details.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-[var(--color-accent-fg)] transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
