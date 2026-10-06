import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalyticsEvents } from "@/components/google-analytics-events";
import { googleAnalyticsId } from "@/lib/analytics";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const homeTitle = "Corporate Gifting & Custom Products Pakistan | Future Signing";
const homeDescription = "Future Signing creates corporate gift boxes, branded merchandise, drinkware, employee kits and promotional products with delivery across Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: homeTitle,
    template: "%s | Future Signing",
  },
  description: homeDescription,
  keywords: ["Corporate gifting Pakistan", "Customized products Pakistan", "Promotional merchandise Pakistan", "Corporate gift boxes Lahore", "Branded merchandise", "Custom printing Lahore", "Employee gifting Pakistan"],
  alternates: { canonical: "/" },
  openGraph: { title: homeTitle, description: homeDescription, url: "/", siteName, locale: "en_PK", type: "website", images: [{ url: "/images/og/future-signing-og.png", width: 1200, height: 630, alt: "Future Signing branded executive gift set" }] },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription, images: ["/images/og/future-signing-og.png"] },
  appleWebApp: { capable: true, title: "Future Signing", statusBarStyle: "default" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#F7F5F0", colorScheme: "light", viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}><head><link rel="describedby" href="/llms.txt" type="text/markdown" /></head><body>{children}<GoogleAnalyticsEvents /><Analytics /><Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
window.gtag = function(){window.dataLayer.push(arguments);};
window.gtag('js', new Date());
window.gtag('config', '${googleAnalyticsId}');`}</Script></body></html>;
}
