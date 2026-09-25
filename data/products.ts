export type ProductCategory =
  | "Keychains"
  | "Corporate Accessories"
  | "Bottles & Mugs"
  | "Bags"
  | "Apparel"
  | "Wallets"
  | "Charging Cables"
  | "Gift Boxes"
  | "Office Gifts"
  | "Ball Pens"
  | "Electronics and Accessories";

export type ProductCategorySlug =
  | "keychains"
  | "corporate-accessories"
  | "bottles-mugs"
  | "bags"
  | "apparel"
  | "wallets"
  | "charging-cables"
  | "gift-boxes"
  | "office-gifts"
  | "ball-pens"
  | "electronics-accessories";

export type CatalogueCategory = {
  name: ProductCategory;
  slug: ProductCategorySlug;
  eyebrow: string;
  title: string;
  description: string;
  metaDescription: string;
  heroImage?: string;
  keywords: readonly string[];
};

export type CatalogueProduct = {
  slug: string;
  name: string;
  category: ProductCategory;
  categorySlug: ProductCategorySlug;
  images: readonly string[];
  description: string;
  tags: readonly string[];
  finish: string;
};

const asset = (filename: string) => `/images/catalogue-products/${filename}.webp`;

export const catalogueCategories: readonly CatalogueCategory[] = [
  { name: "Keychains", slug: "keychains", eyebrow: "Compact brand pieces", title: "Customized keychains.", description: "Explore metal and leather keychains for campaigns, event packs, corporate giveaways and branded gift-box inserts.", metaDescription: "Browse customized metal and leather keychains for corporate giveaways, events and branded gift boxes in Pakistan.", heroImage: asset("customized-metal-keychains--leather-strap-keychain--studio"), keywords: ["customized keychains Pakistan", "metal keychains Lahore", "corporate giveaways"] },
  { name: "Corporate Accessories", slug: "corporate-accessories", eyebrow: "Professional brand details", title: "Corporate accessories.", description: "Useful professional accessories that bring your identity into meetings, conferences, travel and the working day.", metaDescription: "Explore customized corporate accessories including USB drives and card holders for business gifting across Pakistan.", heroImage: asset("premium-metal-card-holder--metal-card-holder-studio--studio"), keywords: ["corporate accessories Pakistan", "branded USB drives", "custom card holders"] },
  { name: "Bottles & Mugs", slug: "bottles-mugs", eyebrow: "Everyday brand visibility", title: "Bottles and mugs.", description: "Ceramic mugs, metal tumblers and reusable bottles for offices, teams, campaigns, travel and corporate gifting.", metaDescription: "Browse customized bottles, ceramic mugs, metal tumblers and branded drinkware for businesses across Pakistan.", heroImage: asset("metal-coffee-mugs--large-travel-mug-black-future-signing--studio"), keywords: ["custom bottles and mugs Pakistan", "branded drinkware", "corporate mugs Lahore"] },
  { name: "Bags", slug: "bags", eyebrow: "Branded carry solutions", title: "Customized bags.", description: "A future collection of practical branded bags for teams, events, promotions, travel and coordinated gifting.", metaDescription: "Explore customized corporate bags and branded carry solutions for businesses, events and gifting in Pakistan.", heroImage: "/images/customized-bags-your-logo.png", keywords: ["customized bags Pakistan", "branded corporate bags", "promotional bags"] },
  { name: "Apparel", slug: "apparel", eyebrow: "Wearable brand identity", title: "Branded apparel.", description: "A future collection of customized apparel for teams, uniforms, events, campaigns and employee programmes.", metaDescription: "Explore customized apparel, branded uniforms and promotional clothing for businesses across Pakistan.", heroImage: "/images/customized-apparael.webp", keywords: ["custom apparel Pakistan", "branded uniforms", "corporate clothing"] },
  { name: "Wallets", slug: "wallets", eyebrow: "Everyday business essentials", title: "Corporate wallets.", description: "Professional wallets and technology organizers designed for daily use, executive gifting and coordinated gift sets.", metaDescription: "Browse customized corporate wallets and technology organizers for executive and employee gifting in Pakistan.", heroImage: asset("customized-wallets--black-wallet-closed-future-signing--studio"), keywords: ["customized wallets Pakistan", "corporate wallets", "executive gifts"] },
  { name: "Charging Cables", slug: "charging-cables", eyebrow: "Useful technology giveaways", title: "Charging cables.", description: "Portable multi-connector charging products for travel kits, events, onboarding and useful corporate giveaways.", metaDescription: "Explore customized charging cables and multi-connector accessories for corporate gifting and events in Pakistan.", heroImage: asset("all-in-one-usb-charging--multi-connector-keychain-cable--studio"), keywords: ["custom charging cables Pakistan", "technology giveaways", "multi connector cables"] },
  { name: "Gift Boxes", slug: "gift-boxes", eyebrow: "Corporate gifting, coordinated", title: "Corporate gift boxes.", description: "Presentation sets and employee kits that bring useful products, packaging and your brand identity into one coordinated experience.", metaDescription: "Explore customized corporate gift boxes and employee kits with branded presentation and delivery across Pakistan.", heroImage: asset("customized-dairy-box--black-presentation-gift-set--studio"), keywords: ["corporate gift boxes Pakistan", "customized gift sets Lahore", "employee onboarding kits"] },
  { name: "Office Gifts", slug: "office-gifts", eyebrow: "For the working day", title: "Office gifts.", description: "Notebooks, desk pieces, coasters, clocks and table flags prepared for offices, teams, clients and formal events.", metaDescription: "Explore customized office gifts, notebooks, coasters, desk clocks and table flags for businesses in Pakistan.", heroImage: asset("spiral-diary--black-spiral-notebook-studio--studio"), keywords: ["office gifts Pakistan", "branded notebooks", "corporate desk gifts"] },
  { name: "Ball Pens", slug: "ball-pens", eyebrow: "Professional stationery", title: "Branded ball pens.", description: "Metal and stylus pens for meetings, conferences, campaigns, executive gifting and everyday brand presence.", metaDescription: "Browse customized ball pens, stylus pens and executive writing instruments for businesses across Pakistan.", heroImage: asset("customized-metal-pens--boxed-executive-pen--studio"), keywords: ["customized ball pens Pakistan", "branded metal pens", "executive pens"] },
  { name: "Electronics and Accessories", slug: "electronics-accessories", eyebrow: "Useful promotional technology", title: "Electronics and accessories.", description: "Portable mini fans and practical electronic accessories for warm-weather campaigns, events and corporate giveaways.", metaDescription: "Browse customized electronics, portable mini fans and promotional accessories for businesses across Pakistan.", heroImage: asset("mini-fans--handheld-mini-fan-ivory-rose-gold-future-signing--studio"), keywords: ["promotional electronics Pakistan", "customized portable fans", "electronic giveaways"] },
];

