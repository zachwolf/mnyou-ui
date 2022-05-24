import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  const data: Prisma.UserCreateInput = {
    email: "test@mnyou.org",
    phone: "todo",
    validatedEmail: false,
    validatedPhone: false,
    addressStreet: "todo",
    addressStreet2: "todo",
    addressCity: "todo",
    addressState: "MN",
    addressZip: "todo",
    nameFirst: "todo",
    nameLast: "todo",
    namePreferred: "todo",
    paymentPreference: "CASH"
  }
  
  const user = await prisma.user.create({
    data
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