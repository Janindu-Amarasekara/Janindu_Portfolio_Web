import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this portfolio handles information you submit.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
          Privacy
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>
        <div className="mt-10 max-w-none space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
          <p>
            This site is operated by {siteConfig.person.name} as a personal portfolio. It does
            not use advertising cookies or collect personal data through forms. Contact details
            on the site are provided for you to reach me directly by phone or email.
          </p>
          <p className="mt-4">
            I do not sell personal data. If you email me, your message may be retained in my
            mailbox according to normal email retention practices.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-[var(--color-accent)] underline-offset-2 hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
