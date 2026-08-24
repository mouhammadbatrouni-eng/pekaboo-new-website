import type { Image, PortableTextBlock } from "@sanity/types";

export interface SanityImage extends Image {
  alt?: string;
}

export interface Link {
  label: string;
  type: "internal" | "external";
  internalPath?: string;
  externalUrl?: string;
}

export interface Cta {
  label: string;
  link: Link;
  style: "primary" | "secondary";
}

export interface Seo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

export interface Testimonial {
  _id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  nurseryName?: string;
  photo?: SanityImage;
}

export interface Faq {
  _id?: string;
  question: string;
  /** Sanity supplies portable text; bundled fallbacks use a plain string. */
  answer: PortableTextBlock[] | string;
  group?: string;
}

export interface HomePage {
  heroEyebrow?: string;
  heroHeading: string;
  heroDescription?: string;
  heroCtas?: Cta[];
  seo?: Seo;
}


export interface FooterColumn {
  heading: string;
  links: Link[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteSettings {
  title: string;
  tagline?: string;
  navLinks?: Link[];
  headerCta?: Cta;
  footerColumns?: FooterColumn[];
  socialLinks?: SocialLink[];
  contactEmail?: string;
  defaultSeo?: Seo;
}
