export const navItems = [
  ["Products", "#products"], ["Solutions", "#solutions"], ["How It Works", "#process"], ["About", "#about"], ["Contact", "#contact"],
].map(([label, href]) => ({ label, href }));

export const productCategories = [
  { name: "Corporate Gift Boxes", short: "Gift boxes", copy: "Considered collections with coordinated products, inserts and presentation packaging.", image: "/images/products/mock1.png", alt: "Black drinkware assortment suitable for a corporate gift collection", note: "Curated to your brief", use: "Leadership gifts, client appreciation and festive moments", approach: "Product, branding and presentation coordinated together", placeholder: "" },
  { name: "Drinkware", short: "Drinkware", copy: "Bottles, travel mugs and tumblers selected around the way your team or audience works.", image: "/images/products/bottle4.png", alt: "Black, blue and steel reusable bottle possibilities", note: "Print or engraving options", use: "Teams, events, campaigns and everyday office use", approach: "Select the form, finish, colour and branding method", placeholder: "" },
  { name: "Technology", short: "Technology", copy: "Useful desk and travel technology, presented as cohesive branded gifting.", image: "/images/products/fan1.png", alt: "Rechargeable portable fan product presentation", note: "Useful, practical, memorable", use: "Welcome kits, giveaways and practical gifting", approach: "Utility-led products selected around your audience", placeholder: "" },
  { name: "Apparel", short: "Apparel", copy: "Uniforms, event wear and team apparel designed for consistent brand presence.", image: null, alt: "Apparel product photography placeholder", note: "Product imagery coming soon", use: "Uniforms, field teams, events and internal culture", approach: "Garment selection followed by the right print or embroidery route", placeholder: "Apparel in development" },
  { name: "Office Essentials", short: "Office", copy: "Notebooks, stationery and desk pieces that make everyday brand touchpoints feel intentional.", image: "/images/products/mug1.png", alt: "Black and white handled travel mug possibilities for the office", note: "Everyday brand presence", use: "Onboarding, recognition and desk-based teams", approach: "A useful product mix with consistent brand application", placeholder: "" },
  { name: "Event Giveaways", short: "Events", copy: "High-utility merchandise planned around footfall, budget and campaign objectives.", image: "/images/products/fan2.png", alt: "Green portable fan suitable for event merchandise", note: "Made for distribution at scale", use: "Conferences, exhibitions, launches and activations", approach: "Practical choices aligned with volume and distribution", placeholder: "" },
  { name: "Custom Packaging", short: "Packaging", copy: "Boxes, sleeves, inserts and coordinated details that carry your identity through every layer.", image: null, alt: "Custom packaging photography placeholder", note: "Product imagery coming soon", use: "Gift sets, campaigns and retail presentation", approach: "Structure, print and inserts planned as one experience", placeholder: "Packaging in development" },
];

export const occasions = [
  { title: "Employee onboarding", copy: "Make a first day feel considered before it begins.", context: "Welcome & culture", image: "/images/products/mug1.png", alt: "Office-ready drinkware for an employee welcome kit", featured: true },
  { title: "Client appreciation", copy: "Turn a thoughtful gesture into a lasting brand moment.", context: "Relationships", image: "/images/products/mock1.png", alt: "Premium black drinkware suitable for client appreciation", featured: true },
  { title: "Events & conferences", copy: "Equip every attendee with something useful and memorable.", context: "Live experiences", image: "/images/products/fan1.png", alt: "Portable fan colour options suitable for event giveaways", featured: false },
  { title: "Product launches", copy: "Extend a campaign into tactile, shareable merchandise.", context: "Campaign impact", image: "/images/products/bottle4.png", alt: "Drinkware collection suitable for a product launch campaign", featured: false },
  { title: "Sales promotions", copy: "Support activation with practical branded giveaways.", context: "Activation", image: "/images/products/fan2.png", alt: "Green portable fan suitable for a sales promotion", featured: false },
  { title: "Festive gifting", copy: "Bring products and presentation together for the occasion.", context: "Seasonal moments", image: "/images/products/mock3.png", alt: "Premium bottle suitable for festive gifting", featured: false },
  { title: "Internal recognition", copy: "Celebrate teams with gifts that feel personal and on-brand.", context: "People & teams", image: "/images/products/mug3.png", alt: "White travel mug suitable for team recognition", featured: false },
  { title: "Campaign packaging", copy: "Coordinate product, pack and print into one clear story.", context: "Brand presentation", image: "/images/products/mock2.png", alt: "Product presentation reference for campaign packaging", featured: false },
];

