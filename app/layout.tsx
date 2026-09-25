import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://futuresigning.pk"),
  applicationName: "Future Signing",
  title: {
    default: "Future Signing",
    template: "%s | Future Signing",
  },
  description: "Premium corporate gifting, customized products, branded merchandise and custom printing from Lahore, delivered across Pakistan.",
  keywords: ["Corporate gifting Pakistan", "Customized products Pakistan", "Promotional merchandise Pakistan", "Corporate gift boxes Lahore", "Branded merchandise", "Custom printing Lahore", "Employee gifting Pakistan"],
  alternates: { canonical: "/" },
  openGraph: { title: "Future Signing — Your Brand. On Everything.", description: "Corporate gifting, branded merchandise and custom production for businesses across Pakistan.", url: "/", siteName: "Future Signing", locale: "en_PK", type: "website", images: [{ url: "/images/og/future-signing-og.png", width: 1200, height: 630, alt: "Future Signing branded executive gift set" }] },
  twitter: { card: "summary_large_image", title: "Future Signing — Your Brand. On Everything.", description: "Corporate gifting, branded merchandise and custom production across Pakistan.", images: ["/images/og/future-signing-og.png"] },
  appleWebApp: { capable: true, title: "Future Signing", statusBarStyle: "default" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#F7F5F0", colorScheme: "light", viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}><body>{children}</body></html>;
}
