import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    // создание админа
    const admin = await prisma.user.create({
        data:{
            fullName:"админов админ админович",
            password:"админадминадмин",
            phone:"+375291115970",
            role:"admin",
            email:"admin@admin.com"
        }
    })

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