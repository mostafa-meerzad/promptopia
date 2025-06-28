import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import { Prompt } from "@prisma/client";
import PromptCard from "@/components/PromptCard";
import SearchInput from "@/components/SearchInput";

interface PromptWithAuthor extends Prompt {
  author: { name: string | null; email: string; image: string | null };
}

interface Props {
  query: string;
  prompts: PromptWithAuthor[];
}

const TopRatedPrompts = ({ query, prompts }: Props) => {
  return (
    <Box as={"section"} mb={10} mt={5}>
      <Flex
        flexDirection={{ base: "column-reverse" }}
        position={"relative"}
        my={3}
      >
        <Heading as={"h2"} fontSize={"md"} fontWeight={"bold"} mb={5}>
          {query ? "Search Results" : "Top Rated"}
        </Heading>
        <Box
          w={{ base: "full", md: "70%", lg: "50%" }}
          position={{ base: "relative", md: "absolute" }}
          mx={"auto"}
          left={{ base: 0, md: "auto", lg: "0" }}
          right={0}
        >
          <SearchInput />
        </Box>
      </Flex>
      <SimpleGrid
        as={"ul"}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={4}
        listStyleType={"none"}
        p={0}
      >
        {prompts.length === 0 ? (
          <Text textAlign={"center"}>No prompts found ☹️.</Text>
        ) : (
          prompts.map(({ id, content, tags, author }) => (
            <PromptCard
              key={id}
              id={id}
              content={content}
              tags={tags}
              author={author}
            />
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default TopRatedPrompts;
