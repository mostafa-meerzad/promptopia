import { Box, Text, VStack } from "@chakra-ui/react";
import Header from "./Header";
import PromptList from "./PromptList";

const HomePage = () => {
  return (
    <Box my={10}>
      <Header />
      <PromptList />
    </Box>
  );
};

export default HomePage;
