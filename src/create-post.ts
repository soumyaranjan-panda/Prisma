import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']})

async function main() {
    await prisma.post.create({
        data:{
            title: "Soumya",
            content: "Photo",
            published: true,
            authorId: 1,
            // author:{
            //     connect:{
            //         id: 1
            //     }
            // }
        }
    })
}

main()
.then(async()=>{
    console.log("Done with the query");
    await prisma.$disconnect()
})
.catch(async(e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})