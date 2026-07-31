import Link from "next/link";
import {
  aboutParagraphs,
  caseStudies,
  experience,
  heroContent,
  projects,
  siteConfig,
  skillGroups,
} from "@/lib/site";
import { CaseStudyCard } from "@/components/case-study-card";
import { ContactDetails } from "@/components/contact-details";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProfileAvatar } from "@/components/profile-avatar";
import { SkillGroupCard } from "@/components/skill-group";
import { Reveal } from "@/components/reveal";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

export default function Home() {
  const { person } = siteConfig;
  const cvHref = person.cvPath;
  const { social } = person;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]/80 bg-[var(--color-surface)]/60 p-8 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12 dark:bg-[var(--color-surface)]/30">
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--color-accent)]/[0.12] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[var(--color-accent-2)]/[0.10] blur-3xl"
              aria-hidden
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
                <ProfileAvatar name={person.name} src={person.avatarSrc} />
              </div>
              <div className="order-2 min-w-0 lg:order-1 lg:col-span-7">
                {heroContent.availability ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3 py-1 text-xs font-medium text-[var(--color-muted)] backdrop-blur-sm">
                    <span className="relative inline-flex h-2 w-2 text-emerald-500">
                      <span className="pulse-dot absolute inset-0 rounded-full" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                    </span>
                    {heroContent.availability}
                  </span>
                ) : null}
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-sm">
                  {person.jobTitle}
                </p>
                <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  {heroContent.headline.lead}
                  <span className="text-gradient">{heroContent.headline.highlight}</span>
                  {heroContent.headline.trail}
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                  {heroContent.subline}
                </p>
                {heroContent.eligibilityLine ? (
                  <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-[var(--color-fg)] sm:text-base">
                    {heroContent.eligibilityLine}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href={heroContent.primaryCta.href}
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-[var(--color-accent-fg)] shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                  >
                    {heroContent.primaryCta.label}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={heroContent.secondaryCta.href}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40 px-6 text-sm font-medium text-[var(--color-fg)] backdrop-blur-sm transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]"
                  >
                    {heroContent.secondaryCta.label}
                  </Link>
                  {cvHref ? (
                    <a
                      href={cvHref}
                      download
                      className="inline-flex h-11 items-center justify-center gap-1.5 text-sm font-medium text-[var(--color-accent)] underline-offset-4 hover:underline sm:px-2"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Download CV
                    </a>
                  ) : null}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={`mailto:${social.email}`}
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                  >
                    <MailIcon className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                  >
                    <GithubIcon className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                  >
                    <LinkedinIcon className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {heroContent.stats?.length ? (
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {heroContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-5 py-4 backdrop-blur-sm transition-colors hover:border-[var(--color-accent)]/40"
                >
                  <dt className="text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-sm text-[var(--color-muted)]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <Section
          id="about"
          eyebrow="About"
          title="Enterprise experience with a product mindset."
          description="I focus on business outcomes, strong collaboration, and systems that stay maintainable after launch."
        >
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[var(--color-muted)]">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Stack and practices I use day to day."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Recent experience and delivery highlights."
          description="Company names are generalized to respect NDAs; interview-level detail is available on request."
        >
          <ol className="space-y-6 border-l border-[var(--color-border)] pl-6">
            {experience.map((job) => (
              <li key={job.period} className="relative">
                <span className="absolute -left-[31px] top-5 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)] ring-4 ring-[var(--color-accent)]/10" />
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)] sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                      {job.org}
                    </h3>
                    <span className="shrink-0 text-sm text-[var(--color-muted)]">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                    {job.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {job.summary}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-muted)]">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  {job.tech?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-chip)]/60 px-2.5 py-1 text-xs font-medium text-[var(--color-fg)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* <Section
          id="case-studies"
          eyebrow="Selected work"
          title="Case studies focused on impact and execution."
          description="Each case study explains the problem, approach, and result while preserving proprietary details."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </Section> */}

        {/* <Section
          id="projects"
          eyebrow="Projects"
          title="Public projects in progress."
          description="These focused demos mirror how I build in production environments."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section> */}

        <Section
          id="contact"
          eyebrow="Contact"
          title="Available for backend, full-stack, and software engineering opportunities."
          description="Reach out by phone, email, or LinkedIn for full-stack or backend-leaning roles in Australia, including remote-friendly teams."
        >
          <ContactDetails />
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
