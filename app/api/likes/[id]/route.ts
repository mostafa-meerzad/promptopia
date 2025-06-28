import authOptions from "@/app/auth/authOptions";
import { prismaClient } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface RequestType {
  promptId: string;
}

export async function GET(request: NextRequest) {
  const body: RequestType = await request.json();
  if (!body.promptId)
    return NextResponse.json(
      { message: "promptId is require" },
      { status: 400 }
    );

  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });

  const currentUser = await prismaClient.user.findUnique({
    where: { email: session?.user?.email },
  });

  const totalLikes = await prismaClient.like.count({
    where: { id: body.promptId },
  });

  const userLiked = currentUser?.id
    ? !!(await prismaClient.like.findFirst({
        where: { id: body.promptId, userId: currentUser.id },
      }))
    : false;

  return NextResponse.json({ totalLikes, userLiked });
}
