import { prismaClient } from "@/prisma/lib/prisma";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  SimpleGrid,
  Stack,
  TagLabel,
  TagRoot,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { CiSearch } from "react-icons/ci";
import authOptions from "../auth/authOptions";
import PromptCard from "../prompts/components/PromptCard";
import Drawer from "./Drawer";
import SelectComponent from "./SelectComponent";

const DashBoard = async () => {
  const session = await getServerSession(authOptions);
  const prompts = await prismaClient.prompt.findMany({
    where: { author: { email: session?.user?.email! } },
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
        px={4}
        py={"16"}
        h={{ base: "auto", md: "100svh" }}
      >
        <VStack color={{ _dark: "whiteAlpha.700", _light: "blackAlpha.700" }}>
          <AvatarRoot
            variant={"outline"}
            outline={"none"}
            cursor={"pointer"}
            w={"36"}
            h={"36"}
          >
            <AvatarFallback name={session?.user?.name ?? "?"} />
            <AvatarImage src={session?.user?.image ?? undefined} />
          </AvatarRoot>

          <Text>{session?.user?.name}</Text>
          <Text>{session?.user?.email}</Text>

          <VStack alignItems={"start"} w="full" my={5}>
            <HStack>
              <Text>Public Prompts</Text>
              <TagRoot size={"xl"}>
                <TagLabel>{10}</TagLabel>
              </TagRoot>
            </HStack>
            <HStack>
              <Text>Private Prompts</Text>
              <TagRoot size={"xl"}>
                <TagLabel>{10}</TagLabel>
              </TagRoot>
            </HStack>
          </VStack>

          <Button
            mt={5}
            w="full"
            borderRadius={"full"}
            fontSize={"lg"}
            fontWeight={"semibold"}
          >
            Logout
          </Button>
        </VStack>
      </GridItem>

      <GridItem>
        <Stack direction={{ base: "column", md: "row" }} mb={5} gap={4}>
          <Box display={{ base: "block", md: "none" }}>
            <Drawer session={session} />
          </Box>
          <SelectComponent />
          <InputGroup startElement={<CiSearch size={"20px"} />}>
            <Input placeholder="Search a prompt..." borderRadius={"full"} />
          </InputGroup>
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
              />
            ))}
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default DashBoard;
