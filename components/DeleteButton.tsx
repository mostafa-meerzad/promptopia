"use client";
import { IconButton } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
interface Props {
  id: string;
}
const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  return (
    <IconButton
      variant="surface"
      size="xs"
      onClick={async () => {
        await axios.delete(`/api/prompts/${id}`);
        router.push("/dashboard");
      }}
    >
      <AiOutlineDelete />
    </IconButton>
  );
};

export default DeleteButton;
