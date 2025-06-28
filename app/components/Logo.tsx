import { HStack, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <Link as={NextLink} href="/" _hover={{ textDecor: "none" }} _focus={{outline: "none"}}>
      <HStack gap={2}>
        <Image src={"/logo.svg"} boxSize={8} alt="Promptopia logo" />
        <Text display={{ base: "none", sm: "block" }}>Promptopia</Text>
      </HStack>
    </Link>
  );
};

export default Logo;
