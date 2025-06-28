import { Center, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const ViewMore = () => {
  return (
    <Center mt={6}>
      <Link
        as={NextLink}
        href="/prompts"
        color="orange.400"
        fontWeight="medium"
      >
        View More Prompts →
      </Link>
    </Center>
  );
};

export default ViewMore;
