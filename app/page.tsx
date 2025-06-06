import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "./Header";

const HomePage = () => {
  return (
    <Box my={10}>
      <Header />
      <Link as={NextLink} href="/prompts">
        view all
      </Link>
    </Box>
  );
};

export default HomePage;
