import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const base = siteConfig.url.replace(/\/$/, "");

const avatar = siteConfig.person.avatarSrc;
const ogImage =
  avatar != null && avatar.length > 0
    ? [{ url: avatar, width: 1200, height: 1200, alt: siteConfig.person.name }]
    : undefined;

export const rootMetadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.person.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.person.name,
  authors: [{ name: siteConfig.person.name, url: base }],
  creator: siteConfig.person.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: base,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    ...(ogImage ? { images: ogImage } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    ...(ogImage ? { images: ogImage.map((i) => i.url) } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: base,
  },
};
