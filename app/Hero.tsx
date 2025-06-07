import { Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack px={{sm: 5, md: 10}} mt={"0"} mb={10} gap={8} alignItems={"center"}>
      <Heading
        as={"h1"}
        fontSize={"7xl"}
        fontWeight={"900"}
        // fontWeight={"bolder"}
        lineHeight={"4.4rem"}
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
