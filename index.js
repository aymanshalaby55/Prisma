const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    // await prisma.userPrefrence.deleteMany();
    // await prisma.user.deleteMany();
    // Create();
    // Find()
    Update()
}

async function Create() {
    const user = await prisma.user.createMany({
        data: [{
            name: "aa",
            email: "aa@example.com",
            age: 13,
        }, {
            name: "bb",
            email: "bb@example.com",
            age: 14,
        },
        ],
        // include: {
        //     userPrefrence: true
        // }
    });

    console.log(user);
}

async function Find() {
    const user = await prisma.user.findMany({
        where: {
            AND: [ // operator
                { name: { in: ["aa"] } },
                { email: { contains: "example.com" } },
            ],
            writtingPost: {
                every: { // all satisfied this condition
                    title: "Hello",
                }
            }
        },
        distinct: ["name"],
        orderBy: {
            age: "asc"
        },
        take: 2, // for pagination
        skip: 0 // skips the first 1 record
    });

    const user1 = await prisma.user.findFirst({ // first record
        where: {
            age: 13,
            name: "aa"
        }
    })

    const user2 = await prisma.user.findUnique({
        where: {
            name: "aa"
        }
    })

    console.log(user);
}

async function Update() {
    // const userpref = await prisma.userPrefrence.findFirst({
    //     where: {
    //         emailUpdates: true
    //     }
    // })

    const user = await prisma.user.update({
        where: { // find
            name: "aa",
        },
        data: { // update data
            userPrefrence: {
                connect: {
                    id: "e0b4c96d-8317-4efd-ad17-d87f11fc56ec"
                }
            }
        }
    });

    const user1 = await prisma.user.updateMany({
        where: { // find
            age: { gte: 15 },
        },
        data: { // update data
            age: 14,
        }
    })
    console.log(userpref);
}
async function Delete() {
    const user = await prisma.user.deleteMany({
        where: {
            age: { gte: 15 },
        }
    })

    const user
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});