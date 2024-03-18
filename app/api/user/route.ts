import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import client from "@/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  await client.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  return Response.json({ msg: "data added" });
}

export async function GET() {
  const data = await client.user.findFirst({});
  return Response.json({ email: data?.email, password: data?.password });
}
