import type { ComponentType, SVGProps } from "react";
import { siteConfig } from "@/lib/site";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
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
      Icon: PhoneIcon,
    },
    {
      label: "Email",
      value: social.email,
      href: `mailto:${social.email}`,
      Icon: MailIcon,
    },
    {
      label: "GitHub",
      value: githubHandle,
      href: social.github,
      external: true,
      Icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: linkedinHandle,
      href: social.linkedin,
      external: true,
      Icon: LinkedinIcon,
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
            aria-label={`${item.label}: ${item.value}`}
            className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)] hover:shadow-md"
            {...(item.external
              ? { rel: "noopener noreferrer", target: "_blank" }
              : undefined)}
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-chip)]/70 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-fg)]">
              <item.Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                {item.label}
              </span>
              <span className="mt-0.5 truncate text-sm font-medium text-[var(--color-fg)] group-hover:underline group-hover:underline-offset-4">
                {item.value}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
