import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["goudham.com", "goudham.com/projects"].map((url) => {
    return {
      url: process.env.NEXT_PUBLIC_IS_PREVIEW ? `https://preview.${url}` : `https://${url}`,
      lastModified: new Date(),
    };
  });
}
