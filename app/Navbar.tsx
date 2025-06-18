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
import { useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  return (
    <Box as={"nav"} py={5}>
      <Flex align={"center"}>
        <Link as={NextLink} href="/">
          <Image src={"/logo.svg"} width={8} height={8} />
          <Text display={{ base: "none", sm: "inline-block" }}>Promptopia</Text>
        </Link>
        <Spacer />
        <HStack gap={3}>
          <Button asChild borderRadius={"full"} px={6} fontSize={"md"}>
            <NextLink href="/">Create</NextLink>
          </Button>
          <Button
            borderRadius={"full"}
            px={6}
            fontSize={"md"}
            variant={"outline"}
          >
            {status === "authenticated" && (
              <Link
                as={NextLink}
                w={"full"}
                h={"full"}
                href={"/api/auth/signout"}
              >
                Log out
              </Link>
            )}

            {status === "unauthenticated" && (
              <Link
                as={NextLink}
                w={"full"}
                h={"full"}
                href={"/api/auth/signin"}
              >
                Login
              </Link>
            )}
          </Button>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
