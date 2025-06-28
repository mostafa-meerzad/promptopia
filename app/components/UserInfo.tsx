"use client";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Button,
  HStack,
  TagLabel,
  TagRoot,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import useUserInfo from "../dashboard/hooks/useUserInfo";

const UserInfo = () => {
  const { user } = useUserInfo();

  return (
    <VStack color={{ _dark: "whiteAlpha.700", _light: "blackAlpha.700" }}>
      <AvatarRoot
        variant={"outline"}
        outline={"none"}
        cursor={"pointer"}
        w={"36"}
        h={"36"}
      >
        <AvatarFallback name={user?.name ?? "?"} />
        <AvatarImage src={user?.image ?? undefined} />
      </AvatarRoot>

      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>

      <VStack alignItems={"start"} w="full" my={5}>
        <HStack>
          <Text>Public Prompts</Text>
          <TagRoot size={"lg"}>
            <TagLabel>{user?.publicPrompts}</TagLabel>
          </TagRoot>
        </HStack>
        <HStack>
          <Text>Private Prompts</Text>
          <TagRoot size={"lg"}>
            <TagLabel>{user?.privatePrompts}</TagLabel>
          </TagRoot>
        </HStack>
      </VStack>

      <Button
        mt={5}
        w="full"
        borderRadius={"full"}
        fontSize={"md"}
        fontWeight={"semibold"}
        onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
      >
        Logout
      </Button>
    </VStack>
  );
};

export default UserInfo;
