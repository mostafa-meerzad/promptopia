import {
  Card,
  HStack,
  Tag,
  Text,
  VStack
} from "@chakra-ui/react";
import CopyButton from "./CopyButton";
import EditButton from "./EditButton";

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
      overflow={"hidden"}
    >
      <Card.Body gap={2}>
        <HStack justifyContent={"space-between"}>
          <Card.Title>{title}</Card.Title>
          <VStack>
            <CopyButton value={content} />
            <EditButton id={id} />
          </VStack>
        </HStack>
        <Card.Body px={0} pt={2} pb={5}>
          <Text>{content}</Text>
        </Card.Body>
        <Card.Footer
          justifyContent={"flex-start"}
          gap={"5"}
          p={0}
          fontSize={"xs"}
        >
          <HStack as={"ul"}>
            {tags.map((tag, i) => (
              <Tag.Root as={"li"} key={i}>
                <Tag.Label>{tag}</Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default PromptCard;
