"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Control, Controller } from "react-hook-form";
import type { Options } from "easymde";
import { z } from "zod";
import { createPromptSchema } from "@/app/validationSchemas";
import { Box } from "@chakra-ui/react";

type FormValues = z.infer<typeof createPromptSchema>;
type Props = {
  control: Control<FormValues>;
};

export default function MarkdownEditor({ control }: Props) {
  const editorOptions: Options = {
    autofocus: true,
    spellChecker: true,
    toolbar: [
      "bold",
      "italic",
      "heading",
      "|",
      "quote",
      "unordered-list",
      "ordered-list",
      "|",
      "link",
      "|",
      "preview",
      "side-by-side",
      "fullscreen",
      "|",
      "guide",
    ],
  };

  return (
    <Controller
      name="content"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Box w={"100%"} boxShadow={"xl"}>
          <SimpleMDE
            placeholder="Start typing your imagination..."
            options={editorOptions}
            {...field}
          />
        </Box>
      )}
    />
  );
}
