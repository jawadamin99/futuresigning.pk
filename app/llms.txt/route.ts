import { catalogueCategories, catalogueProducts } from "@/data/products";
import { siteContact, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const categories = catalogueCategories.map((category) =>
    `- [${category.name}](${siteUrl}/products/${category.slug}): ${category.metaDescription}`
  ).join("\n");

  const content = `# Future Signing

> Future Signing provides corporate gifting, customized products, branded merchandise and custom printing for organizations throughout Pakistan.

Tagline: Your Brand. On Everything.

Future Signing develops corporate gift boxes, employee onboarding kits, customized drinkware, technology accessories, apparel, stationery, event merchandise, promotional products and packaging. Recommendations are based on quantity, artwork, branding method, budget, presentation and delivery deadline. Future Signing is a quotation-led B2B service rather than a conventional online retail store.

The current online catalogue contains ${catalogueProducts.length} product listings across ${catalogueCategories.length} categories. Product availability, material, colours, dimensions and branding suitability are confirmed before production.

Canonical website: ${siteUrl}
Phone and WhatsApp: ${siteContact.phoneDisplay}
Email: ${siteContact.email}
Service area: Nationwide delivery across Pakistan

## Main pages

- [Homepage](${siteUrl}): Company overview, capabilities, process and enquiry form.
- [Product catalogue](${siteUrl}/products): Browse available customized products and corporate gifting categories.
- [Contact and quote request](${siteUrl}/contact): Submit a detailed corporate quotation request.
- [XML sitemap](${siteUrl}/sitemap.xml): Complete index of category and product URLs.

## Product categories

${categories}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
