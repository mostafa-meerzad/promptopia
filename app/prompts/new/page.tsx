import PromptForm from "../PromptForm";
import { Heading, VStack } from "@chakra-ui/react";

const CreatePrompt = () => {
  return (
    <>
      <VStack mt={4}>
        <Heading as="h2">Create Prompt</Heading>
      </VStack>
      <PromptForm mode="CREATE" />;
    </>
  );
};

export default CreatePrompt;
