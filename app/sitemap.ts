import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: base,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
