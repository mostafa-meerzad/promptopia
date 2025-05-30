import {prisma} from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    const prompts = await prisma.prompt.findMany()
    return NextResponse.json({prompts})
}

export async function POST(request: NextRequest){

    const body = await request.json()

    const prompt = await prisma.prompt.create({data: {prompt: body.prompt}})

    return NextResponse.json({prompt}, {status: 201})
    
}