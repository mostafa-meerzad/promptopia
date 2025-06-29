import authOptions from "@/app/auth/authOptions";
import { prismaClient } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { promptId } = await request.json();

  if (!session?.user?.email || !promptId) {
    return NextResponse.json(
      { error: "unauthorized or invalid" },
      { status: 401 }
    );
  }

  const currentUser = await prismaClient.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser?.id) {
    return NextResponse.json(
      { error: "unauthorized or invalid" },
      { status: 401 }
    );
  }

  // 🔐 Prevent user from liking their own prompt
  const prompt = await prismaClient.prompt.findUnique({
    where: { id: promptId },
    select: { authorId: true },
  });

  if (!prompt) {
    return NextResponse.json({ error: "Prompt not found" }, { status: 404 });
  }

  if (prompt.authorId === currentUser.id) {
    return NextResponse.json(
      { error: "You cannot like your own prompt." },
      { status: 400 }
    );
  }

  const likedPrompt = await prismaClient.like.findFirst({
    where: { userId: currentUser.id, promptId },
  });

  if (likedPrompt) {
    await prismaClient.like.delete({ where: { id: likedPrompt.id } });
    return NextResponse.json({ liked: false });
  } else {
    await prismaClient.like.create({
      data: { userId: currentUser.id, promptId },
    });
  }

  return NextResponse.json({ liked: true });
}
