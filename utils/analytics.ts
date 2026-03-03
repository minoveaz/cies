/**
 * Analytics Utility for CIES Dental
 * Used to track key conversion events (WhatsApp, Calls, Form Submissions)
 */

type EventName = 'contact_form_submit' | 'whatsapp_click' | 'phone_call_click' | 'view_treatment';

interface EventParams {
  category?: string;
  label?: string;
  value?: string | number;
  [key: string]: any;
}

export const trackEvent = (eventName: EventName, params?: EventParams) => {
  // 1. Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, params);
  }

  // 2. DataLayer for Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params
    });
  }

  // 3. Track with GA4 directly if available
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};
