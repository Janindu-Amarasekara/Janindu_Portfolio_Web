import type { CaseStudy } from "@/lib/site";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[var(--color-fg)]">{study.title}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-medium text-[var(--color-fg)]">Problem</dt>
          <dd className="mt-1 text-[var(--color-muted)]">{study.problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-[var(--color-fg)]">My role</dt>
          <dd className="mt-1 text-[var(--color-muted)]">{study.role}</dd>
        </div>
        <div>
          <dt className="font-medium text-[var(--color-fg)]">Approach</dt>
          <dd className="mt-1 text-[var(--color-muted)]">{study.approach}</dd>
        </div>
        <div>
          <dt className="font-medium text-[var(--color-fg)]">Outcome</dt>
          <dd className="mt-1 text-[var(--color-muted)]">{study.outcome}</dd>
        </div>
      </dl>
      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label="Technologies"
      >
        {study.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-[var(--color-chip)] px-3 py-1 text-xs font-medium text-[var(--color-fg)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
