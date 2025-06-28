"use client";
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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormValues, promptSchema } from "../../services/validationSchemas";

interface Props {
  initialValues?: {
    title: string;
    content: string;
    tags?: string;
    isPublic?: boolean;
  };
  id?: number;
}

export default function PromptForm({ initialValues, id }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      title: initialValues?.title ?? "",
      content: initialValues?.content ?? "",
      tags: initialValues?.tags ?? "",
      isPublic: initialValues?.isPublic ?? true,
    },
  });

  /* When initialValues arrive,
     sync them into the form. */
  useEffect(() => {
    if (initialValues) {
      reset({
        title: initialValues.title ?? "",
        content: initialValues.content,
        tags: initialValues.tags ?? "",
        isPublic: initialValues.isPublic ?? true,
      });
    }
  }, [initialValues, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      if (initialValues) {
        await axios.put(`/api/prompts/${id}`, data);
      } else {
        await axios.post("/api/prompts", data);
      }
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
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
        {/* Title ------------------------------------------------------- */}
        <Field.Root invalid={!!errors.title}>
          <Field.Label>Title</Field.Label>
          <Input
            boxShadow="md"
            borderRadius="lg"
            placeholder="e.g. Time travel"
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
            {...register("title")}
          />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.content}>
          <Field.Label>Prompt</Field.Label>
          <Textarea
            boxShadow="md"
            borderRadius="lg"
            minH="40"
            resize="vertical"
            placeholder="e.g. Write a tweet about time travel"
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
            {...register("content")}
          />
          <Field.ErrorText>{errors.content?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.tags}>
          <Field.Label>Tags</Field.Label>
          <Input
            boxShadow="md"
            borderRadius="lg"
            placeholder="e.g. #time #travel"
            _light={{ borderColor: "gray.500" }}
            _dark={{ borderColor: "gray.600" }}
            {...register("tags")}
          />
          <Field.ErrorText>{errors.tags?.message}</Field.ErrorText>
        </Field.Root>

        <Checkbox.Root
          defaultChecked={initialValues ? initialValues.isPublic : true}
        >
          <Checkbox.HiddenInput {...register("isPublic")} />
          <Checkbox.Label>Visibility (Public)</Checkbox.Label>
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
          {isSubmitting ? <Spinner /> : "Submit"}
        </Button>
      </VStack>
    </form>
  );
}
