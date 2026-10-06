"use client";

import { useEffect } from "react";
import { trackGoogleEvent } from "@/lib/analytics";

export function GoogleAnalyticsEvents() {
  useEffect(() => {
    const trackPhoneCall = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackGoogleEvent("phone_call", {
        page_path: window.location.pathname,
        link_location: link.closest("header") ? "header" : link.closest("footer") ? "footer" : "page",
      });
    };

    document.addEventListener("click", trackPhoneCall, { capture: true });
    return () => document.removeEventListener("click", trackPhoneCall, { capture: true });
  }, []);

  return null;
}
