import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["goudham.com"].map((url) => {
    return {
      url: `https://${url}`,
      lastModified: new Date(),
    };
  });
}
