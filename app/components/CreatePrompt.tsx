import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface Props {
  status: "authenticated" | "unauthenticated" | "loading";
  onUnAuthorized: () => void;
  onAuthorized: () => void;
}

const CreatePrompt = ({ status, onUnAuthorized, onAuthorized }: Props) => {
  const pathName = usePathname();

  if (pathName === "/prompts/new") return null;

  return (
    <Button
      borderRadius={"full"}
     fontWeight={"semibold"}
      px={6}
      onClick={() => {
        if (status !== "authenticated") onUnAuthorized();
        onAuthorized();
      }}
    >
      Create
    </Button>
  );
};

export default CreatePrompt;
