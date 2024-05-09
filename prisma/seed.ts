import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            email: 'some@email.com',
            password: '12345678',
        },
    });

    const user2 = await prisma.user.upsert({
        where: { id: 2 },
        update: {},
        create: {
            email: 'some2@email.com',
            password: '12345678',
        },
    });

    console.log({ user1, user2 });  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });