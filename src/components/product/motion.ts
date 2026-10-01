import type { AppShot, PortalShot } from "./screenshots";
import type { Lang } from "../../lib/i18n";

/**
 * Motion maps for the product captures.
 *
 * Each capture is still the same real screenshot — nothing is redrawn. The map
 * only says where the screen's own pieces are, so AnimatedShot can bring them
 * in one after another and keep a few details alive afterwards (a bar that
 * fills, a badge that pings, a tap landing on a button).
 *
 * All numbers are pixels in the `ref` space, measured off the capture at that
 * size; AnimatedShot converts them to percentages, so the map holds at any
 * rendered width. Replacing a capture means re-measuring its map — or deleting
 * the entry, which simply shows the still.
 */
export type Rect = [x: number, y: number, w: number, h: number];

/** A horizontal slice of the screen, optionally split into columns. */
interface Band {
  y: [from: number, to: number];
  /** Column cut positions, first = 0 and last = ref width. Omit for one tile. */
  xs?: number[];
  /** Chrome that is simply there — headers and tab bars don't "arrive". */
  fixed?: boolean;
}

export interface ShotMotion {
  ref: [w: number, h: number];
  /** Page background behind the pieces while they arrive. */
  veil: string;
  /** Top to bottom, covering the whole capture with no gaps. */
  bands: Band[];
  /** Regions that redraw left-to-right on a loop (progress bars, gauges). */
  wipes?: { rect: Rect; cover: string }[];
  /** Soft rings that ping on a loop (live dots, unread badges). */
  pulses?: { at: [x: number, y: number]; r: number; tone?: "brand" | "green" }[];
  /** Finger taps, played in order on a loop. */
  taps?: [x: number, y: number][];
  /** A highlight ring that steps through these regions (exactly five). */
  hops?: Rect[];
}

const PHONE: [number, number] = [402, 874];
const PHONE_VEIL = "#fbfbfc";
const PORTAL_VEIL = "#fff7ef";

export const APP_MOTION: Record<AppShot, ShotMotion> = {
  dailyReport: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 180] },
      { y: [180, 550] },
      { y: [550, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [351, 217], r: 10, tone: "green" }],
    taps: [
      [49, 514],
      [322, 514],
    ],
  },
  dailyReportCreate: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 270] },
      { y: [270, 450] },
      { y: [450, 712] },
      { y: [712, 781] },
      { y: [781, 874], fixed: true },
    ],
    taps: [
      [70, 365],
      [92, 550],
      [292, 750],
    ],
  },
  messages: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 207] },
      { y: [207, 250] },
      { y: [250, 398] },
      { y: [398, 541] },
      { y: [541, 686] },
      { y: [686, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [370, 276], r: 10 }],
    taps: [[350, 737]],
  },
  progress: {
    ref: PHONE,
    veil: "#ffffff",
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 385] },
      { y: [385, 420] },
      { y: [420, 452] },
      { y: [452, 485] },
      { y: [485, 518] },
      { y: [518, 550] },
      { y: [550, 583] },
      { y: [583, 615] },
      { y: [615, 650] },
      { y: [650, 740] },
      { y: [740, 874] },
    ],
    wipes: [{ rect: [25, 165, 352, 172], cover: "#ffffff" }],
    taps: [[193, 693]],
  },
  assessmentReport: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 198] },
      { y: [198, 260] },
      { y: [260, 312] },
      { y: [312, 605] },
      { y: [605, 716] },
      { y: [716, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [337, 348], r: 14 }],
    taps: [[347, 688]],
  },
  payments: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 277] },
      { y: [277, 325] },
      { y: [325, 370] },
      { y: [370, 452] },
      { y: [452, 533] },
      { y: [533, 614] },
      { y: [614, 695] },
      { y: [695, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [348, 421], r: 12 }],
    taps: [[311, 228]],
  },
};

export const PORTAL_MOTION: Record<PortalShot, ShotMotion> = {
  dashboard: {
    ref: [1100, 584],
    veil: PORTAL_VEIL,
    bands: [
      { y: [0, 60], fixed: true },
      { y: [60, 155] },
      { y: [155, 214] },
      { y: [214, 312], xs: [0, 391, 703, 1100] },
      { y: [312, 584], xs: [0, 391, 703, 1100] },
    ],
    // The classroom occupancy bars fill, hold, and fill again.
    wipes: [{ rect: [176, 360, 140, 188], cover: "linear-gradient(#fffdfc, #fef8f3)" }],
    pulses: [
      { at: [964, 112], r: 8, tone: "green" },
      { at: [547, 387], r: 16, tone: "green" },
    ],
  },
  crm: {
    ref: [1100, 794],
    veil: PORTAL_VEIL,
    bands: [
      { y: [0, 62], fixed: true },
      { y: [62, 160] },
      { y: [160, 245], xs: [0, 266, 453, 640, 828, 1100] },
      { y: [245, 330], xs: [0, 266, 453, 640, 828, 1100] },
      { y: [330, 372] },
      { y: [372, 422] },
      { y: [422, 455] },
      { y: [455, 515] },
      { y: [515, 578] },
      { y: [578, 642] },
      { y: [642, 705] },
      { y: [705, 794] },
    ],
    // The pipeline, in order: total → new → tour booked → toured → approved.
    hops: [
      [85, 172, 175, 66],
      [460, 172, 174, 66],
      [647, 172, 175, 66],
      [835, 172, 174, 66],
      [272, 252, 175, 67],
    ],
    pulses: [{ at: [444, 595], r: 13 }],
  },
  communication: {
    ref: [1100, 356],
    veil: PORTAL_VEIL,
    bands: [
      { y: [0, 62], fixed: true },
      { y: [62, 156] },
      { y: [156, 228], xs: [0, 193, 300, 401, 501, 602, 1100] },
      { y: [228, 356] },
    ],
    pulses: [
      { at: [288, 172], r: 8 },
      { at: [389, 172], r: 8 },
      { at: [489, 172], r: 8 },
      { at: [589, 172], r: 8 },
      { at: [974, 320], r: 17 },
    ],
  },
};

