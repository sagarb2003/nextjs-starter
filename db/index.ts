//why to use prisma singelton client
//because this is the error might arise when i will be using many client in different components
//warn(prisma-client) There are already 10 instances of Prisma Client actively running.
//so we are creating this separate db/index.ts file to overcome this problem

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
