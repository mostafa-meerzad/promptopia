import { createPromptSchema } from "@/app/validationSchemas";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prompts = await prisma.prompt.findMany();
  return NextResponse.json({ prompts });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createPromptSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors[0], { status: 400 });
  }

  const newPrompt = await prisma.prompt.create({
    data: { prompt: body.prompt },
  });

  return NextResponse.json({ newPrompt }, { status: 201 });
}
