import { Box, SimpleGrid } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import SearchInput from "../_components/SearchInput";
import searchPrompts from "../_services/promptService";
import authOptions from "../auth/authOptions";
import PromptCard from "./components/PromptCard";
import { prismaClient } from "@/prisma/lib/prisma";

const Prompts = async ({ searchParams }: { searchParams: { q: string } }) => {
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
    scope: "PUBLIC_AND_MINE",
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
