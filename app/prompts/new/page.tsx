"use client";
import { createPromptSchema } from "@/app/validationSchemas";
import { Button, Field, Flex, Spinner } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(() => import("./MarkdownEditor"), {
  ssr: false,
});

export type FormValues = z.infer<typeof createPromptSchema>;

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

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      await axios.post("/prompts", data);
      reset();
      router.push("/");
    } catch (error) {
      setIsSubmitting(false);
      console.log("something went wrong!, ", error);
    }
  };

  return (
    <Flex justifyContent={"center"} py={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={!!errors} w={{base: "100%", md: "500px", lg: "800px"}} >
          <Field.ErrorText>
            {errors.prompt && errors.prompt.message}
          </Field.ErrorText>
          <MarkdownEditor control={control} />
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
