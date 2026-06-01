import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[var(--color-border)] py-16 sm:py-20"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-accent)]">
                <span className="h-px w-6 bg-[var(--color-accent)]/60" aria-hidden />
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={`${id}-heading`}
              className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-3xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
