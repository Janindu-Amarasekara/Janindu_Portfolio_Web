import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const base = siteConfig.url.replace(/\/$/, "");
  const avatar = siteConfig.person.avatarSrc;
  const imageUrl =
    avatar && avatar.length > 0 ? `${base}${avatar.startsWith("/") ? avatar : `/${avatar}`}` : undefined;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.person.name,
    jobTitle: siteConfig.person.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    ...(imageUrl ? { image: imageUrl } : {}),
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
    sameAs: [
      siteConfig.person.social.github,
      siteConfig.person.social.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted static content from this repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
