import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Future Signing",
    short_name: "Future Signing",
    description: "Corporate gifting, customized products and branded merchandise for businesses across Pakistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#F36C21",
    icons: [
      {
        src: "/images/brand/fs-app-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
