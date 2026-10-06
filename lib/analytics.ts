export const googleAnalyticsId = "G-MRW7ER0WJS";

type GoogleEventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "event", eventName: string, parameters?: GoogleEventParameters) => void;
  }
}

export function trackGoogleEvent(eventName: string, parameters: GoogleEventParameters = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, { ...parameters, transport_type: "beacon" });
}
