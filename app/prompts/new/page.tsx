"use client";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Options } from "easymde";

const CreatePrompt = () => {
  const [prompt, setPrompt] = useState("");
  const autofocusNoSpellcheckerOptions = useMemo<Options>(() => {
    return {
      autofocus: true,
      spellChecker: true,
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        // 'image' removed
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
        "|",
        "guide",
      ],
    };
  }, []);

  const onChange = useCallback((value: string) => {
    setPrompt(value);
  }, []);

  return (
    <Box maxW={"500px"}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          try {
            axios.post("http://localhost:3000/api/prompts", { prompt });
            setPrompt("");
          } catch (error) {
            console.log("something went wrong!, ", error);
          }
        }}
      >
        <SimpleMDE
          value={prompt}
          onChange={onChange}
          options={autofocusNoSpellcheckerOptions}
        />
        <Button width={"full"} type="submit">
          submit
        </Button>
      </form>
    </Box>
  );
};

export default CreatePrompt;
