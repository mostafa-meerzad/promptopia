import {
    AvatarFallback,
    AvatarImage,
    AvatarRoot,
    Button,
    HStack,
    TagLabel,
    TagRoot,
    Text,
    VStack
} from "@chakra-ui/react";

const UserInfo = () => {
  return (
    <VStack color={{ _dark: "whiteAlpha.700", _light: "blackAlpha.700" }}>
      <AvatarRoot
        variant={"outline"}
        outline={"none"}
        cursor={"pointer"}
        w={"36"}
        h={"36"}
      >
        {/* <AvatarFallback name={session?.user?.name ?? "?"} /> */}
        <AvatarFallback name={"?"} />
        {/* <AvatarImage src={session?.user?.image ?? undefined} /> */}
        <AvatarImage src={"test"} />
      </AvatarRoot>

      {/* <Text>{session?.user?.name}</Text> */}
      <Text>Mostafa Meerzad</Text>
      <Text>mostafa@test.com</Text>
      {/* <Text>{session?.user?.email}</Text> */}

      <VStack alignItems={"start"} w="full" my={5}>
        <HStack>
          <Text>Public Prompts</Text>
          <TagRoot size={"lg"}>
            <TagLabel>{1}</TagLabel>
          </TagRoot>
        </HStack>
        <HStack>
          <Text>Private Prompts</Text>
          <TagRoot size={"lg"}>
            <TagLabel>{2}</TagLabel>
          </TagRoot>
        </HStack>
      </VStack>

      <Button
        mt={5}
        w="full"
        borderRadius={"full"}
        fontSize={"md"}
        fontWeight={"semibold"}
      >
        Logout
      </Button>
    </VStack>
  );
};

export default UserInfo;
