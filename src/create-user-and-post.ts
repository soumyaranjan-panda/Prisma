import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: "rashmiranjn",
            name: "Ranjan",
            posts: {
                create: {
                    title: "Post1",
                    content: "Hey there",
                    published: true
                }
            }
        }
    })
}

main()
    .then(async () => {
        console.log("Created user and post");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect();
        process.exit(1)
    })