export const methods = [
  { title: "Screen printing", copy: "For bold, repeatable brand applications across compatible surfaces.", image: "/images/methods/screen-printing.png", alt: "Representative close-up of orange ink being applied with a screen-printing press", featured: true },
  { title: "UV printing", copy: "For detailed, full-colour graphics on suitable rigid products.", image: "/images/methods/uv-printing.png", alt: "Representative UV flatbed printing process on a charcoal surface", featured: false },
  { title: "Laser engraving", copy: "For a precise, understated and permanent mark on compatible materials.", image: "/images/methods/laser-engraving.png", alt: "Representative laser engraving process on a matte black bottle", featured: false },
  { title: "Embroidery", copy: "For dimensional branding on compatible apparel and textiles.", image: "/images/methods/embroidery.png", alt: "Representative embroidery machine stitching orange thread into charcoal fabric", featured: true },
  { title: "Heat transfer", copy: "For versatile artwork application across selected textile products.", image: "/images/methods/heat-transfer.png", alt: "Representative heat-transfer press applying an orange graphic to a tote bag", featured: false },
  { title: "Sublimation", copy: "For vibrant artwork on suitable coated products and materials.", image: "/images/methods/sublimation.png", alt: "Representative sublimation production scene with printed transfer material and a mug", featured: false },
  { title: "Custom packaging", copy: "For coordinated boxes, sleeves, inserts and presentation details.", image: "/images/methods/custom-packaging.png", alt: "Representative premium gift-box assembly with coordinated inserts", featured: true },
  { title: "Artwork preparation", copy: "For production-ready placement, sizing and brand consistency.", image: "/images/methods/artwork-preparation.png", alt: "Representative artwork-preparation desk with proof sheets and colour swatches", featured: false },
];

export const processSteps = [
  { icon: "brief", title: "Share your requirements", copy: "Tell us the occasion, audience, budget, timing and branding needs." },
  { icon: "select", title: "Select products & quantities", copy: "We shape a practical shortlist around your brief and required volume." },
  { icon: "approve", title: "Approve artwork or sample", copy: "Review placement and production details before the order moves ahead." },
  { icon: "produce", title: "Production & quality checks", copy: "Products, branding and presentation are coordinated as one project." },
  { icon: "deliver", title: "Delivery across Pakistan", copy: "Your completed order is prepared for delivery to the required destination." },
];

export const howWeWork = [
  { title: "Pick your products", copy: "Choose a direction from drinkware, gifting, technology, apparel, packaging and more.", image: "/images/products/bottle4.png", alt: "Selection of reusable bottles representing available product choices" },
  { title: "Share your brief & artwork", copy: "Send your brand files, quantity, budget, delivery city and deadline. We help refine the production route.", image: "/images/methods/artwork-preparation.png", alt: "Representative brand artwork and production proof preparation" },
  { title: "Leave the rest to us", copy: "We coordinate branding, production, presentation and delivery through one point of contact.", image: "/images/methods/custom-packaging.png", alt: "Representative finished gift packaging prepared for delivery" },
];

export const testimonialPlaceholders = [
  "Client story reserved", "Verified quote coming soon", "Client experience reserved",
];

export const strengths = ["Solutions based on your brief", "Support for bulk requirements", "Brand-conscious production", "Product and packaging coordination", "Nationwide delivery", "One point of contact"];
