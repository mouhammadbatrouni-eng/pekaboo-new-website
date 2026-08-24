import { SITE } from "../content/site";

/**
 * The portal's public registration endpoints.
 *
 * These are called straight from the browser — the portal sends
 * `access-control-allow-origin: *`, and a multipart POST needs no preflight —
 * so the wizard's pages stay prerendered and the site needs no API route of its
 * own standing between the visitor and their new account.
 */
export const SIGNUP_ENDPOINTS = {
  countries: `${SITE.portalUrl}/website/get-countries`,
  currencies: `${SITE.portalUrl}/website/get-currencies`,
  register: `${SITE.portalUrl}/website/register`,
} as const;

export interface PortalCountry {
  country_id: string;
  name_en: string;
  name_ar: string;
  iso2: string;
}

export interface PortalCurrency {
  currencycode: string;
  countryname: string;
}

/**
 * `type` is the success flag. On a validation failure `data` maps a field to
 * its messages — but the keys arrive bare (`center_name`), not as the names we
 * posted (`Centers[center_name]`), hence ERROR_KEY_TO_FIELD below.
 *
 * `data` is absent entirely when the request is malformed rather than invalid
 * (e.g. `{message: "Centers data missing"}`), so nothing may assume it exists.
 */
export interface RegisterResponse {
  type?: boolean;
  messageType?: string;
  message?: string;
  data?: Record<string, string[]> | null;
}

/** Bare error key → the input name that carries it. */
export const ERROR_KEY_TO_FIELD: Record<string, string> = {
  center_name: "Centers[center_name]",
  allowed_capacity: "Centers[allowed_capacity]",
  center_desc: "Centers[center_desc]",
  contact_title: "Centers[contact_title]",
  contact_name: "Centers[contact_name]",
  phone1: "Centers[phone1]",
  email1: "Centers[email1]",
  urlwww: "Centers[urlwww]",
  urlfacebook: "Centers[urlfacebook]",
  urltwitter: "Centers[urltwitter]",
  urlinstagram: "Centers[urlinstagram]",
  urlyoutube: "Centers[urlyoutube]",
  urlcloud: "Centers[urlcloud]",
  country_id: "Centers[country_id]",
  currencycode: "Centers[currencycode]",
  center_timezone: "Centers[center_timezone]",
  zone_id: "Centers[zone_id]",
  address: "Centers[address]",
  vat_num: "Centers[vat_num]",
  // Already bare on the wire.
  logo: "logo",
  cp_enrolled_count: "cp_enrolled_count",
  cp_appointment_date: "cp_appointment_date",
  cp_location_count: "cp_location_count",
};
