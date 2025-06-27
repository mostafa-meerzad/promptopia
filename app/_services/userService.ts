import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import { prismaClient } from "@/prisma/lib/prisma";

const getUserInfo = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return null;

  const user = await prismaClient.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: { prompts: true, _count: { select: { prompts: true } } },
  });

  if (!user) return null;

  const publicPrompts = user.prompts.filter((p) => p.isPublic).length;
  const privatePrompts = user.prompts.length - publicPrompts;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    publicPrompts,
    privatePrompts,
  };
};

export default getUserInfo