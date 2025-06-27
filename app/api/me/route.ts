import authOptions from "@/app/auth/authOptions";
import { prismaClient } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email)
    return NextResponse.json({ user: null }, { status: 401 });

  const user = await prismaClient.user.findUnique({
    where: { email: session.user.email },
    include: {
      prompts: true,
      _count: { select: { prompts: true } },
    },
  });

  if (!user) {
    return NextResponse.json({ user: null }, { status: 404 });
  }

  const publicPrompts = user.prompts.filter((p) => p.isPublic).length;
  const privatePrompts = user.prompts.length - publicPrompts;

  return NextResponse.json(
    {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        publicPrompts,
        privatePrompts,
      },
    },
    { status: 200 }
  );
}
