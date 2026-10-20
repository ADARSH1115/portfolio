import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteUrl();
  return url
    ? [
        { url, changeFrequency: "monthly", priority: 1 },
        { url: `${url}/experience`, changeFrequency: "monthly", priority: 0.8 },
      ]
    : [];
}
