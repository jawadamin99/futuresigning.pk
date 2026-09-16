import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://futuresigning.pk"),
  title: "Future Signing | Corporate Gifting & Custom Branding Pakistan",
  description: "Premium corporate gifting, customized products, branded merchandise and custom printing from Lahore, delivered across Pakistan.",
  keywords: ["Corporate gifting Pakistan", "Customized products Pakistan", "Promotional merchandise Pakistan", "Corporate gift boxes Lahore", "Branded merchandise", "Custom printing Lahore", "Employee gifting Pakistan"],
  alternates: { canonical: "/" },
  openGraph: { title: "Future Signing — Your Brand. On Everything.", description: "Corporate gifting, branded merchandise and custom production for businesses across Pakistan.", url: "/", siteName: "Future Signing", locale: "en_PK", type: "website", images: [{ url: "/images/brand/future-signing-logo-full.png", width: 6000, height: 2012, alt: "Future Signing — Your Brand. On Everything." }] },
  twitter: { card: "summary_large_image", title: "Future Signing — Your Brand. On Everything.", description: "Corporate gifting, branded merchandise and custom production across Pakistan.", images: ["/images/brand/future-signing-logo-full.png"] },
  icons: { icon: "/images/brand/fs-favicon.png", apple: "/images/brand/fs-favicon.png" },
};
export const viewport: Viewport = { themeColor: "#F7F5F0", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}><body>{children}</body></html>;
}
