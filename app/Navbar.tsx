import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box px={{sm: 3, md:6, lg:10}} py={{sm: 3, md:5}}>
      <Flex align={"center"}>
        <Link as={NextLink} href="/">
          <Image src={"/logo.svg"} width={8} height={8} />
          Promptopia
        </Link>
        <Spacer />
        <HStack>
          <Link href="/prompts/new" as={NextLink}>
            <Button>Create</Button>
          </Link>
          <Link href="/" as={NextLink}>
            <Button>login</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
