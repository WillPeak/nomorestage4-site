import { z } from "zod";

/** Client-only Zod schemas (no Drizzle / DB for the static GitHub Pages build). */

export const insertAppointmentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  hadMriBefore: z.boolean(),
  medicalInfo: z.string().optional(),
  appointmentDate: z.string().min(1, "Appointment date is required"),
  appointmentTime: z.string().min(1, "Appointment time is required"),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type Newsletter = z.infer<typeof newsletterSchema>;
