import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
export default function robots(): MetadataRoute.Robots {
  const url = siteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(url ? { sitemap: `${url}/sitemap.xml` } : {}),
  };
}
