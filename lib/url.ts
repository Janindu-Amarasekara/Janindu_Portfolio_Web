/**
 * Canonical origin for metadata, sitemap, robots, and JSON-LD.
 * Prefer NEXT_PUBLIC_SITE_URL in production so preview hosts never become canonical.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeOrigin(explicit);
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return normalizeOrigin(`https://${vercelProduction.replace(/^https?:\/\//, "")}`);
  }

  return "http://localhost:3000";
}

export function isIndexableDeployment(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv) {
    return vercelEnv === "production";
  }
  return process.env.NODE_ENV === "production";
}

function normalizeOrigin(value: string): string {
  return value.replace(/\/$/, "");
}
