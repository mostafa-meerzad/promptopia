import { z } from "zod";

export const promptSchema = z.object({
  content: z
    .string({ required_error: "You should type your prompt" })
    .trim()
    .min(5, { message: "Prompt must be at least 5 characters long" }),

  tags: z.string().optional(),

  isPublic: z.coerce.boolean().default(true),
});

export type FormValues = z.input<typeof promptSchema>;
