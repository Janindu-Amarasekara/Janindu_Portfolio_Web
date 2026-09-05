import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.person.name.split(" ")[0] ?? siteConfig.person.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#0d6e6e",
    lang: "en-AU",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
