import Image from "next/image";

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type ProfileAvatarProps = {
  name: string;
  /** Path under `public/`, e.g. `/avatar.jpg`, or `null` for a monogram placeholder. */
  src: string | null;
};

export function ProfileAvatar({ name, src }: ProfileAvatarProps) {
  const initials = initialsFromName(name);
  const size = 280;

  return (
    <div className="relative mx-auto w-full max-w-[280px] shrink-0 lg:mx-0">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[var(--color-accent)]/15 blur-2xl"
        aria-hidden
      />
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-[var(--color-fg)]/[0.04] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]">
        {src ? (
          <Image
            src={src}
            alt={`${name} — profile`}
            width={size}
            height={size}
            priority
            sizes="(max-width: 1024px) 56vw, 280px"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-chip)] via-[var(--color-surface)] to-[var(--color-border)]/40"
            role="img"
            aria-label={`${name}`}
          >
            <span className="select-none text-5xl font-semibold tracking-tight text-[var(--color-accent)] sm:text-6xl">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
