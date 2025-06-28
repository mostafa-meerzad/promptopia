import { prismaClient } from "@/prisma/lib/prisma";

const getTopRatedPrompts = async (viewerId?: string) => {
  const prompts = await prismaClient.prompt.findMany({
    orderBy: {
      likes: {
        _count: "desc",
      },
    },
    take: 6,
    include: {
      author: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
      _count: {
        select: {
          likes: true,
        },
      },
      likes: viewerId
        ? {
            where: { userId: viewerId },
            select: { id: true },
          }
        : false,
    },
  });

  return prompts.map((prompt) => ({
    ...prompt,
    totalLikes: prompt._count.likes,
    userLiked: !!prompt.likes?.length,
  }));
};

export default getTopRatedPrompts;
