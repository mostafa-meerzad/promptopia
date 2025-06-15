import { Box, Heading, HStack, SimpleGrid } from "@chakra-ui/react";

import { prismaClient } from "@/prisma/lib/prisma";
import PromptCard from "./prompts/PromptCard";

const TopRatedPrompts = async () => {
  const topPrompts = await prismaClient.prompt.findMany({
    where: { rating: { gt: 3.5, lte: 5 } },
    take: 6,
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
        gap={4}
        listStyleType={"none"}
        p={0}
      >
        {topPrompts.map(({ id, title, content, tags }) => (
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

export default TopRatedPrompts;
