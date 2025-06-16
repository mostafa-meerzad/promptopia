"use client";
import { createPromptSchema } from "@/app/validationSchemas";
import {
  Button,
  Checkbox,
  Field,
  Input,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type FormValues = z.infer<typeof createPromptSchema>;

const CreatePrompt = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(createPromptSchema) });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/prompts", data);
      reset();
      setIsSubmitting(false);
      router.push("/prompts");
    } catch (error) {
      setIsSubmitting(false);
      console.log("something went wrong!, ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        px={4}
        py={10}
        maxW={{ base: "lg", md: "2xl" }}
        gap={3}
        mx="auto"
        align="stretch"
      >
        <Field.Root invalid={!!errors.title}>
          <Field.Label>Title</Field.Label>
          <Input
            boxShadow="md"
            borderRadius="lg"
            {...register("title")}
            placeholder="e.g. Time travel"
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
          />
          <Field.ErrorText>
            {errors.title && errors.title.message}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.content}>
          <Field.Label>Prompt</Field.Label>
          <Textarea
            boxShadow="md"
            borderRadius="lg"
            minH={"40"}
            resize={"vertical"}
            autoresize
            {...register("content")}
            placeholder="e.g. Write a tweet about time travel"
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
          />
          <Field.ErrorText>
            {errors.content && errors.content.message}
          </Field.ErrorText>
        </Field.Root>
        {/* todo: make tags field work  */}
        {/* <Field.Root invalid={!!errors.tags}> */}
        <Field.Root>
          <Field.Label>Tags</Field.Label>
          <Input
            boxShadow="md"
            borderRadius="lg"
            // {...register("tags", { value: "" })}
            placeholder="e.g. #time #travel"
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
          />
          <Field.ErrorText>
            {/* {errors.tags && errors.tags.message} */}
          </Field.ErrorText>
        </Field.Root>
        {/* todo: make visibility field work  */}

        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Label>Visibility (Private)</Checkbox.Label>
          <Checkbox.Control
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
          />
        </Checkbox.Root>

        <Button
          type="submit"
          colorScheme="teal"
          width="full"
          disabled={isSubmitting}
        >
          Create Prompt {isSubmitting && <Spinner />}
        </Button>
      </VStack>
    </form>
  );
};

export default CreatePrompt;
