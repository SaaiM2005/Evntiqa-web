// Analytics helper for tracking CTA clicks and conversions (GA4 / Custom event integration)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    // In dev / when GTM is not yet loaded, log event for developer verification
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event]: ${action}`, params);
    }
  }
}

export function trackCtaClick(buttonName: string, destination?: string) {
  trackEvent('cta_click', {
    cta_name: buttonName,
    cta_destination: destination || '',
  });
}

export function trackConversion(conversionType: string, details?: Record<string, unknown>) {
  trackEvent('conversion', {
    conversion_type: conversionType,
    ...details,
  });
}
