import { Box, Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SearchInput from "../../components/SearchInput";
import searchPrompts from "../services/promptService";
import getUserInfo from "../services/userService";
import PromptCard from "../../components/PromptCard";
import UserInfo from "../components/UserInfo";

const DashBoard = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  const user = await getUserInfo();
  const prompts = await searchPrompts({
    q,
    scope: "MINE_ONLY",
    authorId: user?.id,
  });

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "40% 60%", lg: "25% 75%" }}
      gap={5}
      mt={5}
    >
      <GridItem
        display={{ base: "none", md: "block" }}
        border={"solid"}
        borderWidth={"1px"}
        borderRadius={5}
        borderColor={{ _dark: "gray.800", _light: "gray.200" }}
        px={"4"}
        py={"16"}
        h={{ base: "auto", md: "100svh" }}
      >
        <UserInfo />
      </GridItem>
      <GridItem>
        <SearchInput />
        <Box mt={6}>
          <SimpleGrid
            as={"ul"}
            columns={{ base: 1, lg: 2 }}
            gap={6}
            listStyleType={"none"}
            p={0}
          >
            {prompts.length === 0 ? (
              <Text
                textAlign={"center"}
                mt={{ base: 32, md: 56 }}
                gridColumnStart={1}
                gridColumnEnd={3}
              >
                No prompts found.
              </Text>
            ) : (
              prompts.map(({ id, content, tags, author, totalLikes }) => (
                <PromptCard
                  key={id}
                  id={id}
                  content={content}
                  tags={tags}
                  readonly={false}
                  author={author}
                  likes={totalLikes}
                  userLiked={totalLikes > 0}
                />
              ))
            )}
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default DashBoard;
