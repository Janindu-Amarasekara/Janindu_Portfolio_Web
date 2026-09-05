import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexableDeployment } from "@/lib/url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  if (!isIndexableDeployment()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
