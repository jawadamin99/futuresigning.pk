export type ProductCategory =
  | "Gift Sets & Kits"
  | "Ceramic Mugs"
  | "Metal Drinkware"
  | "Water Bottles"
  | "Technology"
  | "Pens & Stationery"
  | "Keychains"
  | "Desk Accessories"
  | "Fans & Giveaways"
  | "Flags & Display";

export type ProductCategorySlug =
  | "corporate-gift-sets"
  | "ceramic-mugs"
  | "metal-drinkware"
  | "customized-water-bottles"
  | "technology-gifts"
  | "pens-stationery"
  | "customized-keychains"
  | "corporate-desk-accessories"
  | "promotional-mini-fans"
  | "table-flags-display";

export type CatalogueCategory = {
  name: ProductCategory;
  slug: ProductCategorySlug;
  eyebrow: string;
  title: string;
  description: string;
  metaDescription: string;
  heroImage: string;
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
  { name: "Gift Sets & Kits", slug: "corporate-gift-sets", eyebrow: "Corporate gifting, coordinated", title: "Corporate gift sets built around the occasion.", description: "Bring useful products, thoughtful presentation and your brand identity together in one coordinated gift. These sets are a starting point for client appreciation, employee onboarding, leadership gifting and campaigns.", metaDescription: "Explore customized corporate gift sets and employee kits by Future Signing, with coordinated products, branded presentation and delivery across Pakistan.", heroImage: asset("customized-dairy-box--black-presentation-gift-set--studio"), keywords: ["corporate gift sets Pakistan", "customized gift boxes Lahore", "employee gifting Pakistan"] },
  { name: "Ceramic Mugs", slug: "ceramic-mugs", eyebrow: "Everyday brand visibility", title: "Customized ceramic mugs for teams, events and gifting.", description: "A familiar, useful product becomes a consistent brand touchpoint. Explore ceramic mug colourways for offices, welcome kits, customer gifts, events and promotional campaigns.", metaDescription: "Explore customized ceramic mugs for offices, events and corporate gifting, branded and delivered by Future Signing across Pakistan.", heroImage: asset("customized-coffee-mugs--white-future-signing-mug-v2--studio"), keywords: ["customized ceramic mugs Pakistan", "logo mugs Lahore", "corporate mugs"] },
  { name: "Metal Drinkware", slug: "metal-drinkware", eyebrow: "Made for daily use", title: "Branded metal drinkware that travels with your identity.", description: "From compact desk mugs to travel tumblers, this collection gives teams and recipients something practical they can keep using beyond the occasion.", metaDescription: "Browse branded metal mugs, travel tumblers and corporate drinkware customized by Future Signing for businesses across Pakistan.", heroImage: asset("metal-coffee-mugs--large-travel-mug-black-future-signing--studio"), keywords: ["branded metal drinkware", "custom tumblers Pakistan", "corporate travel mugs"] },
  { name: "Water Bottles", slug: "customized-water-bottles", eyebrow: "Branded hydration", title: "Customized water bottles for work, travel and events.", description: "Choose a bottle direction that fits your audience and presentation—from glass bottles with sleeves to distinctive premium finishes for corporate gifting.", metaDescription: "Explore customized water bottles and branded glass bottles for corporate gifting, teams and events across Pakistan.", heroImage: asset("customized-water-bottle--wooden-future-signing-bottle-v3--studio"), keywords: ["customized water bottles Pakistan", "branded bottles Lahore", "corporate bottles"] },
  { name: "Technology", slug: "technology-gifts", eyebrow: "Useful technology gifting", title: "Technology gifts designed to stay useful.", description: "Compact charging accessories, USB storage and travel organizers can turn a giveaway or employee kit into something genuinely practical.", metaDescription: "Browse customized technology gifts, charging accessories, USB drives and power bank organizers for corporate gifting in Pakistan.", heroImage: asset("wireless-charging-power-bank-wallet--wireless-charging-power-bank-wallet-studio--studio"), keywords: ["technology gifts Pakistan", "custom USB drives", "corporate charging accessories"] },
  { name: "Pens & Stationery", slug: "pens-stationery", eyebrow: "Professional stationery", title: "Pens and stationery prepared for your brand.", description: "Build consistent desk sets, onboarding kits and event packs with practical writing instruments, notebooks and diaries in a range of finishes.", metaDescription: "Explore customized metal pens, notebooks and branded stationery for employees, events and corporate gifting across Pakistan.", heroImage: asset("customized-metal-pens--boxed-executive-pen--studio"), keywords: ["customized pens Pakistan", "branded stationery Lahore", "corporate notebooks"] },
  { name: "Keychains", slug: "customized-keychains", eyebrow: "Compact brand pieces", title: "Customized keychains in distinctive shapes and finishes.", description: "A versatile small-format product for campaigns, event packs and gift-box inserts, available across multiple metal profiles and mixed-material styles.", metaDescription: "Browse customized metal and leather keychains for corporate giveaways, events and branded gift boxes in Pakistan.", heroImage: asset("customized-metal-keychains--leather-strap-keychain--studio"), keywords: ["customized keychains Pakistan", "metal keychains Lahore", "corporate giveaways"] },
  { name: "Desk Accessories", slug: "corporate-desk-accessories", eyebrow: "For the working day", title: "Corporate desk accessories with a considered finish.", description: "Create useful executive and employee gifts with wallets, card holders, coasters and desk pieces that fit naturally into the working day.", metaDescription: "Explore branded corporate desk accessories, wallets, coasters and card holders for business gifting across Pakistan.", heroImage: asset("premium-leather-tea-coaster--leather-coaster-set-studio--studio"), keywords: ["corporate desk accessories", "executive gifts Pakistan", "customized office gifts"] },
  { name: "Fans & Giveaways", slug: "promotional-mini-fans", eyebrow: "Campaign-ready giveaways", title: "Promotional mini fans in multiple colours and styles.", description: "Explore six genuinely different portable fan styles for summer campaigns, outdoor activations, events and useful branded giveaways.", metaDescription: "Browse promotional mini fans in multiple colours and styles for events, summer campaigns and corporate giveaways in Pakistan.", heroImage: asset("mini-fans--handheld-mini-fan-ivory-rose-gold-future-signing--studio"), keywords: ["promotional mini fans Pakistan", "customized portable fans", "summer giveaways"] },
  { name: "Flags & Display", slug: "table-flags-display", eyebrow: "Formal brand display", title: "Customized table flags for offices and events.", description: "Choose between pennant and rectangular formats for reception desks, conferences, ceremonies, diplomatic settings and corporate displays.", metaDescription: "Explore customized table flags and desk display formats for offices, conferences and formal events across Pakistan.", heroImage: asset("mini-table-flags--dual-rectangular-table-flag-future-signing--studio"), keywords: ["custom table flags Pakistan", "desk flags Lahore", "corporate display flags"] },
];

