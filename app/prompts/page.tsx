import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PromptCard from "./PromptCard";
import { prisma } from "@/lib/prisma";

const Prompts = async () => {
  const prompts = await prisma.prompt.findMany();

  return (
    <Box as={"section"} my={10}>
      <SimpleGrid
        as={"ul"}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        listStyleType={"none"}
        p={0}
      >
        {prompts.map((p) => (
          <PromptCard prompt={p.prompt} key={p.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Prompts;
