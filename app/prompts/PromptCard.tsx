import { Card, HStack, Link } from "@chakra-ui/react";

import CopyButton from "./CopyButton";
import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  prompt: string;
}

const PromptCard = async ({ prompt }: Props) => {
  return (
      <Card.Root as={"li"} w={"100%"} bg={{base: "whiteAlpha.600", _dark: "blackAlpha.400"}}>
        <Card.Body gap={2}>
          <HStack justifyContent={"space-between"}>
            <Card.Title>Prompt</Card.Title>
            <CopyButton value={prompt} />
          </HStack>
          <Card.Body px={0} py={2}>
            <MarkdownRenderer markdown={prompt} />
          </Card.Body>
          <Card.Footer
            justifyContent={"flex-start"}
            gap={"5"}
            p={0}
            fontSize={"xs"}
          >
            <Link href="">#coding</Link>
          </Card.Footer>
        </Card.Body>
      </Card.Root>
  );
};

export default PromptCard;
