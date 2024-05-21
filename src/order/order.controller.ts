import { Body, Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { CurrentUserId } from 'src/auth/decorators/userId.decorator';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService:OrderService){}

    private logger = new Logger(OrderController.name)

    @Post("")
    async create(@CurrentUserId() id : string,@Body() body : CreateOrderDto){
        this.logger.log(id)
        return await this.orderService.create(id,body.text)
    }

    @Put(":orderId")
    async updateOne(@Param("orderId") orderId : string,@Body() {status,message}: UpdateOrderDto):Promise<Order>{
        return await this.orderService.updateOne(orderId,status,message)
    }

    @Get("")
    async findMany(@CurrentUserId() id : string): Promise<Order[]> {
      return await this.orderService.findManyByUserId(id)
    }

}
