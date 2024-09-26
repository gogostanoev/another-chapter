import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
//   const user = await prisma.user.create({
//     data: {
//         name: "Bob",
//         lastName: "Bobski",
//         email: "bob@mail.com",
//         age: 30,
//         games: {
//             create: [
//                 {
//                     genre: "Boomer Shooter",
//                     price: 20
//                 },
//                 {
//                     genre: 'Puzzle',
//                     price: 15
//                 }
//             ]
//         }
//     }
//   })
//   console.log(user)
    const userWithGames = await prisma.user.findMany({
        include: {
            games: true
        }
    })
    console.dir(userWithGames, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })