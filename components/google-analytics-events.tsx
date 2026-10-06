"use client";

import { useEffect } from "react";
import { trackGoogleEvent } from "@/lib/analytics";

export function GoogleAnalyticsEvents() {
  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const parameters = {
        page_path: window.location.pathname,
        link_location: link.closest("header") ? "header" : link.closest("footer") ? "footer" : "page",
      };

      if (link.protocol === "tel:") {
        trackGoogleEvent("phone_call", parameters);
        return;
      }

      const hostname = link.hostname.toLowerCase();
      const isWhatsAppLink = link.protocol === "whatsapp:"
        || hostname === "wa.me"
        || hostname === "whatsapp.com"
        || hostname.endsWith(".whatsapp.com");

      if (isWhatsAppLink) trackGoogleEvent("whatsapp_click", parameters);
    };

    document.addEventListener("click", trackContactClick, { capture: true });
    return () => document.removeEventListener("click", trackContactClick, { capture: true });
  }, []);

  return null;
}
