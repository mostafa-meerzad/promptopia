import { promptSchema } from "@/app/validationSchemas";
import { prismaClient } from "@/prisma/lib/prisma";
import { parseTags } from "@/utils/parseTags";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const validation = promptSchema.safeParse(body);
  const { id } = await params;

  if (!validation.success)
    return NextResponse.json(validation.error.errors[0], { status: 400 });

  const { title, content, isPublic, tags } = validation.data;

  const newPrompt = await prismaClient.prompt.update({
    where: { id: parseInt(id) },
    data: { title, content, isPublic, tags: parseTags(tags) },
  });

  return NextResponse.json({ ok: true, prompt: newPrompt });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const prompt = await prismaClient.prompt.findUnique({
    where: { id: parseInt(id) },
  });

  if (!prompt)
    return NextResponse.json({ error: "invalid prompt" }, { status: 404 });

  await prismaClient.prompt.delete({ where: { id: parseInt(id) } });

  return NextResponse.json({});
}
