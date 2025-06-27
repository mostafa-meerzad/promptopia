import { Box, SimpleGrid } from "@chakra-ui/react";
import SearchInput from "../_components/SearchInput";
import searchPrompts from "../_services/promptService";
import PromptCard from "../PromptCard";
import getUserInfo from "../_services/userService";

type Props = { searchParams: { q: string } };

const Prompts = async ({ searchParams }: Props) => {
  const { q } = await searchParams;
  const user = await getUserInfo();
  const prompts = await searchPrompts({
    q,
    scope: user ? "PUBLIC_AND_MINE" : "PUBLIC_AND_MINE",
    authorId: user?.id,
  });

  return (
    <Box as={"section"} my={10}>
      <SearchInput />

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
