"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { status, data: session } = useSession();
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Box as={"nav"} py={5}>
      <Flex align={"center"}>
        <Link as={NextLink} href="/">
          <Image src={"/logo.svg"} width={8} height={8} />
          <Text display={{ base: "none", sm: "inline-block" }}>Promptopia</Text>
        </Link>
        <Spacer />
        <HStack gap={3}>
          {pathName !== "/prompts/new" ? (
            <Button asChild borderRadius={"full"} px={6} fontSize={"md"}>
              <NextLink
                href={
                  status === "authenticated"
                    ? "/prompts/new"
                    : "/api/auth/signin"
                }
              >
                Create
              </NextLink>
            </Button>
          ) : (
            ""
          )}

          {status === "authenticated" ? (
            <MenuRoot>
              <MenuTrigger>
                <AvatarRoot
                  variant={"outline"}
                  outline={"none"}
                  cursor={"pointer"}
                >
                  <AvatarFallback name={session.user?.name!} />
                  <AvatarImage src={session.user?.image!} />
                </AvatarRoot>
              </MenuTrigger>
              <Portal>
                <MenuPositioner ml={10} mt={3}>
                  <MenuContent>
                    <MenuItem value={session.user?.email!}>
                      {session.user?.email!}
                    </MenuItem>
                    <MenuItem value={"log out"}>
                      <Button
                        borderRadius={"full"}
                        px={6}
                        w={"full"}
                        variant={"surface"}
                      >
                        <NextLink href="/api/auth/signout">log out</NextLink>
                      </Button>
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </Portal>
            </MenuRoot>
          ) : (
            <Button
              borderRadius={"full"}
              px={6}
              fontSize={"md"}
              variant={"outline"}
            >
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
          )}

          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
