import { siteConfig, skillGroups } from "@/lib/site";
import { getSiteUrl } from "@/lib/url";

type JsonLdProps = {
  pathname?: string;
};

export function JsonLd({ pathname = "/" }: JsonLdProps) {
  const base = getSiteUrl();
  const avatar = siteConfig.person.avatarSrc;
  const imageUrl =
    avatar && avatar.length > 0
      ? `${base}${avatar.startsWith("/") ? avatar : `/${avatar}`}`
      : undefined;
  const pageUrl = pathname === "/" ? base : `${base}${pathname}`;
  const personId = `${base}/#person`;
  const websiteId = `${base}/#website`;
  const pageId = pathname === "/" ? `${base}/#webpage` : `${pageUrl}#webpage`;
  const knowsAbout = Array.from(new Set(skillGroups.flatMap((group) => group.items)));

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.person.name,
    jobTitle: siteConfig.person.jobTitle,
    description: siteConfig.description,
    url: base,
    image: imageUrl,
    email: `mailto:${siteConfig.person.social.email}`,
    telephone: siteConfig.person.social.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    sameAs: [siteConfig.person.social.github, siteConfig.person.social.linkedin],
    knowsAbout,
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Melbourne",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          addressCountry: "AU",
        },
      },
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: base,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    publisher: { "@id": personId },
  };

  const webPage = {
    "@type": pathname === "/" ? ["WebPage", "ProfilePage"] : "WebPage",
    "@id": pageId,
    url: pageUrl,
    name: pathname === "/" ? siteConfig.title : `Privacy — ${siteConfig.person.name}`,
    description:
      pathname === "/"
        ? siteConfig.description
        : "How this portfolio handles personal information.",
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: pathname === "/" ? { "@id": personId } : undefined,
    inLanguage: siteConfig.locale,
  };

  const breadcrumb =
    pathname === "/"
      ? undefined
      : {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: base,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy",
              item: pageUrl,
            },
          ],
        };

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, website, webPage, ...(breadcrumb ? [breadcrumb] : [])],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted static content from this repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
