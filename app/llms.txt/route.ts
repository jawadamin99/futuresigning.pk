import { catalogueCategories } from "@/data/products";
import { siteContact, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const categories = catalogueCategories.map((category) =>
    `- [${category.name}](${siteUrl}/products/${category.slug}): ${category.metaDescription}`
  ).join("\n");

  const content = `# Future Signing

> Future Signing is a Lahore-based B2B corporate gifting, customized-products, branded-merchandise and printing company serving organizations throughout Pakistan.

Future Signing develops custom product solutions based on quantity, artwork, branding method, budget, packaging and delivery deadline. It is a quotation-led service rather than a conventional online retail store.

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
