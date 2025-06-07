import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import TopRatedPrompts from "./TopRatedPrompts";
import ViewMore from "./ViewMore";

const HomePage = () => {
  return (
    <Box my={10}>
      <Hero />
      <TopRatedPrompts />
      <ViewMore />
    </Box>
  );
};

export default HomePage;
