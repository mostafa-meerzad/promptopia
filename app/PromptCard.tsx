"use client";

import { Button, Card } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  prompt: { id: number; prompt: string };
}
const PromptCard = ({ prompt: p }: Props) => {
  return (
    <Card.Root w={"100%"} key={p.id}>
      <Card.Body gap={2}>
        <Card.Title>Prompt</Card.Title>
        <Card.Description lineClamp={2} mb={5}>{p.prompt}</Card.Description>
        <Card.Footer justifyContent={"flex-end"} gap={"5"} p={0}>
          <Button variant="outline">View</Button>
          <Button>Copy</Button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default PromptCard;
