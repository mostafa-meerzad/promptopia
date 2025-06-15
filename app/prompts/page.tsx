import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PromptCard from "./PromptCard";
import { prismaClient } from "@/prisma/lib/prisma";

const Prompts = async () => {
  const prompts = await prismaClient.prompt.findMany();

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
