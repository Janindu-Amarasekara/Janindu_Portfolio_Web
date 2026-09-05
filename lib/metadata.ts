import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { getSiteUrl, isIndexableDeployment } from "@/lib/url";

const base = getSiteUrl();
const indexable = isIndexableDeployment();

export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b0a" },
  ],
  colorScheme: "light dark",
};

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
  publisher: siteConfig.person.name,
  keywords: [...siteConfig.keywords],
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.ogLocale,
    url: "/",
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
  },
};