/*
 * Arabic set. The screens are right-to-left, so every tap, pulse and hop sits
 * on the mirrored side, and the progress/occupancy bars fill from the right —
 * the left-to-right wipes are left out rather than shown running backwards.
 */
const APP_MOTION_AR: Record<AppShot, ShotMotion> = {
  dailyReport: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 180] },
      { y: [180, 632] },
      { y: [632, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [43, 237], r: 10, tone: "green" }],
    taps: [
      [349, 590],
      [76, 590],
    ],
  },
  dailyReportCreate: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 282] },
      { y: [282, 482] },
      { y: [482, 705] },
      { y: [705, 781] },
      { y: [781, 874], fixed: true },
    ],
    taps: [
      [328, 402],
      [312, 611],
      [106, 740],
    ],
  },
  messages: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 203] },
      { y: [203, 247] },
      { y: [247, 423] },
      { y: [423, 598] },
      { y: [598, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [35, 257], r: 10 }],
    taps: [[351, 729]],
  },
  progress: {
    ref: PHONE,
    veil: "#ffffff",
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 392] },
      { y: [392, 433] },
      { y: [433, 466] },
      { y: [466, 499] },
      { y: [499, 532] },
      { y: [532, 565] },
      { y: [565, 598] },
      { y: [598, 631] },
      { y: [631, 670] },
      { y: [670, 750] },
      { y: [750, 874] },
    ],
    taps: [[201, 711]],
  },
  assessmentReport: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 196] },
      { y: [196, 257] },
      { y: [257, 302] },
      { y: [302, 655] },
      { y: [655, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [55, 346], r: 14 }],
    taps: [[52, 736]],
  },
  payments: {
    ref: PHONE,
    veil: PHONE_VEIL,
    bands: [
      { y: [0, 125], fixed: true },
      { y: [125, 299] },
      { y: [299, 347] },
      { y: [347, 395] },
      { y: [395, 497] },
      { y: [497, 598] },
      { y: [598, 699] },
      { y: [699, 781] },
      { y: [781, 874], fixed: true },
    ],
    pulses: [{ at: [59, 460], r: 12 }],
    taps: [[89, 250]],
  },
};

const PORTAL_MOTION_AR: Partial<Record<PortalShot, ShotMotion>> = {
  dashboard: {
    ref: [1100, 720],
    veil: PORTAL_VEIL,
    bands: [
      { y: [0, 60], fixed: true },
      { y: [60, 172] },
      { y: [172, 232] },
      { y: [232, 345], xs: [0, 371, 729, 1100] },
      { y: [345, 720], xs: [0, 371, 729, 1100] },
    ],
    pulses: [
      { at: [78, 123], r: 8, tone: "green" },
      { at: [549, 437], r: 16, tone: "green" },
    ],
  },
  crm: {
    ref: [1100, 734],
    veil: PORTAL_VEIL,
    bands: [
      { y: [0, 72], fixed: true },
      { y: [72, 185] },
      { y: [185, 245] },
      { y: [245, 352], xs: [0, 229, 443, 656, 864, 1100] },
      { y: [352, 462], xs: [0, 229, 443, 656, 864, 1100] },
      { y: [462, 500] },
      { y: [500, 548] },
      { y: [548, 598] },
      { y: [598, 640] },
      { y: [640, 700] },
      { y: [700, 734] },
    ],
    // The pipeline, read right to left: total → new → tour booked → toured → approved.
    hops: [
      [878, 254, 202, 96],
      [450, 254, 200, 96],
      [235, 254, 202, 96],
      [20, 254, 203, 96],
      [663, 363, 187, 97],
    ],
    pulses: [{ at: [609, 649], r: 13 }],
  },
};

/** The motion map for this screen in this language. */
export function appMotion(shot: AppShot, lang: Lang = "en"): ShotMotion {
  return lang === "ar" ? APP_MOTION_AR[shot] : APP_MOTION[shot];
}

/** The motion map for this portal screen in this language (English when Arabic has no capture). */
export function portalMotion(shot: PortalShot, lang: Lang = "en"): ShotMotion {
  return (lang === "ar" && PORTAL_MOTION_AR[shot]) || PORTAL_MOTION[shot];
}
