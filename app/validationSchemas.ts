import { z } from "zod";

export const createPromptSchema = z.object({
  prompt: z.string().min(5, "Prompt must at least be 5 character(s)"),
});
