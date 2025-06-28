"use client";
import { IconButton } from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  id: string;
  liked: boolean;
  likes: number;
}

const LikeButton = ({ id, liked, likes }: Props) => {
  const { status } = useSession();
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = async () => {
    if (status === "authenticated") {
      const res = await axios.post("/api/likes", { promptId: id });
      setIsLiked(res.data.liked);
      setLikesCount((prev) => prev + (res.data.liked ? 1 : -1));
    }
  };

  return (
    <IconButton aria-label="Like prompt" variant="ghost" onClick={handleLike}>
      {isLiked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
      {likesCount}
    </IconButton>
  );
};

export default LikeButton;
