import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Card,
  GridItem,
  HStack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

interface Props {
  id: string;
  content: string;
  tags: string[];
  readonly?: boolean;
  author: { name: string | null; email: string; image: string | null };
}

const PromptCard = async ({
  id,
  content,
  tags,
  readonly = true,
  author,
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
          <Card.Title>
            <AuthorInfo
              name={author.name}
              email={author.email}
              image={author.image}
            />
          </Card.Title>
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

const AuthorInfo = ({
  name,
  email,
  image,
}: {
  name: string | null;
  email: string;
  image: string | null;
}) => {
  return (
    <HStack gap={3}>
      <AvatarRoot size={"sm"}>
        <AvatarFallback name={name ?? "?"} />
        <AvatarImage src={image ?? ""} />
      </AvatarRoot>
      <VStack alignItems={"start"} gap={0}>
        <Text
          fontWeight={"semibold"}
          fontSize={"sm"}
          m={0}
          p={0}
          lineHeight={"shorter"}
        >
          {name}
        </Text>
        <Text
          fontWeight={"normal"}
          fontSize={"xs"}
          m={0}
          p={0}
          lineHeight={"shorter"}
        >
          {email}
        </Text>
      </VStack>
    </HStack>
  );
};

export default PromptCard;
