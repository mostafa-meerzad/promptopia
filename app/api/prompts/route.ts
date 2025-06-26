import authOptions from "@/app/auth/authOptions";
import { promptSchema } from "@/app/_services/validationSchemas";
import { prismaClient } from "@/prisma/lib/prisma";
import { parseTags } from "@/utils/parseTags";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prompts = await prismaClient.prompt.findMany();
  return NextResponse.json({ prompts });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json();
  const validation = promptSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { title, content, isPublic, tags } = validation.data;
  const stringTags = parseTags(tags);

  const newPrompt = await prismaClient.prompt.create({
    data: {
      title,
      content,
      isPublic,
      tags: stringTags,
      author: { connect: { email: session.user.email } },
    },
  });

  return NextResponse.json({ ok: true, prompt: newPrompt });
}
