import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  const user = await prisma.user.create({
    data: {
      email: "you@example.com",
    }
  })

  console.log(`Database has been seeded. 🌱`)
}

try {
  seed()
  process.exit(0)
} catch (error: unknown) {
  console.error(error)
  process.exit(1)
}