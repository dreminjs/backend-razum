import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CurrentUserId } from 'src/auth/decorators/userId.decorator';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService:OrderService){}

    @Post("")
    async create(@CurrentUserId() id : string,@Body() body : CreateOrderDto){
        return await this.orderService.create(id,body.text)
    }

    @Put("orderId")
    async updateOne(@Param("orderId") orderId : string,@Body() {status,message}: UpdateOrderDto){
        return await this.orderService.updateOne(orderId,status,message)
    }

}
