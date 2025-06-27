import { Box, Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SearchInput from "../_components/SearchInput";
import searchPrompts from "../_services/promptService";
import getUserInfo from "../_services/userService";
import PromptCard from "../PromptCard";
import UserInfo from "./UserInfo";

const DashBoard = async ({ searchParams }: { searchParams: { q: string } }) => {
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
        fontSize={"sm"}
        px={"4"}
        py={"16"}
        h={{ base: "auto", md: "100svh" }}
      >
        <UserInfo />
      </GridItem>
      <GridItem>
        <Stack direction={{ base: "column", md: "row" }} gap={4}>
          <SearchInput />
        </Stack>
        <Box>
          <SimpleGrid
            as={"ul"}
            columns={{ base: 1, lg: 2 }}
            gap={6}
            listStyleType={"none"}
            p={0}
          >
            {prompts.length === 0 ? (
              <Text textAlign={"center"} mt={32}>
                No prompts found.
              </Text>
            ) : (
              prompts.map(({ id, title, content, tags, author }) => (
                <PromptCard
                  key={id}
                  id={id}
                  title={title}
                  content={content}
                  tags={tags}
                  readonly={false}
                  author={author}
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
