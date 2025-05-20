import { Box, HStack, Input } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <HStack justifyContent={"center"} marginBottom={"10"}>
      <Input
        placeholder="search for a tag or username"
        maxWidth={"md"}
        boxShadow={"xl"}
        borderRadius={"lg"}
      />
    </HStack>
  );
};

export default Search;
