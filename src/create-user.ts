import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data:{
            email: "soumyaranjanpanda988@gmail.com",
            name: "Soumya Panda",
        }
    })
}

main()
.then(async ()=>{
    console.log("Done with the query");
    await prisma.$disconnect()
})
.catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})