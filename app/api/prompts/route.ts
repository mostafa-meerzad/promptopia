import { promptSchema } from "@/app/services/validationSchemas";
import authOptions from "@/app/auth/authOptions";
import { prismaClient } from "@/prisma/lib/prisma";
import { parseTags } from "@/utils/parseTags";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json();
  const validation = promptSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { content, isPublic, tags } = validation.data;
  const stringTags = parseTags(tags);

  const newPrompt = await prismaClient.prompt.create({
    data: {
      content,
      isPublic,
      tags: stringTags,
      author: { connect: { email: session.user.email } },
    },
  });

  return NextResponse.json({ ok: true, prompt: newPrompt });
}
