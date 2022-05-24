// import type { User } from "@prisma/client";
// import { prisma } from "../db.server";

async function getUser(): Promise<any> {
  // const user = await prisma.user.findFirst();

  // console.log('model', user)
  
  // return user ?? {
  //   //   ??
  //   id: '',
  //   email: ''
  // };
  return {}
}

export { getUser };