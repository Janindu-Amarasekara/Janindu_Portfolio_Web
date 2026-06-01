import type { SkillGroup } from "@/lib/site";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        {group.title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {group.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
