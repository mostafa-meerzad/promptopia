import { Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack px={{sm: 5, md: 10}} mt={15} mb={10} alignItems={"center"}>
      <Heading
        as={"h1"}
        fontSize={"3.3rem"}
        fontWeight={"900"}
        lineHeight={"3.3rem"}
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
        fontSize={"md"}
        maxW={"500px"}
      >
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </Text>
    </Stack>
  );
};

export default Hero;