const categorySlugs = Object.fromEntries(catalogueCategories.map((category) => [category.name, category.slug])) as Record<ProductCategory, ProductCategorySlug>;

const descriptions: Record<ProductCategory, string> = {
  Keychains: "A compact branded accessory for giveaways, event packs and curated corporate gift boxes.",
  "Corporate Accessories": "A useful professional accessory for meetings, travel, conferences and corporate gifting.",
  "Bottles & Mugs": "Practical branded drinkware for offices, teams, travel, events and corporate gifting.",
  Bags: "A practical branded carry solution for teams, campaigns, events and corporate gifting.",
  Apparel: "Customized apparel for teams, uniforms, events, campaigns and employee programmes.",
  Wallets: "A professional everyday accessory for executive gifting, travel and coordinated gift sets.",
  "Charging Cables": "A useful charging accessory for travel kits, events, onboarding and corporate giveaways.",
  "Gift Boxes": "A coordinated corporate gift set planned around your recipients, brand direction and presentation requirements.",
  "Office Gifts": "A useful office product for meetings, onboarding, client gifting and employee recognition.",
  "Ball Pens": "A professional writing instrument for meetings, conferences, campaigns and coordinated gift sets.",
  "Electronics and Accessories": "A portable electronic product for campaigns, activations, events and corporate giveaways.",
};

function product(
  slug: string,
  name: string,
  category: ProductCategory,
  images: readonly string[],
  tags: readonly string[],
  finish: string,
  description = descriptions[category],
): CatalogueProduct {
  return { slug, name, category, categorySlug: categorySlugs[category], images: images.map(asset), description, tags, finish };
}

