import type { SiteSettings } from "./types";

/**
 * Global site chrome. Contact details are the real, published Peekaboo
 * details from peek-a-boo.app — do not replace with placeholders.
 */
export const SITE = {
  name: "Peekaboo",
  /** Product line names, as used inside the portal itself. */
  products: {
    care: "Peekaboo Care",
    parent: "Peekaboo Parent",
  },
  /** The portal's own name for itself, shown in its sidebar badge. */
  systemName: "Nursery Operating System",
  /**
   * The portal's API origin — where the signup wizard posts registrations and
   * reads its country/currency lists. Not a link; see `loginUrl` for that.
   */
  portalUrl: "https://portal.peek-a-boo.app",
  /** Where "Sign in" sends people. */
  loginUrl: "https://peek.peek-a-boo.app/login",
  phone: "+971 50 405 1555",
  phoneHref: "tel:+971504051555",
  email: "contactus@peekabooedu.com",
  whatsappUrl: "https://wa.me/971504051555",
  /** Full registered address, as published by the parent company. */
  address: [
    "Office 703, Wing B",
    "DSO Headquarters Building",
    "Dubai Silicon Oasis, Dubai",
    "United Arab Emirates",
  ],
  location: "Dubai Silicon Oasis, Dubai, United Arab Emirates",
  parentCompany: "Educore Systems & Technologies",
} as const;

/**
 * The site's CTA system. Every call to action on the site resolves to one of
 * these, so wording stays consistent instead of drifting into a mix of
 * "Let's Go" / "Setup Now" / "Learn More".
 */
export const CTA = {
  primary: { label: "Book a demo", href: "/contact" },
  secondary: { label: "Explore the platform", href: "/features" },
  signIn: { label: "Sign in", href: SITE.loginUrl },
} as const;

export const fallbackSiteSettings: SiteSettings = {
  title: SITE.name,
  tagline: "The connected operating platform for modern childcare.",
  navLinks: [
    { label: "Platform", type: "internal", internalPath: "/features" },
    { label: "Solutions", type: "internal", internalPath: "/solutions" },
    { label: "Peekaboo Care", type: "internal", internalPath: "/peekaboo-care" },
    { label: "Peekaboo Parent", type: "internal", internalPath: "/peekaboo-parent" },
    { label: "About", type: "internal", internalPath: "/about" },
  ],
  headerCta: {
    label: CTA.primary.label,
    style: "primary",
    link: { label: CTA.primary.label, type: "internal", internalPath: CTA.primary.href },
  },
  footerColumns: [
    {
      heading: "Platform",
      links: [
        { label: "All capabilities", type: "internal", internalPath: "/features" },
        { label: "Children & learning", type: "internal", internalPath: "/features#children-learning" },
        { label: "Operations", type: "internal", internalPath: "/features#operations" },
        { label: "Finance & accounts", type: "internal", internalPath: "/features#finance" },
        { label: "Admissions CRM", type: "internal", internalPath: "/features#admissions" },
      ],
    },
    {
      heading: "Products",
      links: [
        { label: "Peekaboo Care", type: "internal", internalPath: "/peekaboo-care" },
        { label: "Peekaboo Parent", type: "internal", internalPath: "/peekaboo-parent" },
        { label: "Solutions", type: "internal", internalPath: "/solutions" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", type: "internal", internalPath: "/about" },
        { label: "Contact", type: "internal", internalPath: "/contact" },
        { label: "Sign in", type: "external", externalUrl: SITE.loginUrl },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy policy", type: "internal", internalPath: "/privacy" },
        { label: "Terms of service", type: "internal", internalPath: "/terms" },
      ],
    },
  ],
  socialLinks: [{ platform: "WhatsApp", url: SITE.whatsappUrl }],
  contactEmail: SITE.email,
  defaultSeo: {
    metaTitle: "Peekaboo — The nursery operating system",
    metaDescription:
      "Peekaboo connects classrooms, families, staff and finance in one platform built for nurseries and early-years centers. Attendance, daily reports, curriculum, billing and admissions — together.",
  },
};
