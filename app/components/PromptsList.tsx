import {
  Box,
  Grid,
  Heading,
  List,
  ListItem,
  ListRoot,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PromptsList = () => {
  const prompts: { title: string; prompt: string; id: number }[] = [
    { title: "prompt 1", prompt: "hello 1", id: 1 },
    { title: "prompt 2", prompt: "hello 2", id: 2 },
    { title: "prompt 3", prompt: "hello 3", id: 3 },
    { title: "prompt 4", prompt: "hello 4", id: 4 },
    { title: "prompt 5", prompt: "hello 5", id: 5 },
    { title: "prompt 6", prompt: "hello 6", id: 6 },
  ];
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={"2"}
      width={"full"}
      paddingX={"10"}
    >
      {prompts.map((t) => (
        <Box
          key={t.id}
          border={"ActiveBorder"}
          justifyContent={"center"}
          borderRadius={"md"}
          borderWidth={"1px"}
          borderStyle={"solid"}
          padding={5}
        >
          <Heading>{t.title}</Heading>
          <Text>{t.prompt}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default PromptsList;
