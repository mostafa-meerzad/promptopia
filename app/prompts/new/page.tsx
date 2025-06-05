"use client";
import { Box, Button, Field, Flex } from "@chakra-ui/react";
import axios from "axios";
import type { Options } from "easymde";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

interface FormValues {
  prompt: string;
}

const CreatePrompt = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const router = useRouter();

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
      await axios.post("http://localhost:3000/api/prompts", data);
      reset();
      router.push("/");
    } catch (error) {
      console.log("something went wrong!, ", error);
    }
  };

  return (
    <Flex justifyContent={"center"}  >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={!!errors}>
          <Controller
            name="prompt"
            control={control}
            defaultValue=""
            rules={{ required: "prompt is required" }}
            render={({ field }) => (
              <Box width={{sm: "full", md: "500px", lg: "900px"}}>
                <SimpleMDE
                  placeholder="Write your prompt..."
                  options={editorOptions}
                  {...field}
                />
              </Box>
            )}
          />
          <Field.ErrorText>{errors.prompt?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" colorScheme="teal" width="full">
          create prompt
        </Button>
      </form>
    </Flex>
  );
};

export default CreatePrompt;