export const catalogueProducts: readonly CatalogueProduct[] = [
  product("black-presentation-gift-set", "Black Presentation Gift Set", "Gift Boxes", [
    "customized-dairy-box--black-presentation-gift-set--studio",
    "customized-dairy-box--presentation-gift-set-color-options--mock",
  ], ["Corporate gifting", "Presentation set"], "Black presentation box"),
  product("red-presentation-gift-set", "Red Presentation Gift Set", "Gift Boxes", [
    "customized-dairy-box--red-presentation-gift-set--studio",
    "customized-dairy-box--presentation-gift-set-color-options--mock",
  ], ["Campaign gifting", "Presentation set"], "Red presentation box"),
  product("black-desk-onboarding-kit", "Black Desk Onboarding Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--black-desk-kit--studio",
    "customized-emplyee-onboarding--black-desk-kit-mock--mock",
  ], ["Employee onboarding", "Desk essentials"], "Black coordinated set"),
  product("black-executive-bottle-kit", "Black Executive Bottle Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--black-executive-bottle-kit--studio",
    "customized-emplyee-onboarding--black-executive-bottle-kit-mock--mock",
  ], ["Executive gifting", "Drinkware set"], "Black coordinated set"),
  product("black-travel-tumbler-kit", "Black Travel Tumbler Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--black-travel-tumbler-kit--studio",
    "customized-emplyee-onboarding--black-travel-tumbler-kit-mock--mock",
  ], ["Travel gifting", "Employee kit"], "Black coordinated set"),
  product("black-tech-wallet-kit", "Black Tech Wallet Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--black-wallet-kit--studio",
    "customized-emplyee-onboarding--black-wallet-kit-mock--mock",
  ], ["Technology gifting", "Travel kit"], "Black coordinated set"),
  product("red-notebook-onboarding-kit", "Red Notebook Onboarding Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--red-notebook-kit--studio",
    "customized-emplyee-onboarding--red-notebook-kit-mock--mock",
  ], ["New joiners", "Office essentials"], "Red coordinated set"),
  product("red-tumbler-gift-kit", "Red Tumbler Gift Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--red-tumbler-kit--studio",
    "customized-emplyee-onboarding--red-tumbler-kit-mock--mock",
  ], ["Team gifting", "Drinkware set"], "Red coordinated set"),
  product("red-employee-welcome-kit", "Red Employee Welcome Kit", "Gift Boxes", [
    "customized-emplyee-onboarding--red-welcome-kit--studio",
    "customized-emplyee-onboarding--red-welcome-kit-mock--mock",
  ], ["Employee onboarding", "Welcome kit"], "Red coordinated set"),

  product("black-ceramic-mug", "Black Ceramic Mug", "Bottles & Mugs", [
    "customized-coffee-mugs--black-future-signing-mug-v2--studio",
    "customized-coffee-mugs--black-future-signing-mug-v2--mock",
  ], ["Office drinkware", "Logo branding"], "Gloss black"),
  product("blue-ceramic-mug", "Blue Ceramic Mug", "Bottles & Mugs", [
    "customized-coffee-mugs--blue-future-signing-mug-v2--studio",
    "customized-coffee-mugs--blue-future-signing-mug-v2--mock",
  ], ["Office drinkware", "Campaign gifts"], "Gloss blue"),
  product("red-ceramic-mug", "Red Ceramic Mug", "Bottles & Mugs", [
    "customized-coffee-mugs--red-future-signing-mug-v2--studio",
    "customized-coffee-mugs--red-future-signing-mug-v2--mock",
  ], ["Team gifting", "Logo branding"], "Gloss red"),
  product("white-ceramic-mug", "White Ceramic Mug", "Bottles & Mugs", [
    "customized-coffee-mugs--white-future-signing-mug-v2--studio",
    "customized-coffee-mugs--white-future-signing-mug-v2--mock",
  ], ["Full-colour artwork", "Event giveaways"], "Gloss white"),

  product("future-signing-tumbler-set", "Branded Tumbler Collection", "Bottles & Mugs", [
    "customized-coffee-mugs--future-signing-tumbler-set-v2--studio",
    "customized-coffee-mugs--future-signing-tumbler-set-v2--mock",
  ], ["Coordinated colours", "Team gifting"], "Assorted branded finishes"),
  product("stainless-tumbler-set", "Stainless Tumbler Collection", "Bottles & Mugs", [
    "customized-coffee-mugs--stainless-tumbler-set--studio",
    "customized-coffee-mugs--stainless-tumbler-set--mock",
  ], ["Metal drinkware", "Corporate gifting"], "Stainless steel finish"),
  product("ivory-travel-mug", "Ivory Travel Mug", "Bottles & Mugs", [
    "customized-coffee-mugs--ivory-future-signing-travel-mug-v2--studio",
    "customized-coffee-mugs--ivory-future-signing-travel-mug-v2--mock",
  ], ["Daily commute", "Employee gifts"], "Ivory finish"),
  product("blue-compact-metal-mug", "Blue Compact Metal Mug", "Bottles & Mugs", [
    "metal-coffee-mugs--blue-compact-metal-mug-future-signing--studio",
    "metal-coffee-mugs--blue-compact-metal-mug-catalog-mock--mock",
  ], ["Compact drinkware", "Desk use"], "Blue finish"),
  product("large-travel-mug-black", "Large Travel Mug — Black", "Bottles & Mugs", [
    "metal-coffee-mugs--large-travel-mug-black-future-signing--studio",
    "metal-coffee-mugs--large-travel-mug-color-options-mock--mock",
  ], ["Travel drinkware", "Executive gifts"], "Black finish"),
  product("large-travel-mug-white", "Large Travel Mug — White", "Bottles & Mugs", [
    "metal-coffee-mugs--large-travel-mug-white-future-signing--studio",
    "metal-coffee-mugs--large-travel-mug-color-options-mock--mock",
  ], ["Travel drinkware", "Logo branding"], "White finish"),
  product("ribbed-travel-tumbler-black", "Ribbed Travel Tumbler — Black", "Bottles & Mugs", [
    "metal-coffee-mugs--ribbed-travel-tumbler-black-future-signing--studio",
    "metal-coffee-mugs--ribbed-travel-tumbler-catalog-mock--mock",
  ], ["Textured finish", "Travel gifting"], "Ribbed black finish"),
  product("tall-handled-mug-black", "Tall Handled Mug — Black", "Bottles & Mugs", [
    "metal-coffee-mugs--tall-handled-mug-black-future-signing--studio",
    "metal-coffee-mugs--tall-handled-mug-color-options-mock--mock",
  ], ["Handled drinkware", "Team gifting"], "Black finish"),
  product("tall-handled-mug-ivory", "Tall Handled Mug — Ivory", "Bottles & Mugs", [
    "metal-coffee-mugs--tall-handled-mug-ivory-future-signing--studio",
    "metal-coffee-mugs--tall-handled-mug-color-options-mock--mock",
  ], ["Handled drinkware", "Employee gifts"], "Ivory finish"),

  product("bamboo-finish-water-bottle", "Bamboo Finish Water Bottle", "Bottles & Mugs", [
    "customized-water-bottle--wooden-future-signing-bottle-v3--studio",
    "customized-water-bottle--wooden-bottle-1--studio",
    "customized-water-bottle--wooden-bottle-1-v2--studio",
    "customized-water-bottle--whatsapp-image-2026-09-18-at-01-15-23--studio",
    "customized-water-bottle--wooden-bottle-1--mock",
    "customized-water-bottle--wooden-future-signing-bottle-v3--mock",
  ], ["Premium finish", "Corporate gifting"], "Bamboo-look finish"),
  product("glass-bottle-with-sleeve", "Glass Bottle with Carry Sleeve", "Bottles & Mugs", [
    "glass-bottle-with-bag--glass-bottle-and-sleeve-future-signing--studio",
    "glass-bottle-with-bag--glass-bottle-carry-view-future-signing--studio",
    "glass-bottle-with-bag--glass-bottle-with-bag-catalog-mock--mock",
  ], ["Protective sleeve", "Daily hydration"], "Clear glass with black sleeve"),
  product("glass-carry-bottle", "Glass Carry Bottle", "Bottles & Mugs", [
    "glass-carry-bottle--glass-carry-bottle-future-signing--studio",
    "glass-carry-bottle--glass-carry-bottle-catalog-mock--mock",
  ], ["Carry handle", "Event gifting"], "Clear glass"),

  product("multi-connector-keychain-cable", "Multi-Connector Keychain Cable", "Charging Cables", [
    "all-in-one-usb-charging--multi-connector-keychain-cable--studio",
    "all-in-one-usb-charging--multi-connector-keychain-cable--mock",
  ], ["Portable charging", "Useful giveaway"], "Compact keychain format"),
  product("round-charging-cable-case", "Round Charging Cable Case", "Charging Cables", [
    "all-in-one-usb-charging--round-charging-cable-case--studio",
    "all-in-one-usb-charging--round-charging-cable-case--mock",
  ], ["Cable organizer", "Technology gifting"], "Round compact case"),
  product("black-chrome-usb-drive", "Black & Chrome USB Drive", "Corporate Accessories", [
    "usb--black-chrome-16gb-usb-studio--studio",
    "usb--black-chrome-16gb-usb-mock--mock",
  ], ["Conference resources", "Digital handover"], "Black and chrome"),
  product("wireless-charging-power-bank-wallet", "Wireless Charging Power Bank Wallet", "Wallets", [
    "wireless-charging-power-bank-wallet--wireless-charging-power-bank-wallet-studio--studio",
    "wireless-charging-power-bank-wallet--wireless-charging-power-bank-wallet-mock--mock",
  ], ["Travel organizer", "Executive technology"], "Black leather-look finish"),

  product("black-gold-slim-pen", "Black & Gold Slim Pen", "Ball Pens", [
    "customized-metal-pens--black-gold-slim-pen--studio",
    "customized-metal-pens--black-gold-slim-pen-mock--mock",
  ], ["Executive stationery", "Gift-box insert"], "Black with gold accents"),
  product("black-silver-stylus-pen", "Black & Silver Stylus Pen", "Ball Pens", [
    "customized-metal-pens--black-silver-stylus-pen--studio",
    "customized-metal-pens--black-silver-stylus-pen-mock--mock",
  ], ["Stylus tip", "Office stationery"], "Black with silver accents"),
  product("boxed-executive-pen", "Boxed Executive Pen", "Ball Pens", [
    "customized-metal-pens--boxed-executive-pen--studio",
    "customized-metal-pens--boxed-executive-pen-mock--mock",
  ], ["Presentation box", "Executive gifting"], "Black presentation finish"),
  product("blue-slim-stylus-pen", "Blue Slim Stylus Pen", "Ball Pens", [
    "customized-metal-pens--slim-stylus-pen-blue--studio",
    "customized-metal-pens--slim-stylus-pen-colorways-mock--mock",
  ], ["Stylus tip", "Event stationery"], "Blue finish"),
  product("yellow-slim-stylus-pen", "Yellow Slim Stylus Pen", "Ball Pens", [
    "customized-metal-pens--slim-stylus-pen-yellow--studio",
    "customized-metal-pens--slim-stylus-pen-colorways-mock--mock",
  ], ["Stylus tip", "Campaign stationery"], "Yellow finish"),
  product("black-spiral-notebook", "Black Spiral Notebook", "Office Gifts", [
    "spiral-diary--black-spiral-notebook-studio--studio",
    "spiral-diary--black-spiral-notebook-mock--mock",
  ], ["Meeting notes", "Employee onboarding"], "Black cover"),
  product("color-block-hardbound-diary", "Colour-Block Hardbound Diary", "Office Gifts", [
    "spiral-diary--color-block-hardbound-diary-studio--studio",
    "spiral-diary--color-block-hardbound-diary-mock--mock",
  ], ["Hardbound diary", "Corporate stationery"], "Colour-block cover"),

  product("geometric-inlay-keychain", "Geometric Inlay Keychain", "Keychains", [
    "customized-metal-keychains--geometric-inlay-keychain--studio",
    "customized-metal-keychains--geometric-inlay-keychain-mock--mock",
  ], ["Metal accessory", "Corporate giveaway"], "Geometric inlay"),
  product("leather-strap-keychain", "Leather Strap Keychain", "Keychains", [
    "customized-metal-keychains--leather-strap-keychain--studio",
    "customized-metal-keychains--leather-strap-keychain-mock--mock",
  ], ["Leather detail", "Gift-box insert"], "Black leather-look strap"),
  product("oval-silver-keychain", "Oval Silver Keychain", "Keychains", [
    "customized-metal-keychains--oval-silver-keychain--studio",
    "customized-metal-keychains--oval-silver-keychain-mock--mock",
  ], ["Metal accessory", "Event giveaway"], "Polished silver finish"),
  product("rectangular-black-keychain", "Rectangular Keychain — Black", "Keychains", [
    "customized-metal-keychains--rectangular-black-keychain--studio",
    "customized-metal-keychains--rectangular-keychain-colorways-mock--mock",
  ], ["Compact branding", "Corporate giveaway"], "Black finish"),
  product("rectangular-silver-keychain", "Rectangular Keychain — Silver", "Keychains", [
    "customized-metal-keychains--rectangular-silver-keychain--studio",
    "customized-metal-keychains--rectangular-keychain-colorways-mock--mock",
  ], ["Compact branding", "Corporate giveaway"], "Silver finish"),
  product("round-black-silver-keychain", "Round Black & Silver Keychain", "Keychains", [
    "customized-metal-keychains--round-black-silver-keychain--studio",
    "customized-metal-keychains--round-black-silver-keychain-mock--mock",
  ], ["Round profile", "Gift-box insert"], "Black and silver"),
  product("rounded-rectangle-black-keychain", "Rounded Rectangle Keychain", "Keychains", [
    "customized-metal-keychains--rounded-rectangle-black-keychain--studio",
    "customized-metal-keychains--rounded-rectangle-black-keychain-mock--mock",
  ], ["Metal accessory", "Campaign giveaway"], "Black finish"),
  product("square-mirror-keychain", "Square Mirror Keychain", "Keychains", [
    "customized-metal-keychains--square-mirror-keychain--studio",
    "customized-metal-keychains--square-mirror-keychain-mock--mock",
  ], ["Mirror finish", "Compact branding"], "Polished mirror finish"),
  product("teardrop-silver-black-keychain", "Teardrop Silver & Black Keychain", "Keychains", [
    "customized-metal-keychains--teardrop-silver-black-keychain--studio",
    "customized-metal-keychains--teardrop-silver-black-keychain-mock--mock",
  ], ["Teardrop profile", "Corporate giveaway"], "Silver and black"),
  product("round-metal-keychain", "Round Metal Keychain", "Keychains", [
    "premium-tea-coaster--round-metal-keychain-studio--studio",
    "premium-tea-coaster--round-metal-keychain-mock--mock",
  ], ["Round profile", "Event giveaway"], "Metal finish"),

  product("black-corporate-wallet", "Black Corporate Wallet", "Wallets", [
    "customized-wallets--black-wallet-closed-future-signing--studio",
    "customized-wallets--black-wallet-open-interior--studio",
    "customized-wallets--black-wallet-catalog-mock--mock",
  ], ["Everyday carry", "Executive gifting"], "Black leather-look finish"),
  product("premium-leather-coaster-set", "Premium Leather Coaster Set", "Office Gifts", [
    "premium-leather-tea-coaster--leather-coaster-set-studio--studio",
    "premium-leather-tea-coaster--leather-coaster-set-mock--mock",
  ], ["Executive desk", "Client gifting"], "Black leather-look finish"),
  product("metal-card-holder", "Premium Metal Card Holder", "Corporate Accessories", [
    "premium-metal-card-holder--metal-card-holder-studio--studio",
    "premium-metal-card-holder--metal-card-holder-mock--mock",
  ], ["Business cards", "Professional accessory"], "Metal finish"),
  product("hand-painted-coaster-set", "Hand-Painted Coaster Set", "Office Gifts", [
    "premium-tea-coaster--hand-painted-coaster-set-studio--studio",
    "premium-tea-coaster--hand-painted-coaster-set-mock--mock",
  ], ["Desk styling", "Thoughtful gifting"], "Hand-painted finish"),
  product("round-printable-coaster-pair", "Round Printable Coaster Pair", "Office Gifts", [
    "premium-tea-coaster--round-printable-coaster-pair-studio--studio",
    "premium-tea-coaster--round-printable-coaster-pair-mock--mock",
  ], ["Logo surface", "Office giveaway"], "Printable round surface"),
  product("turquoise-apple-desk-clock", "Turquoise Apple Desk Clock", "Office Gifts", [
    "time-piece--turquoise-apple-desk-clock-studio--studio",
    "time-piece--turquoise-apple-desk-clock-mock--mock",
  ], ["Desk display", "Recognition gift"], "Turquoise finish"),

  product("pink-bunny-mini-fan", "Pink Bunny Mini Fan", "Electronics and Accessories", [
    "mini-fans--bunny-mini-fan-pink-future-signing--studio",
    "mini-fans--bunny-mini-fan-catalog-mock--mock",
  ], ["Portable fan", "Summer campaign"], "Pink bunny style"),
  product("green-digital-display-mini-fan", "Green Digital Display Mini Fan", "Electronics and Accessories", [
    "mini-fans--digital-display-mini-fan-green-future-signing--studio",
    "mini-fans--digital-display-mini-fan-color-options-mock--mock",
  ], ["Digital display", "Event giveaway"], "Green finish"),
  product("flower-mini-fan-purple-pink", "Purple & Pink Flower Mini Fan", "Electronics and Accessories", [
    "mini-fans--flower-mini-fan-purple-pink-future-signing--studio",
    "mini-fans--flower-mini-fan-catalog-mock--mock",
  ], ["Flower profile", "Promotional giveaway"], "Purple and pink"),
  product("handheld-mini-fan-ivory-rose-gold", "Ivory & Rose-Gold Handheld Mini Fan", "Electronics and Accessories", [
    "mini-fans--handheld-mini-fan-ivory-rose-gold-future-signing--studio",
    "mini-fans--handheld-mini-fan-color-options-mock--mock",
  ], ["Handheld fan", "Premium giveaway"], "Ivory and rose-gold"),
  product("square-mini-fan-cream-brown", "Cream & Brown Square Mini Fan", "Electronics and Accessories", [
    "mini-fans--square-mini-fan-cream-brown-future-signing--studio",
    "mini-fans--square-mini-fan-catalog-mock--mock",
  ], ["Compact fan", "Desk giveaway"], "Cream and brown"),
  product("two-tone-mini-fan-purple-pink", "Purple & Pink Two-Tone Mini Fan", "Electronics and Accessories", [
    "mini-fans--two-tone-mini-fan-purple-pink-future-signing--studio",
    "mini-fans--two-tone-mini-fan-catalog-mock--mock",
  ], ["Portable fan", "Campaign giveaway"], "Purple and pink"),

  product("dual-pennant-table-flags", "Dual Pennant Table Flags", "Office Gifts", [
    "mini-table-flags--dual-pennant-table-flag-future-signing--studio",
    "mini-table-flags--dual-pennant-table-flag-catalog-mock--mock",
  ], ["Desk display", "Formal events"], "Dual pennant format"),
  product("dual-rectangular-table-flags", "Dual Rectangular Table Flags", "Office Gifts", [
    "mini-table-flags--dual-rectangular-table-flag-future-signing--studio",
    "mini-table-flags--dual-rectangular-table-flag-catalog-mock--mock",
  ], ["Office display", "Conferences"], "Dual rectangular format"),
];

export function getCategory(slug: string) {
  return catalogueCategories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return catalogueProducts.filter((product) => product.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  return catalogueProducts.find((product) => product.categorySlug === categorySlug && product.slug === productSlug);
}

const legacyCategoryTargets: Readonly<Record<string, readonly ProductCategorySlug[]>> = {
  "corporate-gift-sets": ["gift-boxes"],
  "ceramic-mugs": ["bottles-mugs"],
  "metal-drinkware": ["bottles-mugs"],
  "customized-water-bottles": ["bottles-mugs"],
  "technology-gifts": ["corporate-accessories", "wallets", "charging-cables"],
  "pens-stationery": ["office-gifts", "ball-pens"],
  "customized-keychains": ["keychains"],
  "corporate-desk-accessories": ["corporate-accessories", "wallets", "office-gifts"],
  "promotional-mini-fans": ["electronics-accessories"],
  "table-flags-display": ["office-gifts"],
};

export function getLegacyProduct(categorySlug: string, productSlug: string) {
  const validTargets = legacyCategoryTargets[categorySlug];
  if (!validTargets) return undefined;

  return catalogueProducts.find((product) => product.slug === productSlug && validTargets.includes(product.categorySlug));
}
