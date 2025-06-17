import { z } from "zod";

export const promptSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, { message: "Title must be at least 2 characters" })
    .max(100, { message: "Title can’t be longer than 100 characters" })
    .optional()
    .default("Prompt"),

  content: z
    .string({ required_error: "You should type your prompt" })
    .trim()
    .min(5, { message: "Prompt must be at least 5 characters long" }),

  tags: z.string().optional(),

  isPublic: z.coerce.boolean().default(true),
});

export type FormValues = z.input<typeof promptSchema>;
