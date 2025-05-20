import { Box, Text, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import PromptsList from "./components/PromptsList";
import Search from "./components/Search";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Search/>
      <PromptsList/>
    </Box>
  );
};

export default HomePage;
