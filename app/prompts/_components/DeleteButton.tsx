"use client";
import { IconButton } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
interface Props {
  id: number;
}
const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  return (
    <IconButton
      variant="surface"
      size="xs"
      onClick={() => {
        axios.delete(`/api/prompts/${id}`);
        router.push("/prompts");
        router.refresh();
      }}
    >
      <AiOutlineDelete />
    </IconButton>
  );
};

export default DeleteButton;
