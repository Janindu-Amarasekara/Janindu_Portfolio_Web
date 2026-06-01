import { siteConfig } from "@/lib/site";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

function buildItems(): ContactItem[] {
  const { social } = siteConfig.person;
  const githubHandle = social.github.replace(/\/$/, "").split("/").pop() ?? social.github;
  const linkedinHandle =
    social.linkedin.replace(/\/$/, "").split("/").filter(Boolean).pop() ?? social.linkedin;

  return [
    {
      label: "Mobile",
      value: social.phone,
      href: `tel:${social.phone.replace(/\s/g, "")}`,
    },
    {
      label: "Email",
      value: social.email,
      href: `mailto:${social.email}`,
    },
    {
      label: "GitHub",
      value: githubHandle,
      href: social.github,
      external: true,
    },
    {
      label: "LinkedIn",
      value: linkedinHandle,
      href: social.linkedin,
      external: true,
    },
  ];
}

export function ContactDetails() {
  const items = buildItems();

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-5 py-4 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]"
            {...(item.external
              ? { rel: "noopener noreferrer", target: "_blank" }
              : undefined)}
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
              {item.label}
            </span>
            <span className="mt-2 text-sm font-medium text-[var(--color-fg)] group-hover:underline group-hover:underline-offset-4">
              {item.value}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
