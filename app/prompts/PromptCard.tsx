import { Box, Button, Card } from "@chakra-ui/react";
import MarkdownRenderer from "./MarkdownRenderer";
import CopyButton from "./CopyButton";

interface Props {
  prompt: string;
}

const PromptCard = async ({ prompt }: Props) => {
  return (
    <Box>
      <Card.Root as={"li"} w={"100%"}>
        <Card.Body gap={2}>
          <Card.Title>Prompt</Card.Title>
          <Card.Body px={0} py={2}>
            <MarkdownRenderer markdown={prompt} />
          </Card.Body>

          <Card.Footer justifyContent={"flex-end"} gap={"5"} p={0}>
            <Button variant="outline">View</Button>
            <CopyButton text={prompt}/>
          </Card.Footer>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default PromptCard;
