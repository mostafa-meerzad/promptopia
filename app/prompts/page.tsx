import { Box, SimpleGrid } from "@chakra-ui/react";
import SearchInput from "../../components/SearchInput";
import searchPrompts from "../services/promptService";
import getUserInfo from "../services/userService";
import PromptCard from "../../components/PromptCard";


const Prompts = async ({ searchParams }:{ searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;
  const user = await getUserInfo();
  const prompts =await searchPrompts({
    q,
    scope: user ? "PUBLIC_AND_MINE" : "PUBLIC_AND_MINE",
    authorId: user?.id,
    viewerId: user?.id,


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
        mt={8}
      >
        {prompts.map(({ id, content, tags, author, userLiked, totalLikes }) => (
          <PromptCard
            key={id}
            id={id}
            content={content}
            tags={tags}
            author={author}
            likes={totalLikes}
            userLiked={userLiked}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Prompts;
