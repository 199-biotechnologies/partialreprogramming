import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://partialreprogramming.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://partialreprogramming.vercel.app/landscape",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://partialreprogramming.vercel.app/evidence",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
