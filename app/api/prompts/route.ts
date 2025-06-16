import { FormValues } from "@/app/prompts/new/page";
import { createPromptSchema } from "@/app/validationSchemas";
import { prismaClient } from "@/prisma/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prompts = await prismaClient.prompt.findMany();
  return NextResponse.json({ prompts });
}

export async function POST(request: NextRequest) {
  const body: FormValues = await request.json();
  const validation = createPromptSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors[0], { status: 400 });
  }

  // todo: need to refactor what should make it to the database
  const newPrompt = await prismaClient.prompt.create({
    data: {
      title: body.title ? body.title : "Prompt",
      content: body.content,
    },
  });

  return NextResponse.json({ newPrompt }, { status: 201 });
}
