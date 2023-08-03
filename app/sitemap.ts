import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://goudham.com",
      lastModified: new Date(),
    },
        {
      url: "https://goudham.com/projects",
      lastModified: new Date(),
    },
  ];
}
