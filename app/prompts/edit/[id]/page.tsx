import { prismaClient } from "@/prisma/lib/prisma";
import { notFound } from "next/navigation";
import PromptForm from "../../components/PromptForm";
import { Heading, VStack } from "@chakra-ui/react";
import { joinTags } from "@/utils/parseTags";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const prompt = await prismaClient.prompt.findUnique({
    where: { id: id },
  });
  if (!prompt) return notFound();

  return (
    <>
      <VStack mt={4}>
        <Heading as="h2">Edit Prompt</Heading>
      </VStack>
      <PromptForm
        id={id}
        initialValues={{
          content: prompt.content,
          isPublic: prompt.isPublic,
          tags: joinTags(prompt.tags),
        }}
      />
    </>
  );
};

export default EditPage;
