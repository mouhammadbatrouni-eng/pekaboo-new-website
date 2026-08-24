/**
 * The signup wizard, described as data.
 *
 * Every step, field and answer lives here rather than in markup, so the ten
 * steps stay reviewable in one screen and the Astro component can render them
 * in a loop instead of ten hand-written blocks.
 *
 * The `value` of an answer is the exact English string the portal stores. It is
 * never translated — the Arabic build looks the label up by that value (see
 * `Dict["signup"]["choices"]`), so the wire format is identical in both
 * languages and the two can't drift.
 */

/** Field names the portal expects, verbatim. Changing one breaks registration. */
export const FIELD = {
  roles: "cp_roles[]",
  institutions: "cp_institutions[]",
  locationCount: "cp_location_count",
  objectives: "cp_objectives[]",

  centerName: "Centers[center_name]",
  capacity: "Centers[allowed_capacity]",
  enrolled: "cp_enrolled_count",
  centerDesc: "Centers[center_desc]",

  contactTitle: "Centers[contact_title]",
  contactName: "Centers[contact_name]",
  phone: "Centers[phone1]",
  email: "Centers[email1]",

  website: "Centers[urlwww]",
  facebook: "Centers[urlfacebook]",
  twitter: "Centers[urltwitter]",
  instagram: "Centers[urlinstagram]",
  youtube: "Centers[urlyoutube]",
  cloud: "Centers[urlcloud]",

  country: "Centers[country_id]",
  currency: "Centers[currencycode]",
  timezone: "Centers[center_timezone]",
  zone: "Centers[zone_id]",
  address: "Centers[address]",
  logo: "logo",

  vat: "Centers[vat_num]",
  appointment: "cp_appointment_date",
} as const;

export const ROLE_VALUES = [
  "Owner / Founder",
  "Principal",
  "Educational Director / Curriculum Coordinator",
  "Head Teacher",
  "Teacher",
  "Parent",
] as const;

export const INSTITUTION_VALUES = [
  "Nursery",
  "Kindergarten",
  "Primary School",
  "Secondary School",
  "High School",
  "After School",
] as const;

export const LOCATION_COUNT_VALUES = ["1", "2-5", "6-9", "10-14", "15 or more"] as const;

export const OBJECTIVE_VALUES = [
  "To improve the communication with parent",
  "To involve parents in in school activity",
  "To simply generate invoices and receipts",
  // Truncated on purpose. The live form's value attribute is cut at the
  // unescaped ampersand ("…my P&") while its label reads "…my P&L". Sending the
  // corrected string would file new signups under a second, near-identical
  // value and split the portal's own reporting, so match what's already stored.
  "To monitor my expenses and generate my P&",
  "To automate the administrative processes",
  "To improve the education tracking of registered kids",
  "To implement a CRM",
  "To develop a new website",
  "To automate my registration process through our website",
  "To monitor my staff attendance and assigned sessions",
  "To monitor my Cash flow",
  "To build my private social media network",
] as const;

/** Every answer string in the wizard — the key space of the label lookup. */
export const CHOICE_VALUES = [
  ...ROLE_VALUES,
  ...INSTITUTION_VALUES,
  ...LOCATION_COUNT_VALUES,
  ...OBJECTIVE_VALUES,
] as const;

export type ChoiceValue = (typeof CHOICE_VALUES)[number];

/**
 * GMT offsets, labelled. The portal rejects anything that isn't an integer, so
 * the option text is for the human and the value is what the API wants.
 */
export const TIMEZONE_OPTIONS = [
  { value: "0", label: "(GMT+0) London, Lisbon, Accra" },
  { value: "1", label: "(GMT+1) Paris, Berlin, Lagos" },
  { value: "2", label: "(GMT+2) Cairo, Athens, Johannesburg" },
  { value: "3", label: "(GMT+3) Riyadh, Doha, Kuwait, Nairobi" },
  { value: "4", label: "(GMT+4) Dubai, Abu Dhabi, Muscat" },
  { value: "5", label: "(GMT+5) Karachi, Tashkent" },
  { value: "6", label: "(GMT+6) Dhaka, Almaty" },
  { value: "7", label: "(GMT+7) Bangkok, Jakarta" },
  { value: "8", label: "(GMT+8) Singapore, Kuala Lumpur, Beijing" },
  { value: "9", label: "(GMT+9) Tokyo, Seoul" },
  { value: "10", label: "(GMT+10) Sydney, Brisbane" },
  { value: "-5", label: "(GMT-5) New York, Toronto" },
  { value: "-6", label: "(GMT-6) Chicago, Mexico City" },
  { value: "-8", label: "(GMT-8) Los Angeles, Vancouver" },
] as const;

export const DEFAULT_TIMEZONE = "4";

/**
 * Production sends 0 here, not the id `get-zones` returns. The live form's
 * hidden input is `value="0"` and is never populated, so match it.
 */
export const ZONE_ID = "0";

/** Which of the ten steps a field sits on, so a server error can jump there. */
export const FIELD_STEP: Record<string, number> = {
  [FIELD.roles]: 1,
  [FIELD.institutions]: 2,
  [FIELD.locationCount]: 3,
  [FIELD.objectives]: 4,
  [FIELD.centerName]: 5,
  [FIELD.capacity]: 5,
  [FIELD.enrolled]: 5,
  [FIELD.centerDesc]: 5,
  [FIELD.contactTitle]: 6,
  [FIELD.contactName]: 6,
  [FIELD.phone]: 6,
  [FIELD.email]: 6,
  [FIELD.website]: 7,
  [FIELD.facebook]: 7,
  [FIELD.twitter]: 7,
  [FIELD.instagram]: 7,
  [FIELD.youtube]: 7,
  [FIELD.cloud]: 7,
  [FIELD.country]: 8,
  [FIELD.currency]: 8,
  [FIELD.timezone]: 8,
  [FIELD.address]: 8,
  [FIELD.logo]: 8,
  [FIELD.vat]: 9,
  [FIELD.appointment]: 10,
};

export const TOTAL_STEPS = 10;

/** Largest logo we'll accept before the portal has a chance to reject it. */
export const MAX_LOGO_BYTES = 4 * 1024 * 1024;
