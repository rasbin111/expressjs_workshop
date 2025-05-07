import { Post, PrismaClient, User } from "../generated/prisma";

const prisma = new PrismaClient();

async function  main () {
    // await prisma.user.create({
    //     data: {
    //         name: "Joe",
    //         email: "joe@email.com",
    //         posts: {
    //             create: {title: "Hello Mars"},
    //         }, 
    //         profile: {
    //             create: {bio: "I like Red mud"},
    //         },
    //     },
    // })

    // const allUsers: (User & {
    //     posts: Post[]
    // })[] = await prisma.user.findMany({
    //     include:{
    //         posts: true,
    //         profile: true
    //     }
    // })

    // console.log(allUsers, {depth:null})

    const post = await prisma.post.update({
        where: {id: 1}, 
        data: {published: true},
    })
    console.log(post)
}

main()
    .then(async () =>{
        await prisma.$disconnect()
    })
    .catch( async (e) =>{
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })