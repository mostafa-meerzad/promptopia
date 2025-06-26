import {
  Card,
  GridItem,
  HStack,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import CopyButton from "./dashboard/_components/CopyButton";
import DeleteButton from "./dashboard/_components/DeleteButton";
import EditButton from "./dashboard/_components/EditButton";

interface Props {
  id: number;
  title: string;
  content: string;
  tags: string[];
  readonly?: boolean;
}

const PromptCard = async ({
  id,
  title,
  content,
  tags,
  readonly = true,
}: Props) => {
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
          <SimpleGrid
            columns={2}
            gap={3}
            position={"absolute"}
            right={5}
            top={5}
          >
            <GridItem colStart={2}>
              <CopyButton value={content} />
            </GridItem>
            {readonly || (
              <>
                <GridItem colStart={1} rowStart={1}>
                  <EditButton id={id} />
                </GridItem>
                <GridItem colStart={2}>
                  <DeleteButton id={id} />
                </GridItem>
              </>
            )}
          </SimpleGrid>
        </HStack>
        <Card.Body px={0} pt={2} pb={5}>
          <Text maxW={"80%"}>{content}</Text>
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
