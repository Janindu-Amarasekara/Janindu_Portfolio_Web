import Link from "next/link";
import type { Project } from "@/lib/site";

const statusLabel: Record<Project["status"], string> = {
  coming_soon: "Coming soon",
  in_progress: "In progress",
};

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-[var(--color-fg)]">
          {project.name}
        </h3>
        <span className="shrink-0 rounded-full bg-[var(--color-chip)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-fg)]">
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-shadow hover:shadow-md"
        rel="noopener noreferrer"
        target="_blank"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6">
      {inner}
    </div>
  );
}
