"use client";

import { Button, Card } from "@chakra-ui/react";

interface Props {
  prompt: { id: number; prompt: string };
}

const PromptCard = ({ prompt }: Props) => {
  return (
    <Card.Root as={"li"} w={"100%"} key={prompt.id}>
      <Card.Body gap={2}>
        <Card.Title>Prompt</Card.Title>
        <Card.Description lineClamp={2} mb={5}>
          {prompt.prompt}
        </Card.Description>
        <Card.Footer justifyContent={"flex-end"} gap={"5"} p={0}>
          <Button variant="outline">View</Button>
          <Button>Copy</Button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default PromptCard;
