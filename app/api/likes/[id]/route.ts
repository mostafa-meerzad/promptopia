import authOptions from "@/app/auth/authOptions";
import { prismaClient } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: {params: {promptId: string}}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return;

  const currentUser = await prismaClient.user.findUnique({
    where: { email: session?.user?.email },
  });
  const { promptId } = await params;

  const totalLikes = await prismaClient.like.count({ where: { promptId } });

  const userLiked = currentUser?.id
    ? !!(await prismaClient.like.findFirst({
        where: { promptId, userId: currentUser.id },
      }))
    : false;

  return NextResponse.json({ totalLikes, userLiked });
}
