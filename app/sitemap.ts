import type { MetadataRoute } from "next";
import { catalogueCategories, catalogueProducts } from "@/data/products";

const baseUrl = "https://futuresigning.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...catalogueCategories.map((category) => ({
      url: `${baseUrl}/products/${category.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [`${baseUrl}${category.heroImage}`],
    })),
    ...catalogueProducts.map((product) => ({
      url: `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: product.images.map((image) => `${baseUrl}${image}`),
    })),
  ];
}
