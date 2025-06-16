"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <Box as={"nav"} py={5}>
      <Flex align={"center"}>
        <Link as={NextLink} href="/">
          <Image src={"/logo.svg"} width={8} height={8} />
          <Text display={{base: "none", sm: "inline-block"}} >Promptopia</Text>
        </Link>
        <Spacer />
        <HStack gap={3}>
          <Button
            onClick={() => router.push("/prompts/new")}
            borderRadius={"full"}
            px={6}
            fontSize={"md"}
          >
            Create
          </Button>
          <Button
            onClick={() => router.push("/")}
            borderRadius={"full"}
            px={6}
            fontSize={"md"}
            variant={"outline"}
          >
            login
          </Button>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
