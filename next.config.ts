import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Inlined into server and client bundles alike, so anything dated
    // "now" (the career timeline) renders identically on both sides.
    BUILD_DATE: new Date().toISOString(),
  },
  images: {
    // The Workers deploy has no image optimizer: /_next/image passed the
    // 4000px original straight through (7 MB for a 56px avatar). Sized
    // variants live in public/images and are served as-is instead.
    unoptimized: true,
  },
  async redirects() {
    // Retired or renamed pages: keep old links and search results
    // landing somewhere useful instead of a 404.
    return [
      { source: "/writing", destination: "/", permanent: true },
      { source: "/ventures", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
