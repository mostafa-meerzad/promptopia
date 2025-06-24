import authOptions from "@/app/auth/authOptions";
import { useAuth } from "@/app/auth/hooks/useAuth";
import { prismaClient } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

export const usePrompts =  () => {
//   const session = await getServerSession(authOptions);

//   if (!session?.user?.email) return signIn();

//   const user = await prismaClient?.user.findUnique({
//     where: { email: session?.user?.email },
//   });

  const publicPromptsCount = 10
//   const publicPromptsCount = await (
//     await prismaClient.prompt.findMany({
//       where: { AND: [{ authorId: user?.id }, { isPublic: true }] },
//     })
//   ).length;

  const privatePromptsCount = 20
//   const privatePromptsCount = await (
//     await prismaClient.prompt.findMany({
//       where: { AND: [{ authorId: user?.id }, { isPublic: false }] },
//     })
//   ).length;

  return { privatePromptsCount, publicPromptsCount };
};
