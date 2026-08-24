import { z } from "zod";

export const CENTER_COUNT_OPTIONS = ["1", "2–3", "4–10", "More than 10"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.email("Please enter a valid work email address.").trim(),
  organisation: z.string().trim().min(2, "Please tell us your nursery or organisation name.").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  centers: z.enum(CENTER_COUNT_OPTIONS).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A sentence or two about your setting helps us prepare.").max(2000),
  /**
   * Honeypot. Deliberately NOT validated as "must be empty" — a validation
   * error would name the field and tell a bot exactly what to leave blank.
   * The route accepts it, then silently discards the submission instead.
   */
  company: z.string().max(200).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;
