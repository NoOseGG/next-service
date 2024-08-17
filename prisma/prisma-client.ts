import { PrismaClient } from "@prisma/client";

const prismaCLientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaCLientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaCLientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
