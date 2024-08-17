import { use } from "react";
import { prisma } from "../../prisma/prisma-client";
import { User } from "@prisma/client";

export async function getUsers() {
  const users = await prisma.user.findMany();

  return users;
}

// export async function getUserByLogin(login: string): Promise<User> {
//   return {};
// }
