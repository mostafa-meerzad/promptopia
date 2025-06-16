import { Card, HStack, Link, Text } from "@chakra-ui/react";

import CopyButton from "./CopyButton";
import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

const PromptCard = async ({ id, title, content, tags }: Props) => {
  return (
    <Card.Root
      as={"li"}
      w={"100%"}
      bg={{ base: "whiteAlpha.600", _dark: "blackAlpha.400" }}
    >
      <Card.Body gap={2}>
        <HStack justifyContent={"space-between"}>
          <Card.Title>{title}</Card.Title>
          <CopyButton value={content} />
        </HStack>
        <Card.Body px={0} py={2}>
          <MarkdownRenderer markdown={content} />
        </Card.Body>
        <Card.Footer
          justifyContent={"flex-start"}
          gap={"5"}
          p={0}
          fontSize={"xs"}
        >
          <HStack as={"ul"}>
            {tags.map((tag, i) => (
              <Text as={"li"} key={i}>
                #{tag}
              </Text>
            ))}
          </HStack>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default PromptCard;
