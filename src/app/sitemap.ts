import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["/", "/about", "/pricing", "/faq", "/request"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
  }));
}
