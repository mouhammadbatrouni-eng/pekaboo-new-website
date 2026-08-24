/**
 * Supporting marketing content: outcomes, the digital-transformation story,
 * curriculum support, language support and FAQs.
 *
 * A note on claims: everything here is either verifiable from the product
 * itself or written as a qualitative statement. There are deliberately no
 * invented customer counts, percentages, ratings or logos.
 */

/** Short credibility points shown directly beneath the hero. */
export const TRUST_POINTS = [
  { label: "Built for early years", detail: "Designed around how nurseries actually run" },
  { label: "English & Arabic", detail: "Full right-to-left support built in" },
  { label: "Multi-center ready", detail: "Run one setting or a whole group" },
  { label: "Secure by design", detail: "Encrypted storage and scheduled backups" },
];

/** Business outcomes — each ties a real capability to a concrete result. */
export const OUTCOMES = [
  {
    title: "Less time on admin",
    description:
      "Attendance, daily reports, invoices and records stop being separate jobs done twice. Your team enters things once, in the place they already are.",
    icon: "attendance",
  },
  {
    title: "Families who feel included",
    description:
      "Parents see their child's day as it's published — meals, nap, mood and moments — instead of waiting for a handover at the door.",
    icon: "communication",
  },
  {
    title: "Educators with the right tools",
    description:
      "Observations link to your curriculum objectives while the moment is fresh, and become assessment reports without a second write-up.",
    icon: "curriculum",
  },
  {
    title: "Finances you can actually see",
    description:
      "Invoices, receipts, expenses and supplier payments live in one ledger, so the month-end picture is there when you need it.",
    icon: "finance",
  },
  {
    title: "Enquiries that don't go cold",
    description:
      "Every family is tracked from first contact through tour, waiting list and approval, with the next step always visible.",
    icon: "calendar",
  },
  {
    title: "Room to grow",
    description:
      "Add a class, an age group or an entire second center without rebuilding how you work.",
    icon: "people",
  },
];

/** The before/after story that replaces the old site's "go digital" section. */
export const TRANSFORMATION = {
  before: {
    title: "How most settings run today",
    points: [
      "Attendance on a clipboard, typed up later",
      "Daily updates written twice — once for the room, once for parents",
      "Child allergies and permissions in a folder in the office",
      "Invoices built by hand in a spreadsheet each month",
      "Enquiries tracked in someone's inbox",
      "No single view of how the setting is doing",
    ],
  },
  after: {
    title: "How it runs on Peekaboo",
    points: [
      "Attendance marked once, live on the dashboard",
      "Daily reports drafted in the room, published to families",
      "Health alerts and pickup permissions on the child's profile",
      "Invoices built from your defined services, VAT included",
      "Every enquiry in a pipeline with an owner and a next step",
      "Occupancy, ratios, attendance and finance in one view",
    ],
  },
};

/**
 * Curriculum frameworks named on the existing Peekaboo website. The platform's
 * curriculum module is framework-agnostic — you define learning areas,
 * aspects, objectives and attainment levels — so these are settings Peekaboo
 * is used with rather than hard-coded templates.
 */
export const CURRICULA = [
  { abbr: "EYFS", name: "Early Years Foundation Stage" },
  { abbr: "IPC", name: "International Primary Curriculum" },
  { abbr: "JC", name: "Jolly Curriculum" },
  { abbr: "WSD", name: "Whole School Development" },
  { abbr: "Reggio", name: "Reggio Emilia" },
];

export const CURRICULUM_STEPS = [
  {
    step: "Define",
    title: "Set up your framework",
    description: "Create learning areas and the aspects within them, then define the attainment levels your setting uses.",
  },
  {
    step: "Plan",
    title: "Map objectives",
    description: "Attach learning objectives to age groups and attainment levels so expectations are clear per stage.",
  },
  {
    step: "Observe",
    title: "Record what you see",
    description: "Educators log observations against objectives, with next steps captured while it's still fresh.",
  },
  {
    step: "Report",
    title: "Turn it into evidence",
    description: "Generate assessment reports by child, class, learning area or date range when you need them.",
  },
];

/**
 * Language support. The portal ships English and Arabic with automatic RTL.
 * We describe this qualitatively rather than quoting a language count that
 * can't be verified against the product.
 */
export const LANGUAGES = {
  supported: [
    { name: "English", native: "English", dir: "ltr" },
    { name: "Arabic", native: "العربية", dir: "rtl" },
  ],
  note: "Peekaboo runs in English and Arabic, and switches the entire interface to right-to-left automatically — for staff and families alike.",
};

export const FAQS = [
  {
    question: "Can Peekaboo replace the separate tools we use today?",
    answer:
      "That's the intent. Attendance, daily reports, curriculum and observations, staff records, invoicing and expenses, and your admissions pipeline all live in one platform — so the spreadsheets, group chats and paper folders can be retired rather than duplicated.",
  },
  {
    question: "Do parents need to download an app?",
    answer:
      "Yes — families use the Peekaboo Parent app to see daily reports, moments, announcements and events as they're published. It's available in English and Arabic, with full right-to-left layout.",
  },
  {
    question: "Which curriculum frameworks does it support?",
    answer:
      "The curriculum module is framework-agnostic. You define your own learning areas, aspects, objectives and attainment levels, which means it can be set up for EYFS, IPC, Jolly Curriculum, Whole School Development, Reggio Emilia or a framework specific to your setting.",
  },
  {
    question: "Can we run more than one center?",
    answer:
      "Yes. Each center has its own details, licence dates, currency and timezone, and management can work across all of them from a single account.",
  },
  {
    question: "Can we use our own branding?",
    answer:
      "Yes. Alongside using Peekaboo as it comes, you can have the parent app published in your own branding, or have a system and app built around your specific operation. Those are the three ways settings adopt Peekaboo.",
  },
  {
    question: "How is our data protected?",
    answer:
      "Records are held on secure infrastructure with encrypted storage and scheduled backups, and access is controlled by role — so staff only reach the information their role requires.",
  },
];
