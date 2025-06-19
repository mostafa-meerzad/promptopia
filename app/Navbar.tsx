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
  Skeleton,
  Spacer,
  Text
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  return (
    <Box as={"nav"} py={5}>
      <Flex align={"center"}>
        <Logo />
        <Spacer />
        <HStack gap={3}>
          <CreateLink />
          <AuthStatus />
          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

const Logo = () => {
  return (
    <Link as={NextLink} href="/">
      <Image src={"/logo.svg"} width={8} height={8} />
      <Text display={{ base: "none", sm: "inline-block" }}>Promptopia</Text>
    </Link>
  );
};

const CreateLink = () => {
  const pathName = usePathname();
  const { status } = useSession();
  const router = useRouter();

  if (pathName === "/prompts/new") return null;

  return (
    <Button
      borderRadius={"full"}
      px={6}
      fontSize={"md"}
      onClick={() => {
        if (status !== "authenticated") signIn("", { callbackUrl: "/" });
        router.push("/prompts/new");
      }}
    >
      Create
    </Button>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton />;
  if (status === "unauthenticated")
    return (
      <Button
        borderRadius={"full"}
        px={6}
        fontSize={"md"}
        variant={"outline"}
        onClick={() => {
          signIn("", { callbackUrl: "/" });
        }}
      >
        Login
      </Button>
    );

  return (
    <MenuRoot>
      <MenuTrigger>
        <AvatarRoot variant={"outline"} outline={"none"} cursor={"pointer"}>
          <AvatarFallback name={session!.user?.name!} />
          <AvatarImage src={session!.user?.image!} />
        </AvatarRoot>
      </MenuTrigger>
      <Portal>
        <MenuPositioner ml={10} mt={3}>
          <MenuContent p={3}>
            <MenuItem
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
              _active={{ background: "none" }}
              value={session!.user?.email!}
            >
              {session!.user?.email!}
            </MenuItem>
            <MenuItem
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
              _active={{ background: "none" }}
              value={"log out"}
            >
              <Button
                borderRadius={"full"}
                fontSize={"sm"}
                w={"full"}
                onClick={async () => {
                  await signOut({ redirect: true, callbackUrl: "/" });
                }}
              >
                log out
              </Button>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

export default Navbar;
