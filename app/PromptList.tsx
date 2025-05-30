import {
  Box,
  Button,
  Card,
  CardBody,
  CardRoot,
  Flex,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import PromptCard from "./PromptCard";

interface Prompt {
  prompts: { prompt: string; id: number }[];
}

const PromptList = async () => {
  const response = await axios.get<Prompt>("http://localhost:3000/api/prompts");
  const { prompts } = await response.data;
  console.log("prompts");
  console.log(prompts);

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap="3"
      my={10}
      px={10}
      justifyContent={"center"}
    >
      {prompts.map((p) => (
        <PromptCard prompt={p} key={p.id} />
      ))}
    </Grid>
  );
};

export default PromptList;