const categorySlugs = Object.fromEntries(catalogueCategories.map((category) => [category.name, category.slug])) as Record<ProductCategory, ProductCategorySlug>;

const descriptions: Record<ProductCategory, string> = {
  "Gift Sets & Kits": "A coordinated corporate gift set that can be planned around your recipients, brand direction and presentation requirements.",
  "Ceramic Mugs": "A practical branded mug for offices, events, employee kits and promotional campaigns.",
  "Metal Drinkware": "Reusable metal drinkware suited to corporate gifting, teams, travel and everyday brand visibility.",
  "Water Bottles": "A reusable hydration product for teams, events, welcome kits and customer gifting.",
  Technology: "A useful technology accessory for conferences, travel kits, onboarding and corporate giveaways.",
  "Pens & Stationery": "A professional stationery item for meetings, onboarding, conferences and coordinated gift sets.",
  Keychains: "A compact branded accessory for giveaways, event packs and curated corporate gift boxes.",
  "Desk Accessories": "A useful business accessory for executive desks, client gifting and employee recognition.",
  "Fans & Giveaways": "A portable promotional product suited to warm-weather campaigns, activations and event giveaways.",
  "Flags & Display": "A branded display piece for reception desks, offices, conferences and formal events.",
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
  product("black-presentation-gift-set", "Black Presentation Gift Set", "Gift Sets & Kits", [
    "customized-dairy-box--black-presentation-gift-set--studio",
    "customized-dairy-box--presentation-gift-set-color-options--mock",
  ], ["Corporate gifting", "Presentation set"], "Black presentation box"),
  product("red-presentation-gift-set", "Red Presentation Gift Set", "Gift Sets & Kits", [
    "customized-dairy-box--red-presentation-gift-set--studio",
    "customized-dairy-box--presentation-gift-set-color-options--mock",
  ], ["Campaign gifting", "Presentation set"], "Red presentation box"),
  product("black-desk-onboarding-kit", "Black Desk Onboarding Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--black-desk-kit--studio",
    "customized-emplyee-onboarding--black-desk-kit-mock--mock",
  ], ["Employee onboarding", "Desk essentials"], "Black coordinated set"),
  product("black-executive-bottle-kit", "Black Executive Bottle Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--black-executive-bottle-kit--studio",
    "customized-emplyee-onboarding--black-executive-bottle-kit-mock--mock",
  ], ["Executive gifting", "Drinkware set"], "Black coordinated set"),
  product("black-travel-tumbler-kit", "Black Travel Tumbler Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--black-travel-tumbler-kit--studio",
    "customized-emplyee-onboarding--black-travel-tumbler-kit-mock--mock",
  ], ["Travel gifting", "Employee kit"], "Black coordinated set"),
  product("black-tech-wallet-kit", "Black Tech Wallet Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--black-wallet-kit--studio",
    "customized-emplyee-onboarding--black-wallet-kit-mock--mock",
  ], ["Technology gifting", "Travel kit"], "Black coordinated set"),
  product("red-notebook-onboarding-kit", "Red Notebook Onboarding Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--red-notebook-kit--studio",
    "customized-emplyee-onboarding--red-notebook-kit-mock--mock",
  ], ["New joiners", "Office essentials"], "Red coordinated set"),
  product("red-tumbler-gift-kit", "Red Tumbler Gift Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--red-tumbler-kit--studio",
    "customized-emplyee-onboarding--red-tumbler-kit-mock--mock",
  ], ["Team gifting", "Drinkware set"], "Red coordinated set"),
  product("red-employee-welcome-kit", "Red Employee Welcome Kit", "Gift Sets & Kits", [
    "customized-emplyee-onboarding--red-welcome-kit--studio",
    "customized-emplyee-onboarding--red-welcome-kit-mock--mock",
  ], ["Employee onboarding", "Welcome kit"], "Red coordinated set"),

  product("black-ceramic-mug", "Black Ceramic Mug", "Ceramic Mugs", [
    "customized-coffee-mugs--black-future-signing-mug-v2--studio",
    "customized-coffee-mugs--black-future-signing-mug-v2--mock",
  ], ["Office drinkware", "Logo branding"], "Gloss black"),
  product("blue-ceramic-mug", "Blue Ceramic Mug", "Ceramic Mugs", [
    "customized-coffee-mugs--blue-future-signing-mug-v2--studio",
    "customized-coffee-mugs--blue-future-signing-mug-v2--mock",
  ], ["Office drinkware", "Campaign gifts"], "Gloss blue"),
  product("red-ceramic-mug", "Red Ceramic Mug", "Ceramic Mugs", [
    "customized-coffee-mugs--red-future-signing-mug-v2--studio",
    "customized-coffee-mugs--red-future-signing-mug-v2--mock",
  ], ["Team gifting", "Logo branding"], "Gloss red"),
  product("white-ceramic-mug", "White Ceramic Mug", "Ceramic Mugs", [
    "customized-coffee-mugs--white-future-signing-mug-v2--studio",
    "customized-coffee-mugs--white-future-signing-mug-v2--mock",
  ], ["Full-colour artwork", "Event giveaways"], "Gloss white"),

  product("future-signing-tumbler-set", "Branded Tumbler Collection", "Metal Drinkware", [
    "customized-coffee-mugs--future-signing-tumbler-set-v2--studio",
    "customized-coffee-mugs--future-signing-tumbler-set-v2--mock",
  ], ["Coordinated colours", "Team gifting"], "Assorted branded finishes"),
  product("stainless-tumbler-set", "Stainless Tumbler Collection", "Metal Drinkware", [
    "customized-coffee-mugs--stainless-tumbler-set--studio",
    "customized-coffee-mugs--stainless-tumbler-set--mock",
  ], ["Metal drinkware", "Corporate gifting"], "Stainless steel finish"),
  product("ivory-travel-mug", "Ivory Travel Mug", "Metal Drinkware", [
    "customized-coffee-mugs--ivory-future-signing-travel-mug-v2--studio",
    "customized-coffee-mugs--ivory-future-signing-travel-mug-v2--mock",
  ], ["Daily commute", "Employee gifts"], "Ivory finish"),
  product("blue-compact-metal-mug", "Blue Compact Metal Mug", "Metal Drinkware", [
    "metal-coffee-mugs--blue-compact-metal-mug-future-signing--studio",
    "metal-coffee-mugs--blue-compact-metal-mug-catalog-mock--mock",
  ], ["Compact drinkware", "Desk use"], "Blue finish"),
  product("large-travel-mug-black", "Large Travel Mug — Black", "Metal Drinkware", [
    "metal-coffee-mugs--large-travel-mug-black-future-signing--studio",
    "metal-coffee-mugs--large-travel-mug-color-options-mock--mock",
  ], ["Travel drinkware", "Executive gifts"], "Black finish"),
  product("large-travel-mug-white", "Large Travel Mug — White", "Metal Drinkware", [
    "metal-coffee-mugs--large-travel-mug-white-future-signing--studio",
    "metal-coffee-mugs--large-travel-mug-color-options-mock--mock",
  ], ["Travel drinkware", "Logo branding"], "White finish"),
  product("ribbed-travel-tumbler-black", "Ribbed Travel Tumbler — Black", "Metal Drinkware", [
    "metal-coffee-mugs--ribbed-travel-tumbler-black-future-signing--studio",
    "metal-coffee-mugs--ribbed-travel-tumbler-catalog-mock--mock",
  ], ["Textured finish", "Travel gifting"], "Ribbed black finish"),
  product("tall-handled-mug-black", "Tall Handled Mug — Black", "Metal Drinkware", [
    "metal-coffee-mugs--tall-handled-mug-black-future-signing--studio",
    "metal-coffee-mugs--tall-handled-mug-color-options-mock--mock",
  ], ["Handled drinkware", "Team gifting"], "Black finish"),
  product("tall-handled-mug-ivory", "Tall Handled Mug — Ivory", "Metal Drinkware", [
    "metal-coffee-mugs--tall-handled-mug-ivory-future-signing--studio",
    "metal-coffee-mugs--tall-handled-mug-color-options-mock--mock",
  ], ["Handled drinkware", "Employee gifts"], "Ivory finish"),

  product("bamboo-finish-water-bottle", "Bamboo Finish Water Bottle", "Water Bottles", [
    "customized-water-bottle--wooden-future-signing-bottle-v3--studio",
    "customized-water-bottle--wooden-bottle-1--studio",
    "customized-water-bottle--wooden-bottle-1-v2--studio",
    "customized-water-bottle--whatsapp-image-2026-09-18-at-01-15-23--studio",
    "customized-water-bottle--wooden-bottle-1--mock",
    "customized-water-bottle--wooden-future-signing-bottle-v3--mock",
  ], ["Premium finish", "Corporate gifting"], "Bamboo-look finish"),
  product("glass-bottle-with-sleeve", "Glass Bottle with Carry Sleeve", "Water Bottles", [
    "glass-bottle-with-bag--glass-bottle-and-sleeve-future-signing--studio",
    "glass-bottle-with-bag--glass-bottle-carry-view-future-signing--studio",
    "glass-bottle-with-bag--glass-bottle-with-bag-catalog-mock--mock",
  ], ["Protective sleeve", "Daily hydration"], "Clear glass with black sleeve"),
  product("glass-carry-bottle", "Glass Carry Bottle", "Water Bottles", [
    "glass-carry-bottle--glass-carry-bottle-future-signing--studio",
    "glass-carry-bottle--glass-carry-bottle-catalog-mock--mock",
  ], ["Carry handle", "Event gifting"], "Clear glass"),

  product("multi-connector-keychain-cable", "Multi-Connector Keychain Cable", "Technology", [
    "all-in-one-usb-charging--multi-connector-keychain-cable--studio",
    "all-in-one-usb-charging--multi-connector-keychain-cable--mock",
  ], ["Portable charging", "Useful giveaway"], "Compact keychain format"),
  product("round-charging-cable-case", "Round Charging Cable Case", "Technology", [
    "all-in-one-usb-charging--round-charging-cable-case--studio",
    "all-in-one-usb-charging--round-charging-cable-case--mock",
  ], ["Cable organizer", "Technology gifting"], "Round compact case"),
  product("black-chrome-usb-drive", "Black & Chrome USB Drive", "Technology", [
    "usb--black-chrome-16gb-usb-studio--studio",
    "usb--black-chrome-16gb-usb-mock--mock",
  ], ["Conference resources", "Digital handover"], "Black and chrome"),
  product("wireless-charging-power-bank-wallet", "Wireless Charging Power Bank Wallet", "Technology", [
    "wireless-charging-power-bank-wallet--wireless-charging-power-bank-wallet-studio--studio",
    "wireless-charging-power-bank-wallet--wireless-charging-power-bank-wallet-mock--mock",
  ], ["Travel organizer", "Executive technology"], "Black leather-look finish"),

  product("black-gold-slim-pen", "Black & Gold Slim Pen", "Pens & Stationery", [
    "customized-metal-pens--black-gold-slim-pen--studio",
    "customized-metal-pens--black-gold-slim-pen-mock--mock",
  ], ["Executive stationery", "Gift-box insert"], "Black with gold accents"),
  product("black-silver-stylus-pen", "Black & Silver Stylus Pen", "Pens & Stationery", [
    "customized-metal-pens--black-silver-stylus-pen--studio",
    "customized-metal-pens--black-silver-stylus-pen-mock--mock",
  ], ["Stylus tip", "Office stationery"], "Black with silver accents"),
  product("boxed-executive-pen", "Boxed Executive Pen", "Pens & Stationery", [
    "customized-metal-pens--boxed-executive-pen--studio",
    "customized-metal-pens--boxed-executive-pen-mock--mock",
  ], ["Presentation box", "Executive gifting"], "Black presentation finish"),
  product("blue-slim-stylus-pen", "Blue Slim Stylus Pen", "Pens & Stationery", [
    "customized-metal-pens--slim-stylus-pen-blue--studio",
    "customized-metal-pens--slim-stylus-pen-colorways-mock--mock",
  ], ["Stylus tip", "Event stationery"], "Blue finish"),
  product("yellow-slim-stylus-pen", "Yellow Slim Stylus Pen", "Pens & Stationery", [
    "customized-metal-pens--slim-stylus-pen-yellow--studio",
    "customized-metal-pens--slim-stylus-pen-colorways-mock--mock",
  ], ["Stylus tip", "Campaign stationery"], "Yellow finish"),
  product("black-spiral-notebook", "Black Spiral Notebook", "Pens & Stationery", [
    "spiral-diary--black-spiral-notebook-studio--studio",
    "spiral-diary--black-spiral-notebook-mock--mock",
  ], ["Meeting notes", "Employee onboarding"], "Black cover"),
  product("color-block-hardbound-diary", "Colour-Block Hardbound Diary", "Pens & Stationery", [
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

  product("black-corporate-wallet", "Black Corporate Wallet", "Desk Accessories", [
    "customized-wallets--black-wallet-closed-future-signing--studio",
    "customized-wallets--black-wallet-open-interior--studio",
    "customized-wallets--black-wallet-catalog-mock--mock",
  ], ["Everyday carry", "Executive gifting"], "Black leather-look finish"),
  product("premium-leather-coaster-set", "Premium Leather Coaster Set", "Desk Accessories", [
    "premium-leather-tea-coaster--leather-coaster-set-studio--studio",
    "premium-leather-tea-coaster--leather-coaster-set-mock--mock",
  ], ["Executive desk", "Client gifting"], "Black leather-look finish"),
  product("metal-card-holder", "Premium Metal Card Holder", "Desk Accessories", [
    "premium-metal-card-holder--metal-card-holder-studio--studio",
    "premium-metal-card-holder--metal-card-holder-mock--mock",
  ], ["Business cards", "Professional accessory"], "Metal finish"),
  product("hand-painted-coaster-set", "Hand-Painted Coaster Set", "Desk Accessories", [
    "premium-tea-coaster--hand-painted-coaster-set-studio--studio",
    "premium-tea-coaster--hand-painted-coaster-set-mock--mock",
  ], ["Desk styling", "Thoughtful gifting"], "Hand-painted finish"),
  product("round-printable-coaster-pair", "Round Printable Coaster Pair", "Desk Accessories", [
    "premium-tea-coaster--round-printable-coaster-pair-studio--studio",
    "premium-tea-coaster--round-printable-coaster-pair-mock--mock",
  ], ["Logo surface", "Office giveaway"], "Printable round surface"),
  product("turquoise-apple-desk-clock", "Turquoise Apple Desk Clock", "Desk Accessories", [
    "time-piece--turquoise-apple-desk-clock-studio--studio",
    "time-piece--turquoise-apple-desk-clock-mock--mock",
  ], ["Desk display", "Recognition gift"], "Turquoise finish"),

  product("pink-bunny-mini-fan", "Pink Bunny Mini Fan", "Fans & Giveaways", [
    "mini-fans--bunny-mini-fan-pink-future-signing--studio",
    "mini-fans--bunny-mini-fan-catalog-mock--mock",
  ], ["Portable fan", "Summer campaign"], "Pink bunny style"),
  product("green-digital-display-mini-fan", "Green Digital Display Mini Fan", "Fans & Giveaways", [
    "mini-fans--digital-display-mini-fan-green-future-signing--studio",
    "mini-fans--digital-display-mini-fan-color-options-mock--mock",
  ], ["Digital display", "Event giveaway"], "Green finish"),
  product("flower-mini-fan-purple-pink", "Purple & Pink Flower Mini Fan", "Fans & Giveaways", [
    "mini-fans--flower-mini-fan-purple-pink-future-signing--studio",
    "mini-fans--flower-mini-fan-catalog-mock--mock",
  ], ["Flower profile", "Promotional giveaway"], "Purple and pink"),
  product("handheld-mini-fan-ivory-rose-gold", "Ivory & Rose-Gold Handheld Mini Fan", "Fans & Giveaways", [
    "mini-fans--handheld-mini-fan-ivory-rose-gold-future-signing--studio",
    "mini-fans--handheld-mini-fan-color-options-mock--mock",
  ], ["Handheld fan", "Premium giveaway"], "Ivory and rose-gold"),
  product("square-mini-fan-cream-brown", "Cream & Brown Square Mini Fan", "Fans & Giveaways", [
    "mini-fans--square-mini-fan-cream-brown-future-signing--studio",
    "mini-fans--square-mini-fan-catalog-mock--mock",
  ], ["Compact fan", "Desk giveaway"], "Cream and brown"),
  product("two-tone-mini-fan-purple-pink", "Purple & Pink Two-Tone Mini Fan", "Fans & Giveaways", [
    "mini-fans--two-tone-mini-fan-purple-pink-future-signing--studio",
    "mini-fans--two-tone-mini-fan-catalog-mock--mock",
  ], ["Portable fan", "Campaign giveaway"], "Purple and pink"),

  product("dual-pennant-table-flags", "Dual Pennant Table Flags", "Flags & Display", [
    "mini-table-flags--dual-pennant-table-flag-future-signing--studio",
    "mini-table-flags--dual-pennant-table-flag-catalog-mock--mock",
  ], ["Desk display", "Formal events"], "Dual pennant format"),
  product("dual-rectangular-table-flags", "Dual Rectangular Table Flags", "Flags & Display", [
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
