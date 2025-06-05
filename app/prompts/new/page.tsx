"use client";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
const CreatePrompt = () => {
  const [prompt, setPrompt] = useState("");
  return (
    <Box maxW={"500px"}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          try {
            axios.post("http://localhost:3000/api/prompts", { prompt });
            setPrompt('')
          } catch (error) {
            console.log("something went wrong!, ", error);
          }
        }}
      >
        <Textarea
          variant={"subtle"}
          placeholder="your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button width={"full"} type="submit">
          submit
        </Button>
      </form>
    </Box>
  );
};

export default CreatePrompt;
