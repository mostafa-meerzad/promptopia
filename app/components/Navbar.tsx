import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingX={"10"} paddingY={"5"}>
      <HStack>
        <Image src={"/logo.svg"} boxSize={8} />
        <Text fontWeight={"semibold"} color={"gray.800"}>
          Promptopia
        </Text>
      </HStack>

      <HStack>
        <Button borderRadius={"full"} paddingX={"5"} paddingY={"2"}>
          Create
        </Button>
        <Button borderRadius={"full"} paddingX={"5"} paddingY={"2"}>
          Sign out
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
