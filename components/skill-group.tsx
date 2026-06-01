import type { SkillGroup } from "@/lib/site";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-md">
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        {group.title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-chip)]/50 px-3 py-1.5 text-sm leading-snug text-[var(--color-fg)] transition-colors group-hover:border-[var(--color-accent)]/20"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
