import { Injectable } from '@nestjs/common';
import { OrderStatus, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {

    constructor(private readonly prisma:PrismaService){}

    async create(id:string,text:string){
       return await this.prisma.order.create({
            data:{
                text,
                userId:id,
                status:"pending"
            }
        })
    }

    async updateOne(id:string,status:OrderStatus,message:string) {
        return this.prisma.order.update({
            where:{id},
            data:{status,message}
        })
    }

    async findMany(payload:Prisma.OrderWhereInput){
        
        return this.prisma.order.findMany({where:payload})
    }

}
