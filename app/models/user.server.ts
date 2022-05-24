import type { User } from "@prisma/client";
import { prisma } from "../db.server";

async function getUser(): Promise<User> {
  const user = await prisma.user.findFirst();

  console.log('model', user)
  
  return user ?? {
    //   ??
    id: '',
    email: ''
  };
}

export { getUser };