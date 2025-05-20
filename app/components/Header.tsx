import { VStack, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <VStack justifyContent={"center"} paddingX={"20"} paddingY={"16"}>
      <Text
        as={"h1"}
        fontSize={"3.3rem"}
        fontWeight={"900"}
        lineHeight={"3.3rem"}
        textAlign={"center"}
        textTransform={"capitalize"}
      >
        <Text as={"span"} display={"block"}>
          discover & share
        </Text>{" "}
        <Text as={"span"} display={"block"} color={"orange.400"}>
          AI-Powered prompts
        </Text>
      </Text>

      <Text textAlign={"center"} color={"gray.500"} fontSize={"md"}>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </Text>
    </VStack>
  );
};

export default Header;
