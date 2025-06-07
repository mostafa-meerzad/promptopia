import { Box, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import { prisma } from "@/lib/prisma";
import PromptCard from "./prompts/PromptCard";

const TopRatedPrompts = async () => {
  const prompts = await prisma.prompt.findMany({
    where: { id: { gt: 4, lt: 10 } },
  });

  return (
    <Box as={"section"} mb={10} mt={5}>
      <HStack>
        <Heading as={"h2"} fontSize={"md"} fontWeight={"bold"} mb={5}>
          Top Rated
        </Heading>
      </HStack>
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

export default TopRatedPrompts;
