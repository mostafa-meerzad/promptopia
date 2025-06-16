import { z } from "zod";

// add more fields in the future
export const createPromptSchema = z.object({
  title: z.string().optional(),
  content: z
    .string({ message: "You should type your prompt" })
    .min(5, "Prompt cannot be empty"),
});
