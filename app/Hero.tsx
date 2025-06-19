import { Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack my={10} gap={{ base: 4, sm: 8 }} alignItems={"center"}>
      <Heading
        as={"h1"}
        fontSize={{ base: "6xl", sm: "7xl" }}
        fontWeight={"900"}
        lineHeight={{ base: "4rem", sm: "4.4rem" }}
        textAlign={"center"}
        textTransform={"capitalize"}
      >
        <Text as={"span"} display={"block"}>
          discover & share
        </Text>
        <Text as={"span"} display={"block"} color={"orange.400"}>
          AI-Powered prompts
        </Text>
      </Heading>

      <Text
        textAlign={"center"}
        color={"gray.500"}
        fontSize={"xl"}
        maxW={"700px"}
      >
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </Text>
    </Stack>
  );
};

export default Hero;
