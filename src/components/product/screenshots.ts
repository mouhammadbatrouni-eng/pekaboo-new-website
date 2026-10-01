import appDailyReport from "../../assets/product/app-daily-report.png";
import appDailyReportCreate from "../../assets/product/app-daily-report-create.png";
import appMessages from "../../assets/product/app-messages.png";
import appProgress from "../../assets/product/app-progress.png";
import appAssessmentReport from "../../assets/product/app-assessment-report.png";
import portalDashboard from "../../assets/product/portal-dashboard-focus.webp";
import portalCrm from "../../assets/product/portal-crm-focus.webp";
import portalCommunication from "../../assets/product/portal-communication-focus.webp";
import appPayments from "../../assets/product/app-payments.png";
import arDailyReport from "../../assets/product/ar/app-daily-report.png";
import arDailyReportCreate from "../../assets/product/ar/app-daily-report-create.png";
import arMessages from "../../assets/product/ar/app-messages.png";
import arProgress from "../../assets/product/ar/app-progress.png";
import arAssessmentReport from "../../assets/product/ar/app-assessment-report.png";
import arPayments from "../../assets/product/ar/app-payments.png";
import arPortalDashboard from "../../assets/product/ar/portal-dashboard-focus.webp";
import arPortalCrm from "../../assets/product/ar/portal-crm-focus.webp";
import type { ImageMetadata } from "astro";
import type { Lang } from "../../lib/i18n";

/**
 * Real product captures, kept in one place so a section only names the screen
 * it wants and never touches a file path. Replacing a capture is a one-line
 * change here.
 *
 * The portal shots are `-focus` crops of the raw captures, which are kept
 * beside them un-imported (so they are never built or served). Two reasons:
 *
 * 1. The raw captures include the full left navigation, which lists every
 *    module in the product — an unnecessarily complete blueprint for anyone
 *    who saves the image. Cropping from x=267 removes it and, because the
 *    frames render at ~700px wide, makes the remaining UI legible instead of
 *    an illegible full-window thumbnail.
 * 2. `portal-communication` is cropped hard to its header because the feed
 *    below it showed identifiable children, a named customer school, a child's
 *    name and a medication-consent record. None of that belongs on a public
 *    marketing page.
 *
 * Ratios therefore vary per shot and are no longer 16:10; both frames size by
 * width with `h-auto`, so that is fine, but a replacement capture should be
 * checked in the hero, where the portal sits beside the phone.
 *
 * Phone captures are 402×874 — the iPhone viewport the app is designed for,
 * but only 1×, so they are soft on retina screens and want re-exporting at 2×.
 *
 * The Arabic page has its own set under `ar/`, picked by `appShot` and
 * `portalShot` below. The two portal shots there are crops of Arabic portal
 * captures, cut the same way (no module sidebar). The phone screens there, and
 * Payments in both languages, are rebuilt in markup from the real app's
 * artwork and its own Arabic strings (source: design/app-screens, rendered at
 * 2x), because the parent app has no Arabic capture yet. `communication` has no
 * Arabic capture, so it falls back to English.
 */
export const APP_SHOTS = {
  /*
   * `feed` (app-feed.png) is deliberately NOT imported. The capture has a
   * named school in its post bodies and large, identifiable faces, and an
   * imported-but-unused entry is still bundled and served — so it would sit
   * in the build output for anyone to find. The file is still on disk;
   * re-add this entry once there is a capture taken against seeded data.
   */
  /** Daily Report — the parent-facing card: mood, meals, medicine, supplies. */
  dailyReport: appDailyReport,
  /** Daily Report — the educator filling one in. */
  dailyReportCreate: appDailyReportCreate,
  /** Messages — the inbox, filtered by parents and staff. */
  messages: appMessages,
  /** Progress Analysis — curriculum coverage per learning area. */
  progress: appProgress,
  /** Assessment Report — observations per child, filtered by class. */
  assessmentReport: appAssessmentReport,
  /** Payments — balance due and the invoice list. */
  payments: appPayments,
} as const;

export const PORTAL_SHOTS = {
  /** Live Dashboard — attendance, staff and classroom occupancy. */
  dashboard: portalDashboard,
  /** CRM Dashboard — the admissions pipeline and its tour calendar. */
  crm: portalCrm,
  /** Communication — announcements, media and daily reports going out. */
  communication: portalCommunication,
} as const;

export type AppShot = keyof typeof APP_SHOTS;
export type PortalShot = keyof typeof PORTAL_SHOTS;

const APP_SHOTS_AR: Record<AppShot, ImageMetadata> = {
  dailyReport: arDailyReport,
  dailyReportCreate: arDailyReportCreate,
  messages: arMessages,
  progress: arProgress,
  assessmentReport: arAssessmentReport,
  payments: arPayments,
};

const PORTAL_SHOTS_AR: Partial<Record<PortalShot, ImageMetadata>> = {
  dashboard: arPortalDashboard,
  crm: arPortalCrm,
};

/** The capture for this screen in this language. */
export function appShot(shot: AppShot, lang: Lang = "en"): ImageMetadata {
  return lang === "ar" ? APP_SHOTS_AR[shot] : APP_SHOTS[shot];
}

/** Whether the Arabic set has its own portal capture for this screen. */
export function hasArabicPortalShot(shot: PortalShot): boolean {
  return shot in PORTAL_SHOTS_AR;
}

/** The capture for this screen in this language (English when Arabic has none). */
export function portalShot(shot: PortalShot, lang: Lang = "en"): ImageMetadata {
  return (lang === "ar" && PORTAL_SHOTS_AR[shot]) || PORTAL_SHOTS[shot];
}
