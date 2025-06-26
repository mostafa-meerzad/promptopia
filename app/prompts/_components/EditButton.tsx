import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CiEdit } from "react-icons/ci";
interface Props {
  id: number;
}
const EditButton = ({ id }: Props) => {
  return (
    <Link href={`/prompts/edit/${id}`}>
      <IconButton variant="surface" size="xs">
        <CiEdit />
      </IconButton>
    </Link>
  );
};

export default EditButton;
