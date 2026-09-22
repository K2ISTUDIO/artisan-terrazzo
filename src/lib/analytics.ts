/**
 * Minimal analytics helper. Pushes to the GTM/GA4 dataLayer when present,
 * and is a safe no-op otherwise (e.g. in dev, or before GTM is wired up in
 * site-config.ts / layout.tsx). See LEAD-GENERATION.md for the full event
 * plan and the GTM container setup this expects.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsEvent =
  | "generate_lead"
  | "form_start"
  | "form_step"
  | "form_submit"
  | "phone_click"
  | "email_click"
  | "quote_request"
  | "portfolio_view";

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
