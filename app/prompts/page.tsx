import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PromptCard from "./components/PromptCard";
import { prismaClient } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";

const Prompts = async () => {
  const session = await getServerSession(authOptions);
  let prompts;
  if (!session) {
    prompts = await prismaClient.prompt.findMany({ where: { isPublic: true } });
  } else {
    prompts = await prismaClient.prompt.findMany();
  }

  return (
    <Box as={"section"} my={10}>
      <SimpleGrid
        as={"ul"}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        listStyleType={"none"}
        p={0}
      >
        {prompts.map(({ id, title, content, tags }) => (
          <PromptCard
            key={id}
            id={id}
            title={title}
            content={content}
            tags={tags}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Prompts;
