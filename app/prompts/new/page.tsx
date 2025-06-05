"use client";
import { createPromptSchema } from "@/app/validationSchemas";
import { Box, Button, Field, Flex, Spinner } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import type { Options } from "easymde";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type FormValues = z.infer<typeof createPromptSchema>;

const CreatePrompt = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(createPromptSchema) });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      // 'image' removed
      "|",
      "preview",
      "side-by-side",
      "fullscreen",
      "|",
      "guide",
    ],
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      await axios.post("http://localhost:3000/api/prompts", data);
      reset();
      router.push("/");
    } catch (error) {
      setIsSubmitting(false);
      console.log("something went wrong!, ", error);
    }
  };

  return (
    <Flex justifyContent={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={!!errors}>
          <Field.ErrorText>
            {errors.prompt && errors.prompt.message}
          </Field.ErrorText>
          <Controller
            name="prompt"
            control={control}
            defaultValue=""
            rules={{ required: "prompt is required" }}
            render={({ field }) => (
              <Box width={{ sm: "full", md: "500px", lg: "900px" }}>
                <SimpleMDE
                  placeholder="Write your prompt..."
                  options={editorOptions}
                  {...field}
                />
              </Box>
            )}
          />
        </Field.Root>

        <Button
          type="submit"
          colorScheme="teal"
          width="full"
          disabled={isSubmitting}
        >
          create prompt {isSubmitting && <Spinner />}
        </Button>
      </form>
    </Flex>
  );
};

export default CreatePrompt;
