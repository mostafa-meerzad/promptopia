import { promptSchema } from "@/app/validationSchemas";
import { parseTags } from "@/utils/parseTags";
import { prismaClient } from "@/prisma/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prompts = await prismaClient.prompt.findMany();
  return NextResponse.json({ prompts });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = promptSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors[0], { status: 400 });

  const { title, content, isPublic, tags } = validation.data;
  const stringTags = parseTags(tags);

  const newPrompt = await prismaClient.prompt.create({
    data: { title, content, isPublic, tags: stringTags },
  });

  return NextResponse.json({ ok: true, prompt: newPrompt });
}
