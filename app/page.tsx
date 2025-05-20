import { Box, Text, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import PromptsList from "./components/PromptsList";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <PromptsList/>
    </Box>
  );
};

export default HomePage;
