import type { MetadataRoute } from "next";
import { EXTENSIONS } from "@/data/extensions";
import { SEO_FUNNEL_PAGES } from "@/data/seo-funnel-pages";

const SITE_URL = "https://www.ai-readers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const extensionPages = EXTENSIONS.map((ext) => ({
    url: `${SITE_URL}/${ext.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const funnelPages = SEO_FUNNEL_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/free-text-to-speech`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
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
    ...funnelPages,
  ];
}
