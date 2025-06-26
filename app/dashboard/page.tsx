import { prismaClient } from "@/prisma/lib/prisma";
import { Box, Grid, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import searchPrompts from "../_services/promptService";
import authOptions from "../auth/authOptions";
import PromptCard from "../PromptCard";
import UserInfo from "./UserInfo";

const DashBoard = async ({ searchParams }: { searchParams: { q: string } }) => {
  const { q } = await searchParams;
  const session = await getServerSession(authOptions);
  let user = undefined;
  if (session?.user?.email)
    user = await prismaClient?.user.findUnique({
      where: { email: session?.user?.email },
    });

  const prompts = await searchPrompts({
    q,
    authorId: user?.id,
    scope: "MINE_ONLY",
  });

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "40% 60%", lg: "20% 80%" }}
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
        <Stack direction={{ base: "column", md: "row" }} mb={5} gap={4}>
          {/* <SelectComponent /> */}
          {/* <SearchInput /> */}
        </Stack>
        <Box>
          <SimpleGrid
            as={"ul"}
            columns={{ base: 1, lg: 2 }}
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
                readonly={false}
              />
            ))}
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default DashBoard;
