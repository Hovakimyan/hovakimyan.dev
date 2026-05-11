import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://hovakimyan.dev/sitemap.xml",
    host: "https://hovakimyan.dev",
  };
}
