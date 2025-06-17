import { prismaClient } from "@/prisma/lib/prisma";
import { notFound } from "next/navigation";
import PromptForm from "../../components/PromptForm";
import { Heading, VStack } from "@chakra-ui/react";
import { joinTags } from "@/utils/parseTags";

interface Props {
  params: {
    id: string;
  };
}

const EditPage = async ({ params }: Props) => {
  const {id} =  await params;
  const prompt = await prismaClient.prompt.findUnique({
    where: { id: parseInt(id) },
  });
  if (!prompt) return notFound();

  return (
    <>
      <VStack mt={4}>
        <Heading as="h2">Edit Prompt</Heading>
      </VStack>
      <PromptForm 
      id={parseInt(id)}
        mode="EDIT"
        initialValues={{
          content: prompt.content,
          title: prompt.title,
          isPublic: prompt.isPublic,
          tags: joinTags(prompt.tags),
        }}
      />
    </>
  );
};

export default EditPage;
