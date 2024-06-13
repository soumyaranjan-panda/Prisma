
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

//SELECT * FROM post OFFSET 0 LIMIT 3

async function main() {
    let res = await prisma.post.findMany({
        take: 2,
        skip: 0
        //SELECT ... from User ... LIMIT 2 OFFSET 0
    })
    //skips first {0} and takes two after 0
    //if take = 3, skip = 5 then it takes 3 after skipping 5 post
    console.log(res);

}

main()
    .then(async () => {
        console.log("done");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })