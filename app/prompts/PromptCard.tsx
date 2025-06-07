import { Box, Button, Card } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
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
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {prompt}
            </ReactMarkdown>
          </Card.Body>

          <Card.Footer justifyContent={"flex-end"} gap={"5"} p={0}>
            <Button variant="outline">View</Button>
            <CopyButton text={prompt} />
          </Card.Footer>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default PromptCard;
