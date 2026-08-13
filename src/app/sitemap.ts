import type { MetadataRoute } from "next";
import { EXTENSIONS } from "@/data/extensions";

const SITE_URL = "https://www.ai-readers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const extensionPages = EXTENSIONS.map((ext) => ({
    url: `${SITE_URL}/${ext.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...extensionPages,
  ];
}
