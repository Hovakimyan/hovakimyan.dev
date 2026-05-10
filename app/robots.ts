import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const host = h.get("host") ?? "hovakimyan.dev";
  const proto = h.get("x-forwarded-proto") ?? "https";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${proto}://${host}/sitemap.xml`,
  };
}
