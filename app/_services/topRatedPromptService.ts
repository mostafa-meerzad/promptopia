import { prismaClient } from "@/prisma/lib/prisma";

const getTopRatedPrompts = async () => {
  return await prismaClient.prompt.findMany({
    where: { rating: { gt: 3.5, lte: 5 } },
    take: 6,
    include: {
      author: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
};

export default getTopRatedPrompts;
