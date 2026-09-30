import type { AppShot, PortalShot } from "./screenshots";

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